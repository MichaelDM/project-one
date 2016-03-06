// setting variables
//DOM variables
var elGame = document.getElementById('game'),
elGameMessage = document.getElementById('game-message'),
elGameMessageH2 = document.querySelector('#game-message h2'),
elScore = document.getElementById('score'),
elLevel = document.getElementById('level'),
elTimer = document.getElementById('timer'),
elInvisible = document.getElementById('invisibleDiv'),
elInstructionsTitle = document.querySelector('.arsenal-bottom-wrapper h1'),
elInstructionsText = document.querySelector('.arsenal-bottom-wrapper p'),
//Initial Parameters Settings
countDown = 12,
delayTimerStart = 2000,
gameTime = (countDown*1000)+delayTimerStart,
timerActive = false,
opacityStatus = false,
totalScore = 0,
gameLevel = 0,
delayPlayFirstTime = 1000,
balloonNumber = 0,
elballoonArray = [],
rotationY = 0,
rotationX = 0,
gameInProgress = false,
intervalballoonArray = [],
firstTime = true,
speed = 300,
initialSpeed = speed,
//Fixed Parameters and Caching
firstTimeEver = true,
gWidth = elGame.offsetWidth,
gHeight = elGame.offsetHeight,
balloonNumber = 'null',
opacityInterval = false,
highScore = 0,
///SET balloon WIDTH AND HEIGHT DYNAMICALLY!!!
balloonWidth = 100,
balloonHeight = 100;


// objects needed to play the game (game + baloon)
var gameObject = {
  //function to display instructions for first time users
  instructions :function(){
    var instructionsCount = 0;
    var elInstructions = document.createElement('p');
    elInstructions.classList.add('instructions');
    elInstructions.innerText = "Wait...";
    var instructionsInterval = setInterval(function(){
      if (instructionsCount === 0){
        elGame.appendChild(elInstructions);
      }
      if (instructionsCount >= delayTimerStart){
        elInstructions.innerText = "GO!!!";
      }
      if (instructionsCount >= gameTime/2){
        elInstructions.remove();
        clearInterval(instructionsInterval);
      }
      instructionsCount += 1000;
    },1000);
  },
  //function to change game level
  changeGameLevel: function (){
    gameLevel +=1;
    elLevel.innerText = gameLevel;
  },
  //function to change balloon number
  changeBallonNumber: function(){
    balloonNumber = 3*gameLevel;
  },
  //function to change text in timer and toggle the css
  startTimer : function (){
    if (timerActive === true){
      elTimer.innerText = (gameTime/1000)+1;
    } else {
      elTimer.innerText = '';
    }
    if (!elTimer.classList.contains('timer-color-slider') && timerActive===true){
      elTimer.classList.toggle('timer-color-slider');
    }
    // console.log('gameTime is :'+((gameTime/1000)+1));
  },
  opacitySetting : function(){
    if (opacityStatus === false && !elInvisible.classList.contains('opacityOn')){
    elInvisible.classList.add('opacityOn');
  } else if (opacityStatus === true){
      elInvisible.classList.remove('opacityOn');
      clearInterval(opacityInterval);
    }
  },
  //function to deduct points
  deductFromScore: function (){
    // console.log('deductFromScore is happening');
    if (totalScore <= 0){
      // do nothing
    } else {
      totalScore -= 2*gameLevel;
      elScore.innerText = totalScore;
    }
  },
  // function to addScore
  addToScore: function(){
    // console.log('addScore is happening');
    totalScore += 3*gameLevel;
    elScore.innerText = totalScore;
  },
  //function to create balloons and display on screen
  createBallons: function (){
    // looping over balloon number
    for (var i = 0 ; i< balloonNumber; i++){
      // creating unique balloon names
      var balloonName = 'balloonName'+i;
      // creating new balloon object based on ballonFactory
      var balloonName = new balloonFactory();
      //adding unique properties to balloons
      balloonName.name = 'balloon'+i;
      balloonName.createDiv(i);
      elballoonArray.push(balloonName);
    }
  },
  clearIntervalOfballoonArray : function(){
    for (var b = 0; b<intervalballoonArray.length; b++ ){
      clearInterval(intervalballoonArray[b]);
    }
  },
  removeElGameEventListener : function(){
    elGame.removeEventListener('click', gameObject.deductFromScore);
  },
  congratsMessage : function(){
    elGameMessageH2.classList.toggle('displayNone');
    elGameMessageH2.innerText = 'CONGRATULATIONS, you finished Level '+gameLevel+'! \nPress any key to continue to next level';
  },
  endGameMessage : function(){
    elGameMessageH2.classList.toggle('displayNone');
    elGameMessageH2.innerHTML = 'Sorry, time\'s up! You finished the game accumulating '+totalScore+' points! :) \n Press any key to restart game.';
  },
  reeinitializingGameParam : function(){
    elInvisible.classList.add('invisibleOn');
    opacityStatus = false;
    intervalballoonArray = [];
    elballoonArray = [];
    gameTime = (countDown*1000)+delayTimerStart,
    firstTime = true,
    speed -= (50/gameLevel);
    if (speed<=0){
      speed = 1;
    }
    gameInProgress = false;
  },
  gameRestart : function(){
    elInvisible.classList.add('invisibleOn');
    highScoreObject.setHighScore();
    opacityStatus = false;
    speed = initialSpeed,
    totalScore = 0,
    gameLevel = 0,
    balloonNumber = 0,
    gameTime = (countDown*1000)+delayTimerStart;
    gameObject.removeBallons();
    elTimer.classList.toggle('timer-color-slider');
    intervalballoonArray = [];
    elballoonArray = [];
    firstTime = true;
    gameInProgress =  false;
  },
  removeBallons: function(){
    var elballoonsToRemove = document.querySelectorAll('.balloon');
    for (var r=0; r<elballoonsToRemove.length; r++){
      elballoonsToRemove[r].remove();
    }
  }
};


