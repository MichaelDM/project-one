// setting variables
var elGame = document.getElementById('game'),
    elGameMessage = document.getElementById('game-message'),
    elGameMessageH2 = document.querySelector('#game-message h2'),
    elScore = document.getElementById('score'),
    elLevel = document.getElementById('level'),
    elTimer = document.getElementById('timer'),
    gWidth = elGame.offsetWidth,
    gHeight = elGame.offsetHeight,
    countDown = 10,
    delayTimerStart = 1000,
    gameTime = (countDown*1000)+delayTimerStart,
    baloonNumber,
    timerActive = false,
    totalScore = 0,
    gameLevel = 0,
    delayPlayFirstTime = 2000,
    baloonNumber = 0,
    elBaloonArray = [],
    ///SET BALOON WIDTH AND HEIGHT DYNAMICALLY!!!
    baloonWidth =100,
    baloonHeight = 100,
    rotationY = 0,
    rotationX = 0,
    gameInProgress = false,
    intervalBaloonArray = [],
    firstTime = true;

// setting objects
var gameObject = {
  //function to change game level
  changeGameLevel: function (){
    gameLevel +=1;
    elLevel.innerText = gameLevel;
  },
  //function to change baloon number
  changeBallonNumber: function(){
    baloonNumber = 3*gameLevel;
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
    console.log('gameTime is :'+((gameTime/1000)+1));
  },
  //function to deduct points
  deductFromScore: function (){
    console.log('deductFromScore is happening');
    if (totalScore <= 0){
      // do nothing
    } else {
      totalScore -= 2*gameLevel;
      elScore.innerText = totalScore;
    }
  },
  // function to addScore
  addToScore: function(){
    console.log('addScore is happening');
    totalScore += 3*gameLevel;
    elScore.innerText = totalScore;
  },
  //function to create baloons and display on screen
  createBallons: function (){
    // looping over baloon number
    for (var i = 0 ; i< baloonNumber; i++){
      // creating unique baloon names
      var baloonName = 'baloonName'+i;
      // creating new baloon object based on ballonFactory
      var baloonName = new BaloonFactory();
      //adding unique properties to baloons
      baloonName.name = 'baloon'+i;
      baloonName.createDiv(i);
      elBaloonArray.push(baloonName);
    }
  },
  clearIntervalOfBaloonArray : function(){
    for (var b = 0; b<intervalBaloonArray.length; b++ ){
      clearInterval(intervalBaloonArray[b]);
    }
  },
  removeElGameEventListener : function(){
    elGame.removeEventListener('click', gameObject.deductFromScore);
  },
  congratsMessage : function(){
    elGameMessageH2.innerText = 'CONGRATULATIONS, you finished Level '+gameLevel+'! \nPress any key to continue to next level'
  },
  endGameMessage : function(){
    elGameMessageH2.innerHTML = 'Sorry, time\'s up! You finished the game accumulating '+totalScore+' points! :)'
  },
  reeinitializingGameParam : function(){
    intervalBaloonArray = [];
    elBaloonArray = [];
    gameTime = (countDown*1000)+delayTimerStart,
    firstTime = true;
    gameInProgress = false;
  }
}

// setting factory functions
function BaloonFactory (){
  this.element = "",
  this.dir1 = -1,
  this.dir2 = -1,
  this.left = gWidth/2,
  this.bottom = gHeight/2,
  this.rotationY = 0,
  this.rotationX = 0,
  this.firstTime = true,
  this.left = gWidth/2,
  this.bottom = gHeight/2,
  this.startedMoving = false;
}
// setting prototypes
BaloonFactory.prototype = {
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
    var newBaloon = document.createElement('div');
    newBaloon.classList.add('baloon', 'baloon'+j);
    elGame.appendChild(newBaloon);
    // adding event Listener to Baloon
    newBaloon.addEventListener('click',this.baloonPop);
    this.element = newBaloon;
    // placing baloon in middle at start
    this.element.style.left = this.left+'px';
    this.element.style.bottom = this.bottom+'px';
  },
  //function when baloon is popped
  baloonPop: function (){
    // disabling click to bubble up to game
    console.log('baloon is popping');
    event.stopPropagation();
    gameObject.addToScore();
    elBaloonArray.pop();
    this.remove();
  },
  //generate random number betwee 1 and 4
  randomSelection : function(){
    var direction = ~~((Math.random()*4)+1);
    return direction;
  }
}

// Playing Game
setTimeout(function(){document.addEventListener('keyup', playGame)}, delayPlayFirstTime);
function playGame(){
  //disable keydown event if game is in progress
  if (gameInProgress){
    console.log('game in progress');
    return;
  }
  console.log('game is starting');
  //initializing score
  if (gameLevel === 0){
    elScore.innerText = totalScore;
  }
  // taking away start game message
  elGameMessageH2.innerText = "";
  // change game level
  gameObject.changeGameLevel();
  // change baloon number
  gameObject.changeBallonNumber();
  // create and display baloons on screen
  gameObject.createBallons();
  // make baloons move and set timer
  baloonMoveTimer();

  // negative points for missing baloon
 setTimeout(function(){elGame.addEventListener('click', gameObject.deductFromScore)}, 1000);

 gameInProgress = true;
}
