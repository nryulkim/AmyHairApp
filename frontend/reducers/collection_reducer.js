import { RECEIVE_COLLECTION, RECEIVE_ALL_COLLECTIONS } from '../actions/collection_actions';
import merge from "lodash.merge";
import { AsyncStorage } from 'react-native';

defaultState = {}

export default (state = defaultState, action) => {
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_COLLECTION:
      newState.active = action.collection_id;
      return newState;

    case RECEIVE_ALL_COLLECTIONS:
      const newCollections = action.collections ? action.collections : {};
      newState.collections = newCollections;
      AsyncStorage.setItem('collections': newCollections);
      console.log(newCollections);
      return newState;

    default:
      return state;
  }
};
