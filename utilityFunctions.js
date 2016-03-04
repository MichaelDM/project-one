//function to initialize balloon movement and timer
function baloonMoveTimer(){
  // time upon which both ballons and timer will depend

  // start moving balloons when start of game Time starts
  if (gameTime === (countDown*1000)+delayTimerStart){
    //remove from DOM?

    // iterate for each ballon created
    for (var i=0; i< elBaloonArray.length; i++){
      baloonMove(elBaloonArray[i]);
    }
  }

  // starting interval
  var timerInterval = setInterval(function(){
    // setting timer to active
    timerActive = true;

    // if game time finishes
    if (gameTime <= 0){
      gameTime -= 1000;
      gameObject.startTimer();
      // make ballons stop
      gameObject.clearIntervalOfBaloonArray();
      // make timer stop
      clearInterval(timerInterval);
      // check if win or loose
      if (elBaloonArray.length === 0){
        //if win
        gameObject.removeElGameEventListener();
        clearInterval(timerInterval);
        gameObject.congratsMessage();
        //reinitializing game
        gameObject.reeinitializingGameParam();
      } else{
        //if loose
        gameObject.removeElGameEventListener();
        clearInterval(timerInterval);
        gameObject.endGameMessage();
        //reinitializing game
        gameObject.reeinitializingGameParam();
      }
    } else if (elBaloonArray.length === 0){
      //if all baloons are popped before timer ends
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
