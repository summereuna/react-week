import { combineReducers, createStore } from "redux";
import todos from "../modules/todos";

// store 설정
const rootReducer = combineReducers({
  todos,
});
const store = createStore(rootReducer);

export default store;
