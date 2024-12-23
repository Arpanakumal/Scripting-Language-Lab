function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    document.getElementById('second').style.transform = `rotate(${seconds * 6}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minutes * 6}deg)`;
    document.getElementById('hour').style.transform = `rotate(${(hours % 12) * 30 + minutes / 2}deg)`;
}
setInterval(updateClock, 1000);
updateClock();