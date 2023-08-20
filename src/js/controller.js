// import * as model from './model'
// import categoryView from './views/CategoryView'
// import numberView from './views/numberView'
// import questionView from './views/questionView'


// const Category = async function () {
// 	const id = window.location.hash.slice(1)
// 	if (!id) return;
// 	// Load Question
// 	await model.LoadQuestion(id)
// 	categoryView._hideParent()
// 	console.log(model.state.result.data);
// 	questionView._render(model.state.result.data)
// 	numberView._render(model.state.result.data)

// }

// const init = function () {
// 	categoryView._getHash(Category)
// }
// init()
let categorySection = document.querySelector('.category')
let quizSection = document.querySelector('.quiz')
let submitBtn = document.querySelector('.quiz__btn--submit')


let questions
let question
let numberContainer

let nextBtn
let questionOf

let state = {
	result: [],
	category: '',
	studentAnswers: {

	}
}
const getQuestion = async function () {
	let id = window.location.hash.slice(1)
	try {

		const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=bErbc7AKqsgtGFy33sLbpyCHVy9u7iB3GjZwDW5a&category=${id}&limit=10`);
		const result = await response.json();
		state.category = id
		result.forEach((res, i) => {
			state.result.push({
				id: res.id,
				questionIndex: i + 1,
				question: res.question,
				answers: Object.fromEntries(Object.entries(res.answers).filter(([_, v]) => v != null)),
				correct: Object.entries(res.correct_answers).reduce((acc, curr) => {
					const key = curr[0]
					const value = curr[1]
					if (value === 'true')
						acc = key.slice(0, key.lastIndexOf('_'))
					return acc
				}, 0),

			})
		})
		console.log(state.result);

		categorySection.classList.add('hidden')
		quizSection.classList.remove('hidden')
		quizSection.insertAdjacentHTML('afterbegin', displayQuestion(state.result))

		questions = document.querySelector('.quiz__questions-container')
		question = Array.from(questions.children)
		numberContainer = document.querySelector('.quiz__number')

		questionOf = document.querySelector('.quiz__question-number--of')
		prevBtn = document.querySelector('.quiz__btn--back')
		nextBtn = document.querySelector('.quiz__btn--next')

		numberContainer.addEventListener('click', getNumberQuestion)
		nextBtn.addEventListener('click', moveQuestion)
		prevBtn.addEventListener('click', moveQuestion)
		submitBtn.addEventListener('click', submit)


	} catch (err) {
		console.log(err);
	}
}
window.addEventListener('hashchange', getQuestion)

const displayQuestion = function (question) {
	return `
		
		<ul class="quiz__number">
		${question.map(showNumber).join('')}
		</ul>
		<article class="quiz-container">
			<p class="quiz__question-number">Question <span class="quiz__question-number--of">1</span></p>
			<div class="quiz__questions-container">
			${question.map(showQuestion).join('')}
			</div>
		</article>
		<div class="quiz__btns">
			<button class="btn quiz__btn quiz__btn--back ">Previous Question<button>
			<button class="btn quiz__btn quiz__btn--next">Next Question <button>
		</div>		
	`
}
const showNumber = function (question) {
	return `
		<li class="quiz__number-container quiz__number-active">
			<p>QUESTION </p>
			<p class="quiz__number--text">${question.questionIndex}</p>
		</li>
	`
}
const showQuestion = function (question) {
	return `
				<div class="quiz__question-container ${question.questionIndex == 1 ? '' : 'hidden'}" name="Question${question.questionIndex}">
					<span>Correct Answer 1/${Object.values(question.answers).length}</span>
					<p class="quiz--question"> ${question.question} </p>
					<form class="quiz__options">
					${showOption(question)}
					</form>
				</div>
			
	`
}

const showOption = function (question) {
	let options = []
	for (let [key, value] of Object.entries(question.answers)) {
		let markup = `
						<div class="quiz__option ">
							<input class="quiz__option--input " type="checkbox" id="${key}-${question.id}" name="${key}" value="${value}">
							<label class="quiz__option--label" for="${key}-${question.id}">${value}
							</label>
						</div>
				`
		value && options.push(markup)
	}
	return (options.join(''));
}




let curr;
const getNumberQuestion = function (event) {
	const target = event.target.closest('.quiz__number-container')
	if (target) {
		let number = +target.querySelector('.quiz__number--text').textContent
		curr?.classList.add('hidden')
		question.forEach((ques, i) => {
			ques.classList.add('hidden')
			if (number === i + 1) {
				curr = ques
				questionOf.textContent = number
				curr.classList.remove('hidden')
			}
		})
	}
}

const moveQuestion = function (event) {
	let currQuestion;
	let prevQuestion;
	let nextQuestion;

	question.forEach(ques => {
		if (!ques.classList.contains('hidden')) {
			currQuestion = ques;
			prevQuestion = currQuestion.previousElementSibling
			nextQuestion = currQuestion.nextElementSibling
		}
	})
	if (event.target.classList.contains('quiz__btn--back') && prevQuestion) {
		currQuestion.classList.add('hidden')
		prevQuestion?.classList.remove('hidden')
		questionOf.textContent = prevQuestion.getAttribute('name').slice(-1)
	}
	if (event.target.classList.contains('quiz__btn--next') && nextQuestion) {
		currQuestion.classList.add('hidden')
		nextQuestion?.classList.remove('hidden')
		questionOf.textContent = nextQuestion.getAttribute('name').slice(-1)

	}
}
const submit = function (event) {
	console.log(event.target);
}