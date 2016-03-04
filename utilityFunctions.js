//function to initialize balloon movement and timer
function baloonMoveTimer(){
  // time upon which both ballons and timer will depend
  var gameTime = (countDown*1000)+delayTimerStart;

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
    // if game time finishes
    if (gameTime <= 0){
      gameTime -= 1000;
      startTimer();
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
        //
        // Need to reeinitialize the game
        //
      } else{
        //if loose
        gameObject.removeElGameEventListener();
        clearInterval(timerInterval);
        gameObject.endGameMessage();
      }
    } else if (elBaloonArray.length === 0){
      //if all baloons are popped before timer ends

      gameObject.removeElGameEventListener();
      clearInterval(timerInterval);
      console.log(elTimer.classList.contains('timer-color-slider'));
      elTimer.classList.toggle('timer-color-slider');
      console.log('took class off!');
      console.log(elTimer.classList.contains('timer-color-slider'));
      gameObject.congratsMessage();
      //
      // Need to reeinitialize the game
      //
    } else {
      console.log('calling timer');
      // seting timer after 1s
      setTimeout(startTimer, delayTimerStart);
      gameTime -= 1000;
    }
  }, 1000);



  // function to change text in timer and activate it
  function startTimer(){
    elTimer.innerText = (gameTime/1000)+1;
    if (!elTimer.classList.contains('timer-color-slider')){
      elTimer.classList.toggle('timer-color-slider');
    }
    console.log('gameTime is :'+((gameTime/1000)+1));
  }
}
