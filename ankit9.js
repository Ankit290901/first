const itemsList = document.querySelector('#items');
const items = itemsList.querySelectorAll('li');

// Get the second item
const secondItem = items[1];

// Set the background color to green
secondItem.style.backgroundColor = 'green';

// Hide the third item
items[2].style.display = 'none';

// Change the font color to green
secondItem.style.color = 'green';

// Choose all the odd elements and make their background green
for (let i = 0; i < items.length; i++) {
  if (i % 2 === 1) {
    items[i].style.backgroundColor = 'green';
  }
}