import { createStore } from "redux";
import dataReducer from "../reducer/dataReducer";

const store = createStore(dataReducer);

export default store;
