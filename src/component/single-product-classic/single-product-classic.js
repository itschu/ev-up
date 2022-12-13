import Image from "next/image";
import { currencyFractionDigits, price } from "../../utils/faq-data";
import GetStartedBtn from "../get-started-btn/get-started-btn";

const SingleProductClassic = ({ active }) => {
	return (
		<div className="w-full bg-white mr-10 rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-5">
			<div className="relative h-60 md:h-full">
				<Image
					src={"/assets/images/car-3.jpg"}
					fill={true}
					alt="ev classic car image"
				/>
			</div>
			<div className="p-5">
				<h3 className="font-bold mb-5 text-2xl capitalize">
					EV-UP Classic
					{/* ({active}) */}
				</h3>
				<p className="mb-2 font-semibold">
					&rarr; All Inclusive Insurance
				</p>
				<p className="mb-2 font-semibold">&rarr; Maintenance</p>
				<p className="mb-2 font-semibold">
					&rarr; Road Side Assistance
				</p>
				<p className="mb-2 font-semibold">&rarr; Delivery Service</p>

				<div className="flex items-center">
					<p className="font-bold text-2xl mt-2">
						$
						{price.classic[active].toLocaleString("en-US", {
							maximumFractionDigits: currencyFractionDigits,
						})}
					</p>
					&nbsp;&nbsp;
					<sub className="font-bold text-sm">+ tax</sub>
				</div>
				<GetStartedBtn type={"classic"} active={active} />
			</div>
		</div>
	);
};

export default SingleProductClassic;
