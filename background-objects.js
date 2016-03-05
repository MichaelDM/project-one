// Game backgrounds for each level
var backgroundObject = {
  evolution: 'http://assets.inhabitat.com/wp-content/blogs.dir/1/files/2015/07/evolution.jpg',
  shark : 'http://stories.gettyimages.com/wp-content/uploads/2015/08/GettyImages-557187411-11.jpg',
  boccioni: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Umberto_Boccioni_-_Plastische_Formen_eines_Pferdes.jpeg',
  lachapelle : 'http://brothersartgallery.com/bag/wp-content/uploads/2013/09/David-Lachapelle-quadro1.jpg',
  monet : 'https://upload.wikimedia.org/wikipedia/commons/d/da/Claude_Monet,_Saint-Georges_majeur_au_cr%C3%A9puscule.jpg',
  mapplethorpe: 'http://www.adhikara.com/robert-mapplethorpe/6-mapplethorpe.jpg',
  flowerGarden: 'http://www.worldfortravel.com/wp-content/uploads/2012/07/Wisteria-Tunnel-Fuji.jpg',
  nature: 'http://3.bp.blogspot.com/-K8JNPbVQ96g/UiL6Bi6TIwI/AAAAAAAAA08/MBh7xW75nB0/s1600/ghost-recon-future-solr-island-wonder-of-the-world-hd-px.jpg',
  cosmos: 'http://cdn.spacetelescope.org/archives/images/large/heic1509a.jpg',
  paris: 'http://pgoh13.com/champs_old.jpg',

  assignLevelToBackground : function (level){
    var levelString = level.toString(),
        levelNumLength = levelString.length;
        return levelString.charAt(levelNumLength-1);
  },
  changeBackgroundInDOM : function(url){
    elGame.style.backgroundImage = 'url("'+url+'")';
  },
  changeBackgroundGame : function(){
    switch (backgroundObject.assignLevelToBackground(gameLevel)) {
      case '1':
        // this is to change background of game
        backgroundObject.changeBackgroundInDOM(backgroundObject.monet);
        // this is to change background of balloons
        balloonBackgroundObject.changeBackgroundInDOM(balloonBackgroundObject.monet);
        break;
      case '8':
        backgroundObject.changeBackgroundInDOM(backgroundObject.evolution);
        balloonBackgroundObject.changeBackgroundInDOM(balloonBackgroundObject.evolution);
        break;
      case '2':
        backgroundObject.changeBackgroundInDOM(backgroundObject.lachapelle);
        balloonBackgroundObject.changeBackgroundInDOM(balloonBackgroundObject.lachapelle);
        break;
      case '4':
        backgroundObject.changeBackgroundInDOM(backgroundObject.boccioni);
        balloonBackgroundObject.changeBackgroundInDOM(balloonBackgroundObject.boccioni);
        break;
      case '5':
        backgroundObject.changeBackgroundInDOM(backgroundObject.mapplethorpe);
        balloonBackgroundObject.changeBackgroundInDOM(balloonBackgroundObject.mapplethorpe);
        break;
      case '6':
        backgroundObject.changeBackgroundInDOM(backgroundObject.shark);
        balloonBackgroundObject.changeBackgroundInDOM(balloonBackgroundObject.shark);
        break;
      case '7':
        backgroundObject.changeBackgroundInDOM(backgroundObject.nature);
        balloonBackgroundObject.changeBackgroundInDOM(balloonBackgroundObject.nature);
        break;
      case '3':
        backgroundObject.changeBackgroundInDOM(backgroundObject.paris);
        balloonBackgroundObject.changeBackgroundInDOM(balloonBackgroundObject.paris);
        break;
      case '9':
        backgroundObject.changeBackgroundInDOM(backgroundObject.flowerGarden);
        balloonBackgroundObject.changeBackgroundInDOM(balloonBackgroundObject.flowerGarden);
        break;
      case '0':
        backgroundObject.changeBackgroundInDOM(backgroundObject.cosmos);
        balloonBackgroundObject.changeBackgroundInDOM(balloonBackgroundObject.cosmos);
        break;
    }
  }
};

// Balloon Background for each level
var balloonBackgroundObject = {
  evolution: 'http://thumbs.modthesims2.com/img/4/3/2/4/7/1/MTS_Beo-929924-matrix.jpg',
  shark : 'http://www.siamaquaticadventures.com/images/gallery/gallery-1439528848-portbigpic5.jpg',
  boccioni: 'https://londonartreviews.files.wordpress.com/2015/12/web-01.jpg?w=293&h=300',
  lachapelle : 'https://alauristoncps.files.wordpress.com/2012/10/david-lachapelle-courtney-love.jpg',
  monet : 'http://www.intermonet.com/prints/w1077t300.jpg',
  mapplethorpe: 'http://www.photology.com/assets/images/MAPPLETHORPE%20Robert/MAPPLETHORPE%203.jpg',
  flowerGarden: 'http://www.3drivers.com/upload/iblock/144/japanese-vase-c-01.jpg',
  nature: 'https://s-media-cache-ak0.pinimg.com/236x/52/eb/33/52eb339cb5f0392448c232e2a6f5da27.jpg',
  cosmos: 'http://orig14.deviantart.net/3632/f/2008/151/4/a/the_planet_earth_by_technoking.jpg',
  paris: 'http://blogs.kcrw.com/rhythmplanet/wp-content/uploads/2015/06/Robert-Doisneau.jpg',

  assignLevelToBackground : function (level){
    var levelString = level.toString(),
        levelNumLength = levelString.length;
        return levelString.charAt(levelNumLength-1);
  },
  changeBackgroundInDOM : function(url){
    for (d=0; d<elballoonArray.length; d++){
      elballoonArray[d].element.style.backgroundImage = 'url("'+url+'")';
    }
  }
};
