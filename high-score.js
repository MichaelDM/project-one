var highScoreObject = {

  level1 : "Don't worry, there's a first time for everything... try again!",

  level2 : "Not bad... but I've seen better. Keep going!",

  level3 : "Getting pretty good! How about stepping it up a notch?",

  level4: "Your owning this game! Only a few more points before I officially name you the emperor of this game!",

  level5: "Pffff. Stop playing seriously, you're too good! :D",

  setHighScore : function(){
    // checks if made progress and also if have a score to start with... if not, person may have not understood the game and still needs instructions
    if (totalScore > highScore){
      highScore = totalScore,
      // displaying title and high score
      elInstructionsTitle.innerText = 'HIGH SCORE:\n'+highScore;
      // if statement to add correct paragaph to user
      if (highScore<100){
        elInstructionsText.innerText = highScoreObject.level1;
      } else if(highScore<130){
        elInstructionsText.innerText = highScoreObject.level2;
      } else if(highScore<450){
        elInstructionsText.innerText = highScoreObject.level3;
      } else if(highScore<800){
        elInstructionsText.innerText = highScoreObject.level4;
      } else if (highScore<100000) {
        elInstructionsText.innerText = highScoreObject.level5;
      }
    }
  }
};
