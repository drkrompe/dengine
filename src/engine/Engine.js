import Scene from "./rendering/scene/Scene";
import Camera from './rendering/camera/Camera';
import Render from './rendering/render/Render';

class Subscriptions {
    subs = new Map();

    subscribe = (key, onMsg) => {
        if (!this.subs.has(key)) {
            this.subs.set(key, []);
        }
        this.subs.get(key).push(onMsg);
    };

    unsubscribe = (key, onMsg) => {
        if (!this.subs.has(key)) {
            return;
        }
        this.subs.set(key, this.subs.get(key).filter(func => func !== onMsg));
    }

    publish = (key, msg) => {
        if (!this.subs.has(key)) {
            return;
        }
        this.subs.get(key).forEach(func => func(msg));
    }
}

const animateSubs = new Subscriptions();
const tickSubs = new Subscriptions();

export default {
    Scene,
    Camera,
    Render,
    animateSubscribe: animateSubs.subscribe,
    animateUnsubscribe: animateSubs.unsubscribe,
    animatePublish: animateSubs.publish,
    tickSubscribe: tickSubs.subscribe,
    tickUnsubscribe: tickSubs.unsubscribe,
    tickPublish: tickSubs.publish,
}