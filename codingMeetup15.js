

function findOddNames(list) {
    return list.filter(x => (x.firstName
        .split('')
        .reduce((a, b) => { return a + b.charCodeAt(0); }, 0)) % 2 != 0)
}

var list1 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];

findOddNames(list1)

