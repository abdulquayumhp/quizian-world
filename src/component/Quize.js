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
			{questions.map(quarry => (
				<QuizeAnswers key={quarry.id} quarry={quarry} />
			))}
		</div>
	);
};

export default Quize;
