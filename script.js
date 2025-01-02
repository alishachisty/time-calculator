// Function to display current time
function updateCurrentTime() {
    const currentTimeSpan = document.getElementById('currentTime');
    const now = new Date();
    currentTimeSpan.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Function to calculate the new time
function calculateTime() {
    const hoursInput = document.getElementById('hoursInput').value;
    const minutesInput = document.getElementById('minutesInput').value;
    const resultSpan = document.getElementById('result');

    if (!hoursInput && !minutesInput) {
        resultSpan.textContent = 'Please enter hours or minutes!';
        return;
    }

    const now = new Date();
    const addedTime = new Date(now.getTime());
    addedTime.setHours(now.getHours() + parseInt(hoursInput || 0));
    addedTime.setMinutes(now.getMinutes() + parseInt(minutesInput || 0));

    resultSpan.textContent = addedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Update the current time every second
setInterval(updateCurrentTime, 1000);
