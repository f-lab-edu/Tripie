import noIneffectiveApplyProp from './rules/no-ineffective-apply-prop';
import noRawHtmlElements from './rules/no-raw-html-elements';
import requireCardNoisePreload from './rules/require-card-noise-preload';
import requireStackGapToken from './rules/require-stack-gap-token';
import useDesignToken from './rules/use-design-token';

const plugin = {
  meta: {
    name: '@tripie-pyotato/eslint-plugin-tripie',
    version: '0.0.1',
  },
  rules: {
    'no-raw-html-elements': noRawHtmlElements,
    'use-design-token': useDesignToken,
    'require-stack-gap-token': requireStackGapToken,
    'no-ineffective-apply-prop': noIneffectiveApplyProp,
    'require-card-noise-preload': requireCardNoisePreload,
  },
  configs: {} as Record<string, unknown>,
};

// recommended 설정: 모든 규칙을 warn으로 활성화
plugin.configs['recommended'] = {
  plugins: { tripie: plugin },
  rules: {
    'tripie/no-raw-html-elements': 'warn',
    'tripie/use-design-token': 'warn',
    'tripie/require-stack-gap-token': 'warn',
    'tripie/no-ineffective-apply-prop': 'warn',
    'tripie/require-card-noise-preload': 'warn',
  },
};

export default plugin;
export const rules = plugin.rules;
