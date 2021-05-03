const button = document.querySelector('.again');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const check = document.querySelector(".check");
const body  = document.querySelector("body");

let yourScore = 20;
let maxScore = 0;
const randomNumber = Math.trunc(Math.random()* 20)+1;
console.log(`Hi there geek the number is ${randomNumber}`);

check.addEventListener("click",()=>{
    const gussed = Number(guess.value)
    if(!gussed){
        message.textContent = "no number selected";
    }else if( gussed === randomNumber){
        message.textContent = "congrats🥳🥳";
        number.textContent = randomNumber;
        number.style.width = "30rem";
        body.style.backgroundColor = "orange";
    }else if ( gussed > randomNumber){
     if (yourScore > 1){
        message.textContent = "too high"
        body.style.backgroundColor = "red";
        yourScore--;
        score.textContent = yourScore;
     }else{
         message.textContent = "you loose";
         body.style.backgroundColor = "red";
         score.textContent = 0;
     }
    }else if (gussed < randomNumber){
      if(yourScore > 1){
        message.textContent = "too low";
        body.style.backgroundColor = "blue";
        yourScore--;
        score.textContent = yourScore;
      }else{
        message.textContent = "you loose";
        body.style.backgroundColor = "red";
        score.textContent = 0;
      }
    }
});
