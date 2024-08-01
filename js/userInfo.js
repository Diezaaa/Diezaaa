//getting cords
const longitudeElem = document.querySelector('#longitude')
const latitudeElem = document.querySelector('#latitude')
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            latitudeElem.innerHTML = latitude.toFixed(3);
            longitudeElem.innerHTML = longitude.toFixed(3);

        },
        (error) => {
            latitudeElem.innerHTML = "???";
            longitudeElem.innerHTML = "???";
        }
    );
} else {
    console.log("Geolocation is not supported by this browser.");
}

//clock
const clockElem = document.querySelector('#clock');
updateClock()
function updateClock() {
    let clock, minutes, hours;
    minutes = new Date().getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    hours = new Date().getHours();
    if (hours < 10) {
        hours = "0" + hours;
    }
    clockElem.innerHTML =  hours + ":" + minutes;
}

setInterval(updateClock, 1000);

//time spent
let seconds = 0, minutes = 0;
const timeSpentElem = document.querySelector('#timeSpent');
function updateTimeSpent(){
    seconds = seconds + 1;
    seconds = seconds % 60;
    minutes = (seconds / 60).toFixed(0);
    timeSpentElem.innerHTML = (minutes < 10 ? '0' + minutes : minutes) + ":" + (seconds < 10 ? '0' + seconds : seconds);
}

setInterval(updateTimeSpent, 1000);

//getting ip and location
const locationElem = document.querySelector('#location');
async function getCityAndCountry() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            // Use OpenStreetMap Nominatim for reverse geocoding
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
            const data = await response.json();

            if (data && data.address) {
                const city = data.address.city || data.address.town || data.address.village || 'City not found';
                locationElem.innerHTML = city;
            } else {
                locationElem.innerHTML = "???";
            }
        }, (error) => {
            locationElem.innerHTML = "???";
        });
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
}
getCityAndCountry();


const ip = document.querySelector('#ip');
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        ip.innerHTML = data.ip;
    })
    .catch(error => {
        ip.innerHTML = "???";
    });


const os = document.querySelector('#os');
let detectedOS = "???";
console.log(navigator.userAgent)
if (navigator.userAgent.indexOf("Mac") !== -1)
    detectedOS = "MacOS";

if (navigator.userAgent.indexOf("Android") !== -1){
    detectedOS = "Android";
}

if (navigator.userAgent.indexOf("iPhone") !== -1){
    detectedOS = "IOS";
}

if (navigator.userAgent.indexOf("Win") !== -1)
    detectedOS = "Windows";

if (navigator.userAgent.indexOf("Linux") !== -1)
    detectedOS = "Linux";

os.innerHTML = detectedOS


let browserElem = document.querySelector('#browser');
function getBrowserName() {
    const userAgent = navigator.userAgent;
    let browserName;

    if (userAgent.includes("Chrome")) {
        browserElem.innerHTML = "Chrome";
    } else if (userAgent.includes("Safari")) {
        browserElem.innerHTML = "Safari";
    } else if (userAgent.includes("Edge")) {
        browserElem.innerHTML = "Edge";
    } else if (userAgent.includes("MSIE") || userAgent.includes("Trident")) {
        browserElem.innerHTML = "Internet Explorer";
    } else {
        browserElem.innerHTML = "???";
    }

    return browserName;
}getBrowserName()