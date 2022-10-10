import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export const QuizData = createContext([]);

const Root = () => {
	const allQuiz = useLoaderData();
	return (
		<QuizData.Provider value={allQuiz.data}>
			<div>
				<Header />
				<Outlet />
				<Footer />
			</div>
		</QuizData.Provider>
	);
};

export default Root;
