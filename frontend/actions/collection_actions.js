export const GET_PRODUCT = 'GET_PRODUCT';
export const RECEIVE_COLLECTION = 'RECEIVE_COLLECTION';
export const GET_ALL_COLLECTIONS = 'GET_ALL_COLLECTIONS';
export const RECEIVE_ALL_COLLECTIONS = 'RECEIVE_ALL_COLLECTIONS';
export const DOWNLOAD_ALL_COLLECTIONS = 'DOWNLOAD_ALL_COLLECTIONS';

export function getProduct(product_name){
  return({
    type: GET_PRODUCT,
    product_name
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

export function downloadAllCollections(collections){
  return({
    type: DOWNLOAD_ALL_COLLECTIONS,
    collections
  });
}
