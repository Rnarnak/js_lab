// №1 возведение x в степень n
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

// №2 Сумма чисел до n через new Function
const sumTo = new Function('n', `
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
`);

// №3 проверка високосный год
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// №4 факториал числа через рекурсию
function factorial(n) {
    if (n === 0 || n === 1) return 1n;
    return BigInt(n) * factorial(n - 1);
}

// №5 Числа Фибоначчи
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
function compare(x) {
    return function(y) {
        if (y > x) return true;
        if (y < x) return false;
        return null;
    };
}

// №7: сумма произвольного количества аргументов
function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}

// №8: черная метка
function addBlackSpot(obj) {
    let blackSpot = Symbol.for("blackSpot");
    obj[blackSpot] = true;
    return obj;
}

// Прокидываем функции в глобальное окно браузера для тестов Mocha
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

// Экспорт модуля для лабораторной №3
export { fib };
