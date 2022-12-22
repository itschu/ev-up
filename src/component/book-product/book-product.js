import { useRef, useState } from "react";
import { useSelectedProduct } from "../../hooks/selected-product";
import { currencyFractionDigits, price } from "../../utils/faq-data";

const BookProduct = () => {
	const { selected } = useSelectedProduct();
	const [submitted, setSubmitted] = useState(false);

	const f_name = useRef(null);
	const l_name = useRef(null);
	const email = useRef(null);
	const phone_num = useRef(null);

	const submitForm = (e) => {
		e.preventDefault();

		const details = {
			firstName: f_name.current.value,
			lastName: l_name.current.value,
			email: email.current.value,
			phone: phone_num.current.value,
			billed: selected.billed,
			price: price[selected.type][selected.billed],
			type: selected.type,
		};

		const req = fetch("/api/mail", {
			method: "post",
			body: JSON.stringify(details),
		});

		setSubmitted(true);
	};

	return (
		<div className="w-full p-5 md:p-20 md:px-28">
			{!submitted ? (
				<>
					<div className="mb-10 mt-5 md:mb-20 flex flex-col">
						<h2 className="heading mt-20 md:mt-10 text-left">
							Book Product
						</h2>
					</div>
					<div className="flex flex-col-reverse md:flex-row gap-7">
						<form onSubmit={submitForm}>
							<div>
								<input
									ref={f_name}
									placeholder="First Name"
									className="input"
									required
								/>
								<input
									ref={l_name}
									placeholder="Last Name"
									className="input"
									required
								/>
							</div>

							<div className="md:mb-5">
								<input
									ref={email}
									placeholder="Email"
									className="input"
									required
								/>
								<input
									ref={phone_num}
									placeholder="Phone Number"
									className="input"
									required
								/>
							</div>

							<button
								type="Submit"
								className="mt-3 md:mt-0 border-2 px-10 py-3 border-slate-800 rounded-md font-semibold w-full"
							>
								Submit
							</button>
						</form>

						<div className="relative">
							<div className="single-contact-info ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="w-12 h-12"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
									/>
								</svg>
								<span className="ml-3 text-2xl font-extrabold">
									EV-UP{" "}
									<span className="capitalize">
										{selected.type}
									</span>
								</span>
							</div>
							<div className="single-contact-info ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="w-12 h-12"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>

								<span className="ml-3 text-2xl font-extrabold">
									{price[selected.type][
										selected.billed
									].toLocaleString("en-US", {
										maximumFractionDigits:
											currencyFractionDigits,
									})}
								</span>
							</div>
						</div>
					</div>{" "}
				</>
			) : (
				<div className="mb-10 md:mb-20 mt-36 md:mt-7 flex justify-center items-center h-3/4 md:h-64 relative">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className="w-6 h-6 absolute right-3 top-3 md:top-12 cursor-pointer"
						onClick={() => setSubmitted(false)}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>

					<p className="bg-green-400 w-full text-center py-20 rounded-xl font-bold text-xl px-5">
						We have received your request, we will contact you soon!
					</p>
				</div>
			)}
		</div>
	);
};

export default BookProduct;
