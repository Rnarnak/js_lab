'use strict';

// Импорт функции fib из lab2 для задания №8
import { fib } from '../lab3/lab2_module.js';

// Задание 1: getDecimal(num) возвращающую дробную часть числа
/**
 * Возвращает дробную часть числа без погрешностей плавающей точки.
 * @param {number} num - исходное число.
 * @returns {number} дробная часть числа.
 */
export function getDecimal(num) {
    const decimalPart = num - Math.floor(num);
    
    // Количество знаков после запятой для обхода погрешностей IEEE 754
    const str = String(num);
    const dotIndex = str.indexOf('.');
    if (dotIndex === -1) return 0;

    const decimalPlaces = str.length - dotIndex - 1;
    return Number(decimalPart.toFixed(decimalPlaces));
}

// Задание 2: Напишите функцию divmod(dividend, divisor), которая делит числа с остатком
/**
 * Делит числа с остатком и возвращает массив [частное, остаток].
 * @param {number} dividend - Делимое.
 * @param {number} divisor - Делитель.
 * @returns {number[]} Массив вида [частное, остаток].
 */
export function divmod(dividend, divisor) {
    if (divisor === 0 || Number.isNaN(dividend) || Number.isNaN(divisor)) {
        return [NaN, NaN];
    }
    const quotient = Math.trunc(dividend / divisor);
    const remainder = dividend % divisor;
    return [quotient, remainder];
}

// Задание 3: Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом
/**
 * Делает первую букву строки заглавной.
 * @param {string} str - Исходная строка.
 * @returns {string} Строка с заглавной первой буквой.
 */
export function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

// Задание 4: Реализуйте функцию normalizeUrl(url), которая приводит адрес строго к https://
/**
 * Нормализует URL, приводя его к нижнему регистру и протоколу https://.
 * @param {string} url - Адрес сайта.
 * @returns {string} Нормализованный URL.
 */
export function normalizeUrl(url) {
    let result = url.toLowerCase();
    // Удаляем http:// или https:// в начале строки, если они есть
    result = result.replace(/^https?:\/\//, '');
    return 'https://' + result;
}

// Задание 5: Напишите функцию checkSpam(str), которая проверяет строку на наличие спама
/**
 * Проверяет наличие подстрок 'viagra' или 'xxx' без учета регистра.
 * @param {string} str - Проверяемая строка.
 * @returns {boolean} true, если строка содержит спам, иначе false.
 */
export function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

// Задание 6: Создайте функцию truncate(str, maxlength), которая усекает строку
/**
 * Усекает строку до заданной длины и добавляет символ многоточия '…'.
 * @param {string} str - Исходная строка.
 * @param {number} maxlength - Максимальная длина строки.
 * @returns {string} Усечённая строка.
 */
export function truncate(str, maxlength) {
    if (str.length <= maxlength) {
        return str;
    }
    // Заменяем конец строки на символ многоточия (Юникод U+2026), чтобы длина стала равна maxlength
    return str.slice(0, maxlength - 1) + '…';
}

// Задание 7: Напишите функцию camelize(str), которая преобразует строку вида 'my-short-string' в 'myShortString'
/**
 * Преобразует строку с дефисами в camelCase.
 * @param {string} str - Исходная строка.
 * @returns {string} Строка в формате camelCase.
 */
export function camelize(str) {
    return str
        .split('-')
        .map((word, index) => {
            return index === 0 ? word : ucFirst(word);
        })
        .join('');
}

// Задание 8: Напишите функцию fibs(n), которая возвращает массив чисел Фибоначчи до n-го
/**
 * Возвращает массив, заполненный первыми n числами Фибоначчи (не включая n-е) типа BigInt.
 * @param {number} n - Количество элементов.
 * @returns {bigint[]} Массив чисел Фибоначчи.
 */
export function fibs(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(fib(i));
    }
    return result;
}

// Задание 9: Напишите функцию arrReverseSorted(arr), которая сортирует числовой массив по убыванию
/**
 * Возвращает новый массив, отсортированный по убыванию, не изменяя исходный.
 * @param {number[]} arr - Неупорядоченный массив чисел.
 * @returns {number[]} Новый отсортированный массив.
 */
export function arrReverseSorted(arr) {
    return [...arr].sort((a, b) => b - a);
}

// Задание 10: Напишите функцию unique(arr), которая вернёт массив уникальных значений
/**
 * Возвращает массив уникальных значений из исходного массива с помощью Set.
 * @param {Array} arr - Исходный массив с возможными повторениями.
 * @returns {Array} Массив уникальных значений.
 */
export function unique(arr) {
    return [...new Set(arr)];
}
