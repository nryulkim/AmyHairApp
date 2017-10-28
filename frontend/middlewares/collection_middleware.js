import * as CollectionApi from '../util/api_util';
import {
  GET_COLLECTION, GET_ALL_COLLECTIONS,
  receiveCollection, downloadAllCollections

} from '../actions/collection_actions';

export default ({ getState, dispatch }) => next => action => {
  let success = () => {
    console.log("Success callback has not been implemented.");
  };

  let errors = xhr => {
    errs = xhr.responseJSON;
    console.log(xhr);
  };

  switch(action.type){
    case(GET_COLLECTION):
      success = collection => {
        dispatch(receiveAllCollection(collection));
      }
      return next(action);

    case(GET_ALL_COLLECTIONS):
      success = collections => {
        dispatch(downloadAllCollections(collections));
      };
      CollectionApi.getAllCollections(success, errors);
      return next(action);

    default:
      return next(action);
  }
}
