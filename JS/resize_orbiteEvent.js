// Modification de la taille du canvas en fonction de la taille de la fenêtre
function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

/***********************************************************/
// Enleve ou remet les orbites en appuyant sur p
var afficher_orbite = false;

function onDocumentPPress(event){
 if(event.charCode == 112){
   afficher_orbite = !afficher_orbite;
 }
}

function ajouter_orbite(){
 o_mercure.visible = true;
 o_venus.visible = true;
 o_terre.visible = true;
 o_mars.visible = true;
 o_jupiter.visible = true;
 o_saturne.visible = true;
 o_uranus.visible = true;
 o_neptune.visible = true;
}

function enlever_orbite(){
 o_mercure.visible = false;
 o_venus.visible = false;
 o_terre.visible = false;
 o_mars.visible = false;
 o_jupiter.visible = false;
 o_saturne.visible = false;
 o_uranus.visible = false;
 o_neptune.visible = false;
}
/***********************************************************/
// définition du soleil   /*"Images/sol.png"*/ /*"Images/testLava.jpg"*/
  function onDocumentLetterPress(event){
    switch(event.charCode){
      // si on appui sur b on a neb et une couleur bleue
      case  98 :
      text_sol = "Images/sky.jpg";
       couleur_lum = 0x053EFA;
       break;
       // si on appui sur v on a neb et une couleur violette
       case 118 :
       text_sol = "Images/violet.jpg";
       couleur_lum = 0x7A128C;
       break;
       // c Rouge
       case 99 :
       text_sol = "Images/sun.jpg";
       couleur_lum = 0xd10c0c;
       break;
       // r même image et lumière blanche
       case 114 :
       text_sol = "Images/lavatile.jpg";
       couleur_lum = 0xffffff;
       break;
       // s
       case 115 :
       text_sol = "Images/blue.jpg";
       couleur_lum = 0x053EFA;
       break;
       // t
       case 116 :
       text_sol = "Images/red.jpg";
       couleur_lum = 0xd10c0c;
       break;
       // d
       case 100 :
       text_sol = "Images/red2.png";
       couleur_lum = 0xd10c0c;
       break;
    }

      uniforms.texture2.value = textureLoader.load(text_sol);
      uniforms.texture2.value.wrapS = uniforms.texture2.value.wrapT = THREE.RepeatWrapping;
      /*console.log(uniforms.texture2);
      console.log(uniforms.fogDensity);*/

      lightSol.color.setHex(couleur_lum);
    //  console.log(couleur_lum);
	}
