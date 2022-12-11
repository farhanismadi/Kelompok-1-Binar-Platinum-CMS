import { combineReducers } from "redux";
import { userData } from "./ex-reducer-data";
import { counter } from "./ex-reducer";
import { dataList } from "./lesson-reducer";

export default combineReducers({
  //reducers Combine
  counter,
  userData,
  dataList,
});
