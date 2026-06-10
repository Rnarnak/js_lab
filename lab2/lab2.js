/**
 * @file Лабораторная работа №2. Набор базовых и продвинутых функций JavaScript.
 */

/**
 * №1 Возведение числа x в степень n.
 * Поддерживает отрицательные показатели степени.
 * @param {number} x – Основание степени.
 * @param {number} n – Показатель степени.
 * @returns {number} Результат возведения x в степень n.
 */
function pow(x, n) {
  if (n === 0) return 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

/**
 * №2 Функция вычисления суммы чисел от 1 до n, созданная через `new Function`.
 * @global
 * @function sumTo
 * @param {number} n – Верхняя граница диапазона суммирования.
 * @returns {number} Сумма чисел от 1 до n.
 */
const sumTo = new Function('n', `
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
`);

/**
 * №3 Проверка, является ли год високосным.
 * @param {number} year – Проверяемый год.
 * @returns {boolean} true, если год високосный, иначе false.
 */
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

/**
 * №4 Вычисление факториала числа с использованием рекурсии.
 * Для вычислений больших значений используется тип BigInt.
 * @param {number|bigint} n – Число, факториал которого нужно вычислить.
 * @returns {bigint} Факториал числа в формате BigInt.
 */
function factorial(n) {
  const bigN = BigInt(n);
  if (bigN === 0n || bigN === 1n) return 1n;
  return bigN * factorial(bigN - 1n);
}

/**
 * №5 Вычисление n-го числа Фибоначчи.
 * Для предотвращения переполнения результат вычисляется в BigInt.
 * @param {number|bigint} n – Порядковый номер числа Фибоначчи.
 * @returns {bigint} n-е число Фибоначчи в формате BigInt.
 */
function fib(n) {
  const target = Number(n);
  if (target === 0) return 0n;
  if (target === 1) return 1n;

  let a = 0n;
  let b = 1n;
  for (let i = 2; i <= target; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

/**
 * №6 Функция, принимающая число x и возвращающая функцию сравнения с y.
 * @param {number} x – Число для фиксации во внутренней области видимости (замыкании).
 * @returns {function(number): (boolean|null)} Функция, которая принимает число y и возвращает:
 * - `true`, если y > x;
 * - `false`, если y < x;
 * - `null`, если они равны.
 */
function compare(x) {
  return function(y) {
    if (y > x) return true;
    if (y < x) return false;
    return null;
  };
}

/**
 * №7 Вычисление суммы произвольного количества переданных аргументов.
 * @param {...number} args – Набор чисел для суммирования.
 * @returns {number} Сумма всех переданных аргументов.
 */
function sum(...args) {
  return args.reduce((acc, current) => acc + current, 0);
}

/**
 * №8 Добавление «черной метки» (свойства со специальным символом) в объект
 * через глобальный реестр символов.
 * @param {Object} obj – Исходный объект, в который добавляется метка.
 * @returns {Object} Модифицированный объект с добавленныи символьным свойством.
 */
function addBlackSpot(obj) {
  obj[Symbol.for('blackSpot')] = true;
  return obj;
}

// Глобальный экспорт для браузера (чтобы Mocha видела функции в объекте window)
if (typeof window !== 'undefined') {
  window.pow = pow;
  window.sumTo = sumTo;
  window.isLeapYear = isLeapYear;
  window.factorial = factorial;
  window.fib = fib;
  window.compare = compare;
  window.sum = sum;
  window.addBlackSpot = addBlackSpot;
}
