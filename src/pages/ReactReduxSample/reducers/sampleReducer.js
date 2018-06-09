import {
    BUTTON_ADD,
    BUTTON_REDUCE,
    STRING_UPDATE
} from '../actions/types';

const INIT_STATE = {
  	count: 0,
    text: ''
};

export default function ButtonReducer(state = INIT_STATE, action) {
  	switch (action.type) {
      	case BUTTON_ADD:
      		  return { ...state, count: state.count+1};
        case BUTTON_REDUCE:
      		  return { ...state, count: state.count-1};
        case STRING_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value }
      	default:
      		  return state;
  	}
}
