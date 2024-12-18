async function sendMessage() {
    const userMessage = document.getElementById('user_input').value;
    const chatbox = document.getElementById('chat-log');

    // Display user's message in chatbox
    const userMessageElement = document.createElement('div');
    userMessageElement.classList.add('user-message');
    userMessageElement.innerText = userMessage;
    chatbox.appendChild(userMessageElement);

    // Clear the input field
    document.getElementById('user_input').value = '';

    // Send message to Flask server (not directly to Rasa)
    const response = await fetch("/get", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "msg": userMessage
        })
    });

    // Get the response from Flask
    const data = await response.text();

    // Display bot's response
    const botMessageElement = document.createElement('div');
    botMessageElement.classList.add('bot-message');
    botMessageElement.innerText = data;
    chatbox.appendChild(botMessageElement);

    // Scroll to the bottom of the chatlog
    chatbox.scrollTop = chatbox.scrollHeight;
}
