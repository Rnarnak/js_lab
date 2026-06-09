/**
 * @file Лабораторная работа №2. Набор базовых и продвинутых функций JavaScript.
 */

/**
 * №1 Возведение числа x в степень n.
 * Поддерживает отрицательные показатели степени.
 * * @param {number} x – Основание степени.
 * @param {number} n – Показатель степени.
 * @returns {number} Результат возведения x в степень n.
 */
Function pow(x, n) {
  If (n === 0) return 1;
  If (n < 0) {
    X = 1 / x;
    N = -n;
  }
  Let result = 1;
  For (let i = 0; i < n; i++) {
    Result *= x;
  }
  Return result;
}

/**
 * №2 Функция вычисления суммы чисел от 1 до n, созданная через `new Function`.
 * * @global
 * @function sumTo
 * @param {number} n – Верхняя граница диапазона суммирования.
 * @returns {number} Сумма чисел от 1 до n.
 */
Const sumTo = new Function('n', `
  Let sum = 0;
  For (let i = 1; i <= n; i++) {
    Sum += i;
  }
  Return sum;
`);

/**
 * №3 Проверка, является ли год високосным.
 * * @param {number} year – Проверяемый год.
 * @returns {boolean} true, если год високосный, иначе false.
 */
Function isLeapYear(year) {
  Return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

/**
 * №4 Вычисление факториала числа с использованием рекурсии.
 * Для вычислений больших значений используется тип BigInt.
 * * @param {number|bigint} n – Число, факториал которого нужно вычислить.
 * @returns {bigint} Факториал числа в формате BigInt.
 */
Function factorial(n) {
  // Принудительно переводим аргумент в BigInt, чтобы не было путаницы
  Const bigN = BigInt(n);
  If (bigN === 0n || bigN === 1n) return 1n;
  Return bigN * factorial(bigN – 1n);
}

/**
 * №5 Вычисление n-го числа Фибоначчи.
 * Для предотвращения переполнения результат вычисляется в BigInt.
 * * @param {number|bigint} n – Порядковый номер числа Фибоначчи.
 * @returns {bigint} n-е число Фибоначчи в формате BigInt.
 */
Function fib(n) {
  // лимит в обычное число для безопасности счетчика цикла i
  Const target = Number(n);
  If (target === 0) return 0n;
  If (target === 1) return 1n;

  Let a = 0n;
  Let b = 1n;
  For (let i = 2; i <= target; i++) {
    Let c = a + b;
    A = b;
    B = c;
  }
  Return b;
}

/**
 * Функция, принимающая число x и возвращающая функцию сравнения с y.
 * * @param {number} x – Число для фиксации во внутренней области видимости (замыкании).
 * @returns {function(number): (boolean|null)} Функция, которая принимает число y и возвращает:
 * - `true`, если y > x;
 * - `false`, если y < x;
 * - `null`, если они равны.
 */
Function compare(x) {
  Return function(y) {
    If (y > x) return true;
    If (y < x) return false;
    Return null;
  };
}

/**
 * №7 Вычисление суммы произвольного количества переданных аргументов.
 * * @param {…number} args – Набор чисел для суммирования.
 * @returns {number} Сумма всех переданных аргументов.
 */
Function sum(…args) {
  Return args.reduce((acc, current) => acc + current, 0);
}

/**
 * №8 Добавление «черной метки» (свойства со специальным символом) в объект
 * через глобальный реестр символов.
 * * @param {Object} obj – Исходный объект, в который добавляется метка.
 * @returns {Object} Модифицированный объект с добавленным символьным свойством.
 */
Function addBlackSpot(obj) {
  Obj[Symbol.for(«blackSpot»)] = true;
  Return obj;
}

// Глобальный экспорт для браузера (чтобы Mocha видела функции в объекте window)
If (typeof window !== 'undefined') {
  Window.pow = pow;
  Window.sumTo = sumTo;
  Window.isLeapYear = isLeapYear;
  Window.factorial = factorial;
  Window.fib = fib;
  Window.compare = compare;
  Window.sum = sum;
  Window.addBlackSpot = addBlackSpot;
}

