const argument = process.argv[2];
const number = parseInt(argument);
const result = factorial(number);

function factorial(n) {
    if (isNaN(n)) {
        return 1;
    }

    if (n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
}
console.log(result);