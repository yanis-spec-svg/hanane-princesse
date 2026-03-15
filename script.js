// Page switching
function next(id){
  document.querySelectorAll('.container > div').forEach(d=>d.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Show the answer button inside container, escapes 2 times
const showAnswerBtn = document.getElementById('showAnswerBtn');
let escapeCount = 0;
showAnswerBtn.addEventListener('mouseover', ()=>{
  if(escapeCount<2){
    const frame = document.getElementById('answerFrame');
    const maxX = frame.offsetWidth - showAnswerBtn.offsetWidth;
    const maxY = frame.offsetHeight - showAnswerBtn.offsetHeight;
    const newX = Math.random()*maxX;
    const newY = Math.random()*maxY;
    showAnswerBtn.style.position='absolute';
    showAnswerBtn.style.left=newX+'px';
    showAnswerBtn.style.top=newY+'px';
    escapeCount++;
  }
});
showAnswerBtn.addEventListener('click', ()=>next('message'));

// My four promises button
document.getElementById('promisesBtn').addEventListener('click', ()=>{
  next('promises');
});

// Soo button
document.getElementById('sooBtn').addEventListener('click', ()=>{
  next('finalMessage');
});

// Falling images (flowers/hearts)
const fallingImages = [
  'https://png.pngtree.com/png-clipart/20241117/original/pngtree-red-rose-flower-clipart-illustration-stock-png-image_17162668.png'
];

for(let i=0;i<30;i++){
  let img = document.createElement('img');
  img.src = fallingImages[Math.floor(Math.random()*fallingImages.length)];
  img.className='falling';
  img.style.left = Math.random()*100+'vw';
  img.style.animationDuration = (7+Math.random()*5)+'s';
  img.style.width = (25+Math.random()*20)+'px';
  document.body.appendChild(img);
}

// Move images with mouse
function moveFallingImages(x){
  document.querySelectorAll('.falling').forEach(f=>{
    f.style.transform = `translateX(${(x-window.innerWidth/2)/50}px)`;
  });
}
document.addEventListener('mousemove', e=>moveFallingImages(e.clientX));
document.addEventListener('touchmove', e=>moveFallingImages(e.touches[0].clientX));
