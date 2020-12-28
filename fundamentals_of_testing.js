const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

let result = sum(3, 7);
let expected = 10;
expect(result).toBe(expected);

result = subtract(7, 3);
expected = 4;

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        },
        toEqual(expected) {},
        toBeGreaterThan(expected) {},
    };
}