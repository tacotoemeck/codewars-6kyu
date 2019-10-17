// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(str) {

let str1 = str.split(' ')
let final = [];

	for ( let i = 0; i < str1.length; i++) {
		let index = str1[i].match(/\d/)
		final[index-1] = str1[i]
	}
	return final.join(' ')
}

order("is2 Thi1s T4est 3a")