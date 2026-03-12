// ==============================
// JavaScript - نسخة مصححة
// ==============================

// ------------------------------
// دالة لتغيير الشاشات/المراحل
// ------------------------------
function next(id){
  // أخفي كل العناصر داخل container
  document.querySelectorAll('.container > div').forEach(d=>{
    d.classList.add('hidden');
    d.classList.remove('fade');
  });

  // أظهر المرحلة المطلوبة وأضف تأثير Fade
  const el = document.getElementById(id);
  if(el){
    el.classList.remove('hidden');
    el.classList.add('fade');
  }
}

// ------------------------------
// زر Soo... للانتقال للرسالة النهائية
// ------------------------------
const sooBtn = document.getElementById('sooBtn');
if(sooBtn){
  sooBtn.addEventListener('click', ()=>{
    next('finalMessage');
  });
}

// ------------------------------
// زر Show the answer يهرب مرتين ببطء
// ------------------------------
const showAnswerBtn = document.getElementById('showAnswerBtn');
let escapeCount = 0;

if(showAnswerBtn){
  showAnswerBtn.addEventListener('mouseover', ()=>{
    if(escapeCount < 2){
      const maxX = window.innerWidth - showAnswerBtn.offsetWidth;
      const maxY = window.innerHeight - showAnswerBtn.offsetHeight;
      const newX = Math.random() * maxX;
      const newY = Math.random() * maxY;
      showAnswerBtn.style.position = 'absolute';
      showAnswerBtn.style.left = newX + 'px';
      showAnswerBtn.style.top = newY + 'px';
      escapeCount++;
    }
  });

  // عند النقر يظهر الرسالة الكبيرة
  showAnswerBtn.addEventListener('click', ()=>{
    next('message'); // تأكد أن هناك div بالـID 'message'
  });
}

// ------------------------------
// تساقط الصور (زهور/قلوب)
// ------------------------------
const fallingImages = [
  'https://png.pngtree.com/png-clipart/20241117/original/pngtree-red-rose-flower-clipart-illustration-stock-png-image_17162668.png' // مثال على قلب
];

for(let i=0; i<30; i++){
  let img = document.createElement('img');
  img.src = fallingImages[Math.floor(Math.random() * fallingImages.length)];
  img.className = 'falling';
  img.style.position = 'absolute';
  img.style.top = '-50px'; // تبدأ من الأعلى
  img.style.left = Math.random() * 100 + 'vw';
  img.style.animationDuration = (7 + Math.random()*5) + 's';
  img.style.width = (25 + Math.random()*20) + 'px';
  img.style.pointerEvents = 'none'; // حتى لا تمنع النقر على الأزرار
  document.body.appendChild(img);
}

// ------------------------------
// حركة الصور مع حركة الماوس
// ------------------------------
function moveFallingImages(x){
  document.querySelectorAll('.falling').forEach(f=>{
    f.style.transform = `translateX(${(x - window.innerWidth/2)/50}px)`;
  });
}

document.addEventListener('mousemove', e => moveFallingImages(e.clientX));
document.addEventListener('touchmove', e => moveFallingImages(e.touches[0].clientX));
