import Button from "../button";

const Hero = () => {
	return (
		<div className="h-screen w-full bg-slate-700 hero flex flex-col justify-center px-6 md:px-28 items-center">
			<div className="overlay" />
			<h1
				className="text-white z-10 text-2xl md:text-6xl font-bold mt-10"
				style={{ maxWidth: "20ch" }}
			>
				Luxury at your fingertip
			</h1>
			<p
				className="text-white z-10 font-normal mt-3 text-lg text-center"
				style={{ maxWidth: "50ch" }}
			>
				Own a state-of-the-art electric vehicle without all the hassle
				of owning a car!
			</p>

			<div className="z-10 mt-10">
				<Button>Get Started</Button>
			</div>
		</div>
	);
};

export default Hero;
