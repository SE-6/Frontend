import { describe, it, expect } from 'vitest';

describe('group name', () => {
  // describe groups related tests together under one label

  it('test name', () => {
    // it (or test => they are the same) defines a single case
    // read it like a sentence: "it does X"
    expect('someValue').toBe('expectedValue');
    // expect() → creates the assertion
    // .toBe()  → checks strict equality (===)
  });
});

// Mocking toolkit

import { vi } from 'vitest';

vi.fn(); // creates a mock function
vi.stubGlobal(1, 2); // replace a global (like fetch)
vi.spyOn(1, 'toFixed'); // spy on an existing function without replacing
vi.restoreAllMocks(); // put everything back the test
