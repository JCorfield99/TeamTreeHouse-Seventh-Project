const alertBell = document.querySelector('.notification-bell');
const dropdown = document.getElementById('dropdown-menu');
const alertBox = document.querySelector('.alert');
const alertButton = alertBox.lastElementChild;

const chartSelectRadio = document.querySelectorAll('input[name=traffic]');
let prevRadio = null;

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

let userSettings = {
    emailNotification: stringToBool(localStorage.getItem('emailNotification')),
    publicProfile: stringToBool(localStorage.getItem('publicProfile')),
    timezone: localStorage.getItem('timezone'),
};

// Toggles dropdown menu
function dropdownToggle() {
    dropdown.classList.toggle('show');
}

// Closes the alert box
function alertClose() {
    alertBox.style.display = 'none';
}

// Updates traffic chart data
function updateData(chart, dataType, labelType) {
    chart.data.labels = labelType;
    chart.data.datasets[0].data = dataType;
    chart.update();
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

// Converts a true/false string into a boolean value
function stringToBool(string) {
    return (string === 'true');
}

// Updates current page settings
function updateSettings(settings) {
    localStorage.setItem('emailNotification', settings.emailNotification);
    emailNotificationBtn.checked = stringToBool(localStorage.getItem('emailNotification'));
    userSettings.emailNotification = emailNotificationBtn.checked;

    localStorage.setItem('publicProfile', settings.publicProfile);
    publicProfileBtn.checked = stringToBool(localStorage.getItem('publicProfile'));
    userSettings.publicProfile = publicProfileBtn.checked;

    localStorage.setItem('timezone', settings.timezone);
    timezoneSelect.value = localStorage.getItem('timezone');
    userSettings.timezone = timezoneSelect.value;
}

// If there are settings options in local storage it selects those settings, else it selects default settings
function downloadSettings() {
    let settings = {
        emailNotification: null,
        publicProfile: null,
        timezone: null,
    };
    for (const key in userSettings) {
        if (!userSettings[key]) {
            settings[key] = defaultSettings[key];
        } else {
            settings[key] = userSettings[key];
        }
    }
    updateSettings(settings);
}
downloadSettings();

alertBell.addEventListener('click', () => {
    dropdownToggle();
});

window.addEventListener('click', (event) => {
    if (event.target.classList.value !== 'notification-bell') {
        if (dropdown.classList.contains('show')) {
            dropdownToggle();
        }
    }
});

alertButton.addEventListener('click', () => {
    alertClose();
});

for (let i = 0; i < chartSelectRadio.length; i++) {
    const radio = chartSelectRadio[i];
    radio.addEventListener('change', () => {
        if (radio.value === 'hourly') {
            updateData(trafficChart, hourlyTrafficData, hourlyTrafficLabels);
        } else if (radio.value === 'daily') {
            updateData(trafficChart, dailyTrafficData, dailyTrafficLabels);
        } else if (radio.value === 'weekly') {
            updateData(trafficChart, weeklyTrafficData, weeklyTrafficLabels);
        } else if (radio.value === 'monthly') {
            updateData(trafficChart, monthlyTrafficData, monthlyTrafficLabels);
        }
    });
}

messageButton.addEventListener('click', () => {
    let user = document.getElementById('search-user');
    let message = document.getElementById('message-user');
    const sent = sendMessage(user.value, message.value);
    if (sent) {
        user.value = '';
        message.value = '';
    }
});

saveBtn.addEventListener('click', () => {
    const newSettings = {
        emailNotification: emailNotificationBtn.checked,
        publicProfile: publicProfileBtn.checked,
        timezone: timezoneSelect.value,
    };
    updateSettings(newSettings);
    alert('Settings updated.');
});

cancelBtn.addEventListener('click', () => {
    emailNotificationBtn.checked = userSettings.emailNotification;
    publicProfileBtn.checked = userSettings.publicProfile;
    timezoneSelect.value = userSettings.timezone;
    alert('Changes cancelled');
});
