// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
// For 4 or more names, the number in and 2 others simply increases.

function likes(arr) {

let resultStr = ""


if (arr.length === 0) {
	resultStr = 'no one likes this'
}
else if (arr.length === 1) {
	resultStr = arr[0] + " likes it";
} 
else if (arr.length === 2) {
	resultStr = arr[0] + ", " + arr[1] + " like it";
}
else if (arr.length === 3) {
	resultStr = arr[0] + ", " + arr[1] + " and " + arr[2] + " like this";
}
else {
	resultStr = arr[0] + ", " + arr[1] + " and " + arr.slice(2).length + " others" + " like this"
}
return resultStr
}


likes(['Peter'])