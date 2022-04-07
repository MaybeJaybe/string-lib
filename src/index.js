/* eslint-disable func-names */
/* eslint-disable no-extend-native */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable no-else-return */

const str = 'hello world';
const test4 = '   remove     spaces   ';
const test5 = '   kebab-Case_!! num test 1, 8, and 88.    ';
const test6 = '   Snake_Case-! hi!  8?    ';
const test7 = '   Camel case    test   ';
const test8 = 'shift first';
const test9 = '   lovely day     for cricket    ';
const test10 = '     ';

// Challenge 1 - capitalize
// make first character of a given string uppercase
function capitalize(str) {
  const first = str[0].toUpperCase();
  const rest = str.slice(1);
  return first + rest;
}
String.prototype.capitalize = function () {
  return capitalize(this);
};

console.log(str.capitalize());
// console.log('tell hi'.capitalize());
// console.log(test8.capitalize());

// Challenge 2 - all caps
// make all characters upper case
function allCaps(str) {
  return str.toUpperCase();
}
String.prototype.allCaps = function () {
  return allCaps(this);
};

console.log(str.allCaps());

// Challenge 3 - first letter capitalized all words
// make the first character of each word uppercase
function capitalizeWords(str) {
  const words = str.split(' ');
  const uppercase = words.map((word) => capitalize(word));
  return uppercase.join(' ');
}
String.prototype.capitalizeWords = function () {
  return capitalizeWords(this);
};

console.log(str.capitalizeWords());

// Challenge 4 - remove spaces
// remove all spaces from beginning and end, as well as extra spaces between
function removeExtraSpaces(str) {
  const trimmed = str.trim();
  const chars = trimmed.split(' ');
  const filtered = chars.filter((char) => char !== '');
  return filtered.join(' ');
}
String.prototype.removeExtraSpaces = function () {
  return removeExtraSpaces(this);
};

console.log(test4.removeExtraSpaces());

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
String.prototype.kebabCase = function () {
  return kebabCase(this);
};

console.log(test5.kebabCase());

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
String.prototype.snakeCase = function () {
  return snakeCase(this);
};

console.log(test6.snakeCase());

// Challenge 7 - camel case
// lowercase first character of first word, uppercase first letter of following words, remove spaces
function camelCase(str) {
  // remove extra spaces first
  const removeSpace = removeExtraSpaces(str);
  // uppercase first char of the rest of the words
  const words = removeSpace.split(' ');
  // eslint-disable-next-line no-confusing-arrow
  const uppercase = words.map((word, i) => i > 0 ? capitalize(word) : word.toLowerCase());
  // expression ? when true do this : when false do this
  return uppercase.join('');

  // const uppercase = words.map((word) => capitalize(word));
  // const joined = uppercase.join(' ');
  // // lowercase first char of first word
  // const first = joined[0].toLowerCase();
  // const rest = joined.slice(1);
  // const complete = first + rest;
  // return complete.split(' ').join('');
}
String.prototype.camelCase = function () {
  return camelCase(this);
};
console.log(test7.camelCase());

// Challenge 8 - shift to end
// move first character of string to end of string
function shift(str) {
  const firstChar = str.slice(0, 1);
  return str.slice(1) + firstChar;
}
String.prototype.shift = function () {
  return shift(this);
};

console.log(test8.shift());

// Challenge 9 - convert to hashtag
// start string with hashtag, remove spaces, uppercase first letter of each word
function makeHashtag(str) {
  const remove = removeExtraSpaces(str);
  const caps = capitalizeWords(remove);
  const hashtag = caps.split(' ').join('');
  return `#${hashtag}`;
}
String.prototype.makeHashtag = function () {
  return makeHashtag(this);
};

console.log(test9.makeHashtag());

// Challenge 10 - is empty
// return true if given string is empty or contains only whitespace.
function isEmpty(str) {
  const blankSpace = str.trim().split('');
  for (let i = 0; i < blankSpace.length; i += 1) {
    if (blankSpace[i] !== (' ' || '\n' || '\r' || '\t')) {
      return false;
    }
  }
  return true;
}
String.prototype.isEmpty = function () {
  return isEmpty(this);
};

console.log(test10.isEmpty());
console.log(str.isEmpty());
console.log('\n'.isEmpty());
console.log('\r'.isEmpty());
console.log('\t'.isEmpty());
