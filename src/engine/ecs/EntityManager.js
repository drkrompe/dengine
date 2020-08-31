import Component from "./Component";

export default class EntityManager {

    constructor(debug = false) {
        this.typeToComponents = new Map();
        this.debug = debug;
    }

    // Get Components
    getComponent(type = "", eid = "") {
        this.debug && console.log("getComponent", type, eid);
        const compMap = this.typeToComponents.get(type);
        if (compMap === undefined) {
            return undefined;
        }
        return compMap.get(eid);
    }

    getComponents(type = "") {
        this.debug && console.log("getComponents", type);
        return this.typeToComponents.get(type)
    }

    // Add Components
    addComponent(component = new Component()) {
        this.debug && console.log("addComponent", component);
        let componentGroupMap = this.typeToComponents.get(component.type);
        if (componentGroupMap === undefined) {
            componentGroupMap = new Map();
            this.typeToComponents.set(component.type, componentGroupMap);
        }
        componentGroupMap.set(component.eid, component);
    }

    // Remove Components
    removeComponent(component = new Component()) {
        this.debug && console.log("removeComponent", component);
        const subComponentMap = this.typeToComponents.get(component.type);
        component.onDelete();
        subComponentMap.delete(component.eid);
    }

    removeEntityComponent(type = "", eid = "") {
        this.debug && console.log("removeEntitiyComponent", type, eid);
        const comp = this.getComponent(type, eid)
        if (comp !== undefined) {
            this.removeComponent(comp);
        }
    }

    removeAllEntityComponents(eid = "") {
        this.debug && console.log("removeAllEntityComponents", eid);
        this.typeToComponents.forEach(compMap => {
            const comp = compMap.get(eid);
            if (comp !== undefined) {
                this.removeComponent(comp);
            }
        });
    }
}