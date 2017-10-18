import { combineReducers } from "redux";
import CollectionReducer from "./collection_reducer";
import PageReducer from "./page_reducer"

export default combineReducers({
  collections: CollectionReducer,
  page: PageReducer
});
