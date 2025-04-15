import { describe, expect, it } from 'vitest';
import randomIntBtw from '../src/randomIntBtw';

describe('randomIntBetween test : returns random int number between start and end', () => {
  it('should return random number between default start(8) and end(8), when no parameters are provided', () => {
    const randomInt = randomIntBtw();
    expect(randomInt).toBeGreaterThanOrEqual(8);
    expect(randomInt).toBeLessThanOrEqual(15);
  });
  it('should return random number between provided number and default start(8), when provided 1 parameter lesser than default end(15)', () => {
    const randomInt = randomIntBtw(12);
    expect(randomInt).toBeGreaterThanOrEqual(12);
    expect(randomInt < 12).toBeFalsy();
    expect(randomInt).toBeLessThanOrEqual(15);
  });
  it('should return random number between provided number and default end(15), when provided 1 parameter larger than default end(8)', () => {
    const randomInt = randomIntBtw(18);
    expect(randomInt).toBeGreaterThanOrEqual(8);
    expect(randomInt < 15).toBeFalsy();
    expect(randomInt).toBeLessThanOrEqual(18);
  });

  it('should return provided number when 2 parameters that are the same', () => {
    const randomInt = randomIntBtw(5, 5);
    expect(randomInt).toEqual(5);
  });

  it('should return random negative number between two negative numbers when provided 2 negative parameters', () => {
    const randomInt = randomIntBtw(-5, -15);
    expect(randomInt).toBeGreaterThanOrEqual(-15);
    expect(randomInt).toBeLessThanOrEqual(-5);
  });

  it('should return random number between two numbers when provided 1 negative and 1 positive parameter', () => {
    const randomInt = randomIntBtw(5, -15);
    expect(randomInt).toBeGreaterThanOrEqual(-15);
    expect(randomInt).toBeLessThanOrEqual(5);
  });

  it('should return random number between 0 and negative number when provided 1 negative and 0 as parameters', () => {
    const randomInt = randomIntBtw(0, -15);
    expect(randomInt).toBeGreaterThanOrEqual(-15);
    expect(randomInt).toBeLessThanOrEqual(0);
  });

  it('should return random number between 0 and positive number when provided 1 positive and 0 as parameters', () => {
    const randomInt = randomIntBtw(0, 15);
    expect(randomInt).toBeGreaterThanOrEqual(0);
    expect(randomInt).toBeLessThanOrEqual(15);
  });

  it('should return random number between provided negative number and positive number when provided 2 numbers with opposite signs', () => {
    const randomInt = randomIntBtw(-15, 15);
    expect(randomInt).toBeGreaterThanOrEqual(-15);
    expect(randomInt).toBeLessThanOrEqual(15);
  });
});
