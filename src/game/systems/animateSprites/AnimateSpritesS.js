import System from '../../../engine/ecs/System';

export default class AnimateSpritesS extends System {
    systemTick(timeDelta) {
        this._entityManager.getComponents("sprite").forEach(component => {
            component.sprite.animate(timeDelta);
        });
    }
}