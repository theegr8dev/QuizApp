export default class View {
	_data;
	_parentEl = document.querySelector('.quiz')

	_render(data) {
		if (!data || (Array.isArray(data) && data.length === 0)) return

		this._data = data
		let markup = this._generateMarkUp(data)
		this._parentEl.insertAdjacentHTML('afterbegin', markup)
		this._show()
	}
	_show() {
		console.log(this._parentEl);
		this._parentEl.classList.remove('hidden')
	}
}