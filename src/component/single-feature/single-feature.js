const SingleFeature = ({ title, text, icon }) => {
	return (
		<div className="mx-5 flex flex-col items-center mb-10">
			<div className="mb-4 bg-blue-200 rounded-full p-9 relative">
				<div
					className="bg-blue-400 absolute rounded-full"
					style={{ top: 7, left: 7, right: 7, bottom: 7 }}
				/>
				<div
					className="bg-slate-700 absolute rounded-full"
					style={{ top: 14, left: 14, right: 14, bottom: 14 }}
				/>
				{icon}
			</div>
			<div className="flex flex-col items-center">
				<h3 className="font-bold text-xl">{title}</h3>
				<p className="text-center leading-7 text-slate-700">{text}</p>
			</div>
		</div>
	);
};

export default SingleFeature;
