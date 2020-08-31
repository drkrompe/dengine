import { v1 as uuidv1 } from 'uuid';


export default () => {
    return `entity-${uuidv1()}`;
}
