export const LoadQuestion = async function (id) {
	try {
		const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=bErbc7AKqsgtGFy33sLbpyCHVy9u7iB3GjZwDW5a&category=${id}&limit=5`);
		const result = await response.json();
		console.log(result);

	} catch (error) {
		console.error(error);
	}
}