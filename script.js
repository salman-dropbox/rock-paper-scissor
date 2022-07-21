let cpuChoiceEl = document.getElementById("cpu-choice");
let userChoiceEl = document.getElementById("user-choice");
let resultEl = document.getElementById("result");
let buttonEl = document.querySelectorAll("button");
let userChoice;
let cpuChoice;
let result;

buttonEl.forEach(allChoice => allChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceEl.innerHTML = userChoice;
  generateCpuChoice();
  endResult();
}))

function generateCpuChoice(){
   let randomNumb = Math.floor(Math.random() * 3) + 1;
   
   if(randomNumb === 1) {
   cpuChoice = 'rock';
   }
   if(randomNumb === 2) {
   cpuChoice = 'paper';
   }
   if(randomNumb === 3) {
   cpuChoice = 'scissor'
   }
   
   cpuChoiceEl.innerHTML = cpuChoice;
}

function endResult(){
  if(cpuChoice === userChoice){
    result = 'draw';
  }
  
  if(cpuChoice === 'rock' && userChoice === 'paper') {
    result = 'you win';
  }
  
  if(cpuChoice === 'paper' && userChoice === 'rock') {
    result = 'you lose'
  }
  
  if(cpuChoice === 'rock' && userChoice === 'scissor') {
    result = 'you lose'
  }
  
  if(cpuChoice === 'scissor' && userChoice === 'rock') {
    result = 'you win'
  }
  
  if(cpuChoice === 'scissor' && userChoice === 'paper') {
    result = 'you lose'
  }
  
  if(cpuChoice === 'paper' && userChoice === 'scissor') {
    result = 'you win'
  }
  
  resultEl.innerHTML = result;
}
