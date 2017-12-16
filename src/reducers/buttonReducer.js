import {
    BUTTON_ADD,
    BUTTON_REDUCE
} from '../actions/types';

const INIT_STATE = {
  	count: 0
};

export default function ButtonReducer(state = INIT_STATE, action) {
  	switch (action.type) {
      	case BUTTON_ADD:
      		  return { ...state, count: state.count+1};
        case BUTTON_REDUCE:
      		  return { ...state, count: state.count-1};
      	default:
      		  return state;
  	}
}
