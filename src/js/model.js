import { async } from "regenerator-runtime";

export const state = {
	result: {
		category: '',
		data: []
	},
	resultPerPage: 1,
	page: 1

}
export const LoadQuestion = async function (id) {
	try {
		const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=bErbc7AKqsgtGFy33sLbpyCHVy9u7iB3GjZwDW5a&category=${id}&limit=5`);
		const result = await response.json();
		state.result.category = id
		result.forEach((res, i) => {
			state.result.data.push({
				id: res.id,
				questionIndex: i + 1,
				question: res.question,
				answers: res.answers,
				correctAnswer: res.correct_answer,
				correctAnswers: res.correct_answers,
			})
		})
	} catch (error) {
		console.error(error);
	}
}
export const getQuestionPage = function (page = state.page) {
	state.page = page
	const start = (page - 1) * state.resultPerPage; //0;
	const end = page * state.resultPerPage; //10;
	console.log(state.result.data.slice(start, end));

	return state.result.data.slice(start, end);
}