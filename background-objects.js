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
        backgroundObject.changeBackgroundInDOM(backgroundObject.monet);
        break;
      case '2':
        backgroundObject.changeBackgroundInDOM(backgroundObject.evolution);
        break;
      case '3':
        backgroundObject.changeBackgroundInDOM(backgroundObject.lachapelle);
        break;
      case '4':
        backgroundObject.changeBackgroundInDOM(backgroundObject.boccioni);
        break;
        break;
      case '5':
        backgroundObject.changeBackgroundInDOM(backgroundObject.mapplethorpe);
        break;
      case '6':
        backgroundObject.changeBackgroundInDOM(backgroundObject.shark);
        break;
      case '7':
        backgroundObject.changeBackgroundInDOM(backgroundObject.nature);
        break;
      case '8':
        backgroundObject.changeBackgroundInDOM(backgroundObject.paris);
        break;
      case '9':
        backgroundObject.changeBackgroundInDOM(backgroundObject.flowerGarden);
        break;
        break;
      case '0':
        backgroundObject.changeBackgroundInDOM(backgroundObject.cosmos);
        break;
    }
  }
};
