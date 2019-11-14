// You are given an array strarr of strings and an integer k.Your task is to return the first longest string consisting of k consecutive strings taken in the array.

//     Example:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)-- > "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

//     Note
// consecutive strings: follow one after another without an interruption



function longestConsec(strarr, k) {

    let resultStr = ''

    if (k > strarr.length || k <= 0) return resultStr;

    for (let i = 0; i < strarr.length; i++) {
        let currentString = strarr.slice(i, k + i).join('')
        if (currentString.length > resultStr.length) {
            resultStr = currentString;
        }
    }
    return resultStr;
}

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)