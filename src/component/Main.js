import { createBrowserRouter } from "react-router-dom";
import About from "./About";
import Blog from "./Blog";
import { quizLoadedData } from "./Data";
import ErrorPage from "./EroorPage";
import MainPage from "./MainPage";
import Quize from "./Quize";
import QuizeBox from "./QuizeBox";
import Root from "./Root";
import Statistics from "./Statistics";

export const route = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		loader: quizLoadedData,
		children: [
			{
				path: "/",
				element: <MainPage />,
			},
			{
				path: "Topic",
				element: <QuizeBox />,
			},

			{
				path: "quize/:id",
				loader: ({ params }) => {
					return fetch(
						`https://openapi.programming-hero.com/api/quiz/${params.id}`
					);
				},
				element: <Quize />,
			},
			{
				path: "statistics",
				element: <Statistics />,
			},
			{
				path: "blog",
				element: <Blog />,
			},
			{
				path: "about",
				element: <About />,
			},
		],
	},
]);
