import { combineReducers } from "redux";
import Reducer from "./reducer";

const rootReducer = combineReducers({
  post: Reducer,
});

export default rootReducer;
