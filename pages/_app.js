import "../styles/globals.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../redux/reducers/productsSlice";
import store from "../redux/store";
import { Toaster } from "react-hot-toast";
function App({ Component, pageProps }) {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProducts());
	}, []);

	const state = useSelector((state) => state);
	console.log(state, "state");

	return (
		<>
			<Toaster />
			<Component {...pageProps} />
		</>
	);
}

App.getInitialProps = async ({ Component, ctx }) => {
	const pageProps =
		Component && Component.getInitialProps
			? await Component.getInitialProps(ctx)
			: {};
	return {
		pageProps,
		namespacesRequired: ["common"],
	};
};

export default store.withRedux(App);
