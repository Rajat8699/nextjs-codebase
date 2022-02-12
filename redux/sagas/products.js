import { call, put, takeLatest, all, putResolve } from "redux-saga/effects";
import { getProductsSuccess } from "../reducers/productsSlice";
import axios from "axios";

//getuserapi
function getProductsApi() {
	return new Promise((resolve, reject) => {
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((resp) => resolve(resp))
			.catch((err) => reject(err));
	});
}

function* getProducts() {
	try {
		const resp = yield call(getProductsApi);
		yield putResolve(getProductsSuccess(resp));
	} catch (err) {
		yield putResolve(getProductsSuccess(err));
	}
}

function* products() {
	yield all([takeLatest("products/getProducts", getProducts)]);
}
export default products;
