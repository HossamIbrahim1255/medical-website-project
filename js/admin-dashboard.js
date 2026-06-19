/* ══════════════════════ DATA ══════════════════════ */
let PLATFORM_RATE = 20; // نسبة اقتطاع المنصة %

let COMPLAINTS = [
  {id:1,name:'أحمد محمد',email:'ahmed@email.com',subject:'مشكلة في الدفع',body:'حاولت الاشتراك في كورس التشريح لكن المبلغ اتخصم ومش ظهرت في المشتركين.',time:'منذ ساعة',status:'new',reply:''},
  {id:2,name:'سارة علي',email:'sara@email.com',subject:'محتوى غير لائق في تعليق',body:'فيه تعليق مسيء في القسم الخاص بكورس الفسيولوجيا ومحتاجة حد يراجعه.',time:'منذ ٣ ساعات',status:'reviewing',reply:''},
  {id:3,name:'محمود حسن',email:'mahmoud@email.com',subject:'طلب استرداد مبلغ',body:'اشتركت في كورس بالخطأ وعاوز أسترد فلوسي في أسرع وقت.',time:'منذ يوم',status:'new',reply:''},
  {id:4,name:'نور إبراهيم',email:'nour@email.com',subject:'مشكلة في تشغيل الفيديو',body:'مش قادر أشغل الدرس التالت في كورس علم الأدوية، بيظهر خطأ كل شوية.',time:'منذ يومين',status:'reviewing',reply:''},
  {id:5,name:'يوسف عمر',email:'yousef@email.com',subject:'سؤال عن الشهادة',body:'خلصت الكورس، فين الشهادة؟ مش لاقيها في حسابي.',time:'منذ ٣ أيام',status:'closed',reply:'الشهادات بتتبعت على الإيميل خلال ٢٤ ساعة من إنهاء الكورس.'},
];

let INSTRUCTOR_REQUESTS = [
  {id:1,name:'د. منى عبد الفتاح',email:'mona@email.com',spec:'فسيولوجيا طبية',degree:'دكتوراه',bio:'متخصصة في الفسيولوجيا البشرية، عملت مدرسة في كلية طب القاهرة أكثر من ٨ سنوات.',phone:'01011111111',date:'١ يونيو ٢٠٢٦',status:'pending'},
  {id:2,name:'د. هاني عزت',email:'hany@email.com',spec:'صيدلة سريرية',degree:'ماجستير',bio:'صيدلاني سريري بخبرة ٦ سنوات في المستشفيات الجامعية.',phone:'01022222222',date:'٣ يونيو ٢٠٢٦',status:'pending'},
  {id:3,name:'د. ياسمين توفيق',email:'yasmin@email.com',spec:'طب أسنان',degree:'بكالوريوس',bio:'طبيبة أسنان متميزة حاصلة على جوائز في مجال الطب التحفظي.',phone:'01033333333',date:'٥ يونيو ٢٠٢٦',status:'pending'},
  {id:4,name:'د. عمرو سلامة',email:'amro@email.com',spec:'علاج طبيعي',degree:'دكتوراه',bio:'دكتوراه في إعادة التأهيل الطبي، مدرب معتمد دولياً.',phone:'01044444444',date:'١٠ مايو ٢٠٢٦',status:'accepted'},
  {id:5,name:'د. سارة جمال',email:'sara.j@email.com',spec:'كيمياء حيوية',degree:'دكتوراه',bio:'باحثة ومدرسة في علم الكيمياء الحيوية بجامعة الإسكندرية.',phone:'01055555555',date:'٢ مايو ٢٠٢٦',status:'rejected'},
];

let USERS = [
  {id:1,name:'أحمد محمد',email:'ahmed@email.com',type:'student',date:'١ يناير ٢٠٢٦',status:'active',initials:'أح'},
  {id:2,name:'سارة علي',email:'sara@email.com',type:'student',date:'١٥ ديسمبر ٢٠٢٥',status:'active',initials:'سع'},
  {id:3,name:'محمود حسن',email:'mahmoud@email.com',type:'student',date:'١٠ يناير ٢٠٢٦',status:'active',initials:'مح'},
  {id:4,name:'نور إبراهيم',email:'nour@email.com',type:'student',date:'٥ نوفمبر ٢٠٢٥',status:'active',initials:'نإ'},
  {id:5,name:'يوسف عمر',email:'yousef@email.com',type:'student',date:'٢٠ يناير ٢٠٢٦',status:'suspended',initials:'يع'},
  {id:6,name:'مريم خالد',email:'mariam@email.com',type:'student',date:'٣ يناير ٢٠٢٦',status:'active',initials:'مخ'},
  {id:7,name:'د. كريم الشريف',email:'karim@email.com',type:'instructor',date:'١ أكتوبر ٢٠٢٥',status:'active',initials:'دك'},
  {id:8,name:'د. منى عبد الفتاح',email:'mona@email.com',type:'instructor',date:'١ يونيو ٢٠٢٦',status:'active',initials:'دم'},
  {id:9,name:'د. هاني عزت',email:'hany@email.com',type:'instructor',date:'٢٠ أكتوبر ٢٠٢٥',status:'active',initials:'ده'},
  {id:10,name:'عمر سامي',email:'omar@email.com',type:'student',date:'٢٥ يناير ٢٠٢٦',status:'suspended',initials:'عس'},
];

