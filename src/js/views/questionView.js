class QuestionView {
	_parentEl = document.querySelector('.quiz')

	_render(state) {
		this._showParent(state.category)
		this._displayNumber(state.result)
		this._displayQuestion(state.result);

	}
	_showParent(id) {
		this._parentEl.classList.remove('hidden')
		let markup = `
			<h1><span class="quiz--category">${id.toUpperCase()}</span> Quiz</h1>
			<ul class="quiz__number">

			</ul>

			<article class="quiz-container">
				<p class="quiz__question-number">Question <span class="quiz__question-number--of">10</span></p>
				<div class="quiz__questions-container">

				</div>
				<div class="quiz__btns">
					<button class="btn quiz__btn quiz__btn--back">Previous Question</button>
					<button class="btn quiz__btn quiz__btn--next">Next Question</button>
				</div>
			</article>
			<button class="btn quiz__btn quiz__btn--submit">Submit Answers</button> -->
			`
		this._parentEl.insertAdjacentHTML('afterbegin', markup)
	}
	_displayNumber(result) {
		let quizNumberContainer = document.querySelector('.quiz__number')

		result.forEach(res => {
			console.log(res);
			let markup =
				`
					<li class="quiz__number-container quiz__number-active ">
					<p>QUESTION </p>
					<P class="quiz__number--text">${res.questionIndex}</P>
				</li>	`
			quizNumberContainer.insertAdjacentHTML('beforeend', markup)

		})

	}
	_displayQuestion(result) {
		let questionContainer = document.querySelector('.quiz__questions-container')
		result.forEach(res => {
			let markup =
				`
					<div class="quiz__question-container">
					<span>Correct Answer 1/4</span>
					<p class="quiz--question"> ${res.question} </p>
					<form class="quiz__options">
					</form>
					</div>
					`
			questionContainer.insertAdjacentHTML('afterbegin', markup)
			const optionConatiner = document.querySelector('.quiz__options')

			for (let [key, value] of Object.entries(res.answers)) {
				let html3 = `
							<div class="quiz__option ">
								<input class="quiz__option--input " type="checkbox" id="${key}-${res.id}" name="${key}">
								<label class="quiz__option--label" for="${key}-${res.id}">${value ?? ''}
								</label>
							</div>
					`
				if (value) {
					optionConatiner.insertAdjacentHTML('beforeend', html3)
				}
			}
		})

	}
	_displayOption(result) {
		const optionConatiner = document.querySelector('.quiz__options')
		result.forEach(res => {
			for (let [key, value] of Object.entries(res.answers)) {
				let html3 = `
							<div class="quiz__option ">
								<input class="quiz__option--input " type="checkbox" id="${key}-${res.id}" name="${key}">
								<label class="quiz__option--label" for="${key}-${res.id}">${value ?? ''}
								</label>
							</div>
					`
				if (value) {
					optionConatiner.insertAdjacentHTML('beforeend', html3)
				}
			}
		})

	}
}

export default new QuestionView()