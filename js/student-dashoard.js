
const COURSES=[
  {id:1,name:'التشريح البشري الشامل',spec:'طب بشري',thumb:'linear-gradient(135deg,#2A7FD4,#4E9FE8)',progress:75,lessons:24,done:18,free:false,price:299,enrolled:true,level:'متوسط',instructor:'د. كريم الشريف',lastLesson:'الجهاز العصبي الطرفي',completedDate:null},
  {id:2,name:'الفسيولوجيا الطبية',spec:'طب بشري',thumb:'linear-gradient(135deg,#1B5EA8,#2A7FD4)',progress:45,lessons:18,done:8,free:false,price:249,enrolled:true,level:'مبتدئ',instructor:'د. منى عبد الفتاح',lastLesson:'فسيولوجيا الجهاز الهضمي',completedDate:null},
  {id:3,name:'علم الأدوية الأساسي',spec:'صيدلة',thumb:'linear-gradient(135deg,#0FB8C9,#2A7FD4)',progress:100,lessons:16,done:16,free:true,price:0,enrolled:true,level:'مبتدئ',instructor:'د. هاني عزت',lastLesson:null,completedDate:'15 يناير 2026'},
  {id:4,name:'طب الأسنان التحفظي',spec:'أسنان',thumb:'linear-gradient(135deg,#1B5EA8,#0FB8C9)',progress:0,lessons:20,done:0,free:false,price:199,enrolled:false,level:'متقدم',instructor:'د. ياسمين توفيق',lastLesson:null,completedDate:null},
  {id:5,name:'مبادئ العلاج الطبيعي',spec:'علاج طبيعي',thumb:'linear-gradient(135deg,#0FB8C9,#1B5EA8)',progress:0,lessons:14,done:0,free:true,price:0,enrolled:false,level:'مبتدئ',instructor:'د. عمرو سلامة',lastLesson:null,completedDate:null},
  {id:6,name:'الكيمياء الحيوية الطبية',spec:'طب بشري',thumb:'linear-gradient(135deg,#2A7FD4,#1B5EA8)',progress:0,lessons:22,done:0,free:false,price:279,enrolled:false,level:'متوسط',instructor:'د. سارة جمال',lastLesson:null,completedDate:null},
  {id:7,name:'صيدلة سريرية متقدمة',spec:'صيدلة',thumb:'linear-gradient(135deg,#0FB8C9,#4E9FE8)',progress:0,lessons:18,done:0,free:false,price:320,enrolled:false,level:'متقدم',instructor:'د. هاني عزت',lastLesson:null,completedDate:null},
];

const ACTIVITIES=[
  {dot:'dot-blue',text:'أكملت الدرس <strong>٨</strong> في كورس الفسيولوجيا الطبية',time:'منذ ساعتين'},
  {dot:'dot-green',text:'أكملت كورس <strong>علم الأدوية الأساسي</strong> بالكامل 🎉',time:'أمس'},
  {dot:'dot-orange',text:'تقدمت ٧٥٪ في كورس <strong>التشريح البشري الشامل</strong>',time:'منذ يومين'},
  {dot:'dot-teal',text:'سجلت في كورس <strong>علم الأدوية الأساسي</strong>',time:'منذ أسبوع'},
];


const SAVED_KEY='mh_saved_courses';

function getSavedCourses(){
  try{
    const data=JSON.parse(localStorage.getItem(SAVED_KEY));
    return Array.isArray(data)?data:[];
  }catch(e){return [];}
}

function unsaveCourse(id){
  const updated=getSavedCourses().filter(c=>c.id!==id);
  localStorage.setItem(SAVED_KEY,JSON.stringify(updated));
  renderSaved();
  updateSidebarBadges();
}

function normalizeSavedCourse(c){
  return Object.assign({
    lessons:0,done:0,enrolled:false,level:'',free:false,price:0,progress:0,
    thumb:'linear-gradient(135deg,#2A7FD4,#4E9FE8)'
  },c);
}

/* ===================== بطاقة الكورس ===================== */
function statusBadgeHTML(c){
  if(c.progress===100){
    return `<span class="course-status status-completed"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 20.6 7.4 19.2 6z"/></svg>مكتمل</span>`;
  }
  return `<span class="course-status status-progress"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/></svg>قيد التقدم</span>`;
}

