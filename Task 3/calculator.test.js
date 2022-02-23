const calculator = require('./calculator');


describe('My calculator', () => {

    test('minus 6 - 2 to equal 4', () => {
        expect(calculator.minus(6, 2)).toBe(4);
    });

    test('minus 5 - 4 to equal 1', () => {
        expect(calculator.minus(5, 4)).toBe(1);
    });

    test('minus 100 - 2 to equal 98', () => {
        expect(calculator.minus(100, 2)).toBe(98);
    });

    test('Add 5 + 2 to equal 7', () => {
        expect(calculator.add(5, 2)).toBe(7);
    });

    test('add 5 + 4 to equal 9', () => {
        expect(calculator.add(5, 4)).toBe(9);
    });

    test('add 100 + 2 to equal 102', () => {
        expect(calculator.add(100, 2)).toBe(102);
    });

    test('divide 5 + 2 to equal 3.5', () => {
        expect(calculator.divide(5, 2)).toBe(2.5);
    });

    test('divide 8/4 to equal 2', () => {
        expect(calculator.divide(8, 4)).toBe(2);
    });

    test('divide 1000 / 2 to equal 500', () => {
        expect(calculator.divide(1000, 2)).toBe(500);
    });

    test('multiply 1000 * 2 to equal 2000', () => {
        expect(calculator.multiply(1000, 2)).toBe(2000);
    });

    test('multiply 100 * 3 to equal 300', () => {
        expect(calculator.multiply(100, 3)).toBe(300);
    });

    test('multiply 0*0 to equal 0', () => {
        expect(calculator.multiply(0,0)).toBe(0);
    });
});