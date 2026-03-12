// ==============================
// JavaScript
// ==============================

// تغيير الشاشات
function next(id){
  document.querySelectorAll('.container > div').forEach(d=>d.classList.add('hidden'));
  const el = document.getElementById(id);
  el.classList.remove('hidden');
  el.classList.add('fade');
}

// زر Soo...
const sooBtn = document.getElementById('sooBtn');
sooBtn.addEventListener('click', ()=>next('finalMessage'));

// زر Show the answer يهرب مرتين ببطء
const showAnswerBtn = document.getElementById('showAnswerBtn');
let escapeCount = 0;
showAnswerBtn.addEventListener('mouseover', ()=>{
  if(escapeCount<2){
    const maxX = window.innerWidth - showAnswerBtn.offsetWidth;
    const maxY = window.innerHeight - showAnswerBtn.offsetHeight;
    const newX = Math.random()*maxX;
    const newY = Math.random()*maxY;
    showAnswerBtn.style.position='absolute';
    showAnswerBtn.style.left=newX+'px';
    showAnswerBtn.style.top=newY+'px';
    escapeCount++;
  }
});
showAnswerBtn.addEventListener('click', ()=>next('message'));

// سقوط الزهور والقلوب
const fallingImages=[
  'https://img.freepik.com/free-psd/glossy-red-heart-symbol-3d-render-shiny-heart_191095-78483.jpg?semt=ais_rp_progressive&w=740&q=80',
  'https://png.pngtree.com/png-clipart/20241117/original/pngtree-red-rose-flower-clipart-illustration-stock-png-image_17162668.png',
  'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsb2ZmaWNlNF8zZF9yZW5kZXJpbmdfb2ZfaGVhcnRfc2hhcGVfbWluaW1hbF9pbl9zdHlsZV9vZl9lNWQ1MDcwYi1mNWU1LTQxNzAtOTAxMS03NTAzYzU5ZTJiMzQucG5n.png'
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
