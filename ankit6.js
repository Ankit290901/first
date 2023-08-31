const itemsUl = document.querySelector("#items");

// Add a new `li` element without the same class name to the `items` list.
const newLi = document.createElement("li");
newLi.textContent = "New Item";

// Add the `new-item` class to the `li` element to differentiate it from the other items.
newLi.classList.add("new-item");

// Append the `li` element to the `items` list.
itemsUl.appendChild(newLi);

// Get the `li` element with the `new-item` class name.
const newItemLi = document.getElementsByClassName("new-item")[0];

// Edit the text content of the `li` element.
newItemLi.textContent = "This is the new item";

// Get the `li` element with the `li` tag name.
const li = document.getElementById("items").getElementsByTagName("li")[3];

// Edit the text content of the `li` element.
li.textContent = "This is the new item";

