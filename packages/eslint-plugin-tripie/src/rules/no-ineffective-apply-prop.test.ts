import { RuleTester } from 'eslint';
import { describe, it } from 'vitest';
import rule from './no-ineffective-apply-prop';

const tester = new RuleTester({
  languageOptions: {
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

describe('no-ineffective-apply-prop', () => {
  it('passes and fails correctly', () => {
    tester.run('no-ineffective-apply-prop', rule, {
      valid: [
        // margin이 none이 아닐 때 applyMargin → 유효
        { code: '<TripieContainer margin="m" applyMargin="left-right" />' },
        { code: '<Stack margin="l" applyMargin="top-bottom" />' },
        // padding이 none이 아닐 때 applyPadding → 유효
        { code: '<TripieContainer padding="sm" applyPadding="all" />' },
        // none이지만 apply prop 없음 → 문제 없음
        { code: '<TripieContainer margin="none" />' },
        { code: '<Stack padding="none" />' },
        // 대상 컴포넌트 외 → 무시
        { code: '<CustomBox margin="none" applyMargin="all" />' },
      ],
      invalid: [
        {
          // margin="none" + applyMargin 공존
          code: '<TripieContainer margin="none" applyMargin="left-right" />',
          errors: [{ messageId: 'ineffectiveApplyProp' }],
        },
        {
          // padding="none" + applyPadding 공존
          code: '<TripieContainer padding="none" applyPadding="top-bottom" />',
          errors: [{ messageId: 'ineffectiveApplyProp' }],
        },
        {
          // Stack에도 동일 적용
          code: '<Stack margin="none" applyMargin="all" />',
          errors: [{ messageId: 'ineffectiveApplyProp' }],
        },
        {
          // 둘 다 none → 경고 2개
          code: '<TripieContainer margin="none" applyMargin="all" padding="none" applyPadding="all" />',
          errors: [{ messageId: 'ineffectiveApplyProp' }, { messageId: 'ineffectiveApplyProp' }],
        },
        {
          // JSXExpressionContainer 문자열 값도 감지
          code: '<TripieContainer margin={"none"} applyMargin="all" />',
          errors: [{ messageId: 'ineffectiveApplyProp' }],
        },
      ],
    });
  });
});
