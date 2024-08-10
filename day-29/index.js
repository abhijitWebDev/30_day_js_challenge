// User Authentication Script
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    // Handle user login and store user information (you can use localStorage or sessionStorage)
    console.log(`User logged in: ${username}`);
});

// Sample array of posts
let posts = [];

// Post Creation Script
const postForm = document.getElementById('postForm');
postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const postContent = document.getElementById('postText').value;
    const newPost = { content: postContent, user: 'current_user', timestamp: new Date() };
    posts.push(newPost);
    displayPosts(posts);
});

// Post Display Script
function displayPosts(posts) {
    const postFeed = document.getElementById('postFeed');
    postFeed.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.textContent = `${post.user} - ${post.content} - ${post.timestamp}`;
        postFeed.appendChild(postElement);
    });
}

// Post Interaction Script
function handleLike(postId) {
    // Handle liking a post
    console.log(`Liked post with ID: ${postId}`);
}

function handleComment(postId, comment) {
    // Handle adding comments to a post
    console.log(`Comment added to post with ID ${postId}: ${comment}`);
}
