import React, { useEffect } from 'react';
import Game from '../game/Game';

export default (props) => {
    const {
        Scene,
        Camera,
        Render
    } = Game.engine;

    const animate = (now) => {
        requestAnimationFrame(animate);
        Game.sceneData.onAnimate();
        Render.render(Scene.scene, Camera);
    }

    const onScreenResize = () => {
        const boundingRectInfo = document
            .getElementById('renderer')
            .getBoundingClientRect();
        Camera.aspect = boundingRectInfo.width / boundingRectInfo.height;
        Camera.updateProjectionMatrix();
        Render.setSize(boundingRectInfo.width, boundingRectInfo.height);
    };

    useEffect(() => {
        Game.sceneData.init()
        document.getElementById('renderer').append(Render.domElement)
        window.addEventListener('resize', onScreenResize);
        animate();
        onScreenResize();
        return () => {
            window.removeEventListener('resize', onScreenResize);
        };
    });

    return (
        <div
            id='renderer'
            style={{
                width: '100%',
                height: '100%'
            }}
        />
    );
}