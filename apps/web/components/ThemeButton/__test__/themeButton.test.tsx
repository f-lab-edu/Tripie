const sum = (a: number, b: number) => a + b;

describe('sum(a,b)는 a+b다.', () => {
  test('sum(1,2)는 3다"', async () => {
    expect(sum(1, 2)).toBeTruthy();
  });
});
