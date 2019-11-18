// Write function divisibleCount(x, y, k) that takes in 3 numbers x, y and k, and returns the number of integers within the range[x..y] that are divisible by k i.e.:
// { i: x ≤ i ≤ y, i mod k = 0 }
// For example:
// x = 6, y = 11 and k = 2, your function should return 3, because there are three numbers divisible by 2 within the range[6..11], namely 6, 8 and 10.
// Note: x <= y

// below is too slow
// function divisibleCount(x, y, k) {
//     let count = 0;
//     for (let i = x; i <= y; ++i) {
//         if (i % k == 0) count++
//     }
//     return count;
// }


// divisibleCount(6, 11, 2)


// //  
// function divisibleCount(x, y, k) {
//     let count = 0;
//     while (x <= y) {
//         if (x % k == 0) count++;
//         ++x;
//     }
//     return count;
// }


// divisibleCount(6, 11, 2)


//  (O)1 solution 

function divisibleCount(x, y, k) {
    if (x % k == 0) {
        return Math.floor((y / k)) - Math.floor((x / k)) + 1;
    }
    return Math.floor((y / k)) - Math.floor((x / k))
}


divisibleCount(6, 11, 2)