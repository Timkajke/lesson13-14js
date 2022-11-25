// БЛОК 1. setInterval() - запускает функцию через определённый
// промежуток времени. Принимает 2 аргумента.
// 1 - Callback, 2 -кол-во милисекунд (1000 мс = 1 с).
// Минимальное(дефолтное) - 10 мс.

/*
function timer() {
    document.write('Timer<br>');
}

setInterval(timer, 1000);
*/

// короткая запись
// setInterval(() => document.write('Timer<br>'), 1000);

// БЛОК 2. Вызов/остановка таймера по кнопкам

/*
const startTimer = document.querySelector('#start');
const stopTimer = document.querySelector('#stop');

let i = 0; // счётчик
let timerId = null;

startTimer.addEventListener('click', () => {
    timerId = setInterval(() => console.log(++i), 2000);
    console.log('Timer #' + timerId);
});

stopTimer.addEventListener('click', () => {
    while (timerId)
        clearInterval(timerId--); // удаление запущенного потока
});
*/

// БЛОК 3. setTimeOut() - выполняет функцию с отложенной задержкой

// function callAlert() {
//     setTimeout(() => alert('Я появлюсь через 3 секунды'), 3000);
// }

// пример с рекурсией (аналог setInterval)
/*
(function timer() {
    document.write('Timer<br>');
    setTimeout(timer, 1000);
})();
*/

// Задача. Сделать электронные часы на странице

/*
const clock = document.querySelector('#clock');

function currentTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = updateTime(hours);
    minutes = updateTime(minutes);
    seconds = updateTime(seconds);
    clock.innerText = hours + " : " + minutes + " : " + seconds;
    setTimeout(currentTime, 1000);
}

function updateTime(value) {
    return value < 10 ? '0' + value : value;
}

currentTime();
*/

// const h_timer = document.querySelector("#clock");
// function clockTime(){
//     setInterval(() => {
//         let time_now = new Date();
//         h_timer.innerText = time_now.toLocaleTimeString();
//     }, 1000);
// }
// clockTime();