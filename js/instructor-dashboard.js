const COURSES=[
  {id:1,name:'التشريح البشري الشامل',spec:'طب بشري',thumb:'linear-gradient(135deg,#2A7FD4,#4E9FE8)',lessons:24,published:true,students:142,rating:4.8,reviews:38,revenue:42158,level:'متوسط'},
  {id:2,name:'علم الأناتومي السريري',spec:'طب بشري',thumb:'linear-gradient(135deg,#1B5EA8,#2A7FD4)',lessons:18,published:true,students:89,rating:4.6,reviews:21,revenue:22211,level:'متقدم'},
  {id:3,name:'مقدمة في التشريح',spec:'طب بشري',thumb:'linear-gradient(135deg,#0FB8C9,#2A7FD4)',lessons:10,published:false,students:0,rating:0,reviews:0,revenue:0,level:'مبتدئ'},
];

const STUDENTS=[
  {id:1,name:'أحمد محمد',initials:'أح',courseId:1,progress:75,status:'progress',enrollDate:'١ يناير ٢٠٢٦'},
  {id:2,name:'سارة علي',initials:'سع',courseId:1,progress:100,status:'completed',enrollDate:'١٥ ديسمبر ٢٠٢٥'},
  {id:3,name:'محمود حسن',initials:'مح',courseId:1,progress:30,status:'progress',enrollDate:'١٠ يناير ٢٠٢٦'},
  {id:4,name:'نور إبراهيم',initials:'نإ',courseId:2,progress:100,status:'completed',enrollDate:'٥ نوفمبر ٢٠٢٥'},
  {id:5,name:'يوسف عمر',initials:'يع',courseId:1,progress:55,status:'progress',enrollDate:'٢٠ يناير ٢٠٢٦'},
  {id:6,name:'مريم خالد',initials:'مخ',courseId:2,progress:80,status:'progress',enrollDate:'٣ يناير ٢٠٢٦'},
  {id:7,name:'عمر سامي',initials:'عس',courseId:1,progress:10,status:'progress',enrollDate:'٢٥ يناير ٢٠٢٦'},
  {id:8,name:'هنا طارق',initials:'هط',courseId:2,progress:45,status:'progress',enrollDate:'١٢ يناير ٢٠٢٦'},
];

const REVIEWS=[
  {id:1,studentName:'سارة علي',initials:'سع',courseId:1,rating:5,text:'كورس ممتاز جداً، الشرح واضح والمحتوى منظم بشكل احترافي. استفدت منه كثيراً في دراستي.',time:'منذ يومين'},
  {id:2,studentName:'نور إبراهيم',initials:'نإ',courseId:2,rating:5,text:'من أفضل الكورسات اللي خذتها، الدكتور شارح بأسلوب مبسط ومفيد.',time:'منذ ٥ أيام'},
  {id:3,studentName:'أحمد محمد',initials:'أح',courseId:1,rating:4,text:'محتوى قوي وشامل، بس كنت أتمنى في المزيد من الأمثلة التطبيقية.',time:'منذ أسبوع'},
  {id:4,studentName:'محمود حسن',initials:'مح',courseId:1,rating:5,text:'الشرح احترافي والمادة العلمية دقيقة جداً. موصي به لكل طلاب الطب.',time:'منذ أسبوعين'},
];

const ACTIVITIES=[
  {dot:'dot-green',text:'سجّل <strong>عمر سامي</strong> في كورس التشريح البشري الشامل',time:'منذ ساعة'},
  {dot:'dot-orange',text:'تقييم جديد ⭐⭐⭐⭐⭐ من <strong>سارة علي</strong> على كورس التشريح',time:'منذ يومين'},
  {dot:'dot-blue',text:'أكملت <strong>نور إبراهيم</strong> كورس علم الأناتومي السريري بالكامل 🎉',time:'منذ ٥ أيام'},
  {dot:'dot-teal',text:'وصلت أرباح هذا الشهر إلى <strong>١٢,٤٠٠ جنيه</strong>',time:'منذ أسبوع'},
];

