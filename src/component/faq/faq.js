import Image from "next/image";
import { useState } from "react";
import { Data } from "../../utils/faq-data";

const Faq = () => {
	const [clicked, setClicked] = useState(0);

	const toggle = (index) => {
		if (index === clicked) return setClicked(null);
		setClicked(index);
	};
	return (
		<div id="faq" className="min-h-screen w-full p-5 md:p-20 px-6 md:px-28">
			<div className="mb-10 mt-5 md:mb-20 flex flex-col items-center">
				<h2 className="heading mb-10 md:mb-5 text-center">
					Frequently Asked Questions
				</h2>
				<p className="text-center" style={{ maxWidth: "88ch" }}></p>
			</div>
			<div className="flex relative h-full justify-around flex-col md:flex-row gap-10 md:gap-0">
				<div className="relative ">
					{Data.map((item, index) => (
						<div key={index} className="shadow-lg">
							<div
								className="flex justify-between items-center w-full text-center cursor-pointer"
								onClick={() => toggle(index)}
								style={{ background: "#272727", color: "#fff" }}
							>
								<h1 className="p-8 text-xl font-semibold">
									{item.question}
								</h1>
								{clicked !== index ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-6 h-6 mr-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 4.5v15m7.5-7.5h-15"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-6 h-6 mr-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19.5 12h-15"
										/>
									</svg>
								)}
							</div>
							{clicked === index && (
								<div className="py-5 px-10 bg-blue-100">
									<p>{item.answer}</p>
								</div>
							)}
						</div>
					))}
				</div>

				<div className="relative w-full md:w-1/3 h-72 md:h-80">
					<Image
						fill={true}
						src={"/assets/images/car-4.jpg"}
						alt="faq-image"
					/>
				</div>
			</div>
		</div>
	);
};

export default Faq;
