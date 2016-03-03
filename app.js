var elGame = document.getElementById('game'),
    elGameMessage = document.getElementById('game-message'),
    elScore = document.getElementById('score'),
    elLevel = document.getElementById('level'),
    elTimer = document.getElementById('timer'),

    gWidth = elGame.innerWidth,
    gHeight = elGame.innerHeight,
    countDown = 10,
    baloonName,
    baloonNumber,
    totalScore = 0,
    gameLevel = 0,
    delayPlayFirstTime = 2000,
    delayTimerStart = 1000,
    baloonNumber = 0,
    gameInProgress = false;

setTimeout(function(){document.addEventListener('keyup', playGame)}, delayPlayFirstTime)  ;

function playGame(){
  //disable keydown event if game is in progress
  if (gameInProgress){
    console.log('game in progress');
    return;
  }
  console.log('calling playGame');
  //initializing score
  if (gameLevel === 0){
    elScore.innerText = totalScore;
  }
  // taking away start game message
  elGameMessage.innerText = "";
  // change game level
  changeGameLevel();
  // change baloon number
  changeBallonNumber();
  // create and display baloons on screen
  createBallons();
  // make baloons move and set timer
  baloonMoveTimer();

  // negative points for missing baloon
  elGame.addEventListener('click',deductFromScore);

  gameInProgress = true;
}
