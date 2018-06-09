export const GAME_STATE = 'GAME_STATE';
export const QUESTION_NUM = 'QUESTION_NUM';
export const WORD_NUM = 'WORD_NUM';

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
