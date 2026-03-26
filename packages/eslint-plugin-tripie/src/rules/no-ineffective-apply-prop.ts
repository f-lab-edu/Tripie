import { Rule } from 'eslint';
import { JSXAttribute, JSXOpeningElement } from 'estree-jsx';

/**
 * TripieContainer / Stack에서 margin="none" 또는 padding="none"일 때
 * applyMargin / applyPadding prop을 함께 명시하면 무효화되므로 경고한다.
 *
 * JSXOpeningElement의 attributes 목록을 한 번에 순회하여
 * "none" 값을 가진 spacing prop과 대응하는 apply prop이 공존하는지 감지한다.
 */

const TARGET_COMPONENTS = new Set(['Stack', 'TripieContainer']);

/** spacing prop → 무효화되는 apply prop */
const PAIRS: Record<string, string> = {
  margin: 'applyMargin',
  padding: 'applyPadding',
};

function getStringValue(attr: JSXAttribute): string | null {
  const { value } = attr;
  if (!value) return null;
  if (value.type === 'Literal' && typeof value.value === 'string') return value.value;
  if (value.type === 'JSXExpressionContainer') {
    const expr = value.expression;
    if (expr.type === 'Literal' && typeof expr.value === 'string') return expr.value;
  }
  return null;
}

const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'TripieContainer / Stack에서 margin 또는 padding이 "none"이면 applyMargin / applyPadding은 무효입니다.',
      recommended: true,
    },
    messages: {
      ineffectiveApplyProp:
        '<{{component}}> 에서 {{spacing}}="none"이므로 {{apply}} prop은 무효입니다. ' +
        '{{spacing}}에 "none" 이외의 값을 설정하거나 {{apply}} prop을 제거하세요.',
    },
    schema: [],
  },

  create(context) {
    return {
      JSXOpeningElement(node: JSXOpeningElement) {
        if (node.name.type !== 'JSXIdentifier') return;
        if (!TARGET_COMPONENTS.has(node.name.name)) return;

        const componentName = node.name.name;

        // attribute 이름 → JSXAttribute 맵 구성
        const attrMap = new Map<string, JSXAttribute>();
        for (const attr of node.attributes) {
          if (attr.type === 'JSXAttribute' && attr.name.type === 'JSXIdentifier') {
            attrMap.set(attr.name.name, attr);
          }
        }

        for (const [spacingProp, applyProp] of Object.entries(PAIRS)) {
          const spacingAttr = attrMap.get(spacingProp);
          const applyAttr = attrMap.get(applyProp);

          if (!spacingAttr || !applyAttr) continue;

          const spacingVal = getStringValue(spacingAttr);
          if (spacingVal === 'none') {
            context.report({
              node: applyAttr as unknown as Rule.Node,
              messageId: 'ineffectiveApplyProp',
              data: {
                component: componentName,
                spacing: spacingProp,
                apply: applyProp,
              },
            });
          }
        }
      },
    };
  },
};

export default rule;
