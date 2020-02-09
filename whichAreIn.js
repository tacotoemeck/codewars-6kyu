// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// #Example 1: a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// #Example 2: a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.

// Beware: r must be without duplicates.
// Don't mutate the inputs.


function inArray(array1, array2) {
    // create a copy of a1 so it can be modified
    let result = [];

    // loop each element of a1 
    for (elem1 of array1) {
        // for each element of a1 loop over elements of a2
        for (elem2 of array2) {
            // check if a2 element includes a1 elem as a substring
            if (elem2.includes(elem1)) {
                // if so, push it into result array
                result.push(elem1)
                // move onto next element
                break;
            }
        }
    };
    // sort the result and return
    return result.sort();
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

a1 = ["xyz", "live", "strong"]

inArray(a1, a2)