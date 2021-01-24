/*
Задание 4
Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
*/
let counterValue = 0;

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const spanRef = document.querySelector('#value');

buttonIncrement.addEventListener('click', event => handleIncrement);
buttonDecrement.addEventListener('click', event => handleDecrement);

function handleIncrement(event){counterValue +=1;
spanRef.textContent = counterValue};
function handleDecrement(event){counterValue -=1;
spanRef.textContent = counterVaiue;};
