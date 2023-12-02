
let score = {
    wins : 0,
    losses : 0,
    tie : 0,
    'test-time' : 0
}

function resetScore(){
    score.wins = 0;
    score.losses = 0;
    score.tie = 0;

    alert("The score has been reset");
    console.log(score.test-time);
}

function displayResult(chosenPlayerMove, computerMove, result) {
    const pResultElement = document.querySelector('.js-result');
    pResultElement.innerText = `The result is ${result}`;

    const pMovesElement = document.querySelector('.js-moves');

    pMovesElement.innerHTML = `You <img src="${ chosenPlayerMove}-emoji.png" class="move-icon"><br>Computer <img src="${computerMove}-emoji.png" class="move-icon">`; 

    const pScoreElement = document.querySelector('.js-score');
    pScoreElement.innerText = `The score is ${score.wins}, ${score.losses}, ${score.tie}`;
}

function playerMove(move){
    computerMove = computeComputerMove();
    result = computeResult(move, computerMove);

    displayResult(move, computerMove, result);

}

function computeComputerMove(){
    const randomNum = Math.random();

    if(randomNum >= 0 && randomNum < 1/3){
        return 'rock';
    }
    else if(randomNum >= 1/3 && randomNum < 2/3){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

function computeResult(move, computerMove){

    if(move == computerMove){
        score.tie++;
        return 'draw';
    }
    else if((move == 'rock' && computerMove == 'paper') || (move == 'paper' && computerMove == 'scissors') || (move == 'scissors' && computerMove == 'rock')){
        score.losses++;
        return 'you lost';
    }
    else{
        score.wins++;
        return 'you win';
    }

}

let isAutoPlaying = false;
let intervalId;

const autoPlay = () => {
    if (!isAutoPlaying) {
        isAutoPlaying = true;

        intervalId = setInterval(() => {
            const move1 = computeComputerMove();
            playerMove(move1);
        }, 1000);
        
    }
    else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
    
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
    playerMove('rock')
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
    playerMove('paper')
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playerMove('scissors')
});

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playerMove('rock');
    }
    else if (event.key === 'p') {
        playerMove('paper');
    }
    else if (event.key === 's') {
        playerMove('scissors');
    }
});

