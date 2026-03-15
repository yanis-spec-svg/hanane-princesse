document.addEventListener("DOMContentLoaded", function(){

/* تغيير الصفحات */

window.next = function(id){

document.querySelectorAll('.container > div').forEach(div=>{
div.classList.add('hidden');
});

document.getElementById(id).classList.remove('hidden');

};


/* الألغاز */

const clues=[

"First clue: this thing has made me smile a lot recently 😊",

"Second clue: this thing is not a place or something I own",

"Third clue: this thing loves surprises and chocolate 🍫"

];

let clueIndex=0;

window.showClue=function(){

if(clueIndex<clues.length){

document.getElementById("clueText").innerText=clues[clueIndex];

clueIndex++;

}

};


/* زر الهروب */

const showAnswerBtn=document.getElementById("showAnswerBtn");

let escapeCount=0;

showAnswerBtn.addEventListener("mouseover",function(){

const container=document.querySelector(".container");

if(escapeCount<2){

const maxX=container.clientWidth-showAnswerBtn.offsetWidth;

const maxY=container.clientHeight-showAnswerBtn.offsetHeight;

const newX=Math.random()*maxX;

const newY=Math.random()*maxY;

showAnswerBtn.style.position="absolute";

showAnswerBtn.style.left=newX+"px";

showAnswerBtn.style.top=newY+"px";

escapeCount++;

}

});

showAnswerBtn.addEventListener("click",function(){

next("gift");

});


/* سقوط الورود */

const fallingImages=[

"https://png.pngtree.com/png-clipart/20241117/original/pngtree-red-rose-flower-clipart-illustration-stock-png-image_17162668.png"

];


for(let i=0;i<30;i++){

let img=document.createElement("img");

img.src=fallingImages[0];

img.className="falling";

img.style.left=Math.random()*100+"vw";

img.style.animationDuration=(6+Math.random()*5)+"s";

img.style.width=(30+Math.random()*20)+"px";

document.body.appendChild(img);

}

});
  

