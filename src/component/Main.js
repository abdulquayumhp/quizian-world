import { createBrowserRouter } from "react-router-dom";
import Blog from "./Blog";
import { quizLoadedData } from "./Data";
import ErrorPage from "./EroorPage";
import Home from "./Home";
import Quize from "./Quize";
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
				element: <Home />,
			},
			{
				path: "quize",
				element: <Quize />,
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
		],
	},
]);
