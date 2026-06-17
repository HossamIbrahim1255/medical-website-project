    // ── DATA ──
    // Note: هذه بيانات placeholder — استبدلها بـ API calls لما تكون الـ backend جاهزة
    const COURSES = [
      {
        id: 1,
        title: 'أساسيات التشريح البشري',
        instructor: 'سيتم الإعلان عن المدرب',
        specialty: 'طب بشري',
        level: 'مبتدئ',
        lectures: 0,
        hours: 0,
        price: 0,
        oldPrice: null,
        rating: 0,
        reviews: 0,
        thumb: 'thumb-blue',
        icon: '<path d="M12 2a5 5 0 1 1 0 10A5 5 0 0 1 12 2zm0 12c5.33 0 8 2.67 8 4v2H4v-2c0-1.33 2.67-4 8-4z"/>',
        badge: 'free',
        badgeText: 'مجاني',
        isNew: true,
        enrolled: false,
        progress: 0,
        slug: 'course-detail.html'
      },
      {
        id: 2,
        title: 'فيزيولوجيا الجهاز التنفسي',
        instructor: 'سيتم الإعلان عن المدرب',
        specialty: 'طب بشري',
        level: 'متوسط',
        lectures: 0,
        hours: 0,
        price: 0,
        oldPrice: null,
        rating: 0,
        reviews: 0,
        thumb: 'thumb-navy',
        icon: '<path d="M12 2c-1.5 0-2.9.4-4 1.1C6.4 2 4.2 2 3 3.7 1.8 5.3 2 7.8 3 9.5c1 1.7 2 3 2 5.5 0 2 .5 5 2 7h2l1-5 1 5h2c1.5-2 2-5 2-7 0-2.5 1-3.8 2-5.5C18 8 18.2 5.4 17 3.7 15.8 2 13.6 2 12 2z"/>',
        badge: null,
        badgeText: null,
        isNew: true,
        enrolled: false,
        progress: 0,
        slug: 'course-detail.html'
      },
      {
        id: 3,
        title: 'مقدمة في طب الأسنان السريري',
        instructor: 'سيتم الإعلان عن المدرب',
        specialty: 'أسنان',
        level: 'مبتدئ',
        lectures: 0,
        hours: 0,
        price: 0,
        oldPrice: null,
        rating: 0,
        reviews: 0,
        thumb: 'thumb-teal',
        icon: '<path d="M12 2c-1.5 0-2.9.4-4 1.1C6.4 2 4.2 2 3 3.7 1.8 5.3 2 7.8 3 9.5c1 1.7 2 3 2 5.5 0 2 .5 5 2 7h2l1-5 1 5h2c1.5-2 2-5 2-7 0-2.5 1-3.8 2-5.5C18 8 18.2 5.4 17 3.7 15.8 2 13.6 2 12 2z"/>',
        badge: null,
        badgeText: null,
        isNew: true,
        enrolled: false,
        progress: 0,
        slug: 'course-detail.html'
      },
      {
        id: 4,
        title: 'أساسيات الصيدلة الإكلينيكية',
        instructor: 'سيتم الإعلان عن المدرب',
        specialty: 'صيدلة',
        level: 'مبتدئ',
        lectures: 0,
        hours: 0,
        price: 0,
        oldPrice: null,
        rating: 0,
        reviews: 0,
        thumb: 'thumb-green',
        icon: '<path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>',
        badge: null,
        badgeText: null,
        isNew: true,
        enrolled: false,
        progress: 0,
        slug: 'course-detail.html'
      },
      {
        id: 5,
        title: 'تقنيات العلاج الطبيعي الأساسية',
        instructor: 'سيتم الإعلان عن المدرب',
        specialty: 'علاج طبيعي',
        level: 'مبتدئ',
        lectures: 0,
        hours: 0,
        price: 0,
        oldPrice: null,
        rating: 0,
        reviews: 0,
        thumb: 'thumb-purple',
        icon: '<path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/>',
        badge: null,
        badgeText: null,
        isNew: true,
        enrolled: false,
        progress: 0,
        slug: 'course-detail.html'
      },
      {
        id: 6,
        title: 'علم الأدوية المتقدم',
        instructor: 'سيتم الإعلان عن المدرب',
        specialty: 'صيدلة',
        level: 'متقدم',
        lectures: 0,
        hours: 0,
        price: 0,
        oldPrice: null,
        rating: 0,
        reviews: 0,
        thumb: 'thumb-orange',
        icon: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>',
        badge: null,
        badgeText: null,
        isNew: true,
        enrolled: false,
        progress: 0,
        slug: 'course-detail.html'
      },
    ];

    // ── STATE ──
    let savedIds = JSON.parse(localStorage.getItem('mh_saved_courses') || '[]').map(c => typeof c === 'object' ? c.id : c);
    let currentTab = 'all';
    let isListView = false;
    let filters = { specialty: 'all', level: 'all', price: 'all', rating: 'all', search: '' };
    let sortVal = 'default';

    function saveSaved() {
  const fullData = savedIds.map(id => {
    const c = COURSES.find(x => x.id === id);
    if (!c) return null;
    return {
      id: c.id,
      name: c.title,
      spec: c.specialty,
      thumb: c.thumb && c.thumb.startsWith('thumb-') 
        ? { 'thumb-blue':'linear-gradient(135deg,#2A7FD4,#4E9FE8)', 'thumb-navy':'linear-gradient(135deg,#1B5EA8,#2A7FD4)', 'thumb-teal':'linear-gradient(135deg,#0FB8C9,#2A7FD4)', 'thumb-green':'linear-gradient(135deg,#10B981,#2A7FD4)', 'thumb-purple':'linear-gradient(135deg,#8B5CF6,#2A7FD4)', 'thumb-orange':'linear-gradient(135deg,#F59E0B,#EF4444)' }[c.thumb] || 'linear-gradient(135deg,#2A7FD4,#4E9FE8)'
        : c.thumb,
      lessons: c.lectures || 0,
      free: c.price === 0,
      price: c.price || 0,
      level: c.level || '',
      progress: c.progress || 0,
      enrolled: c.enrolled || false
    };
  }).filter(Boolean);
  localStorage.setItem('mh_saved_courses', JSON.stringify(fullData));
}
    function toggleSave(id) {
      if (savedIds.includes(id)) savedIds = savedIds.filter(x => x !== id);
      else savedIds.push(id);
      saveSaved();
      renderAll();
    }

    function starsHTML(rating) {
      if (!rating) return '<span style="font-size:0.8rem;color:var(--color-text-muted);">لم يُقيَّم بعد</span>';
      let h = `<span class="rating-val">${rating.toFixed(1)}</span><div class="stars">`;
      for (let i = 1; i <= 5; i++) h += `<svg viewBox="0 0 24 24"><path class="${i <= Math.round(rating) ? 'star-fill' : 'star-empty'}" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
      h += '</div>';
      return h;
    }

    function buildCard(c) {
      const isSaved = savedIds.includes(c.id);
      const priceHTML = c.price === 0
        ? `<span class="course-price free">مجاني</span>`
        : `<span class="course-price">${c.price} جنيه</span>`;
      const badgeHTML = c.badge === 'free'
        ? `<span class="course-badge badge-free">مجاني</span>`
        : c.isNew ? `<span class="course-badge badge-new">جديد</span>` : '';
      const progressHTML = c.enrolled && c.progress > 0
        ? `<div class="course-progress"><div class="progress-label"><span>تقدمك</span><span>${c.progress}%</span></div><div class="progress-bar"><div class="progress-fill" style="width:${c.progress}%"></div></div></div>`
        : '';
      const metaItems = [
        c.lectures ? `<span class="course-meta-item"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>${c.lectures} محاضرة</span>` : '',
        c.hours ? `<span class="course-meta-item"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${c.hours} ساعة</span>` : '',
        `<span class="course-meta-item"><svg viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>${c.level}</span>`,
      ].filter(Boolean).join('');

      return `
      <div class="course-card${isListView ? ' list-view' : ''}" data-id="${c.id}" data-specialty="${c.specialty}" data-level="${c.level}" data-price="${c.price}" data-rating="${c.rating}">
        <div class="course-thumb ${c.thumb}">
          <div class="course-thumb-icon"><svg viewBox="0 0 24 24">${c.icon}</svg></div>
          ${badgeHTML}
          <button class="save-btn${isSaved ? ' saved' : ''}" onclick="toggleSave(${c.id})" aria-label="${isSaved ? 'إزالة من المحفوظة' : 'حفظ الكورس'}">
            <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
        </div>
        <div class="course-body">
          <span class="course-specialty">${c.specialty}</span>
          <div class="course-title">${c.title}</div>
          <div class="course-instructor">
            <svg viewBox="0 0 24 24"><path d="M12 2a5 5 0 1 1 0 10A5 5 0 0 1 12 2zm0 12c5.33 0 8 2.67 8 4v2H4v-2c0-1.33 2.67-4 8-4z"/></svg>
            ${c.instructor}
          </div>
          <div class="course-meta">${metaItems}</div>
          ${progressHTML}
          <div class="course-footer">
            <div>${starsHTML(c.rating)}</div>
            <div style="display:flex;align-items:center;gap:10px;">
              ${priceHTML}
              <a href="${c.slug}?id=${c.id}" class="course-cta">
                ${c.enrolled ? 'تابع الكورس' : 'عرض الكورس'}
                <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>`;
    }

    function getFiltered() {
      let list = currentTab === 'saved'
        ? COURSES.filter(c => savedIds.includes(c.id))
        : COURSES;

      if (filters.specialty !== 'all') list = list.filter(c => c.specialty === filters.specialty);
      if (filters.level !== 'all') list = list.filter(c => c.level === filters.level);
      if (filters.price === 'free') list = list.filter(c => c.price === 0);
      if (filters.price === 'paid') list = list.filter(c => c.price > 0);
      if (filters.rating !== 'all') list = list.filter(c => c.rating >= parseFloat(filters.rating));
      if (filters.search) {
        const q = filters.search.toLowerCase();
        list = list.filter(c => c.title.toLowerCase().includes(q) || c.specialty.toLowerCase().includes(q) || c.instructor.toLowerCase().includes(q));
      }

      if (sortVal === 'rating') list = [...list].sort((a,b) => b.rating - a.rating);
      else if (sortVal === 'price-asc') list = [...list].sort((a,b) => a.price - b.price);
      else if (sortVal === 'price-desc') list = [...list].sort((a,b) => b.price - a.price);
      else if (sortVal === 'newest') list = [...list].sort((a,b) => b.id - a.id);

      return list;
    }

    function renderAll() {
      const grid = document.getElementById('coursesGrid');
      const empty = document.getElementById('emptyState');
      const emptyTitle = document.getElementById('emptyTitle');
      const emptyDesc = document.getElementById('emptyDesc');
      const countLabel = document.getElementById('courseCountLabel');
      const savedCount = document.getElementById('savedCount');

      savedCount.textContent = savedIds.length;

      const filtered = getFiltered();
      countLabel.textContent = filtered.length;

      if (filtered.length === 0) {
        grid.innerHTML = '';
        grid.style.display = 'none';
        empty.style.display = 'block';
        if (currentTab === 'saved') {
          emptyTitle.textContent = 'لا توجد كورسات محفوظة';
          emptyDesc.textContent = 'اضغط على أيقونة القلب على أي كورس لحفظه هنا.';
        } else {
          emptyTitle.textContent = 'لا توجد كورسات';
          emptyDesc.textContent = 'لم يتم العثور على كورسات تطابق الفلاتر المحددة.';
        }
      } else {
        grid.style.display = 'grid';
        empty.style.display = 'none';
        grid.innerHTML = filtered.map(buildCard).join('');
      }

      grid.className = 'courses-grid' + (isListView ? ' list-view' : '');
    }

    // ── EVENTS ──
    document.getElementById('tabAll').addEventListener('click', () => {
      currentTab = 'all';
      document.getElementById('tabAll').classList.add('active');
      document.getElementById('tabSaved').classList.remove('active');
      renderAll();
    });
    document.getElementById('tabSaved').addEventListener('click', () => {
      currentTab = 'saved';
      document.getElementById('tabSaved').classList.add('active');
      document.getElementById('tabAll').classList.remove('active');
      renderAll();
    });

    document.getElementById('specialtyFilter').addEventListener('click', e => {
      const chip = e.target.closest('.filter-chip');
      if (!chip) return;
      document.querySelectorAll('#specialtyFilter .filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      filters.specialty = chip.dataset.val;
      renderAll();
    });
    document.querySelectorAll('input[name="level"]').forEach(r => r.addEventListener('change', () => { filters.level = r.value; renderAll(); }));
    document.querySelectorAll('input[name="price"]').forEach(r => r.addEventListener('change', () => { filters.price = r.value; renderAll(); }));
    document.querySelectorAll('input[name="rating"]').forEach(r => r.addEventListener('change', () => { filters.rating = r.value; renderAll(); }));

    let searchTimeout;
    document.getElementById('searchInput').addEventListener('input', e => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => { filters.search = e.target.value.trim(); renderAll(); }, 250);
    });

    document.getElementById('sortSelect').addEventListener('change', e => { sortVal = e.target.value; renderAll(); });

    document.getElementById('gridViewBtn').addEventListener('click', () => {
      isListView = false;
      document.getElementById('gridViewBtn').classList.add('active');
      document.getElementById('listViewBtn').classList.remove('active');
      renderAll();
    });
    document.getElementById('listViewBtn').addEventListener('click', () => {
      isListView = true;
      document.getElementById('listViewBtn').classList.add('active');
      document.getElementById('gridViewBtn').classList.remove('active');
      renderAll();
    });

    document.getElementById('resetFilters').addEventListener('click', () => {
      filters = { specialty: 'all', level: 'all', price: 'all', rating: 'all', search: '' };
      sortVal = 'default';
      document.getElementById('searchInput').value = '';
      document.querySelectorAll('#specialtyFilter .filter-chip').forEach(c => c.classList.remove('active'));
      document.querySelector('#specialtyFilter [data-val="all"]').classList.add('active');
      document.querySelector('input[name="level"][value="all"]').checked = true;
      document.querySelector('input[name="price"][value="all"]').checked = true;
      document.querySelector('input[name="rating"][value="all"]').checked = true;
      document.getElementById('sortSelect').value = 'default';
      renderAll();
    });

    // Hamburger
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      hamburger.classList.remove('open'); mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }));

    // Scroll top
    const scrollTopBtn = document.getElementById('scroll-top');
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Init
    renderAll();