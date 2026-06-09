'use strict';

Import { fib } from '../lab3/lab2.js';

/**
 * возвращает дробную часть числа, округленную до 2 знаков
 * @param {number} num – исходное число
 * @returns {number} дробная часть числа
 */
Export function getDecimal(num) {
    Const fractional = num – Math.floor(num);
    Return Math.round(fractional * 100) / 100;
}

/**
 * нормализует URL, добавляя https:// в начало
 * @param {string} url – исходный URL
 * @returns {string} нормализованный URL с https://
 */
Export function normalizeUrl(url) {
    Let result = url.toLowerCase();
    Result = result.replace(/^https?:\/\//, '');
    Return 'https://' + result;
}

/**
 * проверяет наличие спама в строке (viagra или XXX)
 * @param {string} str – проверяемая строка
 * @returns {boolean} true, если строка содержит спам, иначе false
 */
Export function checkSpam(str) {
    Const lowerStr = str.toLowerCase();
    Return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/**
 * усекает строку до заданной длины, добавляя многоточие в конце
 * @param {string} str – исходная строка
 * @param {number} maxlength – максимальная длина строки
 * @returns {string} усечённая строка
 */
Export function truncate(str, maxlength) {
    If (str.length <= maxlength) {
        Return str;
    }
    Return str.slice(0, maxlength – 1) + '…';
}

/**
 * преобразует строку с дефисами в camelCase
 * @param {string} str – исходная строка (например, 'var-test-text')
 * @returns {string} преобразованная строка в camelCase
 */
Export function camelize(str) {
    Const words = str.split('-');
    For (let i = 1; i < words.length; i++) {
        Words[i] = ucFirst(words[i]);
    }
    Return words.join('');
}

/**
 * делает первую букву строки заглавной
 * @param {string} str – Исходная строка
 * @returns {string} строка с заглавной первой буквой
 */
Function ucFirst(str) {
    If (!str) return str;
    Return str[0].toUpperCase() + str.slice(1);
}

/**
 * возвращает массив чисел Фибоначчи до n-го (не включая его)
 * @param {number} n – количество чисел Фибоначчи (натуральное число)
 * @returns {bigint[]} массив чисел Фибоначчи
 */
Export function fibs(n) {
    Const result = [];
    For (let i = 0; i < n; i++) {
        Result.push(fib(i));
    }
    Return result;
}

/**
 * возвращает новый массив, отсортированный по убыванию, не изменяя исходный
 * @template T
 * @param {T[]} arr – исходный массив элементов
 * @returns {T[]} новый массив, отсортированный по убыванию
 */
Export function arrReverseSorted(arr) {
    Return […arr].sort((a, b) => b – a);
}

/**
 * возвращает массив уникальных значений из исходного массива
 * @template T
 * @param {T[]} arr – исходный массив с возможными повторениями
 * @returns {T[]} массив уникальных значений
 */
Export function unique(arr) {
    Return […new Set(arr)];
}
