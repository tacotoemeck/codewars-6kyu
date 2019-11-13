// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If we change the first number to something else, comp may not return true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// Remarks
// a or b might be [] (all languages except R, Shell). a or b might be nil or null or None or nothing (except in Haskell, Elixir, C++, Rust, R, Shell, PureScript).

// If a or b are nil (or null or None), the problem doesn't make sense so return false.

// If a or b are empty then the result is self-evident.

// a or b are empty or not empty lists.


// function comp(array1, array2) {

//     if (array1.length = 0) return false;
//     let set = new Set(array1)
//     if (array2.length > set.size) return false;

//     let squared1 = Array.from(set).map(val => val * val)

//     for (let i = 0; i < squared1.length; ++i) {
//         if (!array2.includes(squared1[i])) return false;
//     }

//     return true;

// }

// comp([28, 32, 90, 32], [784, 1025, 8100, 1024])



// function comp(array1, array2) {

//     if (array1.length == 0) return false;

//     let set = new Set(array1)
//     console.log(set)

//     let squared1 = (Array.from(set)).map(val => val * val)
//     console.log(squared1)

//     for (let i = 0; i < array2.length; ++i) {
//         if (!squared1.includes(array2[i])) return false;
//     };
//     return true;

// }

// comp([28, 32, 90, 32], [784, 1025, 8100, 1024])

// // 

// function comp(array1, array2) {

//     let set = new Set(array1)
//     let set2 = new Set(array2)

//     for (let item of set) {
//         if (!set2.has(item * item)) return false;
//     }
//     return true;
// }

// comp([28, 32, 90, 32], [784, 1025, 8100, 1024])

// // 

function comp(array1, array2) {

    let sorted1 = array1.sort((a, b) => a - b)
    let sorted2 = array2.sort((a, b) => a - b)

    for (let i = 0; i < sorted1.length; i++) {

        if (sorted1[i] * sorted[i] !== sorted2[i]) return false;

    }
    return true;
}

comp([28, 32, 90, 32], [784, 1025, 8100, 1024])