let COURSES_DATA = [
  {id:1,name:'التشريح البشري الشامل',instructor:'د. كريم الشريف',spec:'طب بشري',students:142,revenue:42158,status:'published'},
  {id:2,name:'علم الأناتومي السريري',instructor:'د. كريم الشريف',spec:'طب بشري',students:89,revenue:22211,status:'published'},
  {id:3,name:'مقدمة في التشريح',instructor:'د. كريم الشريف',spec:'طب بشري',students:0,revenue:0,status:'hidden'},
  {id:4,name:'الفسيولوجيا الطبية',instructor:'د. منى عبد الفتاح',spec:'طب بشري',students:64,revenue:15936,status:'published'},
  {id:5,name:'علم الأدوية الأساسي',instructor:'د. هاني عزت',spec:'صيدلة',students:198,revenue:0,status:'published'},
];

let WITHDRAW_REQUESTS = [
  {id:1,instructor:'د. كريم الشريف',amount:5000,method:'فودافون كاش',date:'١٧ يونيو ٢٠٢٦',status:'pending'},
  {id:2,instructor:'د. هاني عزت',amount:3200,method:'إنستاباي',date:'١٦ يونيو ٢٠٢٦',status:'pending'},
  {id:3,instructor:'د. منى عبد الفتاح',amount:8000,method:'تحويل بنكي',date:'١٤ يونيو ٢٠٢٦',status:'pending'},
];

const ACTIVITIES = [
  {dot:'dot-purple',text:'طلب مدرب جديد: <strong>د. ياسمين توفيق</strong> انتظر المراجعة',time:'منذ ساعة'},
  {dot:'dot-red',text:'شكوى جديدة من <strong>أحمد محمد</strong> بخصوص مشكلة الدفع',time:'منذ ٣ ساعات'},
  {dot:'dot-green',text:'تم قبول <strong>د. عمرو سلامة</strong> كمدرب',time:'منذ يوم'},
  {dot:'dot-orange',text:'طلب سحب من <strong>د. كريم الشريف</strong> بمبلغ ٥,٠٠٠ جنيه',time:'منذ يومين'},
  {dot:'dot-blue',text:'وصل عدد الطلاب إلى <strong>٤٩٣ طالب</strong> 🎉',time:'منذ ٣ أيام'},
];

/* ══════════════════════ TOAST ══════════════════════ */
function showToast(msg, type='success'){
  const icons={success:'✅',danger:'❌',warning:'⚠️'};
  const c=document.getElementById('toastContainer');
  const t=document.createElement('div');
  t.className=`toast ${type}`;
  t.innerHTML=`<span>${icons[type]||'ℹ️'}</span><span>${msg}</span>`;
  c.appendChild(t);
  setTimeout(()=>t.remove(),3500);
}

