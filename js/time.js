const time = document.querySelector(".time");
time.textContent = "Text";

const date = document.querySelector(".date");
date.textContent = "Text";

const options = { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'UTC' };
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;

    showDate();

    setTimeout(showTime, 1000);
}

function showDate() {
    const date1 = new Date();
    const currentDay = date1.getDay();
    const currentMonth = date1.getMonth();
    const currentDate = date1.getDate();
    date.textContent = days[currentDay - 1] + ', ' + months[currentMonth] + ' ' + currentDate;


}

// const date2 = new Date();
// const options = { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'UTC' };
// const currentDate = date2.toLocaleDateString('en-Br', options);
// console.log(currentDate);

showTime();