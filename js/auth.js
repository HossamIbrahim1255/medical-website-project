/* ══════════════════════════════════════════════════════════
   auth.js  —  ميديكل هاب  |  Login + Register (frontend only)
   OTP: يشتغل عن طريق EmailJS (مجاني - بدون backend)
   ══════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────
   ⚙️  EmailJS CONFIG
   1- روح https://www.emailjs.com وعمل حساب مجاني
   2- عمل Email Service وحط ID بتاعه في EMAILJS_SERVICE_ID
   3- عمل Email Template واستخدم المتغيرات: {{to_email}} و {{otp_code}} و {{user_name}}
   4- حط Public Key بتاعك في EMAILJS_PUBLIC_KEY
   ───────────────────────────────────────── */
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // ← غير ده
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // ← غير ده
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // ← غير ده

/* ─────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────── */

function $(id) { return document.getElementById(id); }

/* Fade-up observer (same logic as home.js) */
function initFadeUp() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
}

/* Show/hide loading spinner inside a button */
function setLoading(btn, loading) {
  const text    = btn.querySelector('.btn-text');
  const spinner = btn.querySelector('.btn-spinner');
  btn.disabled  = loading;
  text.style.display    = loading ? 'none' : '';
  spinner.style.display = loading ? '' : 'none';
}