/* ══════════════════════ CONFIRM ══════════════════════ */
let confirmCallback=null;
function openConfirm({title,desc,type='danger',btnLabel,cb}){
  const iconColors={danger:'#FEF2F2',warning:'#FEF3C7',success:'#DCFCE7'};
  const svgColors={danger:'#DC2626',warning:'#B45309',success:'#16A34A'};
  document.getElementById('confirmIcon').style.background=iconColors[type]||iconColors.danger;
  document.getElementById('confirmIcon').innerHTML=`<svg viewBox="0 0 24 24" stroke="${svgColors[type]||svgColors.danger}"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;
  document.getElementById('confirmTitle').textContent=title;
  document.getElementById('confirmDesc').textContent=desc;
  const btn=document.getElementById('confirmBtn');
  btn.textContent=btnLabel||'تأكيد';
  btn.className=`btn btn-${type} btn-sm`;
  confirmCallback=cb;
  document.getElementById('confirmOverlay').classList.add('open');
}
function closeConfirm(){document.getElementById('confirmOverlay').classList.remove('open');confirmCallback=null;}
document.getElementById('confirmBtn').addEventListener('click',()=>{if(confirmCallback)confirmCallback();closeConfirm();});

/* ══════════════════════ HOME ══════════════════════ */
function renderHome(){
  const totalStudents=USERS.filter(u=>u.type==='student').length;
  const totalInstructors=USERS.filter(u=>u.type==='instructor').length;
  const totalRevenue=COURSES_DATA.reduce((s,c)=>s+c.revenue,0);
  const platformRevenue=Math.round(totalRevenue*PLATFORM_RATE/100);
  const pendingComplaints=COMPLAINTS.filter(c=>c.status!=='closed').length;
  const pendingInstructors=INSTRUCTOR_REQUESTS.filter(r=>r.status==='pending').length;

  document.getElementById('homeStats').innerHTML=`
    <div class="stat-card"><div class="stat-icon si-blue"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div><div><div class="stat-label">إجمالي الطلاب</div><div class="stat-value">${totalStudents}</div><div class="stat-sub">مستخدم نشط</div></div></div>
    <div class="stat-card"><div class="stat-icon si-purple"><svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></div><div><div class="stat-label">المدربون</div><div class="stat-value">${totalInstructors}</div><div class="stat-sub">${pendingInstructors} طلب معلق</div></div></div>
    <div class="stat-card"><div class="stat-icon si-green"><svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div><div><div class="stat-label">إيرادات المنصة</div><div class="stat-value">${platformRevenue.toLocaleString('ar-EG')}</div><div class="stat-sub">جنيه مصري</div></div></div>
    <div class="stat-card"><div class="stat-icon si-red"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><div><div class="stat-label">شكاوي معلقة</div><div class="stat-value">${pendingComplaints}</div><div class="stat-sub">تنتظر الرد</div></div></div>
    <div class="stat-card"><div class="stat-icon si-teal"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play-icon lucide-play"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg></div><div><div class="stat-label">إجمالي الكورسات</div><div class="stat-value">${COURSES_DATA.length}</div><div class="stat-sub">${COURSES_DATA.filter(c=>c.status==='published').length} منشور</div></div></div>
    <div class="stat-card"><div class="stat-icon si-orange"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><div><div class="stat-label">إجمالي الإيراد</div><div class="stat-value">${totalRevenue.toLocaleString('ar-EG')}</div><div class="stat-sub">جنيه مصري</div></div></div>
  `;

  // Latest instructor requests
  const pending=INSTRUCTOR_REQUESTS.filter(r=>r.status==='pending').slice(0,3);
  document.getElementById('homeInstructorsBody').innerHTML = pending.length
    ? pending.map(r=>`<tr>
        <td><span class="u-avatar av-purple">${r.name.substring(0,2)}</span><span class="u-name">${r.name}</span></td>
        <td>${r.spec}</td>
        <td>${r.degree}</td>
        <td><span class="pill pill-orange">قيد المراجعة</span></td>
        <td><button class="btn btn-success btn-xs" onclick="acceptInstructor(${r.id})">قبول</button> <button class="btn btn-danger-outline btn-xs" onclick="rejectInstructor(${r.id})">رفض</button></td>
      </tr>`).join('')
    : `<tr><td colspan="5" style="text-align:center;padding:24px;color:var(--color-text-muted)">لا يوجد طلبات معلقة</td></tr>`;

  // Complaints preview
  const newComplaints=COMPLAINTS.filter(c=>c.status==='new').slice(0,2);
  document.getElementById('homeComplaintsPreview').innerHTML = newComplaints.length
    ? newComplaints.map(c=>complaintCardHTML(c,true)).join('')
    : `<div class="dash-empty"><div class="dash-empty-icon"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><div class="dash-empty-title">لا توجد شكاوي جديدة</div><div class="dash-empty-desc">كل شيء تمام 👍</div></div>`;

  document.getElementById('homeActivity').innerHTML=ACTIVITIES.map(a=>`
    <div class="activity-item"><span class="activity-dot ${a.dot}"></span><span class="activity-text">${a.text}</span><span class="activity-time">${a.time}</span></div>`).join('');
}

/* ══════════════════════ COMPLAINTS ══════════════════════ */
let currentComplaintFilter='all';
function complaintCardHTML(c, mini=false){
  const statusMap={new:['pill-red','جديد'],reviewing:['pill-orange','قيد المراجعة'],closed:['pill-green','مغلق']};
  const [cls,label]=statusMap[c.status]||['pill-gray','غير معروف'];
  return `<div class="complaint-card ${c.status==='new'?'unread':''}" id="complaint-${c.id}">
    <div class="cc-header">
      <div class="cc-sender">
        <div class="u-avatar">${c.name.substring(0,2)}</div>
        <div class="cc-meta"><div class="cc-name">${c.name}</div><div class="cc-email">${c.email}</div></div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span class="pill ${cls}">${label}</span>
        <span class="cc-time">${c.time}</span>
      </div>
    </div>
    <div class="cc-subject">${c.subject}</div>
    <div class="cc-body">${c.body}</div>
    ${c.reply?`<div style="background:var(--color-admin-pale);border-right:3px solid var(--color-admin);border-radius:var(--radius-sm);padding:10px 14px;font-size:0.8rem;color:var(--color-admin);margin-bottom:10px"><strong>ردك:</strong> ${c.reply}</div>`:''}
    <div class="cc-actions">
      ${!mini?`<button class="btn btn-admin btn-xs" onclick="toggleReply(${c.id})">💬 رد</button>
        ${c.status!=='reviewing'?`<button class="btn btn-warning-outline btn-xs" onclick="changeComplaintStatus(${c.id},'reviewing')">قيد المراجعة</button>`:''}
        ${c.status!=='closed'?`<button class="btn btn-success btn-xs" onclick="changeComplaintStatus(${c.id},'closed')">✓ إغلاق</button>`:''}
        <button class="btn btn-danger-outline btn-xs" onclick="deleteComplaint(${c.id})">حذف</button>`
      :`<button class="btn btn-admin btn-xs" onclick="navigate('complaints')">عرض التفاصيل</button>`}
    </div>
    ${!mini?`<div class="reply-box" id="reply-${c.id}">
      <textarea class="reply-textarea" id="replyText-${c.id}" placeholder="اكتب ردك هنا..."></textarea>
      <div class="reply-footer">
        <button class="btn btn-outline btn-xs" onclick="toggleReply(${c.id})">إلغاء</button>
        <button class="btn btn-admin btn-xs" onclick="sendReply(${c.id})">إرسال الرد</button>
      </div>
    </div>`:''}
  </div>`;
}
function toggleReply(id){
  document.getElementById(`reply-${id}`).classList.toggle('open');
}
function sendReply(id){
  const txt=document.getElementById(`replyText-${id}`).value.trim();
  if(!txt)return showToast('اكتب الرد أولاً','warning');
  const c=COMPLAINTS.find(c=>c.id===id);
  if(c){c.reply=txt;c.status='closed';}
  renderComplaints();
  updateSidebarBadges();
  showToast('تم إرسال الرد وإغلاق الشكوى','success');
}
function changeComplaintStatus(id,status){
  const c=COMPLAINTS.find(c=>c.id===id);
  if(c)c.status=status;
  renderComplaints();
  updateSidebarBadges();
  const labels={reviewing:'قيد المراجعة',closed:'مغلق'};
  showToast(`تم تغيير حالة الشكوى إلى: ${labels[status]||status}`,'success');
}
function deleteComplaint(id){
  openConfirm({title:'حذف الشكوى',desc:'هل أنت متأكد من حذف هذه الشكوى؟ لا يمكن التراجع.',type:'danger',btnLabel:'حذف',cb:()=>{
    COMPLAINTS=COMPLAINTS.filter(c=>c.id!==id);
    renderComplaints();
    updateSidebarBadges();
    showToast('تم حذف الشكوى','success');
  }});
}
function renderComplaints(){
  let list=COMPLAINTS;
  if(currentComplaintFilter!=='all') list=COMPLAINTS.filter(c=>c.status===currentComplaintFilter);
  document.getElementById('complaintsList').innerHTML=list.length
    ? list.map(c=>complaintCardHTML(c)).join('')
    : `<div class="dash-empty"><div class="dash-empty-icon"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><div class="dash-empty-title">لا توجد شكاوي هنا</div><div class="dash-empty-desc">ستظهر الشكاوي هنا عند ورودها.</div></div>`;
  ['all','new','reviewing','closed'].forEach(f=>{
    const cnt=f==='all'?COMPLAINTS.length:COMPLAINTS.filter(c=>c.status===f).length;
    document.getElementById(`tc-${f}`).textContent=cnt;
  });
}
document.getElementById('complaintTabs').addEventListener('click',e=>{
  const tab=e.target.closest('.mc-tab');
  if(!tab)return;
  document.querySelectorAll('#complaintTabs .mc-tab').forEach(t=>t.classList.remove('active'));
  tab.classList.add('active');
  currentComplaintFilter=tab.dataset.filter;
  renderComplaints();
});

/* ══════════════════════ INSTRUCTORS ══════════════════════ */
let currentInstructorFilter='pending';
function acceptInstructor(id){
  openConfirm({title:'قبول المدرب',desc:'هل تريد قبول هذا المدرب والسماح له بنشر الكورسات؟',type:'success',btnLabel:'قبول',cb:()=>{
    const r=INSTRUCTOR_REQUESTS.find(r=>r.id===id);
    if(r)r.status='accepted';
    // Add to users if not exists
    if(!USERS.find(u=>u.email===r.email)){
      USERS.push({id:USERS.length+1,name:r.name,email:r.email,type:'instructor',date:'اليوم',status:'active',initials:r.name.substring(0,2)});
    }
    renderInstructors();
    updateSidebarBadges();
    showToast(`تم قبول ${r.name} كمدرب في المنصة ✅`,'success');
  }});
}
function rejectInstructor(id){
  openConfirm({title:'رفض الطلب',desc:'هل تريد رفض هذا الطلب؟',type:'danger',btnLabel:'رفض',cb:()=>{
    const r=INSTRUCTOR_REQUESTS.find(r=>r.id===id);
    if(r)r.status='rejected';
    renderInstructors();
    updateSidebarBadges();
    showToast(`تم رفض طلب ${r.name}`,'danger');
  }});
}
function renderInstructors(){
  let list=INSTRUCTOR_REQUESTS.filter(r=>r.status===currentInstructorFilter);
  ['pending','accepted','rejected'].forEach(f=>{
    document.getElementById(`itc-${f}`).textContent=INSTRUCTOR_REQUESTS.filter(r=>r.status===f).length;
  });
  const container=document.getElementById('instructorsList');
  if(!list.length){
    container.innerHTML=`<div class="dash-empty"><div class="dash-empty-icon"><svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/></svg></div><div class="dash-empty-title">لا يوجد طلبات هنا</div><div class="dash-empty-desc">ستظهر طلبات المدربين هنا.</div></div>`;
    return;
  }
  container.innerHTML=list.map(r=>{
    const statusMap={pending:['pill-orange','قيد المراجعة'],accepted:['pill-green','مقبول'],rejected:['pill-red','مرفوض']};
    const [cls,label]=statusMap[r.status];
    return `<div class="instructor-card">
      <div class="ic-header">
        <div class="u-avatar av-purple" style="width:46px;height:46px;font-size:0.9rem;flex-shrink:0">${r.name.substring(0,2)}</div>
        <div class="ic-info">
          <h3>${r.name}</h3>
          <p>${r.email} · ${r.phone}</p>
          <span class="ic-spec-pill">🎓 ${r.spec} — ${r.degree}</span>
        </div>
        <span class="pill ${cls}" style="margin-right:auto;flex-shrink:0">${label}</span>
      </div>
      <div class="ic-bio">${r.bio}</div>
      <div class="ic-fields">
        <div class="ic-field"><label>التخصص</label><span>${r.spec}</span></div>
        <div class="ic-field"><label>الدرجة العلمية</label><span>${r.degree}</span></div>
        <div class="ic-field"><label>تاريخ الطلب</label><span>${r.date}</span></div>
        <div class="ic-field"><label>البريد الإلكتروني</label><span>${r.email}</span></div>
      </div>
      <div class="ic-actions">
        ${r.status==='pending'?`<button class="btn btn-success btn-sm" onclick="acceptInstructor(${r.id})">✓ قبول المدرب</button><button class="btn btn-danger-outline btn-sm" onclick="rejectInstructor(${r.id})">✕ رفض</button>`:''}
        ${r.status==='accepted'?`<span class="pill pill-green" style="padding:6px 14px">✓ مقبول</span><button class="btn btn-danger-outline btn-sm" onclick="rejectInstructor(${r.id})">سحب القبول</button>`:''}
        ${r.status==='rejected'?`<span class="pill pill-red" style="padding:6px 14px">✕ مرفوض</span><button class="btn btn-success btn-sm" onclick="acceptInstructor(${r.id})">إعادة القبول</button>`:''}
      </div>
    </div>`;
  }).join('');
}
document.getElementById('instructorTabs').addEventListener('click',e=>{
  const tab=e.target.closest('.mc-tab');
  if(!tab)return;
  document.querySelectorAll('#instructorTabs .mc-tab').forEach(t=>t.classList.remove('active'));
  tab.classList.add('active');
  currentInstructorFilter=tab.dataset.filter;
  renderInstructors();
});

/* ══════════════════════ USERS ══════════════════════ */
let currentUserFilter='all';
function suspendUser(id){
  openConfirm({title:'إيقاف الحساب',desc:'سيُمنع المستخدم من الدخول للمنصة فوراً. يمكنك رفع الإيقاف لاحقاً.',type:'warning',btnLabel:'إيقاف',cb:()=>{
    const u=USERS.find(u=>u.id===id);
    if(u)u.status='suspended';
    renderUsers();
    updateSidebarBadges();
    showToast(`تم إيقاف حساب ${u?.name}`,'warning');
  }});
}
function unsuspendUser(id){
  const u=USERS.find(u=>u.id===id);
  if(u)u.status='active';
  renderUsers();
  updateSidebarBadges();
  showToast(`تم رفع الإيقاف عن ${u?.name}`,'success');
}
function deleteUser(id){
  const u=USERS.find(u=>u.id===id);
  openConfirm({title:'حذف الحساب نهائياً',desc:`سيُحذف حساب "${u?.name}" بشكل نهائي ولا يمكن التراجع.`,type:'danger',btnLabel:'حذف نهائياً',cb:()=>{
    USERS=USERS.filter(u=>u.id!==id);
    renderUsers();
    updateSidebarBadges();
    showToast('تم حذف الحساب نهائياً','danger');
  }});
}
function renderUsers(){
  const search=(document.getElementById('userSearch')?.value||'').trim().toLowerCase();
  let list=USERS;
  if(currentUserFilter==='student') list=list.filter(u=>u.type==='student');
  else if(currentUserFilter==='instructor') list=list.filter(u=>u.type==='instructor');
  else if(currentUserFilter==='suspended') list=list.filter(u=>u.status==='suspended');
  if(search) list=list.filter(u=>u.name.includes(search)||u.email.includes(search));

  const counts={all:USERS.length,student:USERS.filter(u=>u.type==='student').length,instructor:USERS.filter(u=>u.type==='instructor').length,suspended:USERS.filter(u=>u.status==='suspended').length};
  ['all','student','instructor','suspended'].forEach(f=>{ const el=document.getElementById(`utc-${f}`); if(el)el.textContent=counts[f];});

  const tbody=document.getElementById('usersTableBody');
  if(!list.length){
    tbody.innerHTML=`<tr><td colspan="5" style="text-align:center;padding:32px;color:var(--color-text-muted)">لا يوجد مستخدمون بهذه المعايير</td></tr>`;
    return;
  }
  tbody.innerHTML=list.map(u=>`<tr>
    <td style="display:flex;align-items:center;gap:0"><span class="u-avatar ${u.type==='instructor'?'av-purple':''}">${u.initials}</span><div><div class="u-name">${u.name}</div><div class="u-email">${u.email}</div></div></td>
    <td><span class="pill ${u.type==='instructor'?'pill-purple':'pill-blue'}">${u.type==='instructor'?'مدرب':'طالب'}</span></td>
    <td style="font-size:0.8rem;color:var(--color-text-muted)">${u.date}</td>
    <td><span class="pill ${u.status==='active'?'pill-green':'pill-red'}">${u.status==='active'?'نشط':'موقوف'}</span></td>
    <td>
      ${u.status==='active'
        ?`<button class="btn btn-warning-outline btn-xs" onclick="suspendUser(${u.id})">إيقاف</button>`
        :`<button class="btn btn-success btn-xs" onclick="unsuspendUser(${u.id})">رفع الإيقاف</button>`}
      <button class="btn btn-danger-outline btn-xs" style="margin-right:5px" onclick="deleteUser(${u.id})">حذف</button>
    </td>
  </tr>`).join('');
}
document.getElementById('userTabs').addEventListener('click',e=>{
  const tab=e.target.closest('.mc-tab');
  if(!tab)return;
  document.querySelectorAll('#userTabs .mc-tab').forEach(t=>t.classList.remove('active'));
  tab.classList.add('active');
  currentUserFilter=tab.dataset.filter;
  renderUsers();
});

/* ══════════════════════ COURSES ══════════════════════ */
let currentCourseFilter='all';
function toggleCourseStatus(id){
  const c=COURSES_DATA.find(c=>c.id===id);
  if(!c)return;
  const newStatus=c.status==='published'?'hidden':'published';
  openConfirm({title:newStatus==='hidden'?'إخفاء الكورس':'نشر الكورس',desc:newStatus==='hidden'?'سيختفي الكورس من الطلاب فوراً.':'سيصبح الكورس مرئياً للطلاب.',type:newStatus==='hidden'?'warning':'success',btnLabel:newStatus==='hidden'?'إخفاء':'نشر',cb:()=>{
    c.status=newStatus;
    renderCourses();
    updateSidebarBadges();
    showToast(newStatus==='published'?'تم نشر الكورس ✅':'تم إخفاء الكورس',newStatus==='published'?'success':'warning');
  }});
}
function renderCourses(){
  const search=(document.getElementById('courseSearch')?.value||'').trim().toLowerCase();
  let list=COURSES_DATA;
  if(currentCourseFilter==='published') list=list.filter(c=>c.status==='published');
  else if(currentCourseFilter==='hidden') list=list.filter(c=>c.status==='hidden');
  if(search) list=list.filter(c=>c.name.includes(search)||c.instructor.includes(search));

  const counts={all:COURSES_DATA.length,published:COURSES_DATA.filter(c=>c.status==='published').length,hidden:COURSES_DATA.filter(c=>c.status==='hidden').length};
  ['all','published','hidden'].forEach(f=>{ const el=document.getElementById(`ctc-${f}`); if(el)el.textContent=counts[f];});

  const tbody=document.getElementById('coursesTableBody');
  if(!list.length){
    tbody.innerHTML=`<tr><td colspan="7" style="text-align:center;padding:32px;color:var(--color-text-muted)">لا توجد كورسات</td></tr>`;
    return;
  }
  tbody.innerHTML=list.map(c=>`<tr>
    <td><span style="font-family:var(--font-display);font-weight:700;font-size:0.83rem">${c.name}</span></td>
    <td style="font-size:0.8rem">${c.instructor}</td>
    <td><span class="pill pill-blue">${c.spec}</span></td>
    <td style="font-weight:700;font-family:var(--font-display)">${c.students}</td>
    <td style="font-weight:700;font-family:var(--font-display);color:var(--color-success)">${c.revenue.toLocaleString('ar-EG')} ج</td>
    <td><span class="pill ${c.status==='published'?'pill-green':'pill-gray'}">${c.status==='published'?'منشور':'مخفي'}</span></td>
    <td><button class="btn btn-xs ${c.status==='published'?'btn-warning-outline':'btn-success'}" onclick="toggleCourseStatus(${c.id})">${c.status==='published'?'إخفاء':'نشر'}</button></td>
  </tr>`).join('');
}
document.getElementById('courseTabs').addEventListener('click',e=>{
  const tab=e.target.closest('.mc-tab');
  if(!tab)return;
  document.querySelectorAll('#courseTabs .mc-tab').forEach(t=>t.classList.remove('active'));
  tab.classList.add('active');
  currentCourseFilter=tab.dataset.filter;
  renderCourses();
});

/* ══════════════════════ EARNINGS ══════════════════════ */
function renderEarnings(){
  const totalRevenue=COURSES_DATA.reduce((s,c)=>s+c.revenue,0);
  const platTotal=Math.round(totalRevenue*PLATFORM_RATE/100);
  const instTotal=totalRevenue-platTotal;
  const pendingWithdraw=WITHDRAW_REQUESTS.filter(w=>w.status==='pending').reduce((s,w)=>s+w.amount,0);
  document.getElementById('earningsStats').innerHTML=`
    <div class="stat-card"><div class="stat-icon si-green"><svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div><div><div class="stat-label">إجمالي إيرادات المنصة</div><div class="stat-value">${totalRevenue.toLocaleString('ar-EG')}</div><div class="stat-sub">جنيه مصري</div></div></div>
    <div class="stat-card"><div class="stat-icon si-purple"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><div><div class="stat-label">حصة المنصة (${PLATFORM_RATE}%)</div><div class="stat-value">${platTotal.toLocaleString('ar-EG')}</div><div class="stat-sub">جنيه مصري</div></div></div>
    <div class="stat-card"><div class="stat-icon si-blue"><svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/></svg></div><div><div class="stat-label">حصة المدربين (${100-PLATFORM_RATE}%)</div><div class="stat-value">${instTotal.toLocaleString('ar-EG')}</div><div class="stat-sub">جنيه مصري</div></div></div>
    <div class="stat-card"><div class="stat-icon si-orange"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div><div class="stat-label">طلبات سحب معلقة</div><div class="stat-value">${pendingWithdraw.toLocaleString('ar-EG')}</div><div class="stat-sub">${WITHDRAW_REQUESTS.filter(w=>w.status==='pending').length} طلبات</div></div></div>
  `;
  renderEarningsTable();
  renderWithdrawRequests();
}
function renderEarningsTable(){
  document.getElementById('earningsTableBody').innerHTML=COURSES_DATA.map(c=>{
    const platCut=Math.round(c.revenue*PLATFORM_RATE/100);
    const instCut=c.revenue-platCut;
    return `<tr>
      <td style="font-family:var(--font-display);font-weight:700;font-size:0.83rem">${c.name}</td>
      <td style="font-size:0.8rem">${c.instructor}</td>
      <td style="font-weight:700;font-family:var(--font-display)">${c.students}</td>
      <td style="font-weight:700">${c.revenue.toLocaleString('ar-EG')} ج</td>
      <td style="color:var(--color-admin);font-weight:700">${platCut.toLocaleString('ar-EG')} ج <span class="pill pill-purple" style="margin-right:4px">${PLATFORM_RATE}%</span></td>
      <td style="color:var(--color-success);font-weight:700">${instCut.toLocaleString('ar-EG')} ج</td>
    </tr>`;
  }).join('');
}
function approveWithdraw(id){
  openConfirm({title:'تأكيد التحويل',desc:'سيُحوَّل المبلغ للمدرب وسيُغلق الطلب.',type:'success',btnLabel:'تأكيد التحويل',cb:()=>{
    const w=WITHDRAW_REQUESTS.find(w=>w.id===id);
    if(w)w.status='approved';
    renderWithdrawRequests();
    showToast(`تم تحويل ${w?.amount?.toLocaleString('ar-EG')} جنيه لـ${w?.instructor}`,'success');
  }});
}
function rejectWithdraw(id){
  openConfirm({title:'رفض طلب السحب',desc:'سيُلغى الطلب وسيُبلَّغ المدرب.',type:'danger',btnLabel:'رفض',cb:()=>{
    const w=WITHDRAW_REQUESTS.find(w=>w.id===id);
    if(w)w.status='rejected';
    renderWithdrawRequests();
    showToast('تم رفض طلب السحب','danger');
  }});
}
function renderWithdrawRequests(){
  const pending=WITHDRAW_REQUESTS.filter(w=>w.status==='pending');
  const container=document.getElementById('withdrawRequests');
  if(!pending.length){
    container.innerHTML=`<div class="dash-empty"><div class="dash-empty-icon"><svg viewBox="0 0 24 24"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/></svg></div><div class="dash-empty-title">لا توجد طلبات سحب معلقة</div><div class="dash-empty-desc">جميع الطلبات تمت معالجتها.</div></div>`;
    return;
  }
  container.innerHTML=pending.map(w=>`
    <div class="complaint-card">
      <div class="cc-header">
        <div class="cc-sender">
          <div class="u-avatar av-purple">${w.instructor.substring(0,2)}</div>
          <div class="cc-meta"><div class="cc-name">${w.instructor}</div><div class="cc-email">${w.method}</div></div>
        </div>
        <div style="display:flex;align-items:center;gap:8px">
          <span style="font-family:var(--font-display);font-weight:900;font-size:1.05rem;color:var(--color-admin)">${w.amount.toLocaleString('ar-EG')} ج</span>
          <span class="cc-time">${w.date}</span>
        </div>
      </div>
      <div class="cc-actions">
        <button class="btn btn-success btn-sm" onclick="approveWithdraw(${w.id})">✓ تأكيد التحويل</button>
        <button class="btn btn-danger-outline btn-sm" onclick="rejectWithdraw(${w.id})">✕ رفض</button>
      </div>
    </div>`).join('');
}

/* ══════════════════════ SIDEBAR BADGES ══════════════════════ */
function updateSidebarBadges(){
  const pendingComplaints=COMPLAINTS.filter(c=>c.status!=='closed').length;
  const pendingInstructors=INSTRUCTOR_REQUESTS.filter(r=>r.status==='pending').length;
  document.getElementById('sidebarComplaintsBadge').textContent=pendingComplaints;
  document.getElementById('sidebarInstructorsBadge').textContent=pendingInstructors;
  document.getElementById('sidebarUsersBadge').textContent=USERS.length;
  document.getElementById('sidebarCoursesBadge').textContent=COURSES_DATA.length;
  const notifCount=pendingComplaints+pendingInstructors;
  const badge=document.getElementById('notifBadge');
  badge.style.display=notifCount?'flex':'none';
  badge.textContent=notifCount;
}

/* ══════════════════════ NAVIGATE ══════════════════════ */
const PAGES=['home','complaints','instructors','users','courses','earnings','profile','settings'];
function navigate(page){
  PAGES.forEach(p=>document.getElementById('sec-'+p).classList.toggle('active',p===page));
  document.querySelectorAll('.sidebar-link').forEach(el=>{
    el.classList.toggle('active',el.getAttribute('onclick')?.includes(`navigate('${page}')`));
  });
  closeSidebar();
  if(page==='home')renderHome();
  if(page==='complaints')renderComplaints();
  if(page==='instructors')renderInstructors();
  if(page==='users')renderUsers();
  if(page==='courses')renderCourses();
  if(page==='earnings')renderEarnings();
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
window.addEventListener('scroll',()=>document.getElementById('navbar').classList.toggle('scrolled',scrollY>8));

/* ══════════════════════ INIT ══════════════════════ */
renderHome();
updateSidebarBadges();
const ADMIN_NOTIFS=[
  {id:1,text:'طلب مدرب جديد: <strong>د. ياسمين توفيق</strong>',time:'منذ ساعة',unread:true,color:'linear-gradient(135deg,#7C3AED,#A78BFA)',icon:'<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>'},
  {id:2,text:'شكوى جديدة من <strong>أحمد محمد</strong>',time:'منذ ٣ ساعات',unread:true,color:'linear-gradient(135deg,#DC2626,#EF4444)',icon:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'},
  {id:3,text:'طلب سحب من <strong>د. كريم الشريف</strong>',time:'منذ يوم',unread:true,color:'linear-gradient(135deg,#F59E0B,#F97316)',icon:'<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>'},
];
let adminNotifs=[...ADMIN_NOTIFS];

function renderAdminNotifs(){
  const list=document.getElementById('adminNotifList');
  list.innerHTML=adminNotifs.map(n=>`
    <div class="notif-item ${n.unread?'unread':''}" onclick="adminReadNotif(${n.id})">
      <div class="notif-item-icon" style="background:${n.color}"><svg viewBox="0 0 24 24">${n.icon}</svg></div>
      <div class="notif-item-body">
        <div class="notif-item-text">${n.text}</div>
        <div class="notif-item-time">${n.time}</div>
      </div>
      ${n.unread?'<div class="notif-unread-dot"></div>':''}
    </div>`).join('');
}
function adminReadNotif(id){
  adminNotifs=adminNotifs.map(n=>n.id===id?{...n,unread:false}:n);
  renderAdminNotifs();
}
document.getElementById('notifBtn').addEventListener('click',e=>{
  e.stopPropagation();
  document.getElementById('adminNotifDropdown').classList.toggle('open');
  renderAdminNotifs();
});
document.addEventListener('click',e=>{
  if(!document.getElementById('notifWrapper').contains(e.target))
    document.getElementById('adminNotifDropdown').classList.remove('open');
});
document.getElementById('adminMarkAllBtn').addEventListener('click',()=>{
  adminNotifs=adminNotifs.map(n=>({...n,unread:false}));
  renderAdminNotifs();
});