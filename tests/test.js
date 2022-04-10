/* eslint-disable no-undef */
const myTest = require('../src/index');

test('Sanity Check', () => {
  expect(2 + 2).toBe(4);
});
// Challenge 1
test('test capitalize', () => {
  expect(myTest.capitalize('')).toBe('');
  expect(myTest.capitalize('hello')).toBe('Hello');
  expect(myTest.capitalize('hello world')).toBe('Hello world');
  expect(myTest.capitalize('this is a very long string.')).toBe('This is a very long string.');
});
// Challenge 2
test('test allCaps', () => {
  expect(myTest.allCaps('')).toBe('');
  expect(myTest.allCaps('hello')).toBe('HELLO');
  expect(myTest.allCaps('hello world')).toBe('HELLO WORLD');
  expect(myTest.allCaps('this is a very long string.')).toBe('THIS IS A VERY LONG STRING.');
});
// Challenge 3
test('test capitalizeWords', () => {
  expect(myTest.capitalizeWords('')).toBe('');
  expect(myTest.capitalizeWords('hello')).toBe('Hello');
  expect(myTest.capitalizeWords('hello world')).toBe('Hello World');
  expect(myTest.capitalizeWords('this is a very long string.')).toBe('This Is A Very Long String.');
});
// Challenge 4
test('test removeExtraSpaces', () => {
  expect(myTest.removeExtraSpaces('')).toBe('');
  expect(myTest.removeExtraSpaces('hello')).toBe('hello');
  expect(myTest.removeExtraSpaces('hello     world')).toBe('hello world');
  expect(myTest.removeExtraSpaces('this is a very long string.')).toBe('this is a very long string.');
  expect(myTest.removeExtraSpaces('       ')).toBe('');
  expect(myTest.removeExtraSpaces('     hello      world     ')).toBe('hello world');
});
// Challenge 5
test('test kebabCase', () => {
  expect(myTest.kebabCase('')).toBe('');
  expect(myTest.kebabCase('hello')).toBe('hello');
  expect(myTest.kebabCase('hello world')).toBe('hello-world');
  expect(myTest.kebabCase('this is a very long string.')).toBe('this-is-a-very-long-string');
  expect(myTest.kebabCase('     hello      world     ')).toBe('hello-world');
  expect(myTest.kebabCase('number test! 8?')).toBe('number-test-8');
});
// Challenge 6
test('test snakeCase', () => {
  expect(myTest.snakeCase('')).toBe('');
  expect(myTest.snakeCase('hello')).toBe('hello');
  expect(myTest.snakeCase('hello world')).toBe('hello_world');
  expect(myTest.snakeCase('this is a very long string.')).toBe('this_is_a_very_long_string');
  expect(myTest.snakeCase('     hello      world     ')).toBe('hello_world');
  expect(myTest.snakeCase('number test! 8?')).toBe('number_test_8');
});
// Challenge 7
test('test camelCase', () => {
  expect(myTest.camelCase('')).toBe('');
  expect(myTest.camelCase('hello')).toBe('hello');
  expect(myTest.camelCase('hello world')).toBe('helloWorld');
  expect(myTest.camelCase('this is a very long string')).toBe('thisIsAVeryLongString');
  expect(myTest.camelCase('     hello      world     ')).toBe('helloWorld');
  expect(myTest.camelCase('number test 8')).toBe('numberTest8');
});
// Challenge 8
test('test shift', () => {
  expect(myTest.shift('')).toBe('');
  expect(myTest.shift('hello')).toBe('elloh');
  expect(myTest.shift('hello world')).toBe('ello worldh');
  expect(myTest.shift('this is a very long string.')).toBe('his is a very long string.t');
});
// Challenge 9
test('test makeHashtag', () => {
  expect(myTest.makeHashtag('')).toBe('');
  expect(myTest.makeHashtag('hello')).toBe('#Hello');
  expect(myTest.makeHashtag('hello world')).toBe('#HelloWorld');
  expect(myTest.makeHashtag('this is a very long string.')).toBe('#ThisIsAVeryLongString.');
});
// Challenge 10
test('test isEmpty', () => {
  expect(myTest.isEmpty('      ')).toBe(true);
  expect(myTest.isEmpty('\n')).toBe(true);
  expect(myTest.isEmpty('\r')).toBe(true);
  expect(myTest.isEmpty('\t')).toBe(true);
  expect(myTest.isEmpty('hello')).toBe(false);
  expect(myTest.isEmpty('hello world')).toBe(false);
});
