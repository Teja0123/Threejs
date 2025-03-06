import * as THREE from 'three';
import React, { useEffect, useRef } from "react";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';

const Readytostart = () => {
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

        // Geometry and Material
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: true });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Camera
        const camera = new THREE.PerspectiveCamera(25, size.width / size.height, 1, 1000);
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

export default Readytostart;
