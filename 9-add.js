const argument = process.argv;
const firstNum = Number(argument[2])
const secondNum = Number(argument[3])
const sumOf = function add(firstNum, secondNum){
    return firstNum + secondNum;
}
const addition = sumOf(firstNum, secondNum)
console.log(addition)
