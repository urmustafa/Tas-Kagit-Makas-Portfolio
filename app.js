// SELECTORS
const rockImg=document.getElementById("rock")
const paperImg=document.getElementById("paper")
const scissorImg=document.getElementById("scissor")
const selectionArticle=document.querySelector(".selection")
const yourChoiceDiv=document.getElementById("your-choice")
const pcChoiceDiv=document.getElementById("pc-choice")
const messagePar=document.querySelector(".message")
const scoreCardSection=document.querySelector(".score-card")
const pcScoreSpan=document.getElementById("pc-score")
const yourScoreSpan=document.getElementById("your-score")
const modalCardSection=document.querySelector(".modal-card")
const playAgainButton=document.getElementById("play-again")
const topScorep1=document.getElementById("top-score1")
const topScorep2=document.getElementById("top-score2")


const YELLOW= "#ffc538";
const RED=" #fb778b";
const GREEN=" #5ab7ac";
const GREY='#cbcadad9';

let value1=0;
let value2=0;



selectionArticle.addEventListener("click",(e)=>{
  // console.log(e.target.id);
  if(e.target.id==="rock" || e.target.id==="paper" || e.target.id==="scissor"){
    // console.log("burdayız");
    // console.log(e.target.id);
    yourChoiceDiv.innerHTML=`<img src="./assets/${e.target.id}.png " alt="${e.target.id}">`
    createPcSelection(e.target.id) 
  }
})




//Event Listener
// rockImg.addEventListener("click",()=>{
//     yourChoiceDiv.innerHTML=`<img src="./assets/rock.png " alt="rock">`
// })
// paperImg.addEventListener("click",()=>{
//   yourChoiceDiv.innerHTML=`<img src="./assets/paper.png " alt="paper">`
// })
// scissorImg.addEventListener("click",()=>{
//   yourChoiceDiv.innerHTML=`<img src="./assets/scissor.png " alt="scissor">`
// })


const createPcSelection = (yourChoice)=>{
  const pcArr=["rock", "paper", "scissor"]
  const pcRandom = pcArr[Math.floor(Math.random() * pcArr.length)]
  // console.log(pcRandom);
  pcChoiceDiv.innerHTML=`<img src="./assets/${pcRandom}.png " alt="${pcRandom}">`
  calculateResult(yourChoice, pcRandom)
}

const calculateResult =(yourChoice, pcRandom)=>{
    // console.log("merhaba", yourChoice,pcRandom);
    if (yourChoice===pcRandom) {
      draw()
    }else{
      if (yourChoice==="rock") {
        pcRandom==="paper"?youLost(yourChoice, pcRandom):youWin(yourChoice, pcRandom);
      }else if (yourChoice==="paper") {
        pcRandom==="scissor"?youLost(yourChoice, pcRandom):youWin(yourChoice, pcRandom);
      }else if (yourChoice==="scissor") {
        pcRandom==="rock"?youLost(yourChoice, pcRandom):youWin(yourChoice, pcRandom);
      }
    }
    
}

const draw=()=>{
  messagePar.textContent="Its a draw"
  scoreCardSection.style.color=YELLOW
  messagePar.style.backgroundColor=YELLOW
}

const youLost=(yourChoice, pcRandom)=>{
  messagePar.textContent="You Lost"
  scoreCardSection.style.color=RED
  messagePar.style.backgroundColor=RED
  pcScoreSpan.textContent++
  value2++;
  if(pcScoreSpan.textContent==10){
    openModel("Pc");
    updateHigScoreDisplay();
  }

}
const youWin=(yourChoice, pcRandom)=>{
  messagePar.textContent="You Win"
  scoreCardSection.style.color=GREEN
  messagePar.style.backgroundColor=GREEN
  yourScoreSpan.textContent++
  value1++;
  if(yourScoreSpan.textContent==10){
    openModel("You");
    updateHigScoreDisplay();
  }
}

const openModel=(result)=>{
    modalCardSection.classList.add("show")
    if (result=="You") {
      document.getElementById("final-message").textContent=`💃 ${result} Win 🕺`
      document.querySelector(".modal").style.backgroundColor=GREEN
      playAgainButton.style.color=GREEN
    }else{
      document.getElementById("final-message").textContent=`😔 You Lost 🧎‍♂️`
      document.querySelector(".modal").style.backgroundColor=RED
      playAgainButton.style.color=RED
    }


}

playAgainButton.addEventListener("click",()=>{
  modalCardSection.classList.toggle("show")
  yourScoreSpan.textContent=0
  pcScoreSpan.textContent=0;
  scoreCardSection.style.color=GREY
  messagePar.style.backgroundColor=''
  messagePar.textContent=""
})

const updateHigScoreDisplay=()=>{
  // let sonuc=Math.abs(value1-value2);
  // let score1=parseInt(topScorep1.textContent)
  // let score2=parseInt(topScorep2.textContent)
  if (Math.abs(parseInt(topScorep1.textContent)-parseInt(topScorep2.textContent))<Math.abs(value1-value2)) {     
    topScorep1.innerHTML=`${value1}`;
    topScorep2.innerHTML=`${value2}`;
    value1=0;
    value2=0;
          // topScorep1.textContent=value1;
          // topScorep2.textContent=value2;
  }
  else{
    value1=0;
    value2=0;
  }
}