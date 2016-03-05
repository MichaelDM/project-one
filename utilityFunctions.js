//function to initialize balloon movement and timer
function balloonMoveTimer(){
  // setting opacity before balloons move so that user knows can't pop balloons
  setTimeout(function () {opacityStatus = true;}, (delayTimerStart+1250));
  opacityInterval = setInterval(function(){
  gameObject.opacitySetting();}, 10);

  // start moving balloons when start of game Time starts
  if (gameTime === (countDown*1000)+delayTimerStart){
    //remove from DOM?

    // iterate for each ballon created
    for (var i=0; i< elballoonArray.length; i++){
      balloonMove(elballoonArray[i]);
    }
  }

  // taking out invisibleDiv after delayTimerStart (1s) so that user can start popping balloons
  setTimeout(function(){elInvisible.classList.remove('invisibleOn');},delayTimerStart+1000);

  // starting interval
  var timerInterval = setInterval(function(){
    // setting timer to active
    timerActive = true;
    // if game time finishes
    if (gameTime <= 0){
      gameTime -= 1000;
      gameObject.startTimer();
      // make ballons stop
      gameObject.clearIntervalOfballoonArray();
      // make timer stop
      clearInterval(timerInterval);
      // check if win or loose
      if (elballoonArray.length === 0){
        //if win
        gameObject.removeElGameEventListener();
        timerActive = false;
        clearInterval(timerInterval);
        gameObject.congratsMessage();
        //reinitializing game
        gameObject.reeinitializingGameParam();
      } else{
        //if loose
        timerActive = false;
        gameObject.removeElGameEventListener();
        clearInterval(timerInterval);
        gameObject.endGameMessage();
        //reinitializing game
        gameObject.gameRestart();
      }
    } else if (elballoonArray.length === 0){
      //if all balloons are popped before timer ends
      gameObject.removeElGameEventListener();
      timerActive = false;
      clearInterval(timerInterval);
      elTimer.classList.toggle('timer-color-slider');
      gameObject.congratsMessage();
      //reinitializing game
      gameObject.reeinitializingGameParam();
    } else {
      // seting timer after 1s
      setTimeout(gameObject.startTimer, delayTimerStart);
      gameTime -= 1000;
    }
  }, 1000);
}
