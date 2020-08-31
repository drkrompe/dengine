import * as THREE from 'three';
import Render from '../render/Render';

// const width = 2
// const height = 2
// const viewSize = height
// const aspectRatio = width / height;
// const viewPort = {
//     viewSize,
//     aspectRatio,
//     left: (-aspectRatio * viewSize) / 2,
//     right: (aspectRatio * viewSize) / 2,
//     top: viewSize / 2,
//     bottom: -viewSize / 2,
//     near: -100,
//     far: 100
// };

// const camera = new THREE.OrthographicCamera(
//     viewPort.left,
//     viewPort.right,
//     viewPort.top,
//     viewPort.bottom,
//     viewPort.near,
//     viewPort.far
// );


const viewSize = 2;
const width = 1400;
const height = 700;
const aspectRatio = width / height;
const Camera = new THREE.OrthographicCamera(
    -aspectRatio * viewSize * 0.5,
    aspectRatio * viewSize * 0.5,
    viewSize * 0.5,
    -viewSize * 0.5,
    -100, 100
);

Render.setSize(width, height);

export default Camera;