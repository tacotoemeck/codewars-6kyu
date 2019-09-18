/*
Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(arr) {

var newArr = arr.sort()

for(var i = 0; i < newArr.length; i++) {
let tempArr = newArr.filter(val => val == newArr[i]).length

if(tempArr % 2 !==0) {
	return newArr[i]
		}
	}
}

findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])