function courseCardHTML(c,context='home'){
  const pct=c.progress||0;
  const isCompleted=pct===100;
  const showProgress=context!=='saved' && c.enrolled;

  let extraMeta='';
  if(context==='mycourses'){
    extraMeta=isCompleted
      ? `<div class="course-extra-meta"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>تم الإكمال في ${c.completedDate}</div>`
      : `<div class="course-extra-meta"><svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>آخر درس: ${c.lastLesson||'لم تبدأ بعد'}</div>`;
  }

  const removeBtn=context==='saved'
    ? `<button class="saved-remove-btn" title="إزالة من المحفوظة" onclick="event.stopPropagation();unsaveCourse(${c.id})"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>`
    : '';

  const statusBadge=context==='mycourses'?statusBadgeHTML(c):'';

  const btnLabel=!c.enrolled?'عرض التفاصيل':(isCompleted?'مراجعة الكورس':'استمر في التعلم');

  return `<div class="course-card">
    <div class="course-thumb" style="background:${c.thumb}">
      ${removeBtn}
      ${statusBadge}
      <svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
      <span class="course-badge ${c.free?'badge-free':'badge-paid'}">${c.free?'مجاني':c.price+'ج'}</span>
    </div>
    <div class="course-body">
      <div class="course-spec">${c.spec}</div>
      <div class="course-name">${c.name}</div>
      ${showProgress?`<div class="course-prog-wrap">
        <div class="course-prog-label"><span>التقدم</span><span>${pct}%</span></div>
        <div class="course-prog-bar"><div class="course-prog-fill" style="width:${pct}%"></div></div>
      </div>`:''}
      <div class="course-meta">
        <span><svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg> ${c.lessons} درس</span>
        ${showProgress?`<span>${c.done}/${c.lessons} مكتمل</span>`:`<span>${c.level||''}</span>`}
      </div>
      ${extraMeta}
      <button class="continue-btn" onclick="location.href='course-detail.html?id=${c.id}'">${btnLabel}</button>
    </div>
  </div>`;
}

function emptyStateHTML({icon,title,desc,showBtn=true}){
  return `<div class="dash-empty" style="grid-column:1/-1">
    <div class="dash-empty-icon">${icon}</div>
    <div class="dash-empty-title">${title}</div>
    <div class="dash-empty-desc">${desc}</div>
    ${showBtn?`<button class="btn btn-primary" onclick="location.href='courses.html'">استعرض الكورسات</button>`:''}
  </div>`;
}

/* ===================== لوحة التحكم (الرئيسية) ===================== */
function renderStats(){
  const enrolled=COURSES.filter(c=>c.enrolled);
  const completed=enrolled.filter(c=>c.progress===100);
  const avg=enrolled.length?Math.round(enrolled.reduce((s,c)=>s+c.progress,0)/enrolled.length):0;
  document.getElementById('statEnrolled').textContent=enrolled.length;
  document.getElementById('statEnrolledSub').textContent=`${enrolled.length-completed.length} قيد التقدم`;
  document.getElementById('statCompleted').textContent=completed.length;
  document.getElementById('statAvg').textContent=avg+'%';
}

function updateSidebarBadges(){
  const enrolledCount=COURSES.filter(c=>c.enrolled).length;
  document.getElementById('sidebarMyCoursesBadge').textContent=enrolledCount;
  document.getElementById('sidebarSavedBadge').textContent=getSavedCourses().length;
}

function renderHome(){
  const enrolled=COURSES.filter(c=>c.enrolled);
  const inProgress=enrolled.filter(c=>c.progress<100);
  const wrap=document.getElementById('activeCoursesRow');
  wrap.innerHTML = inProgress.length
    ? inProgress.map(c=>courseCardHTML(c,'home')).join('')
    : emptyStateHTML({
        icon:'<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>',
        title:'أنهيت كل كورساتك الحالية 🎉',
        desc:'وقت رائع لتبدأ كورس جديد وتوسّع معرفتك الطبية.'
      });

  document.getElementById('activityList').innerHTML=ACTIVITIES.map(a=>`
    <div class="activity-item">
      <span class="activity-dot ${a.dot}"></span>
      <span class="activity-text">${a.text}</span>
      <span class="activity-time">${a.time}</span>
    </div>`).join('');

  renderStats();
}

