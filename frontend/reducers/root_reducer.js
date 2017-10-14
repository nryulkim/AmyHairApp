import { combineReducers } from "redux";
import CollectionReducer from "./collection_reducer.js";

export default combineReducers({
  collections: CollectionReducer
});
