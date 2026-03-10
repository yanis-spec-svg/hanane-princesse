const text = document.getElementById("text")
const btn = document.getElementById("btn")

let step = 0

btn.onclick = function(){

step++

if(step == 1){

text.innerHTML = "Question 1: This thing has made me smile a lot recently."

btn.innerHTML = "Second Question"

}

else if(step == 2){

text.innerHTML = "Question 2: This thing is not a place nor something I own."

btn.innerHTML = "Third Question"

}

else if(step == 3){

text.innerHTML = "Question 3: This thing is now trying to discover the answer."

btn.innerHTML = "Show the Answer"

}

else if(step == 4){

text.innerHTML = "You were just a stranger at first, someone I barely noticed. Then we talked, and somehow you felt familiar. Slowly, I started sharing little pieces of myself I usually keep to myself, and you listened. You became someone I look forward to talking to, someone who brightens my days without even trying. And before I realized it, I started feeling something more than friendship."

btn.innerHTML = "Promises"

}

else if(step == 5){

text.innerHTML =
`
1️⃣ I will never ignore you <br><br>
2️⃣ I will always take care of you <br><br>
3️⃣ I will always be there for you
`

btn.innerHTML = "Next"

}

else if(step == 6){

text.innerHTML = "Would you be my princess? 👑"

btn.style.display = "none"

}

}