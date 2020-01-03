// function isIntArray(arr) {
//     return true
//   }
//   returns true / True if every element in an array is an integer or a float with no decimals.
//   returns true / True if array is empty.
//   returns false / False for every other input.

function isIntArray(arr) {
    console.log(arr)
    if (!Array.isArray(arr)) {
        return false
    }

    for (let i = 0; i < arr.length; i++) {
        let x;
        if (typeof arr[i] === 'string' || arr[i] instanceof String) return false;
        if (!(isNaN(arr[i]) ? !1 : (x = parseFloat(arr[i]), (0 | x) === x))) return false;
    }
    return true
}