/* Show an alert box */
function showAlert(id, msg, type = 'error') {
  const el = $(id);
  el.className = `alert alert-${type}`;
  el.textContent = msg;
  el.style.display = 'block';
  el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
function hideAlert(id) { $(id).style.display = 'none'; }

/* Mark a form-group valid or invalid */
function setFieldState(groupId, state /* 'valid'|'invalid'|'' */, errorMsg = '') {
  const group = $(groupId);
  if (!group) return;
  group.classList.remove('is-valid', 'is-invalid');
  if (state) group.classList.add(`is-${state}`);
  const errEl = group.querySelector('.form-error');
  if (errEl) errEl.textContent = errorMsg;
  const statusEl = group.querySelector('.input-status');
  if (statusEl) {
    statusEl.className = 'input-status';
    statusEl.innerHTML = '';
    if (state === 'valid') {
      statusEl.classList.add('show-ok');
      statusEl.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><polyline points="20 6 9 17 4 12"/></svg>`;
    } else if (state === 'invalid') {
      statusEl.classList.add('show-err');
      statusEl.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
    }
  }
}

/* ── Validation rules ── */
function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
}
function isValidEgyptPhone(v) {
  const digits = v.replace(/\D/g, '');
  return /^(010|011|012|015)\d{8}$/.test(digits);
}
function passwordRules(pw) {
  return {
    len:     pw.length > 10,
    upper:   /[A-Z]/.test(pw),
    special: /[^A-Za-z0-9]/.test(pw),
  };
}
function isPasswordStrong(pw) {
  const r = passwordRules(pw);
  return r.len && r.upper;
}

/* Generate 6-digit OTP */
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

/* Eye toggle helper */
function bindEyeToggle(btnId, inputId) {
  const btn   = $(btnId);
  const input = $(inputId);
  if (!btn || !input) return;
  btn.addEventListener('click', () => {
    const isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    btn.querySelector('.eye-show').style.display = isHidden ? 'none' : '';
    btn.querySelector('.eye-hide').style.display = isHidden ? '' : 'none';
  });
}

/* ── EmailJS send ── */
async function sendOTPEmail(toEmail, otpCode, userName) {
  /* If EmailJS not configured, fall back to demo mode */
  if (
    EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY' ||
    EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID'
  ) {
    /* DEMO MODE: show OTP in console + alert (remove in production) */
    console.log(`%c📧 DEMO MODE — OTP: ${otpCode}`, 'font-size:1.2rem;color:#2A7FD4;font-weight:bold;');
    alert(`📧 وضع تجريبي: الكود هو ${otpCode}\n(اربط EmailJS في الإنتاج لإرسال بريد حقيقي)`);
    return { success: true };
  }

  try {
    /* Load EmailJS SDK lazily if not present */
    if (!window.emailjs) {
      await loadScript('https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js');
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      to_email:  toEmail,
      otp_code:  otpCode,
      user_name: userName,
    });
    return { success: true };
  } catch (err) {
    console.error('EmailJS error:', err);
    return { success: false, error: err };
  }
}

function loadScript(src) {
  return new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = src; s.onload = res; s.onerror = rej;
    document.head.appendChild(s);
  });
}

/* ══════════════════════════════════════════════
   LOGIN PAGE
   ══════════════════════════════════════════════ */
function initLoginPage() {
  initFadeUp();
  bindEyeToggle('toggleLoginPw', 'login-password');

  const emailInput = $('login-email');
  const pwInput    = $('login-password');
  const loginBtn   = $('loginBtn');

  /* Live validate email on blur */
  emailInput.addEventListener('blur', () => validateLoginEmail());
  pwInput.addEventListener('blur', () => validateLoginPw());

  /* Clear error on focus */
  emailInput.addEventListener('focus', () => setFieldState('fg-email', ''));
  pwInput.addEventListener('focus',    () => setFieldState('fg-password', ''));

  loginBtn.addEventListener('click', async () => {
    const emailOk = validateLoginEmail();
    const pwOk    = validateLoginPw();
    if (!emailOk || !pwOk) return;

    hideAlert('login-error');
    setLoading(loginBtn, true);

    /* ── Frontend-only demo auth ──
       في الإنتاج: ابعت request للـ backend هنا
       لو الـ backend رجع success، وجّه لصفحة الداشبورد */
    await simulateDelay(1400);

    /* Demo: always succeed for any valid-format credentials */
    setLoading(loginBtn, false);
    showAlert('login-success', '✅ تم تسجيل الدخول بنجاح! جاري التوجيه...', 'success');
    setTimeout(() => {
      /* window.location.href = 'dashboard.html'; */
      console.log('→ توجيه للداشبورد');
    }, 1500);
  });

  function validateLoginEmail() {
    const v = emailInput.value.trim();
    if (!v) { setFieldState('fg-email', 'invalid', 'البريد الإلكتروني مطلوب'); return false; }
    if (!isValidEmail(v)) { setFieldState('fg-email', 'invalid', 'صيغة البريد الإلكتروني غير صحيحة'); return false; }
    setFieldState('fg-email', 'valid'); return true;
  }
  function validateLoginPw() {
    const v = pwInput.value;
    if (!v) { setFieldState('fg-password', 'invalid', 'كلمة المرور مطلوبة'); return false; }
    setFieldState('fg-password', 'valid'); return true;
  }
}

/* ══════════════════════════════════════════════
   REGISTER PAGE
   ══════════════════════════════════════════════ */
function initRegisterPage() {
  initFadeUp();
  bindEyeToggle('toggleRegPw',      'reg-password');
  bindEyeToggle('toggleConfirmPw',  'reg-confirm');

  /* Password strength meter */
  $('reg-password').addEventListener('input', updatePasswordUI);

  /* Live validation on blur */
  $('fname').addEventListener('blur',        () => validateName('fname',    'fg-fname',    'الاسم الأول'));
  $('mname').addEventListener('blur',        () => validateName('mname',    'fg-mname',    'الاسم الثاني'));
  $('lname').addEventListener('blur',        () => validateName('lname',    'fg-lname',    'الاسم الثالث'));
  $('reg-email').addEventListener('blur',    () => validateRegEmail());
  $('phone').addEventListener('blur',        () => validatePhone());
  $('reg-password').addEventListener('blur', () => validateRegPassword());
  $('reg-confirm').addEventListener('blur',  () => validateConfirm());

  /* Register button */
  $('registerBtn').addEventListener('click', handleRegister);

  /* OTP verify button */
  $('verifyOtpBtn').addEventListener('click', handleVerifyOTP);

  /* Resend OTP */
  $('resendOtp').addEventListener('click', handleResendOTP);

  /* Back to register form */
  $('backToRegister').addEventListener('click', () => {
    $('otpCard').style.display = 'none';
    $('registerCard').style.display = '';
  });

  /* OTP input auto-advance */
  initOTPInputs();
}

/* ── Password strength UI ── */
function updatePasswordUI() {
  const pw = $('reg-password').value;
  const strengthDiv = $('pwStrength');
  const rules       = passwordRules(pw);

  strengthDiv.style.display = pw.length ? 'flex' : 'none';

  /* Update rule indicators */
  toggleRule('rule-len',    rules.len);
  toggleRule('rule-upper',  rules.upper);
  toggleRule('rule-letter', rules.special);

  /* Strength score */
  const score = [rules.len, rules.upper, rules.special, pw.length >= 14].filter(Boolean).length;
  const bars  = document.querySelectorAll('.pw-bar');
  const labels = { 1: ['weak', '#EF4444', 'ضعيفة'], 2: ['fair', '#F59E0B', 'مقبولة'], 3: ['good', '#3B82F6', 'جيدة'], 4: ['strong', '#22C55E', 'قوية جداً'] };
  bars.forEach((bar, i) => {
    bar.className = 'pw-bar';
    if (i < score) bar.classList.add(`active-${labels[score]?.[0] || 'weak'}`);
  });
  const lbl = $('pwLabel');
  if (labels[score]) {
    lbl.textContent = labels[score][2];
    lbl.style.color = labels[score][1];
  } else {
    lbl.textContent = '';
  }
}

function toggleRule(id, ok) {
  const el = $(id);
  if (!el) return;
  el.classList.toggle('ok', ok);
}

/* ── Field validators ── */
function validateName(inputId, groupId, label) {
  const v = $(inputId).value.trim();
  if (!v) { setFieldState(groupId, 'invalid', `${label} مطلوب`); return false; }
  if (v.length < 2) { setFieldState(groupId, 'invalid', `${label} قصير جداً`); return false; }
  setFieldState(groupId, 'valid'); return true;
}

function validateRegEmail() {
  const v = $('reg-email').value.trim();
  if (!v) { setFieldState('fg-reg-email', 'invalid', 'البريد الإلكتروني مطلوب'); return false; }
  if (!isValidEmail(v)) { setFieldState('fg-reg-email', 'invalid', 'صيغة البريد الإلكتروني غير صحيحة'); return false; }
  setFieldState('fg-reg-email', 'valid'); return true;
}

function validatePhone() {
  const v = $('phone').value.trim();
  if (!v) { setFieldState('fg-phone', 'invalid', 'رقم الهاتف مطلوب'); return false; }
  if (!isValidEgyptPhone(v)) { setFieldState('fg-phone', 'invalid', 'الرقم غير صحيح '); return false; }
  setFieldState('fg-phone', 'valid'); return true;
}

function validateRegPassword() {
  const v = $('reg-password').value;
  if (!v) { setFieldState('fg-reg-password', 'invalid', 'كلمة المرور مطلوبة'); return false; }
  if (!isPasswordStrong(v)) {
    setFieldState('fg-reg-password', 'invalid', 'كلمة المرور لا تطابق الشروط المطلوبة');
    return false;
  }
  setFieldState('fg-reg-password', 'valid'); return true;
}

function validateConfirm() {
  const pw  = $('reg-password').value;
  const cfm = $('reg-confirm').value;
  if (!cfm) { setFieldState('fg-reg-confirm', 'invalid', 'تأكيد كلمة المرور مطلوب'); return false; }
  if (pw !== cfm) { setFieldState('fg-reg-confirm', 'invalid', 'كلمة المرور وتأكيدها غير متطابقتين'); return false; }
  setFieldState('fg-reg-confirm', 'valid'); return true;
}

/* ── Main register handler ── */
async function handleRegister() {
  const ok = [
    validateName('fname', 'fg-fname', 'الاسم الأول'),
    validateName('mname', 'fg-mname', 'الاسم الثاني'),
    validateName('lname', 'fg-lname', 'الاسم الثالث'),
    validateRegEmail(),
    validatePhone(),
    validateRegPassword(),
    validateConfirm(),
  ].every(Boolean);

  if (!ok) {
    showAlert('reg-error', 'يرجى تصحيح الأخطاء المذكورة أعلاه', 'error');
    return;
  }
  hideAlert('reg-error');

  const btn = $('registerBtn');
  setLoading(btn, true);

  const otp   = generateOTP();
  const email = $('reg-email').value.trim();
  const name  = `${$('fname').value.trim()} ${$('lname').value.trim()}`;

  /* Store OTP in session (never send to backend raw in production) */
  sessionStorage.setItem('mh_otp',        otp);
  sessionStorage.setItem('mh_otp_email',  email);
  sessionStorage.setItem('mh_otp_expiry', Date.now() + 10 * 60 * 1000); // 10 min

  const result = await sendOTPEmail(email, otp, name);
  setLoading(btn, false);

  if (!result.success) {
    showAlert('reg-error', 'حدث خطأ أثناء إرسال البريد. تأكد من إعدادات EmailJS', 'error');
    return;
  }

  /* Switch to OTP card */
  $('otpEmailDisplay').textContent = email;
  $('registerCard').style.display  = 'none';
  $('otpCard').style.display       = '';
  document.querySelectorAll('.otp-input').forEach(i => i.value = '');
  document.querySelector('.otp-input')?.focus();
}

/* ── OTP verify handler ── */
function handleVerifyOTP() {
  const inputs   = document.querySelectorAll('.otp-input');
  const entered  = Array.from(inputs).map(i => i.value.trim()).join('');

  if (entered.length < 6) {
    showAlert('otp-error', 'أدخل الكود المكون من ٦ أرقام كاملاً', 'error');
    return;
  }

  const stored  = sessionStorage.getItem('mh_otp');
  const expiry  = parseInt(sessionStorage.getItem('mh_otp_expiry') || '0');

  if (Date.now() > expiry) {
    showAlert('otp-error', 'انتهت صلاحية الكود. اضغط "إعادة الإرسال"', 'error');
    return;
  }
  if (entered !== stored) {
    showAlert('otp-error', 'الكود غير صحيح. تحقق من بريدك وأعد المحاولة', 'error');
    inputs.forEach(i => { i.value = ''; i.classList.remove('filled'); });
    inputs[inputs.length - 1]?.focus();
    return;
  }

  /* ✅ OTP correct — account activated */
  sessionStorage.removeItem('mh_otp');
  sessionStorage.removeItem('mh_otp_email');
  sessionStorage.removeItem('mh_otp_expiry');

  hideAlert('otp-error');
  showAlert('otp-success', '🎉 تم تفعيل حسابك بنجاح! جاري التوجيه...', 'success');
  $('verifyOtpBtn').disabled = true;

  setTimeout(() => {
    /* window.location.href = 'login.html'; */
    console.log('→ حساب مفعّل، توجيه لصفحة الدخول');
  }, 2000);
}

/* ── Resend OTP ── */
async function handleResendOTP() {
  const email = sessionStorage.getItem('mh_otp_email');
  if (!email) return;

  const otp = generateOTP();
  sessionStorage.setItem('mh_otp',        otp);
  sessionStorage.setItem('mh_otp_expiry', Date.now() + 10 * 60 * 1000);

  $('resendOtp').disabled = true;
  hideAlert('otp-error');
  showAlert('otp-success', 'جاري إعادة إرسال الكود...', 'success');

  const result = await sendOTPEmail(email, otp, '');
  $('resendOtp').disabled = false;

  if (result.success) {
    showAlert('otp-success', '✅ تم إرسال كود جديد إلى بريدك', 'success');
  } else {
    showAlert('otp-error', 'فشل إعادة الإرسال. حاول مرة أخرى', 'error');
  }
}

/* ── OTP input: auto-advance & backspace ── */
function initOTPInputs() {
  const inputs = Array.from(document.querySelectorAll('.otp-input'));
  /* RTL: inputs are ordered right→left visually, but DOM index 0 = rightmost (first digit) */
  inputs.forEach((inp, idx) => {
    inp.addEventListener('input', e => {
      const val = e.target.value.replace(/\D/g, '');
      inp.value = val;
      inp.classList.toggle('filled', !!val);
      /* Advance to next input (leftward in RTL = lower DOM index) */
      if (val && idx > 0) inputs[idx - 1].focus();
    });
    inp.addEventListener('keydown', e => {
      if (e.key === 'Backspace' && !inp.value && idx < inputs.length - 1) {
        inputs[idx + 1].focus();
      }
    });
    inp.addEventListener('paste', e => {
      e.preventDefault();
      const pasted = (e.clipboardData || window.clipboardData).getData('text').replace(/\D/g, '').slice(0, 6);
      /* Fill from right (index 5) to left (index 0) */
      const arr = pasted.split('');
      inputs.slice().reverse().forEach((input, i) => {
        input.value = arr[i] || '';
        input.classList.toggle('filled', !!input.value);
      });
      /* Focus last filled */
      const lastFilled = inputs.find(i => !i.value);
      (lastFilled || inputs[0]).focus();
    });
  });
}

/* Utility */
function simulateDelay(ms) { return new Promise(r => setTimeout(r, ms)); }