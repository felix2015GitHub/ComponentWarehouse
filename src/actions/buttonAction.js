import {
    BUTTON_ADD,
    BUTTON_REDUCE
} from './types';

export const buttonAdd = () => {
    return {
        type: BUTTON_ADD
    }
}

export const buttonReduce = () => {
    return {
        type: BUTTON_REDUCE
    }
}
