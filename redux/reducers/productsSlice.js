import { createSlice } from "@reduxjs/toolkit";
import toast, { Toaster } from "react-hot-toast";
const notify = () => toast("Here is your toast.");
const productsSlice = createSlice({
	name: "products",
	initialState: {
		list: [],
		status: null,
	},
	reducers: {
		handleGetProductsRequest(state, action) {
			console.log(action?.type, "action");
	if (action?.type) {
				notify();
			}
			return { ...state, list: action.payload };
		},
	},
});
export const { handleGetProductsRequest } = productsSlice.actions;
export default productsSlice.reducer;
