// Simulated User Data (replace with actual database or storage)
let currentUser = getUserFromLocalStorage(); 
let posts = loadPostsFromLocalStorage();

// Function to get user data from local storage
function getUserFromLocalStorage(email = null) { 
  const storedUser = localStorage.getItem('currentUser');
  if (storedUser) {
    const userObj = JSON.parse(storedUser);
    if (email && userObj.email === email) {
      return userObj;
    } else if (!email) {
      return userObj; 
    }
  }
  return null;
}

// Function to save user data to local storage
function saveUserToLocalStorage(user) {
  localStorage.setItem('currentUser', JSON.stringify(user));
}

// Function to show/hide different forms/sections
function showLoginForm() {
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('registrationForm').style.display = 'none';
  document.getElementById('userProfile').style.display = 'none';
  document.getElementById('editProfileForm').style.display = 'none';
  document.getElementById('postForm').style.display = 'none';
  document.getElementById('notificationsSidebar').style.display = 'none'; // Hide notifications
  logoutButton.style.display = 'none';
}

function showRegistrationForm() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('registrationForm').style.display = 'block';
  document.getElementById('userProfile').style.display = 'none';
  document.getElementById('editProfileForm').style.display = 'none';
  document.getElementById('postForm').style.display = 'none';
  document.getElementById('notificationsSidebar').style.display = 'none'; // Hide notifications
}

function showUserProfile(user) {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('registrationForm').style.display = 'none';
  document.getElementById('userProfile').style.display = 'block';
  document.getElementById('editProfileForm').style.display = 'none';
  document.getElementById('postForm').style.display = 'block'; 

  // Populate user profile data
  document.getElementById('profileUsername').textContent = user.username;
  document.getElementById('profileEmail').textContent = user.email;
  document.getElementById('profilePicture').src = user.profilePicture || 'https://via.placeholder.com/150'; // Default profile picture
  
}

function showEditProfileForm() {
  document.getElementById('userProfile').style.display = 'none';
  document.getElementById('editProfileForm').style.display = 'block';
  
  // Populate edit form with current data
  document.getElementById('username').value = document.getElementById('profileUsername').textContent;
  document.getElementById('email').value = document.getElementById('profileEmail').textContent;
}

function hideEditProfileForm() {
  document.getElementById('userProfile').style.display = 'block';
  document.getElementById('editProfileForm').style.display = 'none';
}


// Event Listener for Registration Form 

document.querySelector('#registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('regUsername').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;

  // Check if the user already exists 
  if (getUserFromLocalStorage(email)) {
    alert('User with this email already exists.');
    return;
  }

  const newUser = {
    username: username,
    email: email,
    password: password,
    profilePicture: 'https://via.placeholder.com/150' // Default profile picture
  };

  // Save the new user to local storage
  saveUserToLocalStorage(newUser);

  alert('Registration successful! You can now log in.');
  showLoginForm();
});


// Event Listener for Login Form 
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // Get user from local storage 
  const storedUser = getUserFromLocalStorage(email);

  if (storedUser && storedUser.password === password) {
    currentUser = storedUser;
    showUserProfile(currentUser);
    loadPosts(); // Load posts after login
  } else {
    alert('Incorrect email or password.');
  }
});

// Event Listener for Edit Profile Form 
document.getElementById('updateProfileForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  // Update currentUser object with new data
  currentUser.username = document.getElementById('username').value;
  currentUser.email = document.getElementById('email').value;

  // Handle profile picture update (if any)
  const profilePictureInput = document.getElementById('profilePictureInput');
  if (profilePictureInput.files && profilePictureInput.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      currentUser.profilePicture = e.target.result; 
      saveUserToLocalStorage(currentUser);
      showUserProfile(currentUser); 
    };
    reader.readAsDataURL(profilePictureInput.files[0]);
  } else {
    saveUserToLocalStorage(currentUser);
    showUserProfile(currentUser); 
  }
});


// Event Listener for New Post Form 
document.getElementById('newPostForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const postText = document.getElementById('postText').value;
  const postImageInput = document.getElementById('postImage');

  // Image handling (using FileReader API)
  const imageFile = postImageInput.files[0];
  if (imageFile) {
    const reader = new FileReader();
    reader.onload = function(e) {
      createNewPost(postText, e.target.result);
    };
    reader.readAsDataURL(imageFile);
  } else {
    createNewPost(postText, null);
  }
});

// Function to create a new post
function createNewPost(postText, imageData) {
  const newPost = {
    id: Date.now().toString(), // Adding an ID to each post
    user: currentUser,
    text: postText,
    image: imageData,
    likes: 0, 
    comments: [] 
  };
  posts.unshift(newPost);
  savePostsToLocalStorage(); 
  renderPosts();
  document.getElementById('newPostForm').reset();
}

