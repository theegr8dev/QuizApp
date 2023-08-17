class Category {
	_parentEl = document.querySelector('category')
	_getHash(handler) {
		window.addEventListener('hashchange', handler)

	}
}
export default new Category()