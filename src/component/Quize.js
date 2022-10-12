import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizeAnswers from "./QuizeAnswers";

const Quize = () => {
	const quiz = useLoaderData();

	const { questions, name } = quiz.data;

	return (
		<div>
			<div>
				<h1 className="py-5 text-2xl font-semibold">
					Quiz Category <span className="text-yellow-400">{name}</span>
				</h1>
			</div>
			<div>
				{questions.map((quarry, i) => (
					<QuizeAnswers key={quarry.id} name={name} I={i + 1} quarry={quarry} />
				))}
			</div>
		</div>
	);
};

export default Quize;
