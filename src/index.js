/* eslint-disable func-names */
/* eslint-disable no-extend-native */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable no-else-return */

// currently won't accept isEmpty as a function unless its above ones that use it
// temporary solution.
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

// Challenge 1 - capitalize
// make first character of a given string uppercase
function capitalize(str) {
  if (str.isEmpty()) {
    return str;
  }
  const first = str[0].toUpperCase();
  const rest = str.slice(1);
  return first + rest;
}
String.prototype.capitalize = function () {
  return capitalize(this);
};

// Challenge 2 - all caps
// make all characters upper case
function allCaps(str) {
  return str.toUpperCase();
}
String.prototype.allCaps = function () {
  return allCaps(this);
};

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

// Challenge 7 - camel case
// lowercase first character of first word, uppercase first letter of following words, remove spaces
function camelCase(str) {
  const removeSpace = removeExtraSpaces(str);
  const words = removeSpace.split(' ');
  // eslint-disable-next-line no-confusing-arrow
  const uppercase = words.map((word, i) => i > 0 ? capitalize(word) : word.toLowerCase());
  return uppercase.join('');
}
String.prototype.camelCase = function () {
  return camelCase(this);
};

// Challenge 8 - shift to end
// move first character of string to end of string
function shift(str) {
  const firstChar = str.slice(0, 1);
  return str.slice(1) + firstChar;
}
String.prototype.shift = function () {
  return shift(this);
};

// Challenge 9 - convert to hashtag
// start string with hashtag, remove spaces, uppercase first letter of each word
function makeHashtag(str) {
  if (str.isEmpty()) {
    return str;
  }
  const remove = removeExtraSpaces(str);
  const caps = capitalizeWords(remove);
  const hashtag = caps.split(' ').join('');
  return `#${hashtag}`;
}
String.prototype.makeHashtag = function () {
  return makeHashtag(this);
};

// currently moved to top, explanation also up top
// Challenge 10 - is empty
// return true if given string is empty or contains only whitespace.
// function isEmpty(str) {
//   const blankSpace = str.trim().split('');
//   for (let i = 0; i < blankSpace.length; i += 1) {
//     if (blankSpace[i] !== (' ' || '\n' || '\r' || '\t')) {
//       return false;
//     }
//   }
//   return true;
// }
// String.prototype.isEmpty = function () {
//   return isEmpty(this);
// };

module.exports.isEmpty = isEmpty;
module.exports.capitalize = capitalize;
module.exports.allCaps = allCaps;
module.exports.capitalizeWords = capitalizeWords;
module.exports.removeExtraSpaces = removeExtraSpaces;
module.exports.kebabCase = kebabCase;
module.exports.snakeCase = snakeCase;
module.exports.camelCase = camelCase;
module.exports.shift = shift;
module.exports.makeHashtag = makeHashtag;
// module.exports.isEmpty = isEmpty;
