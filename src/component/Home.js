import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Heroabout from "./Heroabout";
import { QuizData } from "./Root";
import SingelCart from "./SingelCart";

const Home = () => {
	const quiz = useContext(QuizData);

	const navigate = useNavigate();
	const quizStartHandler = id => {
		navigate(`quize/${id}`);
	};
	return (
		<div>
			{/* about  */}
			{/* home  */}
			<div>
				<Heroabout />
			</div>
			{/* singel cart  */}
			<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
				{quiz.map(quiz => (
					<SingelCart
						key={quiz.id}
						quiz={quiz}
						quizStartHandler={quizStartHandler}
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
