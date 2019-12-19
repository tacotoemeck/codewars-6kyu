// Find the longest substring in alphabetical order.

//     Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

// There are tests with strings up to 10 000 characters long so your code will need to be efficient.

// The input will only consist of lowercase characters and will be at least one letter long.

// If there are multiple solutions, return the one that appears first.

// Good luck:)


function longest(str) {
    let startingIndex = 0;
    let currentString = '';

    for (let i = 1; i <= str.length; i++) {
        let substring = str.substring(startingIndex, i);
        let sortedString = substring.split('').sort().join('');
        if (substring == sortedString && sortedString.length > currentString.length) {
            currentString = sortedString;
        }
        else if (substring != sortedString) {
            startingIndex++
        }
    }
    return currentString
}