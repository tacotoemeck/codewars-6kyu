// Given a triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// find the triangle's row knowing its index (the rows are 1-indexed), e.g.:

// odd_row(1)  ==  [1]
// odd_row(2)  ==  [3, 5]
// odd_row(3)  ==  [7, 9, 11]
// Note: your code should be optimized to handle big inputs.

// The idea for this kata was taken from this kata: Sum of odd numbers

function oddRow(n) {
    let firstDigitsArr = [1];
    let rowArr = [];
    let firstDigit;
    let current = 1;
    let multiplier = 2;

    for (let i = 1; i < n; i++) {
        current = multiplier + current
        firstDigitsArr.push(current);
        multiplier += 2;
    };

    firstDigit = firstDigitsArr[n - 1]

    for (let i = 0; i < n; i++) {
        rowArr.push(firstDigit)
        firstDigit += 2
    };
    return rowArr;
};