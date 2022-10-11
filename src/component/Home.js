import React, { useContext } from "react";
import { QuizData } from "./Root";
import SingelCart from "./SingelCart";

const Home = () => {
	const quiz = useContext(QuizData);

	return (
		<div>
			{/* about  */}
			{/* home  */}

			{/* singel cart  */}
			<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
				{quiz.map(quiz => (
					<SingelCart key={quiz.id} quiz={quiz} />
				))}
			</div>
		</div>
	);
};

export default Home;
