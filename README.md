# String Lib

Javascript Library of String functions created to make life just a little easier.

Assignment elaborated [here](https://github.com/Tech-at-DU/ACS-3310-Writing-JavaScript-Libraries/blob/master/assignments/assignment-01.md)

Published npm package [here](https://www.npmjs.com/package/@maybejaybe/string-lib)

---

### Challenge 1 - capitalize()
Makes the first character of a given string uppercase. <br>
**Example**
> Input: "hello world" <br>
> Output: `Hello world`

### Challenge 2 - allCaps()
Makes all characters uppercase. <br>
**Example**
> Input: "hello world" <br>
> Output: `HELLO WORLD`

### Challenge 3 - capitalizeWords()
makes the first character of each word uppercase. Imagine that each word is separated by a space. <br>
**Example**
> Input: "hello world" <br>
> Output: `Hello World`

### Challenge 4 - removeExtraSpaces()
Removes all spaces from the beginning and end of a String along with any extra spaces in the middle. If more than one space appears in the middle of a string it is replaced by a single space. <br>
**Example**
> Input: "&emsp;hello&emsp;world&emsp;" <br>
> Output: `hello world`

### Challenge 5 - kebabCase()
Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase. <br>
**Example**
> Input: "&emsp;Hello&emsp;WORLD!&emsp;" <br>
> Output: `hello-world`

### Challenge 6 - snakeCase()
Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase. <br>
**Example**
> Input: "&emsp;Hello&emsp;WORLD!&emsp;" <br>
> Output: `hello_world`

### Challenge 7 - camelCase()
Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces. <br>
**Example**
> Input: "&emsp;Hello&emsp;world&emsp;" <br>
> Output: `helloWorld`

### Challenge 8 - shift()
Takes the first character of a string and move to the end of a string. <br>
**Example**
> Input: "hello world" <br>
> Output: `ello worldh`

### Challenge 9 - makeHashtag()
This function should convert the given string to a hash tag. A hash tag begins with # and no spaces. Each word in the phrase begins with an uppercase letter. <br>
**Example**
> Input: "hello world" <br>
> Output: `#HelloWorld`

### Challenge 10 - isEmpty()
Returns true if the given string is empty or contains only whitespace. White space includes: spaces, line returns, and tabs. These characters can be represented with: \n (new line) \r (carrige return), \t (tab). <br>
**Example**
> Input: "hello world" <br>
> Output: `false` <br>
> <br>
> Input: "\n" <br>
> Output: `true`

### Challenge 11 - readme
Add a readme.md to your GitHub Repo. In this file you will document your library of string functions.

Also include a link to your library on npm. You'll be publishing this npm in class 2.
