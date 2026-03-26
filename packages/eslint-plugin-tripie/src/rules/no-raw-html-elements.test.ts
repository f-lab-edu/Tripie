import { RuleTester } from 'eslint';
import { describe, it } from 'vitest';
import rule from './no-raw-html-elements';

const tester = new RuleTester({
  languageOptions: {
    parserOptions: { ecmaFeatures: { jsx: true } },
  },
});

describe('no-raw-html-elements', () => {
  it('passes and fails correctly', () => {
    tester.run('no-raw-html-elements', rule, {
      valid: [
        // DS 컴포넌트 사용 → 통과
        { code: '<TripieButton onClick={fn}>클릭</TripieButton>' },
        { code: '<TripieImage src="foo.png" />' },
        { code: '<TripieInput value={val} />' },
        // div, span 등 제한 대상 외 태그 → 통과
        { code: '<div className="wrapper" />' },
        { code: '<span>텍스트</span>' },
      ],
      invalid: [
        {
          code: '<button onClick={fn}>클릭</button>',
          errors: [{ messageId: 'useDesignSystemComponent' }],
        },
        {
          code: '<img src="photo.png" alt="사진" />',
          errors: [{ messageId: 'useDesignSystemComponent' }],
        },
        {
          code: '<input type="text" value={val} />',
          errors: [{ messageId: 'useDesignSystemComponent' }],
        },
      ],
    });
  });
});
