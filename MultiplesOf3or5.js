/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of ProjectEuler.net
*/

function solution(number){

var numArr = [];

for ( var i = 1; i < number; i++) {
	numArr.push(i);
}

if(numArr.length >= 3) {
return numArr.filter(val => (val % 3 == 0 || val % 5 == 0)).reduce((a,b) => a+b);
} else {
	return 0
}
};


solution(1)