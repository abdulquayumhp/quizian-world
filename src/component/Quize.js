import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizeAnswers from "./QuizeAnswers";

const Quize = () => {
	const quiz = useLoaderData();
	// console.log(quiz);

	const { questions } = quiz.data;
	// console.log(questions);

	return (
		<div>
			{questions.map((quarry, i) => (
				<QuizeAnswers key={quarry.id} I={i + 1} quarry={quarry} />
			))}
		</div>
	);
};

export default Quize;
