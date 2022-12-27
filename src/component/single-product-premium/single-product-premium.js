import Image from "next/image";
import { currencyFractionDigits, price } from "../../utils/faq-data";
import GetStartedBtn from "../get-started-btn";

const SingleProductPremuim = ({ active }) => {
	return (
		<div className="w-full bg-white mr-10 rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-5">
			<div className="relative h-60 md:h-full">
				<Image
					src={"/assets/images/car-1.jpg"}
					fill={true}
					alt="ev classic car image"
				/>
			</div>
			<div className="p-5">
				<h3 className="font-bold mb-5 text-2xl capitalize">
					EV-UP Premium
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
				<p className="mb-2 font-semibold">&rarr; Biweekly Detailing</p>
				<p className="mb-2 font-semibold">
					&rarr; Premium Connectivity
				</p>

				<div className="flex items-center">
					<p className="font-bold text-2xl mt-2">
						$
						{price.premium[active].toLocaleString("en-US", {
							maximumFractionDigits: currencyFractionDigits,
						})}
					</p>
					&nbsp;&nbsp;
					<sub className="font-bold text-sm">+ tax</sub>
				</div>

				<GetStartedBtn type={"premium"} active={active} />
			</div>
		</div>
	);
};

export default SingleProductPremuim;
