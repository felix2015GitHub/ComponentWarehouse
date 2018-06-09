import {
    GAME_STATE,
    QUESTION_NUM,
    WORD_NUM,
} from './types';

export const gameState = () => {
    return {
        type: GAME_STATE
    }
}

export const questionNum = ({num}) => {
    return {
        type: QUESTION_NUM,
        payload: {num}
    }
}

export const wordNum = () => {
    return {
        type: WORD_NUM
    }
}
