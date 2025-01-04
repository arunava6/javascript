
let randomNum=console.log(parseInt(Math.random()*100+1));
const userInput=document.querySelector('#guessField');
const submit=document.querySelector('#subt');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrhi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');

let prevGuess=[];
let numGuess=0;

let playGames=true;

if(playGames){
    submit.addEventListener("click",function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        validateGuess(guess);
    })
}  
function validateGuess(guess){
    if(isNaN(guess)){
        alert(`Enter a valid number`);
    }else if(guess<1){
        alert(`Enter number greater than 0`);
    }else if(guess>100){
        alert(`Enter a number less than 100`);
    }else{
        prevGuess.push(guess);
        if(numGuess===10){
            displayGuess(guess);
            displayMessage(`Game Over, Random number was ${randomNum}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){
    if(guess>randomNum){
        displayMessage(`Too high, try again`);
    }else if(guess<randomNum){
        displayMessage(`Too low, try again`);
    }else if(guess===randomNum){
        displayMessage(`Congrats! You guess the right number`);
    }
}
function displayGuess(guess){
    userInput.value='';
    guessSlot.innerHTML+= `${guess}, `;
    numGuess++;
    remaining.innerHTML=`${10-numGuess}`;
}
function displayMessage(message){
    lowOrhi.innerHTML=`<h2>${message}</h2>`;
}

function newGame(){
    const newGameButton=document.querySelector('#newGame');
    newGameButton.addEventListener("click",function(e){
        randomNum=parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML=`${10-numGuess} `;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);
        playGames=true;
    })
}
function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGames=false; 
    newGame();
}
