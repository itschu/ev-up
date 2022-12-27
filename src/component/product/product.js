import { useState } from "react";
import SingleProductClassic from "../single-product-classic";
import SingleProductPremuim from "../single-product-premium";

const Product = () => {
	const [active, setActive] = useState("monthly");
	return (
		<div
			id="products"
			className="bg-blue-100 w-full p-5 md:p-20 px-6 md:px-28"
		>
			<h2 className="heading mb-10 mt-5 md:mb-20 text-center">
				Our Products
			</h2>

			<div className="mb-8">
				<span
					className={`plan ${active === "weekly" && "active"}`}
					onClick={() => setActive("weekly")}
				>
					Bi Weekly
				</span>
				<span
					className={`plan ${active === "monthly" && "active"}`}
					onClick={() => setActive("monthly")}
				>
					Monthly
				</span>
			</div>

			<div className="flex justify-center flex-col md:flex-row gap-7 md:gap-1 pb-10">
				<SingleProductClassic active={active} />
				<SingleProductPremuim active={active} />
			</div>
		</div>
	);
};

export default Product;
