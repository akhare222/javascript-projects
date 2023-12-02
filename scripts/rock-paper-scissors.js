
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

function playerMove(move){
    let computerMove = computeComputerMove();

    let result = computeResult(move, computerMove);

    const pResultElement = document.querySelector('.js-result');
    pResultElement.innerText = `The result is ${result}`;

    const pMovesElement = document.querySelector('.js-moves');

    pMovesElement.innerHTML = `You <img src="${move}-emoji.png" class="move-icon"><br>Computer <img src="${computerMove}-emoji.png" class="move-icon">`; 

    const pScoreElement = document.querySelector('.js-score');
    pScoreElement.innerText = `The score is ${score.wins}, ${score.losses}, ${score.tie}`;

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
