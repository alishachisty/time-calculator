function calculateNewTime() {
    const startHour = parseInt(document.getElementById('startHourInput').value);
    const startMinute = parseInt(document.getElementById('startMinuteInput').value);
    const amPm = document.getElementById('amPmInput').value;
    const addHours = parseInt(document.getElementById('addHoursInput').value) || 0;
    const addMinutes = parseInt(document.getElementById('addMinutesInput').value) || 0;

    if (isNaN(startHour) || isNaN(startMinute) || startHour < 1 || startHour > 12 || startMinute < 0 || startMinute > 59) {
        document.getElementById('result').textContent = 'Please enter a valid start time.';
        return;
    }

    // Convert start time to a 24-hour format for easier calculation
    let totalHours = amPm === 'PM' && startHour !== 12 ? startHour + 12 : startHour;
    if (amPm === 'AM' && startHour === 12) totalHours = 0; // Handle 12 AM as 0 hours
    let totalMinutes = startMinute;

    // Add the inputted hours and minutes
    totalHours += addHours;
    totalMinutes += addMinutes;

    // Handle overflow of minutes into hours
    totalHours += Math.floor(totalMinutes / 60);
    totalMinutes %= 60;

    // Handle overflow of hours into AM/PM cycles
    const finalAmPm = totalHours >= 12 && totalHours < 24 ? 'PM' : 'AM';
    totalHours %= 24;
    const finalHour = totalHours === 0 ? 12 : totalHours > 12 ? totalHours - 12 : totalHours;

    // Display the result in regular time format
    const finalMinute = totalMinutes.toString().padStart(2, '0');
    document.getElementById('result').textContent = `${finalHour}:${finalMinute} ${finalAmPm}`;
}


