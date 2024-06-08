document.addEventListener("DOMContentLoaded", function() {
    const messages = [
        "chhaviii   !",
        "I know you overthink a lot...",
        "I also know you do a lot for us ",
        "You make my heart race puucuu.",
        "You're the reason I smile every day.",
        "So, I have a question for you...",
        "Will you be mine fore ever ?"
    ];

    let messageIndex = 0;
    const messageElement = document.getElementById('message');

    function displayMessage() {
        if (messageIndex < messages.length) {
            messageElement.textContent = messages[messageIndex];
            messageIndex++;
            setTimeout(displayMessage, 3000);
        }
    }

    displayMessage();
});
