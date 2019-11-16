// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
    let alphabet = {
        a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, r: 0, q: 0, s: 0, t: 0, u: 0, w: 0, x: 0, y: 0, z: 0
    }

    let lowerCase = string.toLowerCase()


    for (let i = 0; i < lowerCase.length; i++) {

        alphabet[lowerCase[i]] = + 1
    }

    for (val of Object.values(alphabet)) {
        if (val < 1) return false;
    }
    return true;
}

isPangram("The quick brown fox jumps over the lazy dog.")