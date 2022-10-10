import React from "react";

const QuizeAnswers = ({ quarry }) => {
	console.log(quarry);
	const { id, correctAnswer, options, question } = quarry;
	// console.log(option);
	return (
		<div className="mx-auto  md:w-6/12 bg-amber-300 my-10 p-5 rounded-lg">
			<h1 className="text-xl">{question}</h1>
			<div className="flex flex-wrap md:flex-wrap-reverse justify-center m-5 ">
				<div className="m-5">
					<div className="bg-blue-100 mb-2 md:w-96 border py-2 px-2 rounded-lg cursor-pointer">
						<p>{options[0]}</p>
					</div>
					<div className="bg-blue-100 border mb-2 py-2 px-2 rounded-lg cursor-pointer">
						<p>{options[1]}</p>
					</div>
				</div>
				<div className="m-5">
					<div className="bg-blue-100 md:w-96 mb-2 border py-2 px-2 rounded-lg cursor-pointer">
						<p>{options[2]}</p>
					</div>
					<div className="bg-blue-100 border mb-2 py-2 px-2 rounded-lg cursor-pointer">
						<p>{options[3]}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuizeAnswers;
