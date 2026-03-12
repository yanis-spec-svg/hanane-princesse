// ==============================
// JavaScript لموقع Princess Garden
// ==============================

// تغيير المراحل
function next(id){
  document.querySelectorAll('.container > div').forEach(d=>d.classList.add('hidden'));
  const el = document.getElementById(id);
  el.classList.remove('hidden');
  el.classList.add('fade');
}

// زر Soo... للرسالة الأخيرة
const sooBtn = document.getElementById('sooBtn');
sooBtn.addEventListener('click', ()=>next('finalMessage'));

// زر Show the answer يهرب مرتين ببطء
const showAnswerBtn = document.getElementById('showAnswerBtn');
let escapeCount = 0;
showAnswerBtn.addEventListener('mouseover', ()=>{
  if(escapeCount<2){
    const container = document.querySelector('.container');

const maxX = container.clientWidth - showAnswerBtn.offsetWidth;
const maxY = container.clientHeight - showAnswerBtn.offsetHeight;

const newX = Math.random() * maxX;
const newY = Math.random() * maxY;

showAnswerBtn.style.position = 'absolute';
showAnswerBtn.style.left = newX + 'px';
showAnswerBtn.style.top = newY + 'px';
    const newX = Math.random()*maxX;
    const newY = Math.random()*maxY;
    showAnswerBtn.style.position='absolute';
    showAnswerBtn.style.left=newX+'px';
    showAnswerBtn.style.top=newY+'px';
    escapeCount++;
  }
});
showAnswerBtn.addEventListener('click', ()=>next('gift'));

// زر الوعود بعد الرسالة الكبيرة
const promisesBtn = document.getElementById('promisesBtn');
promisesBtn.addEventListener('click', ()=>next('promises'));

// فتح الهدية لعرض الرسالة الكبيرة
const giftBox = document.getElementById('giftBox');
giftBox.addEventListener('click', ()=>next('message'));

// === سقوط الزهور والقلوب ===
const fallingImages=[
  'https://png.pngtree.com/png-clipart/20241117/original/pngtree-red-rose-flower-clipart-illustration-stock-png-image_17162668.png'
  // ضع هنا أي رابط آخر لزهور أو قلوب حسب اختيارك
];
for(let i=0;i<30;i++){
  let img=document.createElement('img');
  img.src=fallingImages[Math.floor(Math.random()*fallingImages.length)];
  img.className='falling';
  img.style.left=Math.random()*100+'vw';
  img.style.animationDuration=(7+Math.random()*5)+'s';
  img.style.width=(25+Math.random()*20)+'px';
  document.body.appendChild(img);
}

// حركة الصور مع الماوس
function moveFallingImages(x){
  document.querySelectorAll('.falling').forEach(f=>{
    f.style.transform=`translateX(${(x-window.innerWidth/2)/50}px)`;
  });
}
document.addEventListener('mousemove', e=>moveFallingImages(e.clientX));
document.addEventListener('touchmove', e=>moveFallingImages(e.touches[0].clientX));

