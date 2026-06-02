// №1 возведение x в степень n
/**
 * возводит число x в степень n (n - целое число)
* @param {number} x - Основание степени
 * @param {number} n - целое число
 * @returns {number} -результат
 */
function pow(x, n) {
    if (n === 0) return 1;
    
    // Если степень отрицательная, работаем с инвертированным основанием
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


// №2 Сумма чисел до n через new Function
/**
 * вычисляем сумму натуральных чисел от 1 до n включительно
 * @function sumTo
 * @param {number} n - Натуральное число
 * @returns {number} Сумма чисел от 1 до n
 */
const sumTo = new Function('n', `
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
`);

// №3 проверка високосный год
/**
 * функция предикат  проверка  года на високосность
 * @param {number} year - год для проверки.
 * @returns {boolean} true, если год високосный, иначе false.
 */
function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}
//№4: факториал числа с BigInt (Рекурсия)
/**
 * вычисляет факториал числа n! рекурсивно
 * @param {number} n - целое неотрицательное число
 * @returns {bigint} факториал числа n в формате BigInt
 */
function factorial(n) {
    // Приводим к BigInt для вычислений без потери точности
    const bigN = BigInt(n);
    if (bigN === 0n || bigN === 1n) {
        return 1n;
    }
    return bigN * factorial(n - 1);
}

// №5: число Фибоначчи с BigInt 
/**
 * возвращает n-е число Фибоначчи
 * алгоритм O(n)
 * @param {number} n - номер числа Фибоначчи.
 * @returns {bigint} n-е число Фибоначчи в BigInt.
 */
function fib(n) {
    if (n === 0) return 0n;
    if (n === 1) return 1n;

    let a = 0n;
    let b = 1n;

    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    return b;
}


// №6: compare
/**
 * принимает  x и возвращает функцию для сравнения с y.
 * @param {number} x - число для фиксации внутри замыкания.
 * @returns {function(number): (boolean|null)} анонимная функция, принимающая y.
 */
function compare(x) {
    return function(y) {
        if (y > x) return true;
        if (y < x) return false;
        return null;
    };
}


// №7: сумма произвольного количества аргументов
/**
 * возвращает сумму всех переданных аргументов.
 * @param {...number} args - произвольное количество чисел.
 * @returns {number} сумма аргументов.
 */
function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}

// №8: черная метка
/**
 * добавляет свойство Symbol.for('blackSpot') со значением true к объекту.
 * @param {Object} obj - Исходный объект.
 * @returns {Object} Тот же объект с добавленным свойством.
 */
function addBlackSpot(obj) {
    let blackSpot = Symbol.for("blackSpot");
    obj[blackSpot] = true;
    return obj;
}

// === ДОБАВЬ ЭТОТ БЛОК В САМЫЙ КОНЕЦ ФАЙЛА ===

// Экспортируем функции в глобальную область видимости window для тестов Mocha
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

// Экспорт для третьей лабораторной работы
export { fib };
