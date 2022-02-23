const capitalize = require('./capitalize');

test('"hemerson" should return "Hemerson"', () => {
    expect(capitalize('hemerson')).toBe('Hemerson');
  });