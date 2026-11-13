let str = "Manxsh";

str[3] = "n";

console.log(str);
//Ans- JavaScript strings are immutable.
// That means we cannot directly change an individual character
// of an existing string.

let newStr = str.slice(0,3) + "i" + str.slice(4);

console.log(newStr);