const headerTitle = document.getElementById("header-title");
const span = headerTitle.querySelector("span");

const itemsUl = document.getElementById("items");
const li = itemsUl.querySelector("li:first-child");

// Create a new text node
const textNode = document.createTextNode("Hello");

// Get the parent element of the span
const spanParent = span.parentElement;

// Insert the text node before the span
spanParent.insertBefore(textNode, span);

// Get the parent element of the first list item
const liParent = li.parentElement;

// Insert the text node before the first list item
liParent.insertBefore(textNode, li);

// Add "Hello" before "Item Lister"
spanParent.textContent = "Hello " + spanParent.textContent;
