import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const productsSlice = createSlice({
	name: "products",
	initialState: {
		list: [],
		status: false,
	},
	reducers: {
		getProducts: (state) => {
			state.status = true;
		},
		getProductsFailed: (state) => {
			state.status = false;
			toast.error("Failed to get products");
		},
		getProductsSuccess: (state, action) => {
			state.status = false;
			state.list = action.payload;
			toast.success("Products loaded successfully");
		},
	},
});
export const { getProducts, getProductsFailed, getProductsSuccess } =
	productsSlice.actions;
export default productsSlice.reducer;
