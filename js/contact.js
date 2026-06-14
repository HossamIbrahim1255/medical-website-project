    // ── Navbar scroll ──
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
      document.getElementById('scroll-top').classList.toggle('visible', window.scrollY > 300);
    });

    // ── Hamburger ──
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
    });

    // ── Scroll top ──
    document.getElementById('scroll-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // ── Fade up observer ──
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    // ── FAQ ──
    document.querySelectorAll('.faq-question').forEach(q => {
      q.addEventListener('click', () => {
        const item = q.closest('.faq-item');
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
        q.setAttribute('aria-expanded', !wasOpen);
      });
      q.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); q.click(); } });
    });

    // ── Char counter ──
    const msgEl = document.getElementById('c-message');
    const charCount = document.getElementById('charCount');
    msgEl.addEventListener('input', () => {
      const len = msgEl.value.length;
      charCount.textContent = len + ' / 1000';
      if (len > 1000) msgEl.value = msgEl.value.slice(0, 1000);
    });

    // ── Form validation & submit ──
    function setError(id, msg) {
      const fg = document.getElementById('fg-' + id);
      const err = document.getElementById('err-' + id);
      if (fg) fg.classList.toggle('is-invalid', !!msg);
      if (err) err.textContent = msg || '';
    }
    function clearErrors() {
      ['name','email','subject','message','phone'].forEach(id => setError(id, ''));
    }

    document.getElementById('submitBtn').addEventListener('click', () => {
      clearErrors();
      const name    = document.getElementById('c-name').value.trim();
      const email   = document.getElementById('c-email').value.trim();
      const subject = document.getElementById('c-subject').value;
      const message = document.getElementById('c-message').value.trim();
      const phone   = document.getElementById('c-phone').value.trim();
      const alertEl = document.getElementById('form-alert-error');
      alertEl.style.display = 'none';

      let valid = true;
      if (!name) { setError('name', 'الاسم مطلوب'); valid = false; }
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('email', 'أدخل بريدًا إلكترونيًا صحيحًا'); valid = false; }
      if (!subject) { setError('subject', 'اختر موضوع الرسالة'); valid = false; }
      if (!message || message.length < 20) { setError('message', 'الرسالة يجب أن تكون 20 حرفًا على الأقل'); valid = false; }
      if (phone && !/^01[0-9]{9}$/.test(phone.replace(/\s/g,''))) { setError('phone', 'رقم هاتف غير صحيح'); valid = false; }

      if (!valid) return;

      // Show spinner
      const btn = document.getElementById('submitBtn');
      btn.querySelector('.btn-text').style.display = 'none';
      btn.querySelector('.btn-spinner').style.display = 'flex';
      btn.disabled = true;

      // Save to localStorage for admin dashboard
      const ticket = {
        id: 'TKT-' + Date.now(),
        name, email, phone, subject, message,
        date: new Date().toISOString(),
        status: 'new'
      };
      try {
        const existing = JSON.parse(localStorage.getItem('contact_messages') || '[]');
        existing.push(ticket);
        localStorage.setItem('contact_messages', JSON.stringify(existing));
      } catch(e) {}

      // Simulate send delay
      setTimeout(() => {
        btn.querySelector('.btn-text').style.display = 'flex';
        btn.querySelector('.btn-spinner').style.display = 'none';
        btn.disabled = false;

        // Show success
        document.getElementById('formContent').style.display = 'none';
        const successEl = document.getElementById('successState');
        successEl.style.display = 'flex';
        document.getElementById('ticketRef').textContent = 'رقم الطلب: ' + ticket.id;
      }, 1800);
    });

    window.resetForm = function() {
      document.getElementById('c-name').value = '';
      document.getElementById('c-email').value = '';
      document.getElementById('c-phone').value = '';
      document.getElementById('c-subject').value = '';
      document.getElementById('c-message').value = '';
      document.getElementById('charCount').textContent = '0 / 1000';
      clearErrors();
      document.getElementById('successState').style.display = 'none';
      document.getElementById('formContent').style.display = 'block';

      // reset the submit button state fully
      const btn = document.getElementById('submitBtn');
      btn.querySelector('.btn-text').style.display = 'inline-flex';
      btn.querySelector('.btn-spinner').style.display = 'none';
      btn.disabled = false;
    };