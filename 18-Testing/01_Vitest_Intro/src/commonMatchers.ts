// exact equality (===)
expect(add(1, 2)).toBe(3);

// deep/structural equality — for objects and arrays
expect(getUser()).toEqual({ name: 'Alice', age: 28 });

// floating-point numbers (0.1 + 0.2 !== 0.3 in JavaScript)
expect(0.1 + 0.2).toBeCloseTo(0.3);

// boolean checks
expect(isPalindrome('madam')).toBeTruthy();
expect(isPalindrome('hello')).toBeFalsy();

// array contains
expect([1, 2, 3]).toContain(2);
expect([1, 2, 3]).not.toContain(9); // .not inverts the matcher

// array length
expect([1, 2, 3]).toHaveLength(3);

// regex match
expect('Hello Berlin').toMatch(/Berlin/);
