import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui'; 

// Set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// document.body.style.backgroundImage = `url(${Star})`;
// Set up the camera
const camera = new THREE.PerspectiveCamera(
   75,
   window.innerWidth / window.innerHeight,
   1,
   1000
);
const orbit = new OrbitControls(camera, renderer.domElement)
// Set up the scene
let scene = new THREE.Scene();
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

// Set the camera position
camera.position.set(-10, 20, 20)
orbit.update();
const boxGeometry = new THREE.BoxGeometry(5,5,5);
const Material = new THREE.MeshStandardMaterial();
Material.roughness = 0.4
const box = new THREE.Mesh(boxGeometry, Material);
scene.add(box);
box.position.y = 2;

   const planeGeomentry = new THREE.PlaneGeometry(50,50);
   // const planeMaterial = new THREE.MeshPhongMaterial({color:'white'})
   const plane = new THREE.Mesh(planeGeomentry, Material);
   scene.add(plane);
   plane.rotation.x = -0.5 * Math.PI;
//spere 
const sphereGeomentry = new THREE.SphereGeometry(4,50);
// const sphreMaterial = new THREE.MeshBasicMaterial({color:'white', wireframe: false})
const sphere = new THREE.Mesh(sphereGeomentry, Material);
scene.add(sphere);
sphere.position.set(-10, 10 , 0)

var x=0;
var steps = 0.05;

const boxesGeomentry = new THREE.TorusGeometry();
// const boxesMaterial = new THREE.MeshBasicMaterial({color:'white'})
const box1 = new THREE.Mesh( boxesGeomentry,Material);
scene.add(box1);
box1.position.set(15, 10 , 0)


   const gridHelper = new THREE.GridHelper(30);
   scene.add(gridHelper);


   const ambientLight = new THREE.AmbientLight(0xfffffff , 0.5)
   scene.add(ambientLight)
  
   

   // const pointlight = new THREE.PointLight(0xffffff, 0.5)
   // pointlight.position.x = 2;
   // pointlight.position.y = 3;
   // pointlight.position.z = 4;

   // scene.add(pointlight)




// gui 
// const gui = new dat.GUI();
// const options ={
//     sphereColor :'green'
// };
// gui.addColor(options, 'spheecolor').onChange(function(e){
//     sphere.material.color.set(e);
// });


function animation(time){
    box.rotation.x = time / 1000;
    box.rotation.y = time/ 1000;
    // Render the scene

    sphere.rotation.x += steps;
renderer.render(scene, camera);
}
// animation
renderer.setAnimationLoop(animation);