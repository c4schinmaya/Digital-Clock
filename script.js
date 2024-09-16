
let is24HourFormat = true;

function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');

    if (!is24HourFormat) {
        const amPm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; 
        clockElement.innerHTML = `${hours}:${minutes} ${amPm}`;
    } else {
        clockElement.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes}`;
    }
}

function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    document.getElementById("toggleFormat").textContent = is24HourFormat 
        ? "Switch to 12-hour format" 
        : "Switch to 24-hour format";
}

document.getElementById("toggleFormat").addEventListener("click", toggleFormat);

setInterval(updateClock, 1000);
updateClock();
