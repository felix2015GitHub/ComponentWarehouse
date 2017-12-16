import {
    BUTTON_ADD,
    BUTTON_REDUCE,
    STRING_UPDATE
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

export const stringUpdate = ({ prop, value }) => {
    return {
        type: STRING_UPDATE,
        payload: { prop, value }
    }
}
