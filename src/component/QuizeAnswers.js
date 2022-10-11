import { EyeIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { toast } from "react-toastify";

const QuizeAnswers = ({ quarry }) => {
	// console.log(quarry);
	const { correctAnswer, options, question } = quarry;

	// console.log(correctAnswer);

	const [ans, setAns] = useState("");
	// console.log(ans);

	const answer = correctAnswer.replaceAll(" ", "");

	const quizAnswer = innerText => {
		const text = innerText.replaceAll(" ", "");
		if (answer === text) {
			toast.success("success", { autoClose: 500 });
		} else {
			toast.warning("sorry", { autoClose: 500 });
		}
	};
	const correctAnswerWithEye = id => {
		setAns(id.correctAnswer);
	};
	// console.log(option);
	return (
		<div>
			<div className="mx-auto  md:w-6/12 bg-amber-300 my-10 p-5 rounded-lg">
				<div className="flex justify-around">
					<h1 className="text-xl">{question.slice(3, -4)}</h1>
					<div>
						<label htmlFor="my-modal-3">
							<EyeIcon
								onClick={() => correctAnswerWithEye(quarry)}
								className="h-6 w-6 text-blue-500 cursor-pointer"
							/>
						</label>
					</div>
				</div>
				<div className="flex flex-wrap md:flex-wrap-reverse justify-center m-5 ">
					<div className="m-5">
						<div className="bg-blue-100 mb-2 md:w-96 border py-2 px-2 rounded-lg cursor-pointer">
							<p onClick={e => quizAnswer(e.target.innerText)}>{options[0]}</p>
						</div>
						<div className="bg-blue-100 border mb-2 py-2 px-2 rounded-lg cursor-pointer">
							<p onClick={e => quizAnswer(e.target.innerText)}>{options[1]}</p>
						</div>
					</div>
					<div className="m-5">
						<div className="bg-blue-100 md:w-96 mb-2 border py-2 px-2 rounded-lg cursor-pointer">
							<p onClick={e => quizAnswer(e.target.innerText)}>{options[2]}</p>
						</div>
						<div className="bg-blue-100 border mb-2 py-2 px-2 rounded-lg cursor-pointer">
							<p onClick={e => quizAnswer(e.target.innerText)}>{options[3]}</p>
						</div>
					</div>
				</div>
				<p>{ans}</p>
				<input type="checkbox" id="my-modal-3" className="modal-toggle" />
				<div className="modal">
					<div className="modal-box relative">
						<label
							htmlFor="my-modal-3"
							className="btn btn-sm btn-circle absolute right-2 top-2">
							✕
						</label>
						<p className="py-4">{ans}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuizeAnswers;
