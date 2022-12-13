import BookProduct from "../src/component/book-product";
import Footer from "../src/component/footer";
import Nav from "../src/component/nav";
import Head from "next/head";

export default function Book() {
	return (
		<>
			<Head>
				<title>EV UP | Book Product</title>
			</Head>
			<Nav />
			<BookProduct />
			<Footer />
		</>
	);
}
