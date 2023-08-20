import View from "./View"
class QuestionView extends View {
	_parentEl = document.querySelector('.quiz__questions-container')

	_generateMarkUp(state) {
		return state.map(this._displayQuestion).join('')

	}
	// ${ state.map(this._displayNumber).join('') }
	// ${ state.map(this._displayQuestion.bind(this)).join('') }

	// _displayNumber(result) {

	// 	return `
	// 				<li class="quiz__number-container quiz__number-active ">
	// 				<p>QUESTION </p>
	// 				<P class="quiz__number--text">${result.questionIndex}</P>
	// 			</li>	`
	// }
	_displayQuestion(result) {
		return `
					<div class="quiz__question-container">
					<span>Correct Answer 1/4</span>
					<p class="quiz--question"> ${result.question} </p>
					<form class="quiz__options">
					</form>
					</div>
					`
	}
	_displayOption(res) {
		let options = []
		for (let [key, value] of Object.entries(res.answers)) {
			let markup = `
						<div class="quiz__option ">
							<input class="quiz__option--input " type="checkbox" id="${key}-${res.id}" name="${key}">
							<label class="quiz__option--label" for="${key}-${res.id}">${value ?? ''}
							</label>
						</div>
				`
			value && options.push(markup)
		}
		return (options.join(''));
	}

}

export default new QuestionView()
