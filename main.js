// main.js

// GET REQUEST
function getTodos() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => showOutput(res))
      .catch(err => console.error(err));
  }
  
  // POST REQUEST
  function addTodo() {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: 'New Todo',
      completed: false
    })
      .then(res => showOutput(res))
      .catch(err => console.error(err));
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
    axios.put('https://jsonplaceholder.typicode.com/todos/1', {
      title: 'Updated Todo',
      completed: true
    })
      .then(res => showOutput(res))
      .catch(err => console.error(err));
  }
  
  // DELETE REQUEST
  function removeTodo() {
    axios.delete('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => showOutput(res))
      .catch(err => console.error(err));
  }
  
  // SIMULTANEOUS DATA
  function getData() {
    axios.all([
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    ])
      .then(axios.spread((todos, posts) => {
        showOutput(todos); // Displaying only todos for simplicity
      }))
      .catch(err => console.error(err));
  }
  
  // CUSTOM HEADERS
  function customHeaders() {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your_access_token'
      }
    };
  
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: 'New Todo',
      completed: false
    }, config)
      .then(res => showOutput(res))
      .catch(err => console.error(err));
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    const options = {
      transformRequest: [(data, headers) => {
        // Modify request data here
        console.log('Transforming Request');
        return data;
      }],
      transformResponse: [(data) => {
        // Modify response data here
        console.log('Transforming Response');
        return data;
      }]
    };
  
    axios.get('https://jsonplaceholder.typicode.com/todos', options)
      .then(res => showOutput(res))
      .catch(err => console.error(err));
  }
  
  // ERROR HANDLING
  function errorHandling() {
    axios.get('https://jsonplaceholder.typicode.com/todos404')
      .then(res => showOutput(res))
      .catch(err => {
        if (err.response) {
          console.error(`Status: ${err.response.status}`);
          console.error(`Data: ${JSON.stringify(err.response.data)}`);
        } else if (err.request) {
          console.error('No response received');
        } else {
          console.error(`Error: ${err.message}`);
        }
      });
  }
  
  // CANCEL TOKEN
  function cancelToken() {
    const source = axios.CancelToken.source();
  
    axios.get('https://jsonplaceholder.typicode.com/todos', {
      cancelToken: source.token
    })
      .then(res => showOutput(res))
      .catch(thrown => {
        if (axios.isCancel(thrown)) {
          console.log('Request canceled', thrown.message);
        } else {
          console.error(thrown);
        }
      });
  
    // Cancel the request (you can call this anywhere in your code)
    source.cancel('Request canceled by the user.');
  }
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
      <div class="card card-body mb-4">
        <h5>Status: ${res.status}</h5>
      </div>
  
      <div class="card mt-3">
        <div class="card-header">
          Headers
        </div>
        <div class="card-body">
          <pre>${JSON.stringify(res.headers, null, 2)}</pre>
        </div>
      </div>
  
      <div class="card mt-3">
        <div class="card-header">
          Data
        </div>
        <div class="card-body">
          <pre>${JSON.stringify(res.data, null, 2)}</pre>
        </div>
      </div>
  
      <div class="card mt-3">
        <div class="card-header">
          Config
        </div>
        <div class="card-body">
          <pre>${JSON.stringify(res.config, null, 2)}</pre>
        </div>
      </div>
    `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document.getElementById('transform').addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);
  