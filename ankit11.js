var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
  e.preventDefault();
   
 // Create new li element
 var li = document.createElement('li');
 // Add class
 li.className = 'list-group-item';
 


  // Get input value
  const newText = (document.createTextNode(inputValue))
  const descriptionNode = (document.createTextNode(description))

  li.appendChild(newText);
  li.appendChild(descriptionNode)
 


  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Create edit button element
  var editBtn = document.createElement('button');

  // Add classes to edit button
  editBtn.className = 'btn btn-warning btn-sm edit';

  // Append text node
  editBtn.appendChild(document.createTextNode('Edit'));

  // Append buttons to li
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

  // Clear input
  document.getElementById('item').value = '';
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  
  // Convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    var description = item.childNodes[1].textContent;
    if (itemName.toLowerCase().indexOf(text) != -1 || description.toLocaleLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}