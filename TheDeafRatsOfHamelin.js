// Story
// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

// But some of the rats are deaf and are going the wrong way!

// Kata Task
// How many deaf rats are there?

// Legend
// P = The Pied Piper
// O~ = Rat going left
// ~O = Rat going right
// Example
// ex1 ~O~O~O~O P has 0 deaf rats
// ex2 P O~ O~ ~O O~ has 1 deaf rat
// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

var countDeafRats = function (town) {
    let pierPosition = town.indexOf('P');

    let leftSide = town.substring(0, pierPosition).replace(/\s/g, '');
    let rightSide = town.substring(pierPosition + 1).replace(/\s/g, '');
    let deafRats = 0;

    function ratCount(arr, headOrTale) {
        for (let i = 0; i < arr.length; i = i + 2) {
            if (arr[i] == headOrTale) deafRats++;
        }
    }
    if (leftSide != undefined) {
        ratCount(leftSide, 'O');
    }
    if (rightSide != undefined) {
        ratCount(rightSide, '~');
    }
    return deafRats;
}

