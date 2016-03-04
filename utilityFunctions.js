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
    if (gameTime <= 0){
      gameTime -= 1000;
      startTimer();
      // make ballons stop
      gameObject.clearIntervalOfBaloonArray();
      // make timer stop
      clearInterval(timerInterval);
    } else
    // seting timer after 1s
    {
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
