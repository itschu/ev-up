const Button = ({ children }) => {
	return (
		<button className="text-white border px-10 py-3 rounded-md">
			{children}
		</button>
	);
};

export default Button;
