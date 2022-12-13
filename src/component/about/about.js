import SingleFeature from "../single-feature/single-feature";

const About = () => {
	return (
		<div className="w-full p-5 md:p-20 md:px-28" id="about">
			<div className="mb-10 mt-5 md:mb-20 flex flex-col items-center">
				<h2 className="heading mb-5 mt-5 text-center">Features</h2>
				<p className="text-center" style={{ maxWidth: "88ch" }}>
					lorem donec nec justo eget felis facilisis fermentum.
					Aliquam porttitor mauris sit amet lorem donec nec justo eget
					felis facilisis fermentum. Aliquam porttitor mauris sit
				</p>
			</div>
			<div className="flex flex-col md:flex-row justify-center">
				<SingleFeature
					title={"Zero Emmission"}
					text={
						"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet"
					}
					icon={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="w-10 h-10 z-10 relative text-white"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
							/>
						</svg>
					}
				/>

				<SingleFeature
					title={"Zero Emmission"}
					text={
						"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet"
					}
					icon={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="w-10 h-10 z-10 relative text-white"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
							/>
						</svg>
					}
				/>

				<SingleFeature
					title={"Zero Emmission"}
					text={
						"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet"
					}
					icon={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="w-10 h-10 z-10 relative text-white"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
							/>
						</svg>
					}
				/>

				<SingleFeature
					title={"Zero Emmission"}
					text={
						"Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet"
					}
					icon={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="w-10 h-10 z-10 relative text-white"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
							/>
						</svg>
					}
				/>
			</div>
		</div>
	);
};

export default About;
