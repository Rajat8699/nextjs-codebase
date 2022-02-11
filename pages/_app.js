import "../styles/globals.css";
import { Provider, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "../redux/reducers/rootReducer";
import rootSaga from "../redux/sagas/rootSaga";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const sagaMiddleware = createSagaMiddleware();

function MyApp({ Component, pageProps }) {
	const store = configureStore({
		reducer: rootReducer,
		middleware: [sagaMiddleware],
	});

	sagaMiddleware.run(rootSaga);

	return (
		<Provider store={store}>
			<Content Component={Component} pageProps={pageProps} />
		</Provider>
	);
}

const Content = ({ Component, pageProps }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({ type: "GET_PRODUCTS" });
	}, []);

	const state = useSelector((state) => state);
	console.log(state, "state");
	return <Component {...pageProps} />;
};

export default MyApp;
