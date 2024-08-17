// ---------------------------------------------------------------------------------------------------------------
// Тут зібрані підключення усіх джаваскрипт компонентів, які можуть знадобитись в роботі. Приклад використання зазвичай знаходиться в самому скрипті компоненту.
// ---------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------

// Підключення відстеження елементів для анімації. Інструкція знаходиться тут --> ./js_components/elementWatcher.js
import { initializeElementWatcher } from './js_components/elementWatcher.js';
// Ініціалізація відстеження елементів для анімації.
initializeElementWatcher();

// ---------------------------------------------------------------------------------------------------------------
// тут усе має бути типу через імпорти з описом і тд


// move elemen functional

document.addEventListener('DOMContentLoaded', function () {
    const movedElements = document.querySelectorAll('[data-move]');
    const originalContainers = new WeakMap();

    movedElements.forEach(element => {
        const targetSelector = element.getAttribute('data-move');
        const breakpoint = parseInt(element.getAttribute('data-breakpoint'), 10);
        originalContainers.set(element, element.parentNode);

        const moveElement = () => {
            if (window.innerWidth <= breakpoint) {
                const targetContainer = document.querySelector(targetSelector);
                if (targetContainer) {
                    targetContainer.appendChild(element);
                }
            } else {
                const originalContainer = originalContainers.get(element);
                if (originalContainer) {
                    originalContainer.appendChild(element);
                }
            }
        };

        window.addEventListener('resize', moveElement);
        moveElement();
    });
});

// header burger menu scripts

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
    });
});
