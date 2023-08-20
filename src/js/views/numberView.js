import View from "./View";

class NumberView extends View {
	_parentEl = document.querySelector('.quiz__number')

	_generateMarkUp() {
		console.log(this);
		return `
			<ul class="quiz__number">
			${this._data.map(this._generateMarkUpPreview).join('')}
			</ul>
			<article class="quiz-container">
				<p class="quiz__question-number">Question <span class="quiz__question-number--of">10</span></p>
				<div class="quiz__questions-container">

				</div>
				<div class="quiz__btns">

				</div>
			</article>
			<button class="btn quiz__btn quiz__btn--submit">Submit Answers</button>
`
	}
	_generateMarkUpPreview(result) {
		return `
				<li class="quiz__number-container quiz__number-active">
					<p>QUESTION </p>
					<P class="quiz__number--text">${result.questionIndex}</P>
				</li > `
	}

}
export default new NumberView()