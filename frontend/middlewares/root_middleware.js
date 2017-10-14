import { applyMiddleware } from 'redux';
import CollectionMiddleware from './collection_middleware';

export default applyMiddleware(
  CollectionMiddleware
);
