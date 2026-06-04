'use strict';

import { fib } from '../lab3/lab2.js';
/**
 * возвращает дробную часть числа
 * @param {number} num - исходное число
 * @returns {number} дробная часть числа
 */
export function getDecimal(num) {
    const fractional = num - Math.floor(num);
    return Math.round(fractional * 100) / 100;
}

/**
 * нормализует URL, добавляя https:// в начало
 * @param {string} url - исходный URL
 * @returns {string} нормализованный URL с https://
 */
export function normalizeUrl(url) {
    let result = url.toLowerCase();
    result = result.replace(/^https?:\/\//, '');
    return 'https://' + result;
}

/**
 * проверяет наличие спама в строке (viagra или XXX)
 * @param {string} str - проверяемая строка
 * @returns {boolean} true, если строка содержит спам, иначе false
 */
export function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/**
 * усекает строку до заданной длины, добавляя многоточие в конце
 * @param {string} str - исходная строка
 * @param {number} maxlength - максимальная длина строки
 * @returns {string} усечённая строка
 */
export function truncate(str, maxlength) {
    if (str.length <= maxlength) {
        return str;
    }
    return str.slice(0, maxlength - 1) + '…';
}

/**
 * преобразует строку с дефисами в camelCase
 * @param {string} str - исходная строка (например, 'var-test-text')
 * @returns {string} преобразованная строка в camelCase
 */
export function camelize(str) {
    const words = str.split('-');
    for (let i = 1; i < words.length; i++) {
        words[i] = ucFirst(words[i]);
    }
    return words.join('');
}

/**
 * делает первую букву строки заглавной
 * @param {string} str - Исходная строка
 * @returns {string} строка с заглавной первой буквой
 */
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

/**
 * возвращает массив чисел Фибоначчи до n-го (не включая его)
 * @param {number} n - количество чисел Фибоначчи (натуральное число)
 * @returns {bigint[]} массив чисел Фибоначчи
 */
export function fibs(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(fib(i));
    }
    return result;
}

/**
 * возвращает новый массив, отсортированный по убыванию, не изменяя исходный
 * @param {Array[]} arr - исходный массив чисел
 * @returns {Array[]} новый массив, отсортированный по убыванию
 */
export function arrReverseSorted(arr) {
    return [...arr].sort((a, b) => b - a);
}

/**
 * возвращает массив уникальных значений из исходного массива
 * @param {any[]} arr - исходный массив с возможными повторениями
 * @returns {any[]} массив уникальных значений
 */
export function unique(arr) {
    return [...new Set(arr)];
}
