function baloonMove(thisBaloon){
  thisBaloon.dir1 = thisBaloon.randomSelection();
  thisBaloon.dir2 = thisBaloon.randomSelection();

  var intervalBaloon = setInterval(function(){
    while (thisBaloon.dir1===thisBaloon.dir2){
        thisBaloon.dir2 = thisBaloon.randomSelection();
    }

    switch (thisBaloon.dir1) {
      case 1:
        thisBaloon.moveRight()
        break;
      case 2:
        thisBaloon.moveLeft();
        break;
      case 3:
        thisBaloon.moveTop();
        break;
      case 4:
        thisBaloon.moveBottom();
        break;
    }
    switch (thisBaloon.dir2) {
      case 1:
        thisBaloon.moveLeft();
        break;
      case 2:
        thisBaloon.moveRight();
        break;
      case 3:
        thisBaloon.moveBottom();
        break;
      case 4:
        thisBaloon.moveTop();
        break;
    }

    if (left > gWidth-baloonWidth){
      if (thisBaloon.dir1 = 1){
        thisBaloon.dir1 = 2;
        thisBaloon.moveLeft();
        rotationY += 180;
      } else {
        thisBaloon.dir2 = 1;
        thisBaloon.moveLeft();
        rotationY += 180;
      }
    }

    if (left < 0){
      if (thisBaloon.dir1 = 2){
        thisBaloon.dir1 = 1;
        thisBaloon.moveRight();
        rotationY += 180;
      } else {
        thisBaloon.dir2 = 2;
        thisBaloon.moveRight();
        rotationY += 180;
      }
    }

    if (bottom > gHeight-baloonHeight){
      if (thisBaloon.dir1 = 3){
        thisBaloon.dir1 = 4
        thisBaloon.moveBottom();
        rotationX += 180;
      } else {
        thisBaloon.dir2 = 3;
        thisBaloon.moveBottom();
        rotationX += 180;
      }
    }

    if (bottom < 0){
      if (thisBaloon.dir1 = 4){
        thisBaloon.dir1 = 3;
        thisBaloon.moveTop();
        rotationX += 180;
      } else {
        thisBaloon.dir2 = 4;
        thisBaloon.moveTop();
        rotationX += 180;
      }
    }

    if (firstTime){
      if (thisBaloon.dir1 === 2 || thisBaloon.dir2 ===1){
        rotationY += 180;
      }
      if (thisBaloon.dir1 ===4 || thisBaloon.dir2 === 3){
        rotationX += 180;
      }
      firstTime = false;
    }
    // places baloons at start
    thisBaloon.element.style.left = left+'px';
    thisBaloon.element.style.bottom = bottom+'px';
    thisBaloon.element.style.transform = 'rotateX('+rotationX+'deg) rotateY('+rotationY+'deg)';
  }
  , 300);
}
