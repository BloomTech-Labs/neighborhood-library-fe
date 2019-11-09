import * as types from '../actions/index.js';

const googleBookApiReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.START_BOOK_FETCH:
            return 
        default:
            return state;
    }
}

export default googleBookApiReducer;