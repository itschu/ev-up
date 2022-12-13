import { SelectedProduct } from "../src/hooks/selected-product";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<SelectedProduct>
			<Component {...pageProps} />
		</SelectedProduct>
	);
}

export default MyApp;
