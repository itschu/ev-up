import Head from "next/head";
import About from "../src/component/about";
import Faq from "../src/component/faq/faq";
import Footer from "../src/component/footer";
import Hero from "../src/component/hero";
import Nav from "../src/component/nav";
import Product from "../src/component/product";

export default function Home() {
	return (
		<>
			<Head>
				<title>EV UP | Home</title>
			</Head>
			<Nav />
			<Hero />
			{/* <About /> */}
			<Product />
			{/* <Faq /> */}
			<Footer />
		</>
	);
}
