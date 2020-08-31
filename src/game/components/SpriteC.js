import Component from "../../engine/ecs/Component";
import Sprite from "../../engine/sprite/Sprite";
import Scene from "../../engine/rendering/scene/Scene";

export default class SpriteC extends Component {
    constructor(eid = "", sprite = Sprite) {
        super(eid, 'sprite');
        this.sprite = sprite;
        Scene.scene.add(this.sprite);
    }

    onDelete() {
        Scene.scene.remove(this.sprite);
    }
}