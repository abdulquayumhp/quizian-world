import React, { useContext } from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { QuizData } from "./Root";

const Statistics = () => {
	const quiz = useContext(QuizData);
	console.log(quiz);
	const { total } = quiz[0];
	console.log(total);

	return (
		<div>
			<LineChart width={500} height={400} data={quiz}>
				<Line type="monotone" dataKey="total" stroke="#82ca9d" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
			</LineChart>
		</div>
	);
};

export default Statistics;
