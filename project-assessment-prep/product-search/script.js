/*
  Create a search feature. When the user makes a change to the input field,
  capture the user input and use it to filter through the product names - this should happen in real time.
  Then list the products on the page that pass the filter - this should be case-insensitive.
  You should allow products that contain all the letters in order in the input to pass the filter.
  Use a h3 tag for the product name and a p tag for the category.
  Take a look at the HTML file to see where you should be appending your elements.
*/

const products = [
    {id: 1, name: "Apple", category: "Fruits"},
    {id: 2, name: "Banana", category: "Fruits"},
    {id: 3, name: "Carrot", category: "Vegetables"},
    {id: 4, name: "Tomato", category: "Vegetables"},
    {id: 5, name: "Orange", category: "Fruits"},
    {id: 6, name: "Broccoli", category: "Vegetables"},
];

const productList = document.getElementById("productList");
const inputElement = document.getElementById("searchInput");

// Display all products initially
filterProducts();

inputElement.addEventListener('input', () => {
    // Remove all existing children
    productList.replaceChildren();
    filterProducts();
});

function filterProducts() {
    // User input
    const input = inputElement.value;
    filterProductsByInput(input).forEach(product => {
        const header = document.createElement('h3');
        header.innerText = `${product.name}`;

        const p = document.createElement("p");
        p.innerText = `${product.category}`;

        productList.appendChild(header);
        productList.appendChild(p);
    })
}

/**
 * Filters an array of products based on a user-provided input string.
 *
 * @param {string} input - The input string to filter products by.
 * @returns {Array} - An array containing products that have names containing the input (case-insensitive).
 */
function filterProductsByInput(input) {
    return products.filter(product => product.name.toLowerCase().includes(input.toLowerCase()));
}