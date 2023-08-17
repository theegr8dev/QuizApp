import * as model from './model'
import categoryView from './views/CategoryView'
import questionView from './views/questionView'


const Category = async function () {
	const id = window.location.hash.slice(1)
	if (!id) return;
	console.log(id);
	// Get Question
	await model.LoadQuestion(id)
	categoryView._hideParent()
	questionView._render(model.state)

}

const init = function () {
	categoryView._getHash(Category)
}
init()