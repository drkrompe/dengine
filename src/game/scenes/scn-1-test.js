import * as THREE from 'three';
import AnimateSpritesS from '../systems/animateSprites/AnimateSpritesS';
import EntityManager from '../../engine/ecs/EntityManager';
import BullScorpionE from '../entityFactories/BullScorpionE';
import Scene from '../../engine/rendering/scene/Scene';

const tickClock = new THREE.Clock();
const animateClock = new THREE.Clock();
const entityManager = new EntityManager();


const initEntities = [
    BullScorpionE.create(entityManager)
]

const init = () => {
    const scene = Scene.scene;
    scene.background = new THREE.Color('white')
    initEntities.forEach(obj => console.log(obj))
}

const tickSystems = [];
const animateSystems = [
    new AnimateSpritesS(entityManager)
];

const onTick = () => {
    // const timeDelta = tickClock.getDelta();
    // tickSystems.forEach(sys => {
    //     sys.systemTick(timeDelta);
    // });
}

const onAnimate = () => {
    const timeDelta = animateClock.getDelta();
    animateSystems.forEach(sys => {
        sys.systemTick(timeDelta)
    });
}

export default {
    initEntities,
    init,
    onTick,
    onAnimate,
}