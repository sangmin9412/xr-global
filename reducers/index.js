import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import gallery from './gallery';
import photocard from './photocard';

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE', action);
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        gallery,
        photocard,
      });
      return combineReducer(state, action);
    }
  }
}

export default rootReducer;