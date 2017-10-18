
import { createStore } from 'redux'
import RootReducer from '../reducers/root_reducer';
import RootMiddleware from '../middlewares/root_middleware';
import merge from 'lodash.merge'

const _default = {
  page: {
    active: 'list'
  },
  collections: {
    active: -1,
    list: {}
  }
}


export default (state = {}) => {
  state = merge(_default, state);

  return createStore(
    RootReducer,
    state,
    RootMiddleware
  );
};
