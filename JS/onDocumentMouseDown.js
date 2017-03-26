function onDocumentMouseDown(event){
// normalized device coordinates
var mouse = {};
mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
raycaster = new THREE.Raycaster();
var vector = new THREE.Vector3( mouse.x, mouse.y, 1 ).unproject( camera );
raycaster.set( camera.position, vector.sub( camera.position ).normalize() );
var intersects = raycaster.intersectObjects( scene.children, true);
INTERSECTED = intersects[ 0 ].object;

// Si on clique sur le Soleil
if(INTERSECTED == soleil){
  soleil_center = true;
  terre_center = false;
  lune_center = false;
  mercure_center = false;
  venus_center = false;
  mars_center = false;
  jupiter_center = false;
  saturne_center = false;
  uranus_center = false;
  neptune_center = false;
  controls.target.copy( soleil.getWorldPosition() );
  agrandir = true;

  // Si on clique sur la Terre
}else if(INTERSECTED == terre){
  soleil_center = false;
  terre_center = true;
  lune_center = false;
  mercure_center = false;
  venus_center = false;
  mars_center = false;
  jupiter_center = false;
  saturne_center = false;
  uranus_center = false;
  neptune_center = false;
  controls.target.copy( terre.getWorldPosition() );
  //terre.visible = false;

  // Si on clique sur la Lune
}else if(INTERSECTED == lune){
  soleil_center = false;
  terre_center = false;
  lune_center = true;
  mercure_center = false;
  venus_center = false;
  mars_center = false;
  jupiter_center = false;
  saturne_center = false;
  uranus_center = false;
  neptune_center = false;
  controls.target.copy(lune.getWorldPosition());
}else if(INTERSECTED == mercure){
  soleil_center = false;
  terre_center = false;
  lune_center = false;
  mercure_center = true;
  venus_center = false;
  mars_center = false;
  jupiter_center = false;
  saturne_center = false;
  uranus_center = false;
  neptune_center = false;
  controls.target.copy(mercure.getWorldPosition());
}else if(INTERSECTED == venus){
  soleil_center = false;
  terre_center = false;
  lune_center = false;
  mercure_center = false;
  venus_center = true;
  mars_center = false;
  jupiter_center = false;
  saturne_center = false;
  uranus_center = false;
  neptune_center = false;
  controls.target.copy(venus.getWorldPosition());
}else if(INTERSECTED == mars){
  soleil_center = false;
  terre_center = false;
  lune_center = false;
  mercure_center = false;
  venus_center = false;
  mars_center = true;
  jupiter_center = false;
  saturne_center = false;
  uranus_center = false;
  neptune_center = false;
  controls.target.copy(mars.getWorldPosition());
}else if(INTERSECTED == jupiter){
  soleil_center = false;
  terre_center = false;
  lune_center = false;
  mercure_center = false;
  venus_center = false;
  mars_center = false;
  jupiter_center = true;
  saturne_center = false;
  uranus_center = false;
  neptune_center = false;
  controls.target.copy(jupiter.getWorldPosition());
}else if(INTERSECTED == saturne){
  soleil_center = false;
  terre_center = false;
  lune_center = false;
  mercure_center = false;
  venus_center = false;
  mars_center = false;
  jupiter_center = false;
  saturne_center = true;
  uranus_center = false;
  neptune_center = false;
  controls.target.copy(saturne.getWorldPosition());
}else if(INTERSECTED == uranus){
  soleil_center = false;
  terre_center = false;
  lune_center = false;
  mercure_center = false;
  venus_center = false;
  mars_center = false;
  jupiter_center = false;
  saturne_center = false;
  uranus_center = true;
  neptune_center = false;
  controls.target.copy(uranus.getWorldPosition());
}else if(INTERSECTED == neptune){
  soleil_center = false;
  terre_center = false;
  lune_center = false;
  mercure_center = false;
  venus_center = false;
  mars_center = false;
  jupiter_center = false;
  saturne_center = false;
  uranus_center = false;
  neptune_center = true;
  controls.target.copy(neptune.getWorldPosition());
}
}
