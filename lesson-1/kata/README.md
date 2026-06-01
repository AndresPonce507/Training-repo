# Lesson 1 Kata — FizzBuzz (Classic TDD)

A sandbox for practicing the strict red → green → refactor loop.

## Setup (once)

```bash
cd lesson-1/kata
npm install
```

## Run the tests (watch mode — leave it running)

```bash
npm test
```

It re-runs automatically every time you save a file.

## The loop

1. **RED** — run the tests, watch one fail.
2. **GREEN** — write the *smallest* code in `fizzbuzz.ts` to make it pass.
3. **REFACTOR** — clean up while staying green (Rule of Three: only extract
   duplication once you've seen it three times).
4. Uncomment the **next** test in `fizzbuzz.test.ts` and repeat.

## The three laws (from the slide)

1. No production code unless it's to make a failing test pass.
2. Write no more of a test than is enough to fail.
3. Write no more production code than is enough to pass the one failing test.

## Files

- `fizzbuzz.ts` — your production code
- `fizzbuzz.test.ts` — the tests (start with one, uncomment the rest one at a time)
