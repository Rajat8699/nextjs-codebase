import { call, put, takeLatest, all } from "redux-saga/effects";
import { handleGetProductsRequest } from "../reducers/productsSlice";
import axios from "axios";
import { GET_PRODUCTS } from "../types";

//getuserapi
function getProductsApi(action) {
	return axios.get("https://jsonplaceholder.typicode.com/posts");
}
function* getProducts(action) {
	try {
		const resp = yield call(getProductsApi, action);
		yield put(handleGetProductsRequest(resp.data));
	} catch (resp) {
		yield put(handleGetProductsRequest(resp.data));
	}
}

function* products() {
	yield all([takeLatest(GET_PRODUCTS, getProducts)]);
}
export default products;
