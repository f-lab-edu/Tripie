import { RuleTester } from 'eslint';
import { describe, it } from 'vitest';
import rule from './require-stack-gap-token';

const tester = new RuleTester({
  languageOptions: {
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

describe('require-stack-gap-token', () => {
  it('passes and fails correctly', () => {
    tester.run('require-stack-gap-token', rule, {
      valid: [
        // 허용된 토큰값 → 통과
        { code: '<Stack gap="none" />' },
        { code: '<Stack gap="sm" />' },
        { code: '<Stack gap="default" />' },
        { code: '<Stack gap="l" />' },
        { code: '<Stack gap="xl" />' },
        { code: '<TripieContainer margin="m" padding="xsm" />' },
        // 동적 값 → 검사하지 않음
        { code: '<Stack gap={myGap} />' },
        // 대상 컴포넌트 외 → 통과
        { code: '<CustomBox gap="invalid-value" />' },
      ],
      invalid: [
        {
          // 허용되지 않는 gap 값
          code: '<Stack gap="medium" />',
          errors: [{ messageId: 'invalidToken' }],
        },
        {
          // 숫자 문자열도 토큰이 아님
          code: '<Stack gap="16" />',
          errors: [{ messageId: 'invalidToken' }],
        },
        {
          code: '<TripieContainer margin="large" />',
          errors: [{ messageId: 'invalidToken' }],
        },
        {
          code: '<TripieContainer padding="small" />',
          errors: [{ messageId: 'invalidToken' }],
        },
      ],
    });
  });
});
