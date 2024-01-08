// Simulated data
let posts = [
    { id: 1, content: 'Post 1' },
    { id: 2, content: 'Post 2' },
    { id: 3, content: 'Post 3' }
  ];
  let lastActivityTime = '2023-01-01 12:00:00'; // Simulated initial last activity time
  
  // Simulated asynchronous function to update last user activity time
  function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        lastActivityTime = new Date().toISOString();
        resolve(lastActivityTime);
      }, 1000); // Simulated 1-second delay
    });
  }
  
  // Simulated function to create a post
  function createPost(content) {
    return new Promise((resolve, reject) => {
      // Simulated post creation
      setTimeout(() => {
        const newPost = { id: posts.length + 1, content };
        posts.push(newPost);
        resolve(newPost);
      }, 500); // Simulated 0.5-second delay
    });
  }
  
  // Simulated function to delete a post
  function deletePost(postId) {
    return new Promise((resolve, reject) => {
      // Simulated post deletion
      setTimeout(() => {
        const index = posts.findIndex(post => post.id === postId);
        if (index !== -1) {
          posts.splice(index, 1);
          resolve('Post deleted');
        } else {
          reject('Post not found');
        }
      }, 500); // Simulated 0.5-second delay
    });
  }
  
  // Function to perform the required actions
  function performActions() {
    createPost('New Post')
      .then(newPost => {
        return Promise.all([updateLastUserActivityTime(), Promise.resolve(newPost)]);
      })
      .then(([lastActivity, newPost]) => {
        console.log('All posts:', posts);
        console.log('Last activity time:', lastActivity);
  
        return deletePost(newPost.id);
      })
      .then(deletedMessage => {
        console.log(deletedMessage);
        console.log('Remaining posts:', posts);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Calling the function to perform the actions
  performActions();
  