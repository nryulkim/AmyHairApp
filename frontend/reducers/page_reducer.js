import { CHANGE_PAGE } from '../actions/page_actions';
import merge from "lodash.merge";

defaultState = {
  page: 'list'
}

export default (state = defaultState, action) => {
  let newState = merge({}, state);

  switch(action.type){
    case CHANGE_PAGE:
      newState.active = action.page
      return newState;

    default:
      return state;
  }
};
