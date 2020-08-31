import Entity from "../../engine/ecs/Entity"
import SpriteC from "../components/SpriteC";
import SprBullScorpion from "../sprites/bullscorpion/SprBullScorpion";
import EntityManager from "../../engine/ecs/EntityManager";

const create = (entityManager = new EntityManager()) => {
    const eid = Entity();
    const spriteC = new SpriteC(eid, SprBullScorpion.createSprite());
    entityManager.addComponent(spriteC);
    return eid;
}

export default {
    create
}