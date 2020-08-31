import * as THREE from 'three';

const scene = new THREE.Scene();

const addWorldObject = (worldObject) => {
    scene.add(worldObject.sceneObject);
}

const removeWorldObject = (worldObject) => {
    scene.remove(worldObject.sceneObject);
}

const Scene = {
    scene,
    addWorldObject,
    removeWorldObject
}

export default Scene;