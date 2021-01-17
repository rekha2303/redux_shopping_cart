import { creatStore, combineReducers } from "redux";
import ProductsReducer from "./ProductsReducer";

const root = combineReducers({ ProductsReducer });

const store = creatStore(root);
export default store;