/* ===================== كورساتي ===================== */
function renderMyCourses(filter='all'){
  const enrolled=COURSES.filter(c=>c.enrolled);
  let list=enrolled;
  if(filter==='progress')list=enrolled.filter(c=>c.progress<100);
  if(filter==='completed')list=enrolled.filter(c=>c.progress===100);

  const grid=document.getElementById('myCoursesGrid');
  if(!list.length){
    grid.innerHTML=emptyStateHTML({
      icon:'<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
      title:filter==='completed'?'لا توجد كورسات مكتملة بعد':'لا توجد كورسات هنا',
      desc:filter==='completed'?'استمر في التعلم لتظهر كورساتك المكتملة هنا.':'سجّل في كورس جديد ليظهر هنا.'
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

/* ===================== الكورسات المحفوظة ===================== */
function renderSaved(){
  const saved=getSavedCourses();
  const grid=document.getElementById('savedCoursesGrid');
  if(!saved.length){
    grid.innerHTML=emptyStateHTML({
      icon:'<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
      title:'لا توجد كورسات محفوظة',
      desc:'اضغط على أيقونة الحفظ في أي كورس بصفحة استعراض الكورسات ليظهر هنا.'
    });
    return;
  }
  grid.innerHTML=saved.map(c=>courseCardHTML(normalizeSavedCourse(c),'saved')).join('');
}

/* ===================== التنقل بين الصفحات ===================== */
const PAGES=['home','mycourses','saved','profile','settings','notifications'];
function navigate(page){
  PAGES.forEach(p=>{
    document.getElementById('sec-'+p).classList.toggle('active',p===page);
  });
  document.querySelectorAll('.sidebar-link').forEach(el=>{
    el.classList.toggle('active',el.getAttribute('onclick')&&el.getAttribute('onclick').includes("navigate('"+page+"')"));
  });
  closeSidebar();

  if(page==='home')renderHome();
  if(page==='mycourses'){
    document.querySelectorAll('#mcTabs .mc-tab').forEach(t=>t.classList.toggle('active',t.dataset.filter==='all'));
    renderMyCourses('all');
  }
  if(page==='saved')renderSaved();
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

window.addEventListener('scroll',()=>{
  document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>10);
});

/* مزامنة لحظية لو صفحة الكورسات مفتوحة في تاب تاني وعملت حفظ/إزالة */
window.addEventListener('storage',e=>{
  if(e.key===SAVED_KEY){
    updateSidebarBadges();
    if(document.getElementById('sec-saved').classList.contains('active'))renderSaved();
  }
});
function renderNotifPage(){
  const list=document.getElementById('notifPageList');
  if(!notifications.length){
    list.innerHTML=`<div class="dash-empty">
      <div class="dash-empty-icon"><svg viewBox="0 0 24 24" style="width:26px;height:26px;stroke:var(--color-primary);fill:none;stroke-width:2;stroke-linecap:round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg></div>
      <div class="dash-empty-title">لا توجد إشعارات</div>
      <div class="dash-empty-desc">ستظهر هنا جميع إشعاراتك عند وصولها.</div>
    </div>`;
    return;
  }
  list.innerHTML=notifications.map(n=>`
    <div class="notif-page-item ${n.unread?'unread':''}" onclick="readNotif(${n.id});renderNotifPage()">
      <div class="notif-item-icon" style="background:${n.color}">
        <svg viewBox="0 0 24 24">${n.icon}</svg>
      </div>
      <div class="notif-item-body">
        <div class="notif-item-text">${n.text}</div>
        <div class="notif-item-time">${n.time}</div>
      </div>
      ${n.unread?'<div class="notif-page-unread-dot"></div>':''}
    </div>`).join('');
}

function markAllNotifs(){
  notifications=notifications.map(n=>({...n,unread:false}));
  renderNotifications();
  renderNotifPage();
}

/* ===================== NOTIFICATIONS ===================== */
const NOTIFICATIONS=[
  {id:1,text:'أكملت الدرس <strong>٨</strong> في كورس الفسيولوجيا الطبية',time:'منذ ساعتين',unread:true,color:'linear-gradient(135deg,#2A7FD4,#4E9FE8)',icon:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'},
  {id:2,text:'أكملت كورس <strong>علم الأدوية الأساسي</strong> بالكامل 🎉',time:'أمس',unread:true,color:'linear-gradient(135deg,#22C55E,#16A34A)',icon:'<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 20.6 7.4 19.2 6z"/>'},
  {id:3,text:'تقدمت <strong>٧٥٪</strong> في كورس التشريح البشري الشامل',time:'منذ يومين',unread:true,color:'linear-gradient(135deg,#F59E0B,#F97316)',icon:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/>'},
  {id:4,text:'سجلت في كورس <strong>علم الأدوية الأساسي</strong>',time:'منذ أسبوع',unread:false,color:'linear-gradient(135deg,#0FB8C9,#2A7FD4)',icon:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'},
  {id:5,text:'كورس جديد متاح: <strong>صيدلة سريرية متقدمة</strong>',time:'منذ أسبوعين',unread:false,color:'linear-gradient(135deg,#1B5EA8,#0FB8C9)',icon:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'},
];

let notifications=[...NOTIFICATIONS];

function renderNotifications(){
  const list=document.getElementById('notifList');
  const unreadCount=notifications.filter(n=>n.unread).length;
  const badge=document.getElementById('notifBadge');
  badge.style.display=unreadCount?'block':'none';
  badge.textContent=unreadCount>9?'9+':unreadCount||'';

  document.getElementById('sidebarNotifBadge').textContent=unreadCount;
  if(!notifications.length){
    list.innerHTML='<div class="notif-empty">لا توجد إشعارات</div>';
    return;
  }
  list.innerHTML=notifications.map(n=>`
    <div class="notif-item ${n.unread?'unread':''}" onclick="readNotif(${n.id})">
      <div class="notif-item-icon" style="background:${n.color}">
        <svg viewBox="0 0 24 24">${n.icon}</svg>
      </div>
      <div class="notif-item-body">
        <div class="notif-item-text">${n.text}</div>
        <div class="notif-item-time">${n.time}</div>
      </div>
      ${n.unread?'<div class="notif-unread-dot"></div>':''}
    </div>`).join('');
}

function readNotif(id){
  notifications=notifications.map(n=>n.id===id?{...n,unread:false}:n);
  renderNotifications();
}

document.getElementById('markAllBtn').addEventListener('click',()=>{
  notifications=notifications.map(n=>({...n,unread:false}));
  renderNotifications();
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
renderHome();
renderNotifications();
updateSidebarBadges();