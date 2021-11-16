const alertBox = document.querySelector('.alert');
const alertButton = alertBox.lastElementChild;
const messageButton = document.querySelector('.send-btn');

// Closes the alert box
function alertClose() {
    alertBox.style.display = 'none';
}

function sendMessage(user, message) {
    let messageSuccess = false;
    if (user === '') {
        alert('No user has been selected.');
    } else if (message === '') {
        alert('The message field has been left empty.');
    } else {
        alert(`Your message to ${user} has been sent successfully.`);
        messageSuccess = true;
    }
    return messageSuccess;
}

alertButton.addEventListener('click', () => {
    alertClose();
});

messageButton.addEventListener('click', () => {
    let user = document.getElementById('search-user');
    let message = document.getElementById('message-user');
    const sent = sendMessage(user.value, message.value);
    if (sent) {
        user.value = '';
        message.value = '';
    }
});
