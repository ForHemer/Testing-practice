const stringLength = require("./stringLength")

test('Knows the length of Hemerson is equal 8', () => {
    const result = stringLength('Hemerson');
    expect(result).toBe(8);
});

test('the string is less than 1 character long', () => {
    expect(stringLength('')).toBe('String is empty');
  });
  
test('the string is longer than 10 characters', () => {
expect(stringLength('Abracadabra')).toBe('String length is to long');
});

test('the string is undifined', () => {
expect(stringLength()).toBe("String undefined");
});