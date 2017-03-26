/********************************************************** /
/                          MERCURE                          /
/***********************************************************/
var geometry = new THREE.SphereGeometry( 0.066, 200, 20)
var loader = new THREE.TextureLoader();
var texture = loader.load("Images/mercure.png");
var material = new THREE.MeshPhongMaterial({color: 0xaaaaaa,map : texture});
var mercure = new THREE.Mesh( geometry, material );
mercure.castShadow = true; //default is false
mercure.receiveShadow = true; //default

/********************************************************** /
/                          VENUS                            /
/***********************************************************/
  var geometry = new THREE.SphereGeometry( 0.815, 200, 20)
  var texture = loader.load("Images/venus.jpg");
  var material = new THREE.MeshPhongMaterial({color: 0xaaaaaa,map : texture});
  var venus = new THREE.Mesh( geometry, material );
  venus.castShadow = true; //default is false
  venus.receiveShadow = true; //default

/********************************************************** /
/                          MARS                          /
/***********************************************************/
  var geometry = new THREE.SphereGeometry( 0.107, 200, 20)
  var texture = loader.load("Images/mars.jpg");
  var material = new THREE.MeshPhongMaterial({color: 0xaaaaaa,map : texture});
  var mars = new THREE.Mesh( geometry, material );
  mars.castShadow = true; //default is false
  mars.receiveShadow = true; //default



/********************************************************** /
/                   Groupe Terre et Lune                    /
/***********************************************************/
var terre_lune = new THREE.Group();
/********************************************************** /
/                           TERRE                           /
/***********************************************************/
  var geometry = new THREE.SphereGeometry( 1.2, 200, 20);   //12 000
  var texture = loader.load("Images/map.jpg");
  var material = new THREE.MeshPhongMaterial({color: 0xaaaaaa,map : texture});
  var terre = new THREE.Mesh( geometry, material );
  terre.castShadow = true; //default is false
  terre.receiveShadow = true; //default

/********************************************************** /
/                   Groupe Lune et Lumière                  /
/***********************************************************/
  var groupe_lune = new THREE.Group();
/********************************************************** /
/                           LUNE                           /
/***********************************************************/
  var geometry2 = new THREE.SphereGeometry( 0.2, 200, 20);
  var loader2 = new THREE.TextureLoader();
  var texture2 = loader.load("Images/lune.jpg");
  var material2 = new THREE.MeshPhongMaterial({color: 0xaaaaaa,map : texture2});
  var lune = new THREE.Mesh( geometry2, material2 );
  lune.castShadow = true; //default is false
  lune.receiveShadow = true; //default
  //satelite.position.set(0.5, 1, 2);
/********************************************************** /
/                   Lumière de la LUNE                      /
/***********************************************************/
  /*var light2 = new THREE.SpotLight( 0x186c34, 1 );
  light2.position.set(0.5, 1, 4);
  groupe_lune.add(light2);*/

  //Mettre une option pour afficher la lumière de la lune



/********************************************************** /
/                          CERES                          /
/***********************************************************/
  var geometry = new THREE.DodecahedronGeometry(0.15, 1)
  var texture = loader.load("Images/ceres.jpg");
  var material = new THREE.MeshPhongMaterial({color: 0xaaaaaa,map : texture});
  var ceres = new THREE.Mesh( geometry, material );
  ceres.castShadow = true; //default is false
  ceres.receiveShadow = true; //default

/********************************************************** /
/                          JUPITER                          /
/***********************************************************/
  var geometry = new THREE.SphereGeometry( 14, 200, 20)
  var texture = loader.load("Images/jupiter.jpg");
  var material = new THREE.MeshPhongMaterial({color: 0xaaaaaa,map : texture});
  var jupiter = new THREE.Mesh( geometry, material );
  jupiter.castShadow = true; //default is false
  jupiter.receiveShadow = true; //default

/********************************************************** /
/              Groupe Saturne et Anneaux                    /
/***********************************************************/
  var anneaux_saturne = new THREE.Group();
/********************************************************** /
/                          SATURNE                          /
/***********************************************************/
  var geometry = new THREE.SphereGeometry( 12, 200, 20)
  var texture = loader.load("Images/saturne.jpg");
  var material = new THREE.MeshPhongMaterial({color: 0xaaaaaa,map : texture});
  var saturne = new THREE.Mesh( geometry, material );
  saturne.castShadow = true; //default is false
  saturne.receiveShadow = true; //default

/********************************************************** /
/                     ANNEAUX SATURNE                       /
/***********************************************************/
  var geometry = new THREE.TorusGeometry( 14, 1, 2, 100);
  var material = new THREE.MeshBasicMaterial( { color: 0x191919});
  var anneau_d_sat = new THREE.Mesh( geometry, material );
  anneau_d_sat.castShadow = true; //default is false
  anneau_d_sat.receiveShadow = true; //default

  var geometry = new THREE.TorusGeometry( 15.8, 0.8, 2, 100);
  var material = new THREE.MeshBasicMaterial( { color: 0x333333});
  var anneau_c_sat = new THREE.Mesh( geometry, material );
  anneau_c_sat.castShadow = true; //default is false
  anneau_c_sat.receiveShadow = true; //default

  var geometry = new THREE.TorusGeometry( 17.3, 0.6, 2, 100);
  var material = new THREE.MeshBasicMaterial( { color: 0xcccccc});
  var anneau_b_sat = new THREE.Mesh( geometry, material );
  anneau_b_sat.castShadow = true; //default is false
  anneau_b_sat.receiveShadow = true; //default

  var geometry = new THREE.TorusGeometry( 19, 1, 2, 100);
  var material = new THREE.MeshBasicMaterial( { color: 0xb2b2b2});
  var anneau_a_sat = new THREE.Mesh( geometry, material );
  anneau_a_sat.castShadow = true; //default is false
  anneau_a_sat.receiveShadow = true; //default

  var geometry = new THREE.TorusGeometry( 20.5, 0.1, 2, 100);
  var material = new THREE.MeshBasicMaterial( { color: 0xe5e5e5});
  var anneau_f_sat = new THREE.Mesh( geometry, material );
  anneau_f_sat.castShadow = true; //default is false
  anneau_f_sat.receiveShadow = true; //default
