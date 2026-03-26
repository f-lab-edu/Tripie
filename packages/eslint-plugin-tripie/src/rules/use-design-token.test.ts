import { RuleTester } from 'eslint';
import { describe, it } from 'vitest';
import rule from './use-design-token';

const tester = new RuleTester({
  languageOptions: {
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

describe('use-design-token', () => {
  it('passes and fails correctly', () => {
    tester.run('use-design-token', rule, {
      valid: [
        // CSS 변수 사용 → 통과
        { code: '<div style={{ color: "var(--tripie-color-primary)" }} />' },
        // color 외 속성 → 통과
        { code: '<div style={{ fontSize: "16px" }} />' },
        // 동적 값 → 통과 (리터럴 아님)
        { code: '<div style={{ color: myColor }} />' },
      ],
      invalid: [
        {
          code: '<div style={{ color: "#FF6B6B" }} />',
          errors: [{ messageId: 'useDesignToken' }],
        },
        {
          code: '<div style={{ backgroundColor: "rgb(255, 107, 107)" }} />',
          errors: [{ messageId: 'useDesignToken' }],
        },
        {
          code: '<div style={{ borderColor: "hsl(0, 100%, 71%)" }} />',
          errors: [{ messageId: 'useDesignToken' }],
        },
        {
          code: '<div style={{ fill: "#abc" }} />',
          errors: [{ messageId: 'useDesignToken' }],
        },
      ],
    });
  });
});
