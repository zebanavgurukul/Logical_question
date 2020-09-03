var readline = require("readline-sync");
var number = readline.question("What is your number?");
function sumOfCubes(number) {
    var sum = 0
    for (let j = 1; j <= number; j++){
        var cubes = j ** 3
        sum = cubes + sum
    }
    return("sum of cubes"+ " --> " + sum)
}
console.log(sumOfCubes(number))

