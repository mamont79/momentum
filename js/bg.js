const body = document.querySelector(".body")
const next = document.querySelector(".slide-next");
const prev = document.querySelector(".slide-prev");
let randomNum;

function getRandomNum() {
    randomNum = '' + Math.floor(Math.random() * 19 + 1);
    if (randomNum.length == 1) {
        randomNum = '0' + randomNum;
    }
    //setTimeout(getRandomNum, 1000);
}

function setBg() {
    const timeOfDay = getTimeOfDay();
    const bgNum = randomNum;
    const changeTime = 1000 * 600;
    const img = new Image();
    body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/" + timeOfDay + "/" + bgNum + ".jpg')";
    setTimeout(setBg, changeTime);
}

// function setBg() {
//     const img = new Image();
//     const timeOfDay = getTimeOfDay();
//     img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg`;
//     img.onload = () => {
//         body.style.backgroundImage = img.src;
//     };

// }


function getSlideNext() {
    randomNum = randomNum * 1;
    if (randomNum < 20) {
        randomNum += 1;
    } else if (randomNum == 20) {
        randomNum = 1;
    }

    randomNum = '' + randomNum;
    if (randomNum.length == 1) {
        randomNum = '0' + randomNum;
    }
    setBg();
}

function getSlidePrev() {
    randomNum = randomNum * 1;
    if (randomNum > 1) {
        randomNum -= 1;
    } else if (randomNum == 1) {
        randomNum = 20;
    }

    randomNum = '' + randomNum;
    if (randomNum.length == 1) {
        randomNum = '0' + randomNum;
    }
    setBg()
}


getRandomNum();
setBg();

window.addEventListener('click', getSlideNext);
window.addEventListener('click', getSlidePrev);