import {
  RECEIVE_COLLECTION, RECEIVE_ALL_COLLECTIONS, DOWNLOAD_ALL_COLLECTIONS
} from '../actions/collection_actions';
import merge from "lodash.merge";
import { AsyncStorage } from 'react-native';

defaultState = {
  active: -1,
  items: {}
}

async function storeData(collections){
  try {
    await AsyncStorage.setItem('@amystore:collections', JSON.stringify(collections));
  } catch (error) {
    console.log(error);
  }
}

export default (state = defaultState, action) => {
  let newState = merge({}, state);
  const newCollections = action.collections ? action.collections : {};

  switch(action.type){
    case RECEIVE_COLLECTION:
      newState.active = action.collection_id;
      return newState;

    case DOWNLOAD_ALL_COLLECTIONS:
      newState.items = newCollections;
      storeData(newCollections);
      return newState;

    case RECEIVE_ALL_COLLECTIONS:
      newState.items = newCollections;
      return newState;

    default:
      return state;
  }
};
