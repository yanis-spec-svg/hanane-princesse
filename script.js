document.addEventListener("DOMContentLoaded",function(){



/* تغيير الصفحات */

window.next=function(id){

document.querySelectorAll('.container > div').forEach(d=>d.classList.add('hidden'));

document.getElementById(id).classList.remove('hidden');

};



/* الألغاز */

const clues=[

"First clue : this thing has made me smile a lot recently 😊",

"Second : this thing is not a place or something I own",

"Third : this thing loves surprises and chocolate 🍫"

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



/* زر soo */

const sooBtn=document.getElementById("sooBtn");



sooBtn.addEventListener("click",function(){

next("finalMessage");

});



/* سقوط الورود */

const fallingImages=[

"https://png.pngtree.com/png-clipart/20241117/original/pngtree-red-rose-flower-clipart-illustration-stock-png-image_17162668.png"

];



for(let i=0;i<25;i++){



let img=document.createElement("img");



img.src=fallingImages[Math.floor(Math.random()*fallingImages.length)];



img.className="falling";



img.style.left=Math.random()*100+"vw";



img.style.animationDuration=(7+Math.random()*5)+"s";



img.style.width=(25+Math.random()*20)+"px";



document.body.appendChild(img);

}



});
  

