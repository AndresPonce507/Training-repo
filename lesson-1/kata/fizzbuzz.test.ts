import { describe, it, expect } from 'vitest';
import { fizzbuzz } from './fizzbuzz';

// FizzBuzz rules:
//   - multiples of 3        -> "Fizz"
//   - multiples of 5        -> "Buzz"
//   - multiples of 3 AND 5  -> "FizzBuzz"
//   - everything else       -> the number as a string
//
// Classic TDD loop: run `npm test`, watch this fail (RED), write the
// SMALLEST code in fizzbuzz.ts to make it pass (GREEN), then refactor.
// Only after it's green do you UNCOMMENT the next test and repeat.

describe('FizzBuzz', () => {
  it('returns "1" for 1', () => {
    expect(fizzbuzz(1)).toBe('1');
  });

  // --- Uncomment these ONE AT A TIME as you go green ---

  // it('returns "2" for 2', () => {
  //   expect(fizzbuzz(2)).toBe('2');
  // });

  // it('returns "Fizz" for 3', () => {
  //   expect(fizzbuzz(3)).toBe('Fizz');
  // });

  // it('returns "Buzz" for 5', () => {
  //   expect(fizzbuzz(5)).toBe('Buzz');
  // });

  // it('returns "Fizz" for 6 (multiple of 3)', () => {
  //   expect(fizzbuzz(6)).toBe('Fizz');
  // });

  // it('returns "FizzBuzz" for 15 (multiple of 3 and 5)', () => {
  //   expect(fizzbuzz(15)).toBe('FizzBuzz');
  // });
});
