// const url = 'https://quizapi.io/api/v1/questions?apiKey=bErbc7AKqsgtGFy33sLbpyCHVy9u7iB3GjZwDW5a&category=linux&limit=5';
// const url = `https://quizapi.io/api/v1/questions?apiKey=bErbc7AKqsgtGFy33sLbpyCHVy9u7iB3GjZwDW5a&category=${categoryText}&limit=5`;
"use strict";
const categoryContainer = document.querySelector(".category-container");
let categoryText;
categoryContainer.addEventListener("click", function(ev) {
    const target = ev.target;
    if (target.classList.contains("category__box--btn")) {
        categoryText = target.parentElement.querySelector(".category__box--text").textContent.toLowerCase();
        category(categoryText);
    }
});
const category = async function(categoryText) {
    try {
        const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=bErbc7AKqsgtGFy33sLbpyCHVy9u7iB3GjZwDW5a&category=${categoryText}&limit=5`);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};

//# sourceMappingURL=index.62406edb.js.map
