// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

function uniqueInOrder(str) {
let result;
for ( let i = 0; i < str.length; i++) {
	console.log(str[i+])
	if ( str[i] != str[i++]) {

		console.log(str[i++])
		result+=str[i]
	}
}
return result
}

uniqueInOrder("AAAABBBCCDAABBB");


// 

function uniqueInOrder(str) {

if ( str == String ) str.split('')

return str.filter((char, index, array) => char !== array[index+1])

}

uniqueInOrder("AAAABBBCCDAABBB");
