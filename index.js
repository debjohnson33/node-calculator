var rs = require('readline-sync');

var num1 = rs.question('Please enter a number: ');
var num2 = rs.question('Please enter another number: ');

var op = rs.question('Please enter an operator(+, -, /, *): ');

var result = function(num1, num2, op) {
	if (op === "+") {
		return Number(num1) + Number(num2);
	} else if (op === "-") {
		return Number(num1) - Number(num2);
	} else if (op === "/") {
		return Number(num1) / Number(num2);
	} else if (op === "*") {
		return Number(num1) * Number(num2);
	}
}

console.log(result(num1, num2, op));