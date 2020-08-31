import SpriteAnimation from "../../../engine/sprite/SpriteAnimation";
import Sprite from "../../../engine/sprite/Sprite";
import ImageBullScorpion from './ImageBullScorpion.png'

const createSprite = () => {
    const spriteAnimation = new SpriteAnimation(1, 10, 0, 9, 0.7);
    const sprite = new Sprite(ImageBullScorpion, 1, 10, spriteAnimation);
    return sprite;
}

export default {
    createSprite
}