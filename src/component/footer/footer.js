const Footer = () => {
	return (
		<div
			id="contact"
			className="w-full bg-blue-400 p-28 py-14 rounded-t-3xl md:rounded-t-full flex flex-col items-center mt-12 md:mt-0"
		>
			<h3 className="text-xl font-extrabold">EV - UP</h3>
			<div className="mt-5 flex gap-3">
				<img src="/assets/images/facebook.png" className="w-8 h-8" />
				<img src="/assets/images/twitter.png" className="w-8 h-8" />
			</div>
		</div>
	);
};

export default Footer;
