/* eslint-disable no-else-return */
const str = 'hello world';
const test1 = 'hello world';
const test4 = '   remove     spaces   ';
const test5 = '   kebab-Case_!! num test 1, 8, and 88.    ';
const test6 = '   Snake_Case-! hi!  1, 8, or 88?    ';
const test7 = '   Camel case    test   ';
const test8 = 'shift first';
const test9 = 'what a great test';
const test10 = ' ';

// Challenge 1 - capitalize
// make first character of a given string uppercase
function capitalize(str) {
  const first = str[0].toUpperCase();
  const rest = str.slice(1);
  return first + rest;
}
console.log(capitalize(test1));

// Challenge 2 - all caps
// make all characters upper case
function allCaps(str) {
  return str.toUpperCase();
}
console.log(allCaps(test1));

// Challenge 3 - first letter capitalized all words
// make the first character of each word uppercase
function capitalizeWords(str) {
  const words = str.split(' ');
  const uppercase = words.map((word) => capitalize(word));
  return uppercase.join(' ');
}
console.log(capitalizeWords(test1));

// Challenge 4 - remove spaces
// remove all spaces from beginning and end, as well as extra spaces between
function removeExtraSpaces(str) {
  const trimmed = str.trim();
  const chars = trimmed.split(' ');
  const filtered = chars.filter((char) => char !== '');
  return filtered.join(' ');
}
console.log(removeExtraSpaces(test4));

// Challenge 5 - kebab case
// replace spaces with hyphen, remove extra spaces, make characters lowercase
function kebabCase(str) {
  const lower = str.toLowerCase();
  const chars = lower.split('');
  const filtered = chars.filter((c) => {
    const code = c.charCodeAt(0);
    // codes to keep letters, numbers, then space and hyphen
    if (code > 96 && code < 123) {
      return true;
    } else if (code > 47 && code < 58) {
      return true;
    } else if (code === 32 || code === 45) {
      return true;
    }
    return false;
  });
  const freeSpace = removeExtraSpaces(filtered.join(''));
  return freeSpace.split(' ').join('-');
}
console.log(kebabCase(test5));

// Challenge 6 - snake case
// remove extra spaces, replace spaces with underscore, make all characters lowercase
function snakeCase(str) {
  const lower = str.toLowerCase();
  const chars = lower.split('');
  const filtered = chars.filter((c) => {
    const code = c.charCodeAt(0);
    // codes to keep letters, numbers, then space and hyphen
    if (code > 96 && code < 123) {
      return true;
    } else if (code > 47 && code < 58) {
      return true;
    } else if (code === 32 || code === 95) {
      return true;
    }
    return false;
  });
  const freeSpace = removeExtraSpaces(filtered.join(''));
  return freeSpace.split(' ').join('_');
}
console.log(snakeCase(test6));

// Challenge 7 - camel case
// lowercase first character of first word, uppercase first letter of following words, remove spaces
function camelCase(str) {
  // remove extra spaces first?
  const removeSpace = removeExtraSpaces(str);
  // uppercase first char of the rest of the words
  const words = removeSpace.split(' ');
  const uppercase = words.map((word) => capitalize(word));
  const joined = uppercase.join(' ');
  // lowercase first char of first word
  const first = joined[0].toLowerCase();
  const rest = joined.slice(1);
  const complete = first + rest;
  return complete.split(' ').join('');
}

console.log(camelCase(test7));

// Challenge 8 - shift to end
// move first character of string to end of string
function shift(str) {
  const firstChar = str.slice(0, 1);
  return str.slice(1) + firstChar;
}
console.log(shift(test8));

// Challenge 9 - convert to hashtag
// start string with hashtag, remove spaces, uppercase first letter of each word
function makeHashtag(str) {
  const hashtagWord = camelCase(str);
  return ('#' + hashtagWord);
}
console.log(makeHashtag(test9));

// Challenge 10 - is empty
// return true if given string is empty or contains only whitespace.
function isEmpty(str) {
  const blankSpace = str.trim().split('');
  for (let i = 0; i < blankSpace.length; i += 1) {
    if (blankSpace[i] !== ' ') {
      return false;
    }
  }
  return true;
}
console.log("empty test");
console.log(isEmpty(test10));
console.log("hello world test");
console.log(isEmpty(test1));
