// requestAnimationFrame (rAF) - механизм, который предоставляет разработчику доступ
// к жизненному циклу фрейма, позволяя выполнять операции перед вычислением стилей
// и формированием макета (layout) браузером

// Преимущества использования:
// 1) Вызывается не чаще и не реже, чем браузер вычисляет макет
// 2) Вызывается перед формированием макета, т.е. в нужное время
// 3) Не использует ресурсы на перерисовку при переключении вкладок (при уходе со страницы)

// Конечная суть rAF - позволяет синхронизировать запуск функции коллбэка
// с рендерингом страницы

const div = document.querySelector('div');
let id = null;
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

div.style.width = div.clientWidth + 'px'; // 5px

function repeat() {
    div.style.width = (parseFloat(div.style.width) + 0.2) + 'px';
    id = requestAnimationFrame(repeat);
}

start.addEventListener('click', () => {
    requestAnimationFrame(repeat);
});

stop.addEventListener('click', () => {
    while (id)
        cancelAnimationFrame(id--); // остановка анимации
});

console.log('div', div.style.width);

const toDoUlList = document.querySelector('#toDoUlList');
let li = null;
const add = document.querySelector('#add');
let i = 1;

add.addEventListener('click', () => {
    li = document.createElement('li');
    li.innerText = `New Element`;
    toDoUlList.appendChild(li);

li.removeChild(li);

    let elems = document.querySelectorAll('#toDoUlList li');
    for (let i = 0; i < elems.length; i++) {
        elems[i].addEventListener('click', () => {
            elems[i].removeChild(li);
        });
    }
});

// одна фия создаёт список
// другая функция добавляет
// третья удаляет 


/* 
Задание: 
Есть список (ul) с начальным набором элементов
Кнопка add, добавляет элемент в список:
	(Новый элемент 1, 
	... 
	Новый элемент N)

При нажатии на элемент списка он удаляется
*/


