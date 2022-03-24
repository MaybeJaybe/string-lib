# String Lib

Javascript Library of String functions created to make life just a little easier.

Assignment elaborated [here](https://github.com/Tech-at-DU/ACS-3310-Writing-JavaScript-Libraries/blob/master/assignments/assignment-01.md)

---

### Challenge 1 - capitalize()
Makes the first character of a given string uppercase.
> **Example**
> Input: "hello world"
> Output: `Hello world`

### Challenge 2 - allCaps()
Makes all characters uppercase.
> **Example**
> Input: "hello world"
> Output: `HELLO WORLD`

### Challenge 3 - capitalizeWords()
makes the first character of each word uppercase. Imagine that each word is separated by a space.
> **Example**
> Input: "hello world"
> Output: `Hello World`

### Challenge 4 - removeExtraSpaces()
Removes all spaces from the beginning and end of a String along with any extra spaces in the middle. If more than one space appears in the middle of a string it is replaced by a single space.
> **Example**
> Input: "    hello    world    "
> Output: `hello world`

### Challenge 5 - kebabCase()
Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase.
> **Example**
> Input: "    Hello    WORLD!    "
> Output: `hello-world`

### Challenge 6 - snakeCase()
Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase.
> **Example**
> Input: "    Hello    WORLD!    "
> Output: `hello_world`

### Challenge 7 - camelCase()
Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces.
> **Example**
> Input: "    Hello    world    "
> Output: `helloWorld`

### Challenge 8 - shift()
Takes the first character of a string and move to the end of a string:
> **Example**
> Input: "hello world"
> Output: `ello worldh`

### Challenge 9 - makeHashtag()
This function should convert the given string to a hash tag. A hash tag begins with # and no spaces. Each word in the phrase begins with an uppercase letter.
> **Example**
> Input: "hello world"
> Output: `#HelloWorld`

### Challenge 10 - isEmpty()
Returns true if the given string is empty or contains only whitespace. White space includes: spaces, line returns, and tabs. These characters can be represented with: \n (new line) \r (carrige return), \t (tab).
> **Example**
> Input: "hello world"
> Output: `false`
> Input: "\n"
> Output: `true`

### Challenge 11 - readme
Add a readme.md to your GitHub Repo. In this file you will document your library of string functions.

Also include a link to your library on npm. You'll be publishing this npm in class 2.
