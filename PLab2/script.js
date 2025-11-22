function updatePage() {
    const userName = document.getElementById('nameInput').value;
    const userMessage = document.getElementById('messageInput').value;
    const backgroundColor = document.getElementById('colorSelect').value;


    if (userName.trim() !== '') {
        document.getElementById('greeting').textContent = 'Hello ' + userName + '!';
    }


    if (userMessage.trim() !== '') {
        document.getElementById('message').textContent = userMessage;
    }

    document.body.style.backgroundColor = backgroundColor;
}

function addTodoItem() {
    const userInput = document.getElementById('todoInput').value;

    if (userInput !== '') {
        const newItem = document.createElement('li');
        newItem.textContent = userInput;
        document.getElementById('todoList').appendChild(newItem);
        document.getElementById('todoInput').value = '';
    }
}