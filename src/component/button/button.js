import Link from "next/link";

const Button = ({ children }) => {
	return (
		<Link
			className="text-white border px-10 py-3 rounded-md"
			href={"/#products"}
		>
			{children}
		</Link>
	);
};

export default Button;
