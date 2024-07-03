const nextYear = document.getElementById("next-year");
const currentYear = document.getElementById("current-year");
const dayEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");



const currentDate = new Date();
const thisYear = currentDate.getFullYear();
const comingYear = currentDate.getFullYear() + 1
currentYear.innerText = thisYear
nextYear.innerText = comingYear;


const newYearTime = new Date(`Jan 1, ${comingYear} 00:00:00`)


updateCountdown()
function updateCountdown(){
    const now = new Date().getTime();
    const gap = newYearTime - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap/day)
    const h = Math.floor((gap % day) / hour)
    const m = Math.floor(((gap % hour) % hour) / minute)
    const s = Math.floor((gap % minute) / second)
    console.error(s)


    dayEl.innerText = d;
    hoursEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;

    setTimeout(() =>{
        updateCountdown()
    },1000)

}