
const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
    console.log('Connected to the WebSocket server');
}

ws.onmessage = (event) => {
    console.log(`Message from server: ${event.data}`);
    displayMessage(event.data);
}

ws.onclose = () => {
    console.log('Disconnected from the WebSocket server');
}

ws.onerror = (error) => {
    console.error('WebSocket error: ', error);
}

let username = '';
function handleChangeName() {
    const input = document.getElementById('usernameInput');
    username = input.value;
    input.value = '';
}

function sendMessage() {
    const input = document.querySelector('#msgInput');
    const message = input.value;
    if (message && username) {
        const messageObject = {
            type: 'message',
            username: username,
            message: message
        };
        ws.send(JSON.stringify(messageObject));
        displayMessage(`You: ${message}`);
        input.value = '';
    } else {
        alert('Please enter a message and set your username.');
    }
}

function displayMessage(message) {
    const messageList = document.getElementById('messages');
    const listItem = document.createElement('li');
    listItem.textContent = message;
    messageList.appendChild(listItem);
}

// Event listeners for sending messages
document.getElementById('sendBtn').addEventListener('click', sendMessage);
document.getElementById('msgInput').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});



