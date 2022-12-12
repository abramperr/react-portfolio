import * as THREE from 'three';
import React from 'react';
import '../index.css';
const Three = () => {
    const scene =new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth /window.innerHeight,0.1 ,1000)
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg'),
    })
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);
    
    return (
    <div>
        renderer.render(scene, camera);
    </div>
  )
}

export default Three;