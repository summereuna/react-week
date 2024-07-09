import rootReducer from "@redux/modules";
import { createStore } from "redux";

const store = createStore(rootReducer);

export default store;
