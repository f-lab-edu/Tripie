import { Rule } from 'eslint';

/**
 * style prop에 하드코딩된 색상값(hex, rgb, hsl) 사용을 금지한다.
 *
 * JSXAttribute → style prop의 ObjectExpression을 AST로 순회하며
 * 문자열 리터럴 색상값을 탐지하고 CSS 변수 사용을 권장한다.
 */

// hex (#RGB, #RGBA, #RRGGBB, #RRGGBBAA)
const HEX_COLOR_RE = /^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
// rgb(...) / rgba(...)
const RGB_COLOR_RE = /^rgba?\s*\(/i;
// hsl(...) / hsla(...)
const HSL_COLOR_RE = /^hsla?\s*\(/i;

const COLOR_PROPERTIES = new Set([
  'color',
  'backgroundColor',
  'background',
  'borderColor',
  'borderTopColor',
  'borderBottomColor',
  'borderLeftColor',
  'borderRightColor',
  'outlineColor',
  'fill',
  'stroke',
  'caretColor',
  'columnRuleColor',
  'textDecorationColor',
  'boxShadow',
]);

function isHardcodedColor(value: string): boolean {
  return HEX_COLOR_RE.test(value) || RGB_COLOR_RE.test(value) || HSL_COLOR_RE.test(value);
}

const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'style prop에 하드코딩된 색상값 대신 CSS 변수(디자인 토큰)를 사용하세요.',
      recommended: true,
    },
    messages: {
      useDesignToken:
        "'{{property}}' 속성에 하드코딩된 색상값 '{{value}}'을 사용하지 마세요. " +
        "CSS 변수(예: var(--tripie-color-*))를 사용하세요.",
    },
    schema: [],
  },

  create(context) {
    return {
      JSXAttribute(node) {
        // style prop만 검사
        if (node.name.type !== 'JSXIdentifier' || node.name.name !== 'style') return;
        if (!node.value) return;

        // style={{ ... }} 형태: JSXExpressionContainer > ObjectExpression
        if (node.value.type !== 'JSXExpressionContainer') return;
        const expr = node.value.expression;
        if (expr.type !== 'ObjectExpression') return;

        for (const prop of expr.properties) {
          if (prop.type !== 'Property') continue;

          // 속성 키 이름 추출
          const key =
            prop.key.type === 'Identifier'
              ? prop.key.name
              : prop.key.type === 'Literal'
                ? String(prop.key.value)
                : null;

          if (!key || !COLOR_PROPERTIES.has(key)) continue;

          // 속성 값이 문자열 리터럴인 경우만 검사
          const val = prop.value;
          if (val.type !== 'Literal' || typeof val.value !== 'string') continue;

          if (isHardcodedColor(val.value)) {
            context.report({
              node: val,
              messageId: 'useDesignToken',
              data: { property: key, value: val.value },
            });
          }
        }
      },
    };
  },
};

export default rule;
