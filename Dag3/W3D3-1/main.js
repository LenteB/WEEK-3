const opTellen = function (...numbers) {
    return numbers.reduce(function (previous, current) {
        return previous + current;
    })
}

console.log(opTellen(1, 2, 3));


const numbers = [1, 2, 3, 4]
const opTellen2 = function(num1, num2, num3) {
    return (num1 + num2 + num3)
    }

console.log(opTellen2(...numbers));


