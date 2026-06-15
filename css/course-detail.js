    // ── COURSE DATA (same as courses.html — في الـ production استخدم API) ──
    const COURSES = [
      { id:1, title:'أساسيات التشريح البشري', instructor:'سيتم الإعلان عن المدرب', specialty:'طب بشري', level:'مبتدئ', lectures:0, hours:0, price:0, rating:0, description:'كورس شامل يغطي أساسيات علم التشريح البشري بأسلوب مبسط ومنظم. سيتم إضافة المحتوى التفصيلي قريبًا.', updated:'قريبًا', thumb:'thumb-blue', icon:'<path d="M12 2a5 5 0 1 1 0 10A5 5 0 0 1 12 2zm0 12c5.33 0 8 2.67 8 4v2H4v-2c0-1.33 2.67-4 8-4z"/>', sections:[], materials:[] },
      { id:2, title:'فيزيولوجيا الجهاز التنفسي', instructor:'سيتم الإعلان عن المدرب', specialty:'طب بشري', level:'متوسط', lectures:0, hours:0, price:0, rating:0, description:'دراسة معمقة في فيزيولوجيا الجهاز التنفسي وآليات عمله. سيتم إضافة المحتوى التفصيلي قريبًا.', updated:'قريبًا', thumb:'thumb-navy', icon:'<path d="M12 2c-1.5 0-2.9.4-4 1.1C6.4 2 4.2 2 3 3.7 1.8 5.3 2 7.8 3 9.5c1 1.7 2 3 2 5.5 0 2 .5 5 2 7h2l1-5 1 5h2c1.5-2 2-5 2-7 0-2.5 1-3.8 2-5.5C18 8 18.2 5.4 17 3.7 15.8 2 13.6 2 12 2z"/>', sections:[], materials:[] },
      { id:3, title:'مقدمة في طب الأسنان السريري', instructor:'سيتم الإعلان عن المدرب', specialty:'أسنان', level:'مبتدئ', lectures:0, hours:0, price:0, rating:0, description:'كورس تمهيدي في طب الأسنان السريري يغطي الأساسيات العلمية والتطبيقية. سيتم إضافة المحتوى قريبًا.', updated:'قريبًا', thumb:'thumb-teal', icon:'<path d="M12 2c-1.5 0-2.9.4-4 1.1C6.4 2 4.2 2 3 3.7 1.8 5.3 2 7.8 3 9.5c1 1.7 2 3 2 5.5 0 2 .5 5 2 7h2l1-5 1 5h2c1.5-2 2-5 2-7 0-2.5 1-3.8 2-5.5C18 8 18.2 5.4 17 3.7 15.8 2 13.6 2 12 2z"/>', sections:[], materials:[] },
      { id:4, title:'أساسيات الصيدلة الإكلينيكية', instructor:'سيتم الإعلان عن المدرب', specialty:'صيدلة', level:'مبتدئ', lectures:0, hours:0, price:0, rating:0, description:'مقدمة شاملة في علم الصيدلة الإكلينيكية وتطبيقاتها العملية. سيتم إضافة المحتوى قريبًا.', updated:'قريبًا', thumb:'thumb-green', icon:'<path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>', sections:[], materials:[] },
      { id:5, title:'تقنيات العلاج الطبيعي الأساسية', instructor:'سيتم الإعلان عن المدرب', specialty:'علاج طبيعي', level:'مبتدئ', lectures:0, hours:0, price:0, rating:0, description:'برنامج تعليمي في تقنيات العلاج الطبيعي الأساسية وإعادة التأهيل. سيتم إضافة المحتوى قريبًا.', updated:'قريبًا', thumb:'thumb-purple', icon:'<path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/>', sections:[], materials:[] },
      { id:6, title:'علم الأدوية المتقدم', instructor:'سيتم الإعلان عن المدرب', specialty:'صيدلة', level:'متقدم', lectures:0, hours:0, price:0, rating:0, description:'كورس متقدم في علم الأدوية يتناول الآليات الفارماكولوجية والتطبيقات السريرية. سيتم إضافة المحتوى قريبًا.', updated:'قريبًا', thumb:'thumb-orange', icon:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>', sections:[], materials:[] },
    ];

    // ── SIMULATE ENROLLED STATE (في الـ production: اجلب من الـ backend) ──
    // غيّر هذا بناءً على حالة المستخدم الفعلية
    const IS_ENROLLED = false;
    const USER_PROGRESS = 0;
    const LECTURES_DONE = 0;
    const TIME_SPENT = 0;

    // ── SAVED ──
    let savedIds = JSON.parse(localStorage.getItem('mh_saved') || '[]');
    function saveSaved() { localStorage.setItem('mh_saved', JSON.stringify(savedIds)); }

    // ── LOAD COURSE ──
    const params = new URLSearchParams(window.location.search);
    const courseId = parseInt(params.get('id')) || 1;
    const course = COURSES.find(c => c.id === courseId) || COURSES[0];

    function initPage() {
      // Hero
      document.title = course.title + ' | ميديكل هاب';
      document.getElementById('heroSpecialty').textContent = course.specialty;
      document.getElementById('heroSpecialtyPill').textContent = course.specialty;
      document.getElementById('heroTitle').textContent = course.title;
      document.getElementById('heroDesc').textContent = course.description;
      document.getElementById('heroLevelText').textContent = course.level;
      document.getElementById('heroInstructorText').textContent = course.instructor;

      if (course.lectures > 0) {
        document.getElementById('heroLectures').style.display = 'flex';
        document.getElementById('heroLecturesText').textContent = course.lectures + ' محاضرة';
      }

      // Sidebar info
      document.getElementById('infoLevel').textContent = course.level;
      document.getElementById('infoLectures').textContent = course.lectures ? course.lectures + ' محاضرة' : 'قريبًا';
      document.getElementById('infoHours').textContent = course.hours ? course.hours + ' ساعة' : 'قريبًا';
      document.getElementById('infoSpecialty').textContent = course.specialty;
      document.getElementById('infoUpdated').textContent = course.updated;
      document.getElementById('infoInstructor').textContent = course.instructor;

      // Purchase card HTML
      const isSaved = savedIds.includes(course.id);
      const priceHTML = course.price === 0
        ? `<span class="purchase-price free">مجاني</span>`
        : `<span class="purchase-price">${course.price} جنيه</span>`;

      const enrolledBtnHTML = IS_ENROLLED
        ? `<button class="btn btn-success btn-block btn-lg" onclick="switchTab('curriculum')">
             <svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:white;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
             تابع الكورس
           </button>`
        : `<button class="btn btn-primary btn-block btn-lg" onclick="switchTab('payment')">
             <svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:white;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/></svg>
             ${course.price === 0 ? 'سجّل مجانًا' : 'اشترك الآن'}
           </button>`;

      const cardHTML = `
        <div class="purchase-card">
          <div class="purchase-thumb ${course.thumb}">
            <div class="purchase-thumb-icon"><svg viewBox="0 0 24 24">${course.icon}</svg></div>
          </div>
          <div class="purchase-body">
            <div class="purchase-price-row">${priceHTML}</div>
            ${enrolledBtnHTML}
            <div class="purchase-divider"></div>
            <button class="save-course-btn${isSaved ? ' saved' : ''}" id="saveCourseBtnCard" onclick="toggleCourseSave()">
              <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              ${isSaved ? 'تم الحفظ' : 'حفظ الكورس'}
            </button>
            <div class="purchase-divider"></div>
            <div class="purchase-includes">
              <div class="purchase-includes-title">يشمل الكورس</div>
              <div class="include-item"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>${course.lectures ? course.lectures + ' محاضرة' : 'محاضرات متعددة'}</div>
              <div class="include-item"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>ملفات PDF ومواد تعليمية</div>
              <div class="include-item"><svg viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>وصول كامل لفترة الاشتراك</div>
              <div class="include-item"><svg viewBox="0 0 24 24"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1-8h4v2h-6V7h2v7z"/></svg>وصول من أي جهاز</div>
            </div>
          </div>
        </div>`;

      document.getElementById('purchaseCardHero').innerHTML = cardHTML;

      // Progress block (enrolled)
      if (IS_ENROLLED) {
        document.getElementById('progressBlock').style.display = 'block';
        document.getElementById('progressPct').textContent = USER_PROGRESS + '%';
        document.getElementById('progressFill').style.width = USER_PROGRESS + '%';
        document.getElementById('progLecturesDone').textContent = LECTURES_DONE;
        document.getElementById('progTime').textContent = TIME_SPENT + ' دقيقة';
        document.getElementById('alreadyEnrolled').style.display = 'block';
        document.getElementById('paymentForm').style.display = 'none';
        // Show materials
        document.getElementById('materialsLocked').style.display = 'none';
        document.getElementById('materialsList').style.display = 'block';
        document.getElementById('materialsList').innerHTML = course.materials.length
          ? course.materials.map(m => `
              <div class="material-item">
                <div class="material-icon mat-${m.type}">
                  <svg viewBox="0 0 24 24">${m.icon}</svg>
                </div>
                <div class="material-info">
                  <div class="material-name">${m.name}</div>
                  <div class="material-meta">${m.size || ''}</div>
                </div>
                <button class="material-download" onclick="alert('سيتم ربط التحميل بالـ backend')">
                  <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  تحميل
                </button>
              </div>`) .join('')
          : '<p style="color:var(--color-text-muted);font-size:0.9rem;padding:20px;">لم يتم رفع مواد بعد، تابع التحديثات.</p>';
      }

      // Curriculum
      renderCurriculum();
    }

    function renderCurriculum() {
      const list = document.getElementById('curriculumList');
      const sCount = document.getElementById('sectionsCount');
      const lCount = document.getElementById('lecturesCount');

      if (!course.sections || course.sections.length === 0) {
        sCount.textContent = '—';
        lCount.textContent = '—';
        list.innerHTML = `<div class="locked-notice" style="background:var(--color-primary-pale);border-color:var(--color-primary-light);">
          <div class="locked-notice-icon" style="background:var(--color-primary);"><svg viewBox="0 0 24 24"><path fill="white" d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg></div>
          <div class="locked-notice-title">المنهج قيد الإعداد</div>
          <div class="locked-notice-desc">سيتم إضافة المحاضرات والأقسام قريبًا، ترقبنا!</div>
        </div>`;
        document.getElementById('curriculumLocked').style.display = 'none';
        return;
      }

      let totalLectures = 0;
      course.sections.forEach(s => { totalLectures += (s.lectures || []).length; });
      sCount.textContent = course.sections.length;
      lCount.textContent = totalLectures;

      list.innerHTML = course.sections.map((sec, i) => `
        <div class="section-accordion${i === 0 ? ' open' : ''}" id="sec-${i}">
          <div class="section-header" onclick="toggleSection(${i})">
            <div class="section-header-left">
              <div class="section-toggle"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
              <div>
                <div class="section-name">${sec.title}</div>
                <div class="section-meta-small">${(sec.lectures||[]).length} محاضرات</div>
              </div>
            </div>
          </div>
          <div class="section-body">
            ${(sec.lectures||[]).map(lec => {
              const locked = !IS_ENROLLED && !lec.free;
              return `
              <div class="lecture-item${locked ? ' locked' : ''}">
                <div class="lecture-icon ${lec.type||'video'}">
                  <svg viewBox="0 0 24 24">${lec.type === 'pdf'
                    ? '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>'
                    : lec.type === 'quiz'
                    ? '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>'
                    : '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'}
                  </svg>
                </div>
                <span class="lecture-name">${lec.title}</span>
                <div class="lecture-meta">
                  ${lec.free ? '<span class="free-preview">مجاني</span>' : ''}
                  ${lec.duration || ''}
                  ${locked ? '<div class="lock-icon"><svg viewBox="0 0 24 24" fill="var(--color-text-muted)"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>' : ''}
                </div>
              </div>`;
            }).join('')}
          </div>
        </div>`).join('');

      if (!IS_ENROLLED) document.getElementById('curriculumLocked').style.display = 'block';
    }

    function toggleSection(i) {
      const el = document.getElementById('sec-' + i);
      el.classList.toggle('open');
    }

    function toggleCourseSave() {
      if (savedIds.includes(course.id)) savedIds = savedIds.filter(x => x !== course.id);
      else savedIds.push(course.id);
      saveSaved();
      const btn = document.getElementById('saveCourseBtnCard');
      const isSaved = savedIds.includes(course.id);
      if (btn) { btn.classList.toggle('saved', isSaved); btn.querySelector('svg + span, span') && null; btn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>${isSaved ? 'تم الحفظ' : 'حفظ الكورس'}`; }
    }

    function switchTab(name) {
      document.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      document.querySelector(`[data-tab="${name}"]`).classList.add('active');
      document.getElementById('panel-' + name).classList.add('active');
      document.querySelector('.detail-main').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Tabs
    document.querySelectorAll('.detail-tab').forEach(tab => {
      tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });

    // Payment
    function selectPayment(el) {
      document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
      el.classList.add('selected');
    }
    function handlePayment() {
      const selected = document.querySelector('.payment-method.selected');
      if (!selected) { alert('يرجى اختيار طريقة دفع أولاً'); return; }
      // في الـ production: أرسل طلب للـ backend
      alert('سيتم ربط عملية الدفع بالـ backend قريبًا.');
    }

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
    initPage();