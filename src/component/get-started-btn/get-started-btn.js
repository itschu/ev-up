import { useRouter } from "next/router";
import { useSelectedProduct } from "../../hooks/selected-product";

const GetStartedBtn = ({ type, active }) => {
	const { setSelected } = useSelectedProduct();
	const router = useRouter();

	const move = () => {
		setSelected({
			type,
			billed: active,
		});
		router.push("/book");
	};

	return (
		<button
			className="border-2 border-slate-600 px-8 py-2 rounded-md mt-3"
			onClick={move}
		>
			Get Started
		</button>
	);
};

export default GetStartedBtn;
