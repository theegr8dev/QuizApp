export const state = {
	category: '',
	result: []

}
export const LoadQuestion = async function (id) {
	try {
		const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=bErbc7AKqsgtGFy33sLbpyCHVy9u7iB3GjZwDW5a&category=${id}&limit=5`);
		const result = await response.json();
		state.category = id
		result.forEach((res, i) => {
			state.result.push({
				id: res.id,
				questionIndex: i + 1,
				question: res.question,
				answers: res.answers,
				correctAnswer: res.correct_answer,
				correctAnswers: res.correct_answers,
			})
		})
		console.log(state);
	} catch (error) {
		console.error(error);
	}
}