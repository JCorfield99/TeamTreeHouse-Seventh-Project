const alertBox = document.querySelector('.alert');
const alertButton = alertBox.lastElementChild;
const messageButton = document.querySelector('.send-btn');

const emailNotificationBtn = document.getElementById('email-notification');
const publicProfileBtn = document.getElementById('public-profile');
const timezoneSelect = document.getElementById('timezone');
const settingBtn = document.querySelector('.settings-btn');
const saveBtn = settingBtn.firstElementChild;
const cancelBtn = settingBtn.lastElementChild;

const defaultSettings = {
    emailNotification: false,
    publicProfile: false,
    timezone: 'GMT',
};

// Closes the alert box
function alertClose() {
    alertBox.style.display = 'none';
}

// Sends given message to the selected user
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

// If there are settings options in local storage it selects those settings, else it selects default settings
function updateSettings() {
    emailNotificationBtn.checked = defaultSettings.emailNotification;
    publicProfileBtn.checked = defaultSettings.publicProfile;
    timezoneSelect.value = defaultSettings.timezone;
}
updateSettings();

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