// Function to render posts in the feed
function renderPosts() {
  const postsContainer = document.getElementById('postsContainer');
  postsContainer.innerHTML = ''; 

  posts.forEach(post => {
    // Create a div for each post
    const postElement = document.createElement('div');
    postElement.classList.add('post', 'mb-4', 'p-4', 'bg-white', 'rounded-lg', 'shadow-md');
    postElement.dataset.postId = post.id; 

    // Display username 
    const usernameElement = document.createElement('h3');
    usernameElement.textContent = post.user.username;
    usernameElement.classList.add('font-semibold');
    postElement.appendChild(usernameElement);

    // Display user's profile picture
    const profilePictureElement = document.createElement('img');
    profilePictureElement.src = post.user.profilePicture;
    profilePictureElement.classList.add('profile-picture', 'w-10', 'h-10', 'rounded-full', 'inline-block');
    postElement.appendChild(profilePictureElement);

    // Display post text
    const postTextElement = document.createElement('p');
    postTextElement.textContent = post.text;
    postElement.appendChild(postTextElement);

    // Display post image (if available)
    if (post.image) {
      const postImageElement = document.createElement('img');
      postImageElement.src = post.image;
      postImageElement.classList.add('post-image', 'mt-2', 'rounded-lg');
      postElement.appendChild(postImageElement);
    }

    // Like Button
    const likeButton = document.createElement('button');
    likeButton.textContent = `Like (${post.likes})`;
    likeButton.classList.add('bg-blue-500', 'hover:bg-blue-700', 'text-white', 'font-bold', 'py-1', 'px-2', 'rounded', 'mr-2');
    likeButton.addEventListener('click', () => handleLike(post.id));
    postElement.appendChild(likeButton);

    // Comment Button (You'll likely want to replace this with a form)
    const commentButton = document.createElement('button');
    commentButton.textContent = `Comment (${post.comments.length})`;
    commentButton.classList.add('bg-gray-300', 'hover:bg-gray-400', 'text-gray-800', 'font-bold', 'py-1', 'px-2', 'rounded');
    commentButton.addEventListener('click', () => handleComment(post.id)); 
    postElement.appendChild(commentButton);

    // Append the post to the posts container
    postsContainer.appendChild(postElement);
  });
}

// Function to handle likes
function handleLike(postId) {
  posts = posts.map(post => {
    if (post.id === postId) {
      return { ...post, likes: post.likes + 1 }; 
    }
    return post;
  });
  savePostsToLocalStorage(); 
  renderPosts(); 
  showNotification('New Like', 'Someone liked your post!'); 
}

// Function to handle comments (Placeholder - You'll need to implement actual commenting)
function handleComment(postId) {
  // Add logic to get the comment text from the user (e.g., using a prompt)

  const commentText = prompt('Enter your comment:'); // Example using a prompt
  if (commentText) {
    posts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, comments: [...post.comments, { text: commentText, user: currentUser }] };
      }
      return post;
    });
    savePostsToLocalStorage(); 
    renderPosts(); 
    showNotification('New Comment', 'Someone commented on your post!'); 
  }
}

// Function to show notifications
function showNotification(title, message) {
  const notificationsContainer = document.getElementById('notificationsContainer');
  const notificationElement = document.createElement('div');
  notificationElement.classList.add('notification', 'p-2', 'mb-2', 'bg-white', 'rounded-lg', 'shadow-md');
  notificationElement.innerHTML = `<strong>${title}:</strong> ${message}`;
  notificationsContainer.prepend(notificationElement);

  // Show the notifications sidebar
  document.getElementById('notificationsSidebar').style.transform = 'translateX(0)'; 
}

// Local Storage Functions for Posts
function loadPostsFromLocalStorage() {
  const storedPosts = localStorage.getItem('posts');
  return storedPosts ? JSON.parse(storedPosts) : [];
}

function savePostsToLocalStorage() {
  localStorage.setItem('posts', JSON.stringify(posts));
}


// Function to load posts 
function loadPosts() {
  posts = loadPostsFromLocalStorage();
  renderPosts();
}

// Initial Form Display (Login form shows first)
if (currentUser) {
  showUserProfile(currentUser);
  loadPosts();
} else {
  showLoginForm();
}

function logout() {
  localStorage.removeItem('currentUser');

  currentUser = null;

  showLoginForm();
  alert("You have been logged out");
}

// Add a logout button to the user profile section (or where you prefer)
const userProfileDiv = document.getElementById('userProfile');
const logoutButton = document.createElement('button');
logoutButton.textContent = 'Logout';
logoutButton.classList.add(
  'mt-4',
  'bg-red-500',
  'hover:bg-red-700',
  'text-white',
  'font-bold',
  'py-2',
  'px-4',
  'rounded',
  'focus:outline-none',
  'focus:shadow-outline'
);

logoutButton.addEventListener('click', logout);
userProfileDiv.appendChild(logoutButton);