// Elements
const confessionText = document.getElementById('confessionText');
const LONG_MESSAGE = "💌 You were just a stranger at first, someone I barely noticed. Then we talked, and somehow you felt familiar, like you had always been around. Slowly, I started sharing little pieces of myself I usually keep to myself, and you listened. You became someone I look forward to talking to, someone who brightens my days without even trying. And before I realized it, I started feeling something more than friendship – a warm admiration that keeps growing every time we talk. It's amazing how someone can quietly enter your life and make it feel brighter. I just wanted you to know... I like you, and I really enjoy having you in my life. 🌸💖";

// Navigation function
function next(id){
  document.querySelectorAll('.container > div').forEach(d => d.classList.add('hidden'));
  const el = document.getElementById(id);
  el.classList.remove('hidden');
  el.classList.add('fade');

  // Show confession after gift box clicked
  if(id === 'message'){
    confessionText.innerText = LONG_MESSAGE;
  }
}

// Gift box click
document.getElementById('giftBox').onclick = function(){
  document.getElementById('giftBox').style.display='none';
  next('message');
}

// Falling hearts/flowers
const items = [
  "https://img.freepik.com/free-psd/glossy-red-heart-symbol-3d-render-shiny-heart_191095-78483.jpg?semt=ais_rp_progressive&w=740&q=80L",
  "https://png.pngtree.com/png-clipart/20241117/original/pngtree-red-rose-flower-clipart-illustration-stock-png-image_17162668.png"
];

function createItem(){
  const item = document.createElement('img');
  item.src = items[Math.floor(Math.random()*items.length)];
  item.className = "fall";
  item.style.left = Math.random()*100 + "vw";
  item.style.animationDuration = (4 + Math.random()*4) + "s";
  document.body.appendChild(item);
  setTimeout(()=>{ item.remove(); },8000);
}

setInterval(createItem,400);
