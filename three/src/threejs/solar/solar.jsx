import React, { useEffect } from 'react'
import * as THREE from 'three'
import '../../threejs/three.css'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Three from '../three';
import sunimg1 from './imagesofsolar/sun.jpg'
import venusimg1 from './imagesofsolar/venus.jpg'
import marsimg1 from './imagesofsolar/mars.jpg'
import jupiterimg1 from './imagesofsolar/jupiter.jpg'
import earthimg1 from './imagesofsolar/earth.jpg'
import uranusimg1 from './imagesofsolar/uranus.jpg'
import saturnimg1 from './imagesofsolar/saturn.jpg'
import mercuryimg1 from './imagesofsolar/mercury.jpg'
import saturnringimg1 from './imagesofsolar/saturn ring.png'
import uranusringimg1 from './imagesofsolar/uranus ring.png'
import starsimg1 from './imagesofsolar/stars.jpg'

export function Solar () {
    useEffect(() =>{
        const canvas = document.querySelector('canvas.webgl')
        const scene = new THREE.Scene()

        //size
        const size = {
            width:window.innerWidth,
            height:window.innerHeight
        };

        // camera
        const camera = new THREE.PerspectiveCamera(100, size.width / size.height, 1 , 1000)
        scene.add(camera)
        camera.position.set(-90,140,140);

        // renderer
        const renderer = new THREE.WebGLRenderer({
            canvas:canvas
        });
        renderer.setSize(size.width, size.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        //texture
        const textureLoader = new THREE.TextureLoader();
        const sunimg = textureLoader.load(sunimg1);
        const venusimg = textureLoader.load(venusimg1);
        const marsimg = textureLoader.load(marsimg1);
        const mercuryimg = textureLoader.load(mercuryimg1);
        const jupiterimg = textureLoader.load(jupiterimg1);
        
        const earthimg = textureLoader.load(earthimg1);
        const uranusimg = textureLoader.load(uranusimg1);
        const saturnimg = textureLoader.load(saturnimg1);
        const saturnringimg = textureLoader.load(saturnringimg1);
        const uranusringimg = textureLoader.load(uranusringimg1);
        // const starsimg = textureLoader.load('/imagesofsolar/stars.jpg');

        const cubetextureloader = new THREE.CubeTextureLoader();
        const cubeTexture = cubetextureloader.load([
            
           starsimg1,
           starsimg1,
           starsimg1,
           starsimg1,
           starsimg1,
           starsimg1
          
        ]);

        // Set the background
        scene.background = cubeTexture;

        // light
        const pointlight = new THREE.PointLight(0xffffff, 20, 3000)
        scene.add(pointlight);

        //object sun 1 
        const sungeometry = new THREE.SphereGeometry(25,40,40);
        const sunmaterial = new THREE.MeshBasicMaterial({map: sunimg});
        const sun = new THREE.Mesh(sungeometry, sunmaterial);
        scene.add(sun);

        //object mercury 2 
        const mercurygeometry = new THREE.SphereGeometry(8,40,40);
        const mercurymaterial = new THREE.MeshBasicMaterial({map: mercuryimg});
        const mercury = new THREE.Mesh(mercurygeometry, mercurymaterial);


        //3d object for mercury orbit
        const mercuryobject = new THREE.Object3D();
        mercuryobject.add(mercury);
        mercury.position.x = 40;
        scene.add(mercuryobject)
       
       // object venus 3 
const venusgeometry = new THREE.SphereGeometry(15,40,40)
const venusmaterial = new THREE.MeshBasicMaterial({map: venusimg})
const venus = new THREE.Mesh(venusgeometry, venusmaterial)
const venusobject = new THREE.Object3D()

venusobject.add(venus)
venus.position.x = 70;
scene.add(venusobject);
//earth 4 
const earthgeometry = new THREE.SphereGeometry(16,20,20)
const earthmaterial = new THREE.MeshBasicMaterial({map: earthimg})
const earth = new THREE.Mesh(earthgeometry, earthmaterial)
const earthobject = new THREE.Object3D();
earthobject.add(earth);
earth.position.x =110;
scene.add(earthobject)
//mars 5 
const marsgeometry = new THREE.SphereGeometry(14,20,20)
const marsmaterial = new THREE.MeshBasicMaterial({map: marsimg})
const mars = new THREE.Mesh(marsgeometry, marsmaterial)
const marsobject = new THREE.Object3D();
marsobject.add(mars);
mars.position.x =150;
scene.add(marsobject)
//jupiter 6 
const jupitergeometry = new THREE.SphereGeometry(20,40,40)
const jupitermaterial = new THREE.MeshBasicMaterial({map: jupiterimg})
const jupiter = new THREE.Mesh(jupitergeometry, jupitermaterial)
const jupiterobject = new THREE.Object3D();
jupiterobject.add(jupiter);
jupiter.position.x =180;
scene.add(jupiterobject)
//satur 7 
const saturgeometry = new THREE.SphereGeometry(16,20,20)
const saturmaterial = new THREE.MeshBasicMaterial({map: saturnimg})
const satur = new THREE.Mesh(saturgeometry, saturmaterial)
const saturobject = new THREE.Object3D();
saturobject.add(satur);
satur.position.x =250;
scene.add(saturobject)
//saturring 
const saturringgeometry = new THREE.RingGeometry(20,40,40)
const saturringmaterial = new THREE.MeshBasicMaterial({map: saturnringimg, 
    side: THREE.DoubleSide})
const saturring = new THREE.Mesh(saturringgeometry, saturringmaterial)
saturobject.add(saturring);
saturring.position.x =250;
saturring.rotateX(20)

//


//uranus
const uranusgeometry = new THREE.SphereGeometry(18,20,20)
const uranusmaterial = new THREE.MeshBasicMaterial({map: uranusimg})
const uranus = new THREE.Mesh(uranusgeometry, uranusmaterial)
const uranusobject = new THREE.Object3D();
uranusobject.add(uranus);
uranus.position.x =350;
scene.add(uranusobject)
//uransring 
const uranusringgeometry = new THREE.RingGeometry(20,40,40)
const uranusringmaterial = new THREE.MeshBasicMaterial({map: uranusringimg, 
    side: THREE.DoubleSide})
const uranusring = new THREE.Mesh(uranusringgeometry, uranusringmaterial)
uranusobject.add(uranusring);
uranusring.position.x =350; 
uranusring.rotateX(20)


        //controls 
        const controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;

        //responsive or resizing 
        window.addEventListener('resize', () =>{
            size.width = window.innerWidth;
            size.height = window.innerHeight;

            //update camera
            camera.aspect = size.width / size.height;
            camera.updateProjectionMatrix();

            //update renderer
            renderer.setSize(size.width, size.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });

        //fullscreen handling
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

        //animation
        function tick(){
            //animation RAF
            window.requestAnimationFrame(tick);
            //render
            renderer.render(scene, camera);
            //update controls 
            controls.update();
            sun.rotateY(0.0004);
            mercuryobject.rotateY(0.0009);
           
            venusobject.rotateY(0.00012);
            earthobject.rotateY(0.00019);
            marsobject.rotateY(0.0001);
            jupiterobject.rotateY(0.00002);
            saturobject.rotateY(0.00001);
            uranusobject.rotateY(0.00001);
            // other planets rotation logic...
        }

        renderer.setAnimationLoop(tick);

    }, []);

    return (
        
        <canvas className='webgl'></canvas>
    );
}
