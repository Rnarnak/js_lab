// импорт из лаб2 для №6
import { fib } from './lab2.js';


// №1: получение дробной части числа
/**
 * @param {number} num - исходное число.
 * @returns {number} дробная часть числа.
 */
function getDecimal(num) {
    const decimalPart = num - Math.floor(num);
    
    // убираем погрешность плавающей точки 
    const str = String(num);
    const dotIndex = str.indexOf('.');
    if (dotIndex === -1) return 0;

    const decimalPlaces = str.length - dotIndex - 1;
    return Number(decimalPart.toFixed(decimalPlaces));
}

// №2: Нормализация URL
/**
 * нормализует URL, приводя его строго к протоколу https://.
 * @param {string} url - адрес сайта.
 * @returns {string} нормализованный URL.
 */
function normalizeUrl(url) {
    if (url.startsWith('https://')) {
        return url;
    }
    if (url.startsWith('http://')) {
        return 'https://' + url.slice(7);
    }
    return 'https://' + url;
}

// №3: проверка на спам
/**
 * проверяет содержит ли строка подстроки 'viagra' или 'xxx' не зависит от регистра
 * @param {string} str - строка  проверки.
 * @returns {boolean} true, если спам иначе false.
 */
function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}


// №4: усечение строки
/**
 * проверяет длину строки и усекает её с добавлением символа многоточия '…',
 * если она превышает maxlength.
 * @param {string} str - исходная строка
 * @param {number} maxlength - макс длина
 * @returns {string} результат обработки строки
 */
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        // ... через юникод 
        return str.slice(0, maxlength - 1) + '…';
    }
    return str;
}

// №5: преобразование строки в camelCase
/**
 * преобразует первый символ строки в верхний регистр
 * функция для camelize
 * @param {string} str - исходная строка
 * @returns {string} строка с заглавным первым символом
 */
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

/**
 * строки вида 'my-short-string' в 'myShortString'.
 * @param {string} str - строка с дефисами.
 * @returns {string} строка в формате camelCase.
 */
function camelize(str) {
    return str
        .split('-')
        .map((word, index) => {
            // первый элемент оставляем как есть остальные делаем с заглавной буквы
            return index === 0 ? word : ucFirst(word);
        })
        .join('');
}


//№6: массив чисел Фибоначчи
/**
 * возвращает массив, заполненный первыми n числами Фибоначчи (не включая n-е).
 * @param {number} n - количество элементов.
 * @returns {bigint[]} массив чисел Фибоначчи типа BigInt.
 */
function fibs(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(fib(i));
    }
    return result;
}

// №7: сортировка массива по убыванию
/**
 * возвращает новый массив отсортированный по убыванию исходный не меняется
 * @param {number[]} arr - неупорядоченный массив чисел.
 * @returns {number[]} новый отсортированный массив.
 */
function arrReverseSorted(arr) {
    // копия через slice() 
    return arr.slice().sort((a, b) => b - a);
}

// Задание 8: Фильтрация уникальных значений через Set
/**
 * возвращает массив уникальных значений через Set.
 * @param {Array} arr - исходный массив с дубликатами.
 * @returns {Array} массив уникальных элементов.
 */
function unique(arr) {
    return Array.from(new Set(arr));
}

// экспортируем все функции как модуль
export {
    getDecimal,
    normalizeUrl,
    checkSpam,
    truncate,
    camelize,
    fibs,
    arrReverseSorted,
    unique
};