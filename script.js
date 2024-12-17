function scrollToChat() {
    document.getElementById("chat-container").scrollIntoView({ behavior: "smooth" });
}

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const chatBox = document.getElementById("chat-box");

    // Display the user's message in chat box
    chatBox.innerHTML += `<div class="message user-message"><strong>You:</strong> ${userInput}</div>`;

    // Simulate bot response
    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        chatBox.innerHTML += `<div class="message bot-message"><strong>Bot:</strong> ${botResponse}</div>`;

        // Scroll chat box to the bottom
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    document.getElementById("user-input").value = "";
}

// Simulate basic bot responses
function getBotResponse(input) {
    const responses = {
        "hello": "Hi there! How can I help you today?",
        "bye": "Goodbye! See you next time!",
        "study tips": "Stay organized and take regular breaks!",
        "resources": "Check out online platforms like Coursera, Khan Academy, and edX!"
    };
    return responses[input.toLowerCase()] || "Sorry, I didn't quite catch that. Can you ask again?";
}
