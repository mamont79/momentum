const greeting = document.querySelector(".greeting");
greeting.textContent = "Text";

const name = document.querySelector(".name");


//const hours = dateH.getHours();

function showGreeting() {
    const timeOfDay = getTimeOfDay();
    greeting.textContent = `Good ${timeOfDay}`;
    setTimeout(showGreeting, 1000);
}

function getTimeOfDay() {
    const dateH = new Date();
    const hours = dateH.getHours();
    if (hours < 6) {
        return "night";
    } else if (hours < 12) {
        return "morning";
    } else if (hours < 18) {
        return "afternoon";
    } else {
        return "evening";
    }
}

function setLocalStorage() {
    localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage);




showGreeting();