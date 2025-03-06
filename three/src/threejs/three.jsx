import * as THREE from 'three';
import React, { useEffect } from "react";
// import {OrbitalControls} from 'three/example/jsm/controls/OrbitalControls.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import gsap from 'gsap'
import * as dat from 'dat.gui'
import '../threejs/three.css'

function Three() {

    useEffect(() => {

        const canvas = document.querySelector('canvas.webgl');
        
        
        //scene
        const scene = new THREE.Scene();
        //cusor
        // const cursor = {
        //     x:0,
        //     y:0
        // }
         //mose 
        //  window.addEventListener('mousemove', (event)=>{
        //  cursor.x= event.clientX/size.width -0.5;
        //  cursor.y= event.clientY/size.width -0.5;
        //  })
//         const axesHelper = new THREE.AxesHelper(10);
//         scene.add(axesHelper);
//         const gridHelper = new THREE.GridHelper(60, 30);
//    scene.add(gridHelper);
 

        //reponsive or resizing 
        window.addEventListener('resize', () =>{
            size.width=window.innerWidth;
            size.height=window.innerHeight;

            //update
            camera.aspect = size.width / size.height;
            camera.updateProjectionMatrix();
            // update render
            renderer.setSize(size.width , size.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                });
                 // Fullscreen handling
        window.addEventListener('dblclick', () => {
            const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;
            if (!fullscreenElement) {
                if (canvas.requestFullscreen) {
                    canvas.requestFullscreen();
                } else if (canvas.webkitRequestFullscreen) {
                    canvas.webkitRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }
        });
            // const trigeometry = new THREE.ConeGeometry(5,5)
            // const trimaterial = new THREE.MeshBasicMaterial({color:'green', wireframe: true}) 
            // const triangle = new THREE.Mesh(trigeometry, trimaterial)
            // scene.add(triangle);
            // triangle.position.x = -5 * Math.PI;
         //texture
        
         const textureloarder = new THREE.TextureLoader()
          const Texture = textureloarder.load('/1.jpg')
         
        //  ColorTexture.offset.x=0.5
        //  ColorTexture.offset.y=0.5
          //cude

          // Create material first
const material = new THREE.MeshBasicMaterial();
material.metalness= 0.45
const gui = new dat.GUI();
gui.add(material, 'metalness').min(0).max(1).step(0.0001)
// material.map = Texture
// material.opacity = 0.5
material.transparent= true // Red color for the material
const sphere = new THREE.Mesh( new THREE.SphereGeometry(0.5,16,16), material)
const plane = new THREE.Mesh( new THREE.PlaneGeometry(1,1) , material)
const torus = new THREE.Mesh( new THREE.TorusGeometry(0.3,0.2,16,32) , material)
sphere.position.x= -1.5
torus.position.x= 1.5
scene.add(sphere, plane, torus)

          //   cube.position.x=0;
        //   const parameter = {
        //     color: 0xff0000
        //   }

        //   // debug
        //   const gui = new dat.GUI({closed: true, width:200} );
        //   gui.add(cube.position, 'y', -3, 3, 0.001).name('up and down')




        //   gui
        //   .addColor(parameter, 'color')
        //   .onChange(() =>{material.color.set(parameter.color)})
  
        //   gui
        //   .add(cube, 'visible') 
        //   gui
        //   .add(cube.position, 'y')
        //   .min(-3)
        //   .max(3)
        //   .step(0.01)
        //   .name('teja')
        // gui 
        // .add(material, 'wireframe')
       
       
        const size = {
            width:window.innerWidth,
            height:window.innerHeight
        };
    
        //camerA
        const camera = new THREE.PerspectiveCamera(25   , size.width / size.height, 1 , 1000 );
        scene.add(camera);
       
        camera.position.set(0, 2, 10);
        

        // controls 
     const controls = new OrbitControls(camera, canvas)
     controls.enableDamping=true ;
      
       
       
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas
        });
        renderer.setSize(size.width, size.height);
        // renderer.render(scene, camera)

    //   gsap.to(cube.position, {duration:1, delay:1, x:2})
    const clock = new THREE.Clock()
        function tick() {
            window.requestAnimationFrame(tick);

            // Increment rotation values
            // cube.rotation.x += 0.001;
            // cube.rotation.y += 0.01;
            // triangle.ratation.x +=0.01;
            
            // Render the scene
            renderer.render(scene, camera)

            //caamera
            // camera.position.x = Math.sin(cursor.x * Math.PI *2)*3  
            // camera.position.z = Math.cos(cursor.y * Math.PI *2)*3  
            // camera.position.y = cursor.y * 5 
            // camera.lookAt(cube.position);
// rotation of plane sphere torus
const clock1 = clock.getElapsedTime()
plane.rotation.x = 0.1 * clock1;
sphere.rotation.x = 0.1 * clock1;
torus.rotation.x = 0.1 * clock1;
plane.rotation.y = 0.1 * clock1;
sphere.rotation.y = 0.1 * clock1;
torus.rotation.y = 0.1 * clock1;

            //controls

            controls.update();
        }
        
        tick();
        
    }, []); // Empty dependency array to run only on mount
     
    return (
        <>
        <canvas className='webgl'></canvas>
        </>
    );
}

export default Three;




