const NOTIFICATIONS=[
  {id:1,text:'سجّل <strong>عمر سامي</strong> في كورس التشريح البشري الشامل',time:'منذ ساعة',unread:true,color:'linear-gradient(135deg,#22C55E,#16A34A)',icon:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>'},
  {id:2,text:'تقييم جديد ⭐⭐⭐⭐⭐ من <strong>سارة علي</strong>',time:'منذ يومين',unread:true,color:'linear-gradient(135deg,#F59E0B,#F97316)',icon:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'},
  {id:3,text:'أكملت <strong>نور إبراهيم</strong> كورس علم الأناتومي السريري',time:'منذ ٥ أيام',unread:true,color:'linear-gradient(135deg,#2A7FD4,#4E9FE8)',icon:'<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 20.6 7.4 19.2 6z"/>'},
  {id:4,text:'وصلت أرباح هذا الشهر إلى <strong>١٢,٤٠٠ جنيه</strong>',time:'منذ أسبوع',unread:false,color:'linear-gradient(135deg,#0FB8C9,#2A7FD4)',icon:'<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>'},
];

let notifications=[...NOTIFICATIONS];

/* ===== STATS ===== */
function renderStats(){
  const published=COURSES.filter(c=>c.published);
  const drafts=COURSES.filter(c=>!c.published);
  const totalStudents=COURSES.reduce((s,c)=>s+c.students,0);
  const ratedCourses=published.filter(c=>c.rating>0);
  const avgRating=ratedCourses.length?(ratedCourses.reduce((s,c)=>s+c.rating,0)/ratedCourses.length).toFixed(1):0;
  const totalRevenue=COURSES.reduce((s,c)=>s+c.revenue,0).toLocaleString('ar-EG');
  const totalReviews=COURSES.reduce((s,c)=>s+c.reviews,0);

  document.getElementById('statCourses').textContent=published.length;
  document.getElementById('statCoursesSub').textContent=drafts.length+' مسودة';
  document.getElementById('statStudents').textContent=totalStudents;
  document.getElementById('statRating').textContent=avgRating;
  document.getElementById('statRatingSub').textContent=totalReviews+' تقييم';
  document.getElementById('statRevenue').textContent=totalRevenue;
}

/* ===== COURSE CARD ===== */
function courseCardHTML(c,context='home'){
  const statusBadge=c.published
    ? '<span class="course-status status-published">منشور</span>'
    : '<span class="course-status status-draft">مسودة</span>';

  const actions=context==='mycourses'
    ? `<div class="course-actions">
        <button class="btn btn-outline btn-sm" style="flex:1;justify-content:center">تعديل</button>
        ${c.published?'<button class="btn btn-danger btn-sm">إخفاء</button>':'<button class="btn btn-primary btn-sm">نشر</button>'}
       </div>`
    : `<button class="continue-btn" style="display:block;width:100%;margin-top:12px;padding:9px;background:var(--color-primary-pale);color:var(--color-primary);border:none;border-radius:var(--radius-sm);font-family:var(--font-display);font-weight:700;font-size:0.82rem;cursor:pointer;text-align:center" onclick="navigate('mycourses')">إدارة الكورس</button>`;

  return `<div class="course-card">
    <div class="course-thumb" style="background:${c.thumb}">
      ${statusBadge}
      <svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
      <span class="course-badge badge-paid">${c.level}</span>
    </div>
    <div class="course-body">
      <div class="course-spec">${c.spec}</div>
      <div class="course-name">${c.name}</div>
      <div class="course-meta">
        <span><svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg> ${c.lessons} درس</span>
        <span><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> ${c.students} طالب</span>
      </div>
      <div class="course-extra-meta">
        <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        ${c.rating>0?c.rating+' ('+c.reviews+' تقييم)':'لا توجد تقييمات بعد'}
      </div>
      ${actions}
    </div>
  </div>`;
}

function emptyStateHTML({icon,title,desc,btnLabel,btnAction}){
  return `<div class="dash-empty" style="grid-column:1/-1">
    <div class="dash-empty-icon">${icon}</div>
    <div class="dash-empty-title">${title}</div>
    <div class="dash-empty-desc">${desc}</div>
    ${btnLabel?`<button class="btn btn-primary" onclick="${btnAction}">${btnLabel}</button>`:''}
  </div>`;
}

/* ===== HOME ===== */
function renderHome(){
  renderStats();
  document.getElementById('homeCoursesRow').innerHTML=COURSES.slice(0,3).map(c=>courseCardHTML(c,'home')).join('');
  document.getElementById('activityList').innerHTML=ACTIVITIES.map(a=>`
    <div class="activity-item">
      <span class="activity-dot ${a.dot}"></span>
      <span class="activity-text">${a.text}</span>
      <span class="activity-time">${a.time}</span>
    </div>`).join('');
}

/* ===== MY COURSES ===== */
function renderMyCourses(filter='all'){
  let list=COURSES;
  if(filter==='published')list=COURSES.filter(c=>c.published);
  if(filter==='draft')list=COURSES.filter(c=>!c.published);
  const grid=document.getElementById('myCoursesGrid');
  if(!list.length){
    grid.innerHTML=emptyStateHTML({
      icon:'<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
      title:'لا توجد كورسات هنا',
      desc:'أنشئ كورسك الأول وابدأ في تدريس الطلاب.',
      btnLabel:'+ إنشاء كورس جديد',btnAction:''
    });
    return;
  }
  grid.innerHTML=list.map(c=>courseCardHTML(c,'mycourses')).join('');
}

document.getElementById('mcTabs').addEventListener('click',e=>{
  const tab=e.target.closest('.mc-tab');
  if(!tab)return;
  document.querySelectorAll('#mcTabs .mc-tab').forEach(t=>t.classList.remove('active'));
  tab.classList.add('active');
  renderMyCourses(tab.dataset.filter);
});

/* ===== STUDENTS ===== */
function renderStudents(courseFilter='all'){
  const list=courseFilter==='all'?STUDENTS:STUDENTS.filter(s=>s.courseId===parseInt(courseFilter));
  const tbody=document.getElementById('studentsTableBody');
  if(!list.length){
    tbody.innerHTML=`<tr><td colspan="5" style="text-align:center;padding:40px;color:var(--color-text-muted);font-size:0.88rem">لا يوجد طلاب في هذا الكورس بعد</td></tr>`;
    return;
  }
  tbody.innerHTML=list.map(s=>{
    const course=COURSES.find(c=>c.id===s.courseId);
    const statusPill=s.status==='completed'
      ? '<span class="pill pill-green">مكتمل</span>'
      : s.progress>0?'<span class="pill pill-blue">قيد التقدم</span>':'<span class="pill pill-orange">لم يبدأ</span>';
    return `<tr>
      <td><span class="student-avatar">${s.initials}</span>${s.name}</td>
      <td style="font-size:0.82rem">${course?course.name:''}</td>
      <td>
        <span style="font-size:0.8rem;font-weight:700;color:var(--color-primary)">${s.progress}%</span>
        <div class="prog-mini-bar"><div class="prog-mini-fill" style="width:${s.progress}%"></div></div>
      </td>
      <td>${statusPill}</td>
      <td style="font-size:0.8rem;color:var(--color-text-muted)">${s.enrollDate}</td>
    </tr>`;
  }).join('');
}

function buildStudentsTabs(){
  const tabs=document.getElementById('studentsTabs');
  tabs.innerHTML='<div class="mc-tab active" data-course="all">كل الكورسات</div>';
  COURSES.filter(c=>c.published).forEach(c=>{
    const t=document.createElement('div');
    t.className='mc-tab';
    t.dataset.course=c.id;
    t.textContent=c.name;
    tabs.appendChild(t);
  });
  tabs.addEventListener('click',e=>{
    const tab=e.target.closest('.mc-tab');
    if(!tab)return;
    tabs.querySelectorAll('.mc-tab').forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    renderStudents(tab.dataset.course);
  });
}

/* ===== REVIEWS ===== */
function renderReviews(){
  const list=document.getElementById('reviewsList');
  if(!REVIEWS.length){
    list.innerHTML=`<div class="dash-empty">
      <div class="dash-empty-icon"><svg viewBox="0 0 24 24" style="width:26px;height:26px;stroke:var(--color-primary);fill:none;stroke-width:2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
      <div class="dash-empty-title">لا توجد تقييمات بعد</div>
      <div class="dash-empty-desc">ستظهر تقييمات الطلاب هنا عند وصولها.</div>
    </div>`;
    return;
  }
  list.innerHTML=REVIEWS.map(r=>{
    const course=COURSES.find(c=>c.id===r.courseId);
    const stars=Array.from({length:5},(_,i)=>`<svg class="star ${i<r.rating?'':'star-empty'}" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`).join('');
    return `<div class="review-card">
      <div class="review-header">
        <div class="nav-avatar" style="width:36px;height:36px;font-size:0.78rem">${r.initials}</div>
        <div>
          <div class="review-name">${r.studentName}</div>
          <div class="review-course">${course?course.name:''}</div>
        </div>
        <div class="review-stars">${stars}</div>
      </div>
      <div class="review-text">${r.text}</div>
      <div class="review-time">${r.time}</div>
    </div>`;
  }).join('');
}

/* ===== NOTIFICATIONS ===== */
function renderNotifications(){
  const list=document.getElementById('notifList');
  const unreadCount=notifications.filter(n=>n.unread).length;
  const badge=document.getElementById('notifBadge');
  badge.style.display=unreadCount?'block':'none';
  badge.textContent=unreadCount>9?'9+':unreadCount||'';
  document.getElementById('sidebarNotifBadge').textContent=unreadCount;
  if(!notifications.length){list.innerHTML='<div class="notif-empty">لا توجد إشعارات</div>';return;}
  list.innerHTML=notifications.map(n=>`
    <div class="notif-item ${n.unread?'unread':''}" onclick="readNotif(${n.id})">
      <div class="notif-item-icon" style="background:${n.color}"><svg viewBox="0 0 24 24">${n.icon}</svg></div>
      <div class="notif-item-body">
        <div class="notif-item-text">${n.text}</div>
        <div class="notif-item-time">${n.time}</div>
      </div>
      ${n.unread?'<div class="notif-unread-dot"></div>':''}
    </div>`).join('');
}

function renderNotifPage(){
  const list=document.getElementById('notifPageList');
  if(!notifications.length){
    list.innerHTML=`<div class="dash-empty"><div class="dash-empty-icon"><svg viewBox="0 0 24 24" style="width:26px;height:26px;stroke:var(--color-primary);fill:none;stroke-width:2;stroke-linecap:round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg></div><div class="dash-empty-title">لا توجد إشعارات</div><div class="dash-empty-desc">ستظهر هنا جميع إشعاراتك.</div></div>`;
    return;
  }
  list.innerHTML=notifications.map(n=>`
    <div class="notif-page-item ${n.unread?'unread':''}" onclick="readNotif(${n.id});renderNotifPage()">
      <div class="notif-item-icon" style="background:${n.color}"><svg viewBox="0 0 24 24">${n.icon}</svg></div>
      <div class="notif-item-body">
        <div class="notif-item-text">${n.text}</div>
        <div class="notif-item-time">${n.time}</div>
      </div>
      ${n.unread?'<div class="notif-page-unread-dot"></div>':''}
    </div>`).join('');
}

function readNotif(id){
  notifications=notifications.map(n=>n.id===id?{...n,unread:false}:n);
  renderNotifications();
}

function markAllNotifs(){
  notifications=notifications.map(n=>({...n,unread:false}));
  renderNotifications();
  renderNotifPage();
}

/* ===== SIDEBAR BADGES ===== */
function updateSidebarBadges(){
  document.getElementById('sidebarCoursesBadge').textContent=COURSES.length;
  document.getElementById('sidebarStudentsBadge').textContent=STUDENTS.length;
  document.getElementById('sidebarReviewsBadge').textContent=REVIEWS.length;
}

/* ===== NAVIGATE ===== */
const PAGES=['home','mycourses','students','reviews','notifications','earnings','profile','settings'];
function navigate(page){
  PAGES.forEach(p=>{
    document.getElementById('sec-'+p).classList.toggle('active',p===page);
  });
  document.querySelectorAll('.sidebar-link').forEach(el=>{
    el.classList.toggle('active',el.getAttribute('onclick')&&el.getAttribute('onclick').includes("navigate('"+page+"')"));
  });
  closeSidebar();
  if(page==='home')renderHome();
  if(page==='mycourses'){document.querySelectorAll('#mcTabs .mc-tab').forEach(t=>t.classList.toggle('active',t.dataset.filter==='all'));renderMyCourses('all');}
  if(page==='students'){buildStudentsTabs();renderStudents('all');}
  if(page==='reviews')renderReviews();
  if(page==='earnings'){renderEarnings();}
  if(page==='notifications')renderNotifPage();
  window.scrollTo({top:0,behavior:'smooth'});
}

function closeSidebar(){
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
  document.getElementById('hamburger').setAttribute('aria-expanded','false');
}

document.getElementById('hamburger').addEventListener('click',function(){
  const open=document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('open',open);
  this.setAttribute('aria-expanded',open);
});

document.getElementById('notifBtn').addEventListener('click',e=>{
  e.stopPropagation();
  document.getElementById('notifDropdown').classList.toggle('open');
  renderNotifications();
});

document.addEventListener('click',e=>{
  if(!document.getElementById('notifWrapper').contains(e.target)){
    document.getElementById('notifDropdown').classList.remove('open');
  }
});

document.getElementById('markAllBtn').addEventListener('click',()=>{
  notifications=notifications.map(n=>({...n,unread:false}));
  renderNotifications();
});

window.addEventListener('scroll',()=>{
  document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>10);
});
/* ===== ADD COURSE MODAL ===== */
function openAddCourse(){
  document.getElementById('addCourseModal').style.display='flex';
  document.body.style.overflow='hidden';
}
function togglePriceField(){
  const isPaid = document.getElementById('nc_price_type').value === 'paid';
  document.getElementById('nc_price_wrap').style.display = isPaid ? 'flex' : 'none';
}
function closeAddCourse(){
  document.getElementById('addCourseModal').style.display='none';
  document.body.style.overflow='';
  document.getElementById('nc_error').style.display='none';
  document.getElementById('nc_price_type').value = 'free';
  document.getElementById('nc_price_wrap').style.display = 'none';
  document.getElementById('nc_price').value = '';
}
function submitAddCourse(){
  const name=document.getElementById('nc_name').value.trim();
  const lessons=parseInt(document.getElementById('nc_lessons').value);
  const err=document.getElementById('nc_error');
  if(!name){err.style.display='block';err.textContent='⚠️ اسم الكورس مطلوب';return;}
  if(!lessons||lessons<1){err.style.display='block';err.textContent='⚠️ أدخل عدد الدروس';return;}
  err.style.display='none';

  const newCourse={
    id:COURSES.length+1,
    name,
    spec:document.getElementById('nc_spec').value,
    thumb: 'linear-gradient(135deg,#2A7FD4,#4E9FE8)',
    price: document.getElementById('nc_price_type').value === 'free' ? 0 : (parseInt(document.getElementById('nc_price').value) || 0),
    lessons,
    published:document.getElementById('nc_status').value==='published',
    students:0,rating:0,reviews:0,revenue:0,
    level:document.getElementById('nc_level').value
  };
  COURSES.push(newCourse);
  updateSidebarBadges();
  renderStats();
  renderMyCourses(document.querySelector('#mcTabs .mc-tab.active')?.dataset.filter||'all');
  closeAddCourse();
}
/* ===== EARNINGS ===== */
function renderEarnings(){
  const PLATFORM_CUT=0.20; // 20% نسبة المنصة
  const total=COURSES.reduce((s,c)=>s+c.revenue,0);
  const netTotal=Math.round(total*(1-PLATFORM_CUT));

  document.getElementById('earnTotal').textContent=total.toLocaleString('ar-EG');
  document.getElementById('earnAvail').textContent=Math.round(netTotal*0.75).toLocaleString('ar-EG');
  document.getElementById('earnPending').textContent=Math.round(netTotal*0.25).toLocaleString('ar-EG');
  document.getElementById('earnMonth').textContent=(12400).toLocaleString('ar-EG');

  const tbody=document.getElementById('earningsTableBody');
  tbody.innerHTML=COURSES.map(c=>{
    const net=Math.round(c.revenue*(1-PLATFORM_CUT));
    const pricePerStudent=c.students>0?Math.round(c.revenue/c.students):0;
    return `<tr>
      <td style="font-weight:700">${c.name}</td>
      <td>${c.students}</td>
      <td>${pricePerStudent.toLocaleString('ar-EG')} ج</td>
      <td>${c.revenue.toLocaleString('ar-EG')} ج</td>
      <td><span class="pill pill-orange">٢٠٪</span></td>
      <td style="font-weight:700;color:var(--color-primary)">${net.toLocaleString('ar-EG')} ج</td>
    </tr>`;
  }).join('');
}

function toggleWithdrawFields(){
  const method=document.getElementById('withdrawMethod').value;
  document.getElementById('bankFields').style.display=method==='bank'?'block':'none';
  document.getElementById('mobileFields').style.display=['vodafone','instapay','fawry'].includes(method)?'block':'none';
  const labels={vodafone:'رقم موبايل فودافون',instapay:'رقم الهاتف المرتبط بإنستاباي',fawry:'رقم الموبايل المرتبط بفوري'};
  if(labels[method]) document.getElementById('mobileFieldLabel').textContent=labels[method];
}

function submitWithdraw(){
  const amount=document.getElementById('withdrawAmount').value;
  const method=document.getElementById('withdrawMethod').value;
  const msg=document.getElementById('withdrawMsg');
  if(!amount||amount<100){
    msg.style.display='block';
    msg.style.background='#FDE8E8';
    msg.style.color='#C0392B';
    msg.textContent='⚠️ الحد الأدنى للسحب هو ١٠٠ جنيه';
    return;
  }
  if(!method){
    msg.style.display='block';
    msg.style.background='#FDE8E8';
    msg.style.color='#C0392B';
    msg.textContent='⚠️ اختر طريقة السحب أولاً';
    return;
  }
  msg.style.display='block';
  msg.style.background='#DCFCE7';
  msg.style.color='#15803D';
  msg.textContent='✅ تم إرسال طلب السحب بنجاح! سيتم المعالجة خلال ٢-٣ أيام عمل.';

  // أضف للسجل
  const methodNames={bank:'تحويل بنكي',vodafone:'فودافون كاش',instapay:'إنستاباي',fawry:'فوري'};
  const tbody=document.getElementById('withdrawHistoryBody');
  const newRow=document.createElement('tr');
  newRow.innerHTML=`<td>اليوم</td><td>${parseInt(amount).toLocaleString('ar-EG')} جنيه</td><td>${methodNames[method]}</td><td><span class="pill pill-orange">قيد المعالجة</span></td>`;
  tbody.insertBefore(newRow,tbody.firstChild);
  document.getElementById('withdrawAmount').value='';
  document.getElementById('withdrawMethod').value='';
  document.getElementById('bankFields').style.display='none';
  document.getElementById('mobileFields').style.display='none';
}
renderHome();
renderNotifications();
updateSidebarBadges();