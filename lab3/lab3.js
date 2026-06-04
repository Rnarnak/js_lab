'use strict';

// Импорт функции fib из lab2 (модифицируй путь, если lab2_module.js лежит в другом месте)
import { fib } from './lab2.js';

// №1: Получение дробной части числа
/**
 * @param {number} num - исходное число.
 * @returns {number} дробная часть числа.
 */
export function getDecimal(num) {
    // Для отрицательных чисел, например -1.23, Math.floor(-1.23) дает -2
    // -1.23 - (-2) = 0.77, что строго соответствует ТЗ на скриншоте
    const decimalPart = num - Math.floor(num);
    
    // Убираем погрешность плавающей точки (IEEE 754)
    const str = String(num);
    const dotIndex = str.indexOf('.');
    if (dotIndex === -1) return 0;

    const decimalPlaces = str.length - dotIndex - 1;
    return Number(decimalPart.toFixed(decimalPlaces));
}

// №2: Деление с остатком (divmod) - ДОБАВЛЕНО
/**
 * Делит числа с остатком.
 * @param {number} dividend - делимое.
 * @param {number} divisor - делитель.
 * @returns {number[]} массив вида [частное, остаток].
 */
export function divmod(dividend, divisor) {
    if (divisor === 0 || Number.isNaN(dividend) || Number.isNaN(divisor)) {
        return [NaN, NaN];
    }
    
    // Получаем целочисленное частное, сдвигая в сторону нуля
    const quotient = Math.trunc(dividend / divisor);
    const remainder = dividend % divisor;
    
    return [quotient, remainder];
}

// №3: Сделать первую букву заглавной
/**
 * @param {string} str - исходная строка
 * @returns {string} строка с заглавным первым символом
 */
export function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

// №4: Нормализация URL
/**
 * Нормализует URL, приводя его строго к протоколу https://.
 * @param {string} url - адрес сайта.
 * @returns {string} нормализованный URL.
 */
export function normalizeUrl(url) {
    let result = url.toLowerCase();
    // Удаляем уже существующие http:// или https://
    result = result.replace(/^https?:\/\//, '');
    return 'https://' + result;
}

// №5: Проверка на спам
/**
 * Проверяет, содержит ли строка подстроки 'viagra' или 'xxx' без учета регистра.
 * @param {string} str - строка проверки.
 * @returns {boolean} true, если спам, иначе false.
 */
export function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

// №6: Усечение строки
/**
 * Проверяет длину строки и усекает её с добавлением символа многоточия '…',
 * если она превышает maxlength.
 * @param {string} str - исходная строка
 * @param {number} maxlength - макс длина
 * @returns {string} результат обработки строки
 */
export function truncate(str, maxlength) {
    if (str.length <= maxlength) {
        return str;
    }
    // Используем юникод символ '…' (длина 1), как указано в ТЗ
    return str.slice(0, maxlength - 1) + '…';
}

// №7: Преобразование строки в camelCase
/**
 * Строки вида 'var-test-text' в 'varTestText'.
 * @param {string} str - строка с дефисами.
 * @returns {string} строка в формате camelCase.
 */
export function camelize(str) {
    return str
        .split('-')
        .map((word, index) => {
            return index === 0 ? word : ucFirst(word);
        })
        .join('');
}

// №8: Массив чисел Фибоначчи
/**
 * Возвращает массив, заполненный первыми n числами Фибоначчи (не включая n-е).
 * @param {number} n - количество элементов.
 * @returns {bigint[]} массив чисел Фибоначчи типа BigInt.
 */
export function fibs(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(fib(i));
    }
    return result;
}

// №9: Сортировка массива по убыванию
/**
 * Возвращает новый массив, отсортированный по убыванию. Исходный не меняется.
 * @param {number[]} arr - неупорядоченный массив чисел.
 * @returns {number[]} новый отсортированный массив.
 */
export function arrReverseSorted(arr) {
    // Копирование через спред-оператор [...] безопаснее и современнее
    return [...arr].sort((a, b) => b - a);
}

// Задание 10: Фильтрация уникальных значений через Set
/**
 * Возвращает массив уникальных значений через Set.
 * @param {Array} arr - исходный массив с дубликатами.
 * @returns {Array} массив уникальных элементов.
 */
export function unique(arr) {
    return [...new Set(arr)];
}
import {
    getDecimal,
    divmod, // <-- ОБЯЗАТЕЛЬНО ДОБАВЬ СЮДА
    ucFirst,
    normalizeUrl,
    checkSpam,
    truncate,
    camelize,
    fibs,
    arrReverseSorted,
    unique
} from './lab3.js';
