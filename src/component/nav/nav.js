import Link from "next/link";
import { useState } from "react";

const Nav = () => {
	const [viewMenu, setViewMenu] = useState(false);
	return (
		<>
			<div className="w-full bg-white flex items-center justify-between px-4 md:px-28 py-3 fixed top-0 left-0 right-0 z-20 shadow-lg">
				<Link id="logo" className="pointer-cursor" href={"/"}>
					<h1 className="text-blue-600 z-10 text-xl md:text-2xl font-bold md:font-extrabold border-2 md:border-4 border-blue-900 px-5 py-2">
						EV-UP
					</h1>
				</Link>
				<ul className="hidden md:flex">
					{/* <Link href={"/"}>
						<li className="inline mx-4">Home</li>
					</Link>
					<Link href={"/#about"}>
						<li className="inline mx-4">Features</li>
					</Link> */}
					<a href={"/#products"}>
						<li className="inline mx-4">Products</li>
					</a>
					{/* <Link href={"/#faq"}>
						<li className="inline mx-4">FAQ&apos;s</li>
					</Link> */}
					<a href={"#contact"}>
						<li className="inline mx-4">Contact</li>
					</a>
				</ul>

				<div className="block md:hidden">
					{viewMenu ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="w-9 h-9"
							onClick={() => setViewMenu(false)}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							onClick={() => setViewMenu(true)}
							className="w-9 h-9"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
							/>
						</svg>
					)}
				</div>
			</div>

			<div
				className={`transition-all duration-150 w-full h-28 shadow-lg fixed z-20 bg-white pt-5 ${
					viewMenu || "-top-80"
				}`}
				style={{ marginTop: "4.43rem" }}
			>
				{/* <Link href={"/"} onClick={() => setViewMenu(false)}>
					<li className="list-none mb-4 mx-4">Home</li>
				</Link>
				<Link href={"/#about"} onClick={() => setViewMenu(false)}>
					<li className="list-none mb-4 mx-4">Features</li>
				</Link> */}
				<a href={"/#products"} onClick={() => setViewMenu(false)}>
					<li className="list-none mb-4 mx-4">Products</li>
				</a>
				{/* <Link href={"/#faq"} onClick={() => setViewMenu(false)}>
					<li className="list-none mb-4 mx-4">FAQ&apos;s</li>
				</Link> */}
				<a href={"#contact"} onClick={() => setViewMenu(false)}>
					<li className="list-none mb-4 mx-4">Contact</li>
				</a>
			</div>
		</>
	);
};

export default Nav;
