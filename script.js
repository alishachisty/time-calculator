function calculateTime() {
    // Get input values
    let startHour = parseInt(document.getElementById('startHour').value) || 0;
    let startMinute = parseInt(document.getElementById('startMinute').value) || 0;
    let addHours = parseInt(document.getElementById('addHours').value) || 0;
    let addMinutes = parseInt(document.getElementById('addMinutes').value) || 0;
    let ampm = document.getElementById('ampm').value;

    // Validate inputs
    if (startHour < 1 || startHour > 12) {
        alert("Start hour must be between 1 and 12");
        return;
    }
    if (startMinute < 0 || startMinute > 59) {
        alert("Start minute must be between 0 and 59");
        return;
    }

    // Convert to 24 hour format
    if (ampm === "PM" && startHour !== 12) {
        startHour += 12;
    }
    if (ampm === "AM" && startHour === 12) {
        startHour = 0;
    }

    // Calculate total minutes
    let totalMinutes = (startHour * 60 + startMinute) + (addHours * 60 + addMinutes);

    // Convert back to hours and minutes
    let newHours = Math.floor(totalMinutes / 60) % 24;
    let newMinutes = totalMinutes % 60;

    // Convert back to 12 hour format
    let newAMPM = "AM";
    if (newHours >= 12) {
        newAMPM = "PM";
        if (newHours > 12) {
            newHours -= 12;
        }
    }
    if (newHours === 0) {
        newHours = 12;
    }

    // Display result
    document.getElementById('newTime').textContent = 
        `${newHours}:${newMinutes.toString().padStart(2, '0')} ${newAMPM}`;
}

function resetForm() {
    // Reset all input fields
    document.getElementById('startHour').value = '';
    document.getElementById('startMinute').value = '';
    document.getElementById('addHours').value = '0';
    document.getElementById('addMinutes').value = '0';
    document.getElementById('ampm').value = 'AM';
    document.getElementById('newTime').textContent = '';



