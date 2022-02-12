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
		},
		getProductsSuccess: (state, action) => {
			console.log(action?.payload?.status, "action");
			if (action?.payload?.status === 200) {
				alert("hi");
				toast("done");
			}
			return { ...state, list: action.payload };
		},
	},
});
export const { getProducts, getProductsFailed, getProductsSuccess } =
	productsSlice.actions;
export default productsSlice.reducer;
