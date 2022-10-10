export const quizLoadedData = async () => {
	const quizData = await fetch(`https://openapi.programming-hero.com/api/quiz`);
	const quizItem = await quizData.json();
	// console.log(quizItem);
	return quizItem;
};
