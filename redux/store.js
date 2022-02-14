import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";
import createSagaMiddleware from "@redux-saga/core";

const makeStore = (context) => {
	const sagaMiddleware = createSagaMiddleware();

	const store = configureStore({
		reducer: rootReducer,
		middleware: [sagaMiddleware],
	});
	sagaMiddleware.run(rootSaga);
	return store;
};

export default createWrapper(makeStore, { debug: true });
