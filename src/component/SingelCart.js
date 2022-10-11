import React from "react";
import { useNavigate } from "react-router-dom";

const SingelCart = ({ quiz }) => {
	const { id, name, logo } = quiz;

	const navigate = useNavigate();
	const quizStartHandler = id => {
		navigate(`/quize/${id}`);
	};
	return (
		<div>
			<section className="py-6 sm:py-12 dark:bg-gray-800 bg-blue-100 dark:text-gray-100 ">
				<div className="container p-6 mx-auto space-y-8 bg-white w-9/12 mx-auto rounded-lg">
					<div className=" shadow-lg">
						<article className=" flex flex-col dark:bg-gray-900 rounded-lg">
							<a
								rel="noopener noreferrer"
								href="/"
								aria-label="Te nulla oportere reprimique his dolorum">
								<img
									alt=""
									className=" object-cover rounded-lg w-full h-full bg-blue-100 dark:bg-gray-500"
									src={logo}
								/>
							</a>
							<div className="flex justify-around p-6">
								<div className="   pt-3 space-x-2 text-xs dark:text-gray-400">
									<p className="text-xl">{name}</p>
								</div>
								<div className="  pt-3 space-x-2 text-xs dark:text-gray-400">
									<button
										onClick={() => quizStartHandler(id)}
										className="bg-blue-100 py-2 px-8 text-sm rounded-md">
										Quiz Start
									</button>
								</div>
							</div>
						</article>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SingelCart;
