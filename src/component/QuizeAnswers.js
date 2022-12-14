import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { toast } from "react-toastify";

const QuizeAnswers = ({ quarry, I, name }) => {
	const { correctAnswer, options, question } = quarry;

	const [ans, setAns] = useState(false);

	const answer = correctAnswer.replaceAll("   ", " ").replaceAll("  ", " ");

	const quizAnswer = innerText => {
		if (answer === innerText) {
			toast.success("success", { autoClose: 500 });
		} else {
			toast.warning("sorry", { autoClose: 500 });
		}
	};
	const correctAnswerWithEye = id => {
		setAns(id.correctAnswer);
	};

	return (
		<div>
			<div>
				<div className="mx-auto  md:w-6/12 bg-amber-300 my-10 p-5 rounded-lg relative">
					<div className="flex justify-between ">
						<p>
							<span className="">Quiz No:</span> {I}
						</p>
						<h1 className="text-xl">
							{question.replaceAll("<p>", " ").replaceAll("</p>", " ")}
						</h1>
						<div className=" flex flex-col items-end ">
							<div className="">
								<p
									className={` ${
										ans ? "absolute right-12 top-2  bg-blue-200 p-5" : "hidden"
									} `}>
									{correctAnswer}
								</p>
								<label
									onClick={() => setAns(!ans)}
									className=""
									htmlFor="my-modal-3">
									{ans ? (
										<EyeIcon className="h-6 w-6 text-blue-500 cursor-pointer" />
									) : (
										<EyeSlashIcon
											onClick={() => correctAnswerWithEye(quarry)}
											className="h-6 w-6 text-blue-500 cursor-pointer"
										/>
									)}
								</label>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap md:flex-wrap-reverse justify-center m-5 ">
						<div className="m-5">
							<div className="bg-blue-100 hover:bg-blue-300 mb-2 md:w-96 border py-2 px-2 rounded-lg cursor-pointer ">
								<p onClick={e => quizAnswer(e.target.innerText)}>
									{options[0]}
								</p>
							</div>
							<div className="bg-blue-100 hover:bg-blue-300 borde  mb-2 py-2 px-2 rounded-lg cursor-pointer">
								<p onClick={e => quizAnswer(e.target.innerText)}>
									{options[1]}
								</p>
							</div>
						</div>
						<div className="m-5">
							<div className="bg-blue-100 hover:bg-blue-300 md:w-96 mb-2 border py-2 px-2 rounded-lg cursor-pointer">
								<p onClick={e => quizAnswer(e.target.innerText)}>
									{options[2]}
								</p>
							</div>
							<div className="bg-blue-100 hover:bg-blue-300 border mb-2 py-2 px-2 rounded-lg cursor-pointer">
								<p onClick={e => quizAnswer(e.target.innerText)}>
									{options[3]}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuizeAnswers;
