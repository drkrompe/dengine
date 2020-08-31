const subs = new Map();

const subscribe = (key, onMsg) => {
    if (!subs.has(key)) {
        subs.set(key, []);
    }
    subs.get(key).push(onMsg);
};

const unsubscribe = (key, onMsg) => {
    if (!subs.has(key)) {
        return;
    }
    subs.set(key, subs.get(key).filter(func => func !== onMsg));
}

const publish = (key, msg) => {
    if (!subs.has(key)) {
        return;
    }
    subs.get(key).forEach(func => func(msg));
}

export default {
    subscribe,
    unsubscribe,
    publish
};