import React from "react";

const Blog = () => {
	return (
		<div>
			<div className="bg-blue-200 p-10 m-10 rounded-lg text-left">
				<h2 className="text-xl font-medium">
					1. What is the main purpose react router?
				</h2>
				<p className="py-4 text-base">
					<small>
						React Router, and dynamic, client-side routing, allows us to build a
						single-page web application with navigation without the page
						refreshing as the user navigates. React Router uses component
						structure to call components, which display the appropriate
						information. By preventing a page refresh, and using Router or Link,
						which is explained in more depth below, the flash of a white screen
						or blank page is prevented. This is one increasingly common way of
						having a more seamless user experience. React router also allows the
						user to utilize browser functionality like the back button and the
						refresh page while maintaining the correct view of the application.
					</small>
				</p>
			</div>
			<div className="bg-blue-200 p-10 m-10 rounded-lg text-left">
				<h2 className="text-xl font-medium">2. How Context API Work?</h2>
				<p className="py-4 text-base">
					<small>
						Context API is a (kind of) new feature added in version 16.3 of
						React that allows one to share state across the entire app (or part
						of it) lightly and with ease. The React Context API is a way for a
						React app to effectively produce global variables that can be passed
						around. This is the alternative to "prop drilling" or moving props
						from grandparent to child to parent, and so on. Context is also
						touted as an easier, lighter approach to state management using
						Redux. In a typical React application, data is passed top-down
						(parent to child) via props, but such usage can be cumbersome for
						certain types of props (e.g. locale preference, UI theme) that are
						required by many components within an application. Context provides
						a way to share values like these between components without having
						to explicitly pass a prop through every level of the tree.
					</small>
				</p>
			</div>
			<div className="bg-blue-200 p-10 m-10 rounded-lg text-left">
				<h2 className="text-xl font-medium">2. What is react use ref?</h2>
				<p className="py-4 text-base">
					<small>
						The useRef hook is the new addition in React 16.8. Before proceeding
						to this article there is a prerequisite to know about the ref in
						react. In the typical React dataflow, props are the only way that
						parent components interact with their children. To modify a child,
						you re-render it with new props. However, there are a few cases
						where you need to imperatively modify a child outside of the typical
						dataflow. The child to be modified could be an instance of a React
						component, or it could be a DOM element. For both of these cases,
						React provides an escape hatch.
					</small>
				</p>
			</div>
		</div>
	);
};

export default Blog;
