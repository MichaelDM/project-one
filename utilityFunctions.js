//function to change game level
function changeGameLevel(){
  gameLevel +=1;
  elLevel.innerText = gameLevel;
}

//function to change baloon number
function changeBallonNumber(){
  baloonNumber = 3*gameLevel;
}

//function to create baloons and display on screen
function createBallons(){
  // looping over baloon number
  for (var i = 1; i<= baloonNumber; i++){
    baloonName = 'ballon'+i;
    // creating and adding baloon to DOM
    var newBaloon = document.createElement('div');
    newBaloon.classList.add('baloon', baloonName);
    elGame.appendChild(newBaloon);
    // adding event Listener to Baloon
    newBaloon.addEventListener('click',baloonPop);
  }
}

//function when baloon is popped
function baloonPop(){
  // disabling click to bubble up to game
  event.stopPropagation();
  deductFromScore();
  this.remove();
}

function addToScore(){
  totalScore += 3*gameLevel;
}

function deductFromScore(){
  if (totalScore <= 0){
    // do nothing
  } else {
    totalScore -= 2*gameLevel;
  }
}

//function to initialize balloon and timer
function baloonMoveTimer(){
  // first, making ballons move, then start countdown
  var gameTime = (countDown*1000)+delayTimerStart;
  // starting interval
  var gameTimeInterval = setInterval(function(){
    console.log('gameTime from ballonMove',gameTime);
    if (gameTime <= 0){
      clearInterval(gameTimeInterval);
    }
    // moving ballons
    moveBaloon();
    // seting timer after 1s
    setTimeout(startTimer, delayTimerStart);
    gameTime -= 1000;
  }, 1000);

  function moveBaloon(){

  }
  function startTimer(){
    elTimer.innerText = (gameTime/1000)+1;
    if (!elTimer.classList.contains('timer-color-slider')){
      elTimer.classList.toggle('timer-color-slider');
    }
    console.log('gameTime is :'+((gameTime/1000)+1));
  }
}
