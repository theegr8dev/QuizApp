class CategoryView {
	_parentEl = document.querySelector('.category')

	_getHash(handler) {
		window.addEventListener('hashchange', handler)
	}
	_hideParent() {
		this._parentEl.classList.add('hidden')
	}

}
export default new CategoryView()