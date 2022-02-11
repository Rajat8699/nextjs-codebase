import { combineReducers } from "redux";
import productsSlice from "./productsSlice";
const rootReducer = combineReducers({
	productsSlice,
});

export default rootReducer;
