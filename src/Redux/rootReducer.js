import { combineReducers } from "redux";

import { newsReducer } from "./Reducer/index";

const rootReducer = combineReducers({
  newsReducer: newsReducer,
});

export default rootReducer;
