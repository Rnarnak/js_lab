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

// №4 факториал числа через рекурсию (BigInt)
function factorial(n) {
    // Принудительно переводим аргумент в BigInt, чтобы не было путаницы
    const bigN = BigInt(n);
    if (bigN === 0n || bigN === 1n) return 1n;
    return bigN * factorial(bigN - 1n);
}

// №5 Числа Фибоначчи (BigInt)
function fib(n) {
    // лимит в обычное число для безопастности счетчика цикла i
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
    return args.reduce((acc, current) => acc + current, 0);
}

// №8: addBlackSpot через глобальный реестр символов
function addBlackSpot(obj) {
    obj[Symbol.for("blackSpot")] = true;
    return obj;
}

// глобальный экспорт для браузера (чтобы Mocha видела функции в объекте window)
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
