const reverseString = require('./reverseString');

test('verify that Hemerson reverse is nosremeh', () => {
    expect(reverseString('Hemerson')).toBe('nosremeH');
});