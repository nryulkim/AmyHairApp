export const GET_COLLECTION = 'GET_COLLECTION';
export const RECEIVE_COLLECTION = 'RECEIVE_COLLECTION';
export const GET_ALL_COLLECTIONS = 'GET_ALL_COLLECTIONS';
export const RECEIVE_ALL_COLLECTIONS = 'RECEIVE_ALL_COLLECTIONS';

export function getCollection(collection_id){
  return({
    type: GET_COLLECTION,
    collection_id
  });
}

export function receiveCollection(collection){
  return({
    type: RECEIVE_COLLECTION,
    collection
  });
}

export function getAllCollections(){
  return({
    type: GET_ALL_COLLECTIONS
  });
}

export function receiveAllCollections(collections){
  return({
    type: RECEIVE_ALL_COLLECTIONS,
    collections
  });
}
