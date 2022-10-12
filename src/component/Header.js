import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
	const [open, setOpen] = useState(false);
	return (
		<nav>
			<div className="bg-blue-100 flex justify-around py-5">
				<div className="logo">
					<h1>
						<Link to="/">
							<span className="font-sans text-4xl">Quizian</span>{" "}
							<span className="text-blue-600">World</span>
						</Link>
					</h1>
				</div>
				<div
					className={`flex  text-cyan-700 absolute  z-10 lg:static  duration-500 ease-in-out   bg-blue-200  md:w-0 w-full md:bg-blue-100   ${
						open ? "top-0" : "top-[-270px]"
					}`}>
					<ul
						className={`gap-4 md:p-0 p-5 md:gap-8 lg:flex-row flex-col flex  mx-auto `}>
						<NavLink to="/">Home</NavLink>
						<NavLink to="/Topic">Topic</NavLink>
						<NavLink to="/statistics">Statistics</NavLink>
						<NavLink to="/blog">Blog</NavLink>
						<NavLink to="/about">About</NavLink>
					</ul>
				</div>
				<div>
					<button className="bg-orange-100 py-2 px-3 invisible   md:visible rounded-sm text-orange-600">
						<p>Subscribe</p>
					</button>
				</div>

				<div
					onClick={() => setOpen(!open)}
					className="h-6 w-6 text-blue-500 lg:hidden z-10 ">
					{!open ? <Bars3Icon /> : <XMarkIcon />}
				</div>
			</div>
		</nav>
	);
};

export default Header;
