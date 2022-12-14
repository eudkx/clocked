const clock = document.querySelector('.clock');

for (let i = 0; i <= 11; i++) {
    let number = document.createElement('div');

    number.style.cssText = `
        display: flex;
        align-items: center;
        width: 175px;
        position: absolute;
        transform: rotateZ(${30* (i + 3)}deg);
    `
    clock.insertAdjacentElement('beforeend', number);
    const number_inside = document.createElement('div');

    number_inside.innerText = `${i}`;

    number_inside.style.cssText = `
        width: 8px;
        transform: rotateZ(-${30 * (i + 3)}deg);
    `

    number.insertAdjacentElement('beforeend', number_inside);
}

const minutes_arrow = document.querySelector('.minutes-center');
const hours_arrow = document.querySelector('.hours-center');
const seconds_arrow = document.querySelector('.seconds-center');

const rotating = () => {
    const date = new Date();
    const date_seconds = date.getSeconds();
    const date_minutes = date.getMinutes();
    const date_hours = date.getHours();

    seconds_arrow.style.transform = `rotateZ(${6 * date_seconds + 180}deg)`;
    (date_seconds == "00") ? seconds_arrow.style.transform = `rotateZ(180deg)` : 0;

    minutes_arrow.style.transform = `rotateZ(${(date_seconds / 10) + (6 * date_minutes) + 180}deg)`;
    (date_minutes == "00") ? minutes_arrow.style.transform = `rotateZ(180deg)` : 0;

    hours_arrow.style.transform = `rotateZ(${(30 * date_hours) + (date_minutes / 2) + 180}deg)`;
    (date_hours == "00") ? hours_arrow.style.transform = `rotateZ(180deg)` : 0;

}

const timed = setInterval(rotating, 1000);

const time_rn = document.querySelector('.time-content');
const time_of_day = document.querySelector('.time-of-day');

const decrement = (props) => {
    time_of_day.innerText = "PM"
    return props -= 12;
}


const timing = () => {
    const date = new Date();
    let [hh, mm, ss] = [date.getHours(), date.getMinutes(), date.getSeconds()];

    (String(mm).length == 1) ? mm = "0" + String(mm) : mm;

    (String(ss).length == 1) ? ss = "0" + String(ss) : ss;

    if (hh > 12) {
        time_of_day.innerText = "PM";
        hh = date.getHours() - 12;
    } else {
        time_of_day.innerText = "AM";
    }
    time_rn.innerText = `${hh} : ${mm} : ${ss}`;
}

let timed_time = setInterval(timing, 1000);

