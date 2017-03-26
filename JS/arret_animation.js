/**********************************************************/
// Fonctions arrêt des animations
var arret = false;
 function onDocumentKeyPress(event){
   // ESPACE
    if(event.charCode == 32){
       arret = !arret;
    }
}

/********************************************************** /
/                  Arrêt des animations                     /
/***********************************************************/
function arret_animation(arret){
  if(arret == false){
    time++;
    terre_lune.rotation += 0.3;
    terre.rotation.y += 0.1;
    mercure.rotation.y += 58.6;
    venus.rotation.y -= 243;
    mars.rotation.y += 1;
    jupiter.rotation.y += 0.041;
    saturne.rotation.y += 0.048;
    uranus.rotation.y -= 0.072;
    neptune.rotation.y += 0.068;
  }
}
