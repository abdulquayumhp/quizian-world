import React, { useContext } from "react";
import {
	Area,
	Bar,
	CartesianGrid,
	ComposedChart,
	Legend,
	Line,
	ResponsiveContainer,
	Scatter,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import { QuizData } from "./Root";

const Statistics = () => {
	const quiz = useContext(QuizData);
	console.log(quiz);
	const { total } = quiz[0];
	console.log(total);

	return (
		<div className="my-20">
			<ResponsiveContainer width="100%" height={500}>
				<ComposedChart width={500} height={200} data={quiz}>
					<CartesianGrid stroke="#f5f5f5" />
					<XAxis dataKey="name" scale="band" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Area
						type="monotone"
						dataKey="total"
						fill="#8884d8"
						stroke="#8884d8"
					/>
					<Bar dataKey="total" barSize={20} fill="#413ea0" />
					<Line type="monotone" dataKey="total" stroke="#ff7300" />
					<Scatter dataKey="quiz" fill="red" />
				</ComposedChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Statistics;
