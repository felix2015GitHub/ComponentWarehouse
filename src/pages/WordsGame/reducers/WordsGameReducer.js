import {
    GAME_STATE,
    QUESTION_NUM,
    WORD_NUM,
} from '../actions/types';

const INIT_STATE = {
    start: false,
    questionNum: 0,
    wordNum: 0,
};

export default function WordsGameReducer(state = INIT_STATE, action) {
    switch (action.type) {
        case GAME_STATE:
            return { ...state, start: !state.start};
        case QUESTION_NUM:
            return { ...state, questionNum: action.payload.num};
        case WORD_NUM:
            return { ...state, wordNum: state.wordNum+1 }
        default:
            return state;
    }
}
