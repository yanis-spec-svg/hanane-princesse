// ==============================
// JavaScript الكامل
// ==============================

// تغيير الشاشات
function next(id){
  document.querySelectorAll('.container > div').forEach(d=>d.classList.add('hidden'));
  const el = document.getElementById(id);
  el.classList.remove('hidden');
  el.classList.add('fade');
  if(id==='confession') typingEffect();
  if(id==='promises') document.getElementById('promisesBtn').onclick = ()=> next('finalMessage');
}

// التأثير الكتابي للرسالة
const confession = `You were just a stranger at first, someone I barely noticed. Then we talked, and somehow you felt familiar, like you had always been around. Slowly, I started sharing little pieces of myself I usually keep to myself, and you listened. You became someone I look forward to talking to, someone who brightens my days without even trying. And before I realized it, I started feeling something more than friendship—a warm admiration that keeps growing every time we talk. It's amazing how someone can quietly enter your life and make it feel brighter. I just wanted you to know... I like you, and I really enjoy having you in my life.`;

function typingEffect(){
  let i=0;
  const textEl=document.getElementById('confessionText');
  textEl.innerHTML='';
  const interval=setInterval(()=>{
    if(i<confession.length){
      textEl.innerHTML+=confession.charAt(i);
      i++;
    } else clearInterval(interval);
  },30);
}

// زر Soo...
const sooBtn = document.getElementById('sooBtn');
sooBtn.addEventListener('click', ()=>next('finalMessage'));

// زر Show the answer يهرب مرتين
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
  'https://i.ibb.co/7yWzY2P/rose.png',
  'https://i.ibb.co/7yWzY2P/tulip.png',
  'https://i.ibb.co/7yWzY2P/heart.png'
];
for(let i=0;i<30;i++){
  let img=document.createElement('img');
  img.src=fallingImages[Math.floor(Math.random()*fallingImages.length)];
  img.className='falling';
  img.style.left=Math.random()*100+'vw';
  img.style.animationDuration=(5+Math.random()*5)+'s';
  img.style.width=(20+Math.random()*15)+'px';
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
