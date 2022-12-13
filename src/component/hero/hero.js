import Button from "../button";

const Hero = () => {
	return (
		<div className="h-screen w-full bg-slate-700 hero flex flex-col justify-center px-6 md:px-28">
			<div className="overlay" />
			<h1
				className="text-white z-10 text-2xl md:text-6xl font-bold mt-10"
				style={{ maxWidth: "20ch" }}
			>
				Lorem ipsum dolor lamar sit amet Lorem ipsum.
			</h1>
			<p
				className="text-white z-10 font-normal mt-3 text-lg"
				style={{ maxWidth: "50ch" }}
			>
				Lorem ipsum dolor lamar sit amet Lorem ipsum dolor lamar sit
				amet Lorem ipsum dolor lamar sit amet Lorem ipsum dolor lamar
				sit amet Lorem ipsum dolor.
			</p>

			<div className="z-10 mt-10">
				<Button>Get Started</Button>
			</div>
		</div>
	);
};

export default Hero;
