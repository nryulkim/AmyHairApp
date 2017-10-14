import { RECEIVE_COLLECTION, RECEIVE_ALL_COLLECTIONS } from '../actions/collection_actions';
import merge from "lodash.merge";

defaultState = {}

export default (state = defaultState, action) => {
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_COLLECTION:
      newState.active = action.collection_id
      return newState;

    case RECEIVE_ALL_COLLECTIONS:
      newState.collections = action.collections
      return newState;

    default:
      return state;
  }
};
