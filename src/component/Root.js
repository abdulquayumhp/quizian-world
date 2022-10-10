import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./Header";

export const QuizData = createContext([]);

const Root = () => {
	const allQuiz = useLoaderData();
	return (
		<QuizData.Provider value={allQuiz.data}>
			<div>
				<Header />
				<Outlet />
			</div>
		</QuizData.Provider>
	);
};

export default Root;
