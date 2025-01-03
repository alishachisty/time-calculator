// Clear input value when clicked if it's 0
document.addEventListener('DOMContentLoaded', function() {
    const numberInputs = document.querySelectorAll('input[type="number"]');
    numberInputs.forEach(input => {
        input.addEventListener('focus', function() {
            if (this.value === '0') {
                this.value = '';
            }
        });
        
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.value = '0';
            }
        });
    });
});

function calculateTime() {
    // Get input values
    let startHour = parseInt(document.getElementById('startHour').value);
    let startMinute = parseInt(document.getElementById('startMinute').value) || 0;
    let addHours = parseInt(document.getElementById('addHours').value) || 0;
    let addMinutes = parseInt(document.getElementById('addMinutes').value) || 0;
    let ampm = document.getElementById('ampm').value;

    // Validate inputs
    if (!startHour || startHour < 1 || startHour > 12) {
        alert("Please enter a valid start hour between 1 and 12");
        return;
    }
    if (startMinute < 0 || startMinute > 59) {
        alert("Start minute must be between 0 and 59");
        return;
    }

    // Convert to minutes since midnight
    let totalMinutes = startMinute + addMinutes;
    let totalHours = startHour + addHours;

    // Add hour if minutes overflow
    if (totalMinutes >= 60) {
        totalHours += Math.floor(totalMinutes / 60);
        totalMinutes = totalMinutes % 60;
    }

    // Adjust hours based on AM/PM
    if (ampm === "PM" && startHour !== 12) {
        totalHours += 12;
    }
    if (ampm === "AM" && startHour === 12) {
        totalHours = totalHours - 12;
    }

    // Calculate final hours and AM/PM
    totalHours = totalHours % 24;
    let finalHours = totalHours % 12;
    finalHours = finalHours === 0 ? 12 : finalHours;
    let finalAMPM = totalHours >= 12 ? "PM" : "AM";

    // Display result
    document.getElementById('newTime').textContent = 
        `${finalHours}:${totalMinutes.toString().padStart(2, '0')} ${finalAMPM}`;
}

function resetForm() {
    document.getElementById('startHour').value = '';
    document.getElementById('startMinute').value = '';
    document.getElementById('addHours').value = '0';
    document.getElementById('addMinutes').value = '0';
    document.getElementById('ampm').value = 'AM';
    document.getElementById('newTime').textContent = '';
}



