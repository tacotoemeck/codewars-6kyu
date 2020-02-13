// Complete the solution so that the function will break up camel casing, using a space between words.

//     Example
// solution("camelCasing") == "camel Casing"

// complete the function
function solution(string) {
    let result = "";
    let regex = /[A-Z]/
    for (char of string) {
        if (regex.test(char)) result += (` ${char}`)
        else result += (char)
    }
    return result;
}