// setting factory functions
function balloonFactory (){
  this.element = "",
  this.dir1 = -1,
  this.dir2 = -1,
  this.left = gWidth/2,
  this.bottom = gHeight/2,
  this.rotationY = 0,
  this.rotationX = 0,
  this.firstTime = true,
  this.startedMoving = false;
}
// setting prototypes
balloonFactory.prototype = {
  randomX : function(){
    var initialLeft = ~~(Math.random()*(gWidth-100));
    // console.log(initialLeft);
    return initialLeft;
  },
  randomY : function(){
    var initialBottom = ~~(Math.random()*(gHeight-100));
    console.log(initialBottom);
    return initialBottom;
  },
  randomSelection: function (){
    //generate random number betwee 1 and 4
    var direction = ~~((Math.random()*4)+1);
    return direction;
  },
  moveLeft: function(){
    this.left -=10;
  },
  moveRight: function(){
    this.left += 10;
  },
  moveTop: function(){
    this.bottom += 10;
  },
  moveBottom: function(){
    this.bottom -= 10;
  },
  createDiv: function(j){
    var newballoon = document.createElement('div');
    newballoon.classList.add('balloon', 'balloon'+j);
    elGame.appendChild(newballoon);
    // adding event Listener to balloon
    newballoon.addEventListener('click',this.balloonPop);

    this.element = newballoon;
    // placing balloon in middle at start
    this.element.style.left = this.left+'px';
    this.element.style.bottom = this.bottom+'px';
  },
  //function when balloon is popped
  balloonPop: function (){
    // disabling click to bubble up to game
    // console.log('balloon is popping');
    event.stopPropagation();
    // gameObject.addToScore();
    elballoonArray.pop();
    // including the jquery ui explosion
    $(this).toggle('explode');
    this.remove();
  },
  //generate random number betwee 1 and 4
  randomSelection : function(){
    var direction = ~~((Math.random()*4)+1);
    return direction;
  }
};

// Playing Game
setTimeout(function(){document.addEventListener('keyup', playGame);}, delayPlayFirstTime);
function playGame(){
  //disable keydown event if game is in progress
  if (gameInProgress){
    // console.log('game in progress');
    return;
  }
  // console.log('game is starting');
  //initializing score
  if (gameLevel === 0 && firstTimeEver){
    firstTimeEver = false;
    elScore.innerText = totalScore;
    gameObject.instructions();
  }
  // taking away start game message
  elGameMessageH2.innerText = "";
  elGameMessageH2.classList.toggle('displayNone');
  // change game level
  gameObject.changeGameLevel();
  // change balloon number
  gameObject.changeBallonNumber();
  // create and display balloons on screen
  gameObject.createBallons();
  // change game and baloon background
  backgroundObject.changeBackgroundGame();
  // make balloons move and set timer
  balloonMoveTimer();

  // negative points for missing balloon
  setTimeout(function(){elGame.addEventListener('click', gameObject.deductFromScore);}, delayTimerStart+500);
  // making sure can't call game with keydown once the game is playing
  gameInProgress = true;
}
