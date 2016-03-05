function balloonMove(thisballoon){
  thisballoon.dir1 = thisballoon.randomSelection();
  thisballoon.dir2 = thisballoon.randomSelection();
  thisballoon.left = thisballoon.randomX();
  thisballoon.bottom = thisballoon.randomY();
  // add class for baloons to appear
  setTimeout(function(){thisballoon.element.classList.add('appear');}, 500);

  var intervalballoon = setInterval(function(){
    while (thisballoon.dir1===thisballoon.dir2){
        thisballoon.dir2 = thisballoon.randomSelection();
    }

    switch (thisballoon.dir1) {
      case 1:
        thisballoon.moveRight();
        break;
      case 2:
        thisballoon.moveLeft();
        break;
      case 3:
        thisballoon.moveTop();
        break;
      case 4:
        thisballoon.moveBottom();
        break;
    }
    switch (thisballoon.dir2) {
      case 1:
        thisballoon.moveLeft();
        break;
      case 2:
        thisballoon.moveRight();
        break;
      case 3:
        thisballoon.moveBottom();
        break;
      case 4:
        thisballoon.moveTop();
        break;
    }

    if (thisballoon.left > gWidth-balloonWidth){
      if (thisballoon.dir1 === 1){
        thisballoon.dir1 = 2;
        thisballoon.moveLeft();
        rotationY += 180;
      } else {
        thisballoon.dir2 = 1;
        thisballoon.moveLeft();
        rotationY += 180;
      }
    }

    if (thisballoon.left < 0){
      if (thisballoon.dir1 === 2){
        thisballoon.dir1 = 1;
        thisballoon.moveRight();
        rotationY += 180;
      } else {
        thisballoon.dir2 = 2;
        thisballoon.moveRight();
        rotationY += 180;
      }
    }

    if (thisballoon.bottom > gHeight-balloonHeight){
      if (thisballoon.dir1 === 3){
        thisballoon.dir1 = 4;
        thisballoon.moveBottom();
        rotationX += 180;
      } else {
        thisballoon.dir2 = 3;
        thisballoon.moveBottom();
        rotationX += 180;
      }
    }

    if (thisballoon.bottom < 0){
      if (thisballoon.dir1 === 4){
        thisballoon.dir1 = 3;
        thisballoon.moveTop();
        rotationX += 180;
      } else {
        thisballoon.dir2 = 4;
        thisballoon.moveTop();
        rotationX += 180;
      }
    }

    if (firstTime){
      if (thisballoon.dir1 === 2 || thisballoon.dir2 ===1){
        rotationY += 180;
      }
      if (thisballoon.dir1 ===4 || thisballoon.dir2 === 3){
        rotationX += 180;
      }
      firstTime = false;
    }
    // places balloons
    thisballoon.element.style.left = thisballoon.left+'px';
    thisballoon.element.style.bottom = thisballoon.bottom+'px';
    thisballoon.element.style.transform = 'rotateX('+thisballoon.rotationX+'deg) rotateY('+thisballoon.rotationY+'deg)'; } , speed);

  intervalballoonArray.push(intervalballoon);
}
