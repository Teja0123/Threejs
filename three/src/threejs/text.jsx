import * as THREE from 'three';
import React, { useEffect, useRef } from "react";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import Three from './three';
import { MatcapTexture } from '@react-three/drei';
import mouliimg from "./solar/imagesofsolar/mouli.jpg"



const Text = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        // Scene
        const scene = new THREE.Scene();

        // Size
        const size = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        // const axes = new THREE.AxesHelper(10)
        // scene.add(axes)

        // Geometry and Material
      const textureLoarder = new THREE.TextureLoader()
      const mouli = textureLoarder.load('./solar/imagesofsolar/mouli.jpg')
    //   const MatcapTexture = textureLoarder.load(img)


        // Font Loader
        const fontLoader = new FontLoader();
        fontLoader.load(
            'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
            (font) => {
                const textGeometry = new TextGeometry('DESIGNING WORK', {
                    font: font,
                    size:0.5,
                    height: 0.2,
                    depth:  0.02,                  
                    bevelEnabled: true,
                    bevelThickness: 0.03,
                    bevelSize: 0.02,
                    bevelOffset: 0,
                    bevelSegments: 4
                });

        
                textGeometry.center()
                
                const textMaterial = new THREE.MeshMatcapMaterial({color:'#FF9800'});
                // textMaterial.wireframe= true
                const textMesh = new THREE.Mesh(textGeometry, textMaterial);
                scene.add(textMesh);
                for(let i = 0; i<=100; i++) {



                    const cudegeometry = new THREE.BoxGeometry(1,1,1)
                    const cudematerial = new THREE.MeshBasicMaterial({'#4CAF50'} )
                    const cude = new THREE.Mesh(cudegeometry, cudematerial)
                    scene.add(cude)
                    
                    cude.position.x = (Math.random() - 0.5)*  20 
                    cude.position.y = (Math.random() - 0.5)*  20
                    cude.position.z = (Math.random() - 0.5)*  20    
                    cude.rotation.x= (Math.random() * Math.PI)
                    cude.rotation.y= (Math.random() * Math.PI)
                    const cudscale = Math.random()
                    cude.scale.set(cudscale , cudscale ,cudscale)
                    
                    
                
                    
                     



                    const donutgeometry = new THREE.TorusGeometry(0.3,0.2, 20,40)
                    const donutmaterial = new THREE.MeshBasicMaterial({color:'#3F51B5'})
                    const donut = new THREE.Mesh(donutgeometry, donutmaterial)
                    scene.add(donut)
                     
                   
                    donut.position.x = (Math.random() - 0.5)*10
                    donut.position.y = (Math.random() - 0.5)*10
                    donut.position.z = (Math.random() - 0.5)*10
                    donut.rotation.x= Math.random() * 5
                    donut.rotation.y= Math.random() * 5
                    const scale = Math.random()
                    donut.scale.set(scale , scale ,scale)
                    

                }
                scene.background = new THREE.Color('#121212')
            },
            undefined,
            (error) => {
                console.error('Error loading font:', error);
            }
        );
       
        

        // Camera
        const camera = new THREE.PerspectiveCamera(50, size.width / size.height, 1, 1000);
        camera.position.set(0, 2, 10);
        scene.add(camera);

        // Renderer
        const renderer = new THREE.WebGLRenderer({ canvas });
        renderer.setSize(size.width, size.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Controls
        const controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;

        // Resize Handling
        window.addEventListener('resize', () => {
            size.width = window.innerWidth;
            size.height = window.innerHeight;

            // Update camera
            camera.aspect = size.width / size.height;
            camera.updateProjectionMatrix();

            // Update renderer
            renderer.setSize(size.width, size.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });

        // Fullscreen Handling
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

        // Animation loop
        const tick = () => {
            controls.update();
            renderer.render(scene, camera);
            requestAnimationFrame(tick);
        };

        tick();

        // Cleanup on component unmount
        return () => {
            renderer.dispose();
            controls.dispose();
            window.removeEventListener('resize', null);
            window.removeEventListener('dblclick', null);
        };
    }, []);

    return (
        <>
            <canvas ref={canvasRef} className='webgl'></canvas>
        </>
    );
};

export default Text;
