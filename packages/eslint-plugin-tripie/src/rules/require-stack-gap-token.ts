import { Rule } from 'eslint';

/**
 * Stack / TripieContainer 컴포넌트의 gap, margin, padding prop이
 * 디자인 토큰에 정의된 값만 사용하도록 강제한다.
 *
 * JSXOpeningElement에서 대상 컴포넌트를 식별하고,
 * JSXAttribute의 StringLiteral 값이 허용 목록에 없으면 에러를 보고한다.
 */

const ALLOWED_GAP = new Set(['none', 'sm', 'default', 'l', 'xl']);
const ALLOWED_SPACING = new Set(['xl', 'l', 'm', 'sm', 'xsm', 'none']);

const PROP_TOKEN_MAP: Record<string, { allowed: Set<string>; label: string }> = {
  gap: { allowed: ALLOWED_GAP, label: "'none' | 'sm' | 'default' | 'l' | 'xl'" },
  margin: { allowed: ALLOWED_SPACING, label: "'xl' | 'l' | 'm' | 'sm' | 'xsm' | 'none'" },
  padding: { allowed: ALLOWED_SPACING, label: "'xl' | 'l' | 'm' | 'sm' | 'xsm' | 'none'" },
};

const TARGET_COMPONENTS = new Set(['Stack', 'TripieContainer']);

const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Stack / TripieContainer의 gap·margin·padding prop은 디자인 토큰 값만 사용할 수 있습니다.',
      recommended: true,
    },
    messages: {
      invalidToken:
        '<{{component}}> 의 {{prop}} prop에 허용되지 않는 값 "{{value}}"이 사용되었습니다. ' +
        '허용값: {{allowed}}',
    },
    schema: [],
  },

  create(context) {
    // 현재 열린 JSX 컴포넌트 이름을 스택으로 추적
    const componentStack: string[] = [];

    return {
      JSXOpeningElement(node) {
        const name =
          node.name.type === 'JSXIdentifier'
            ? node.name.name
            : node.name.type === 'JSXMemberExpression'
              ? // e.g. Foo.Bar → "Foo.Bar"
                `${(node.name.object as { name: string }).name}.${node.name.property.name}`
              : '';
        componentStack.push(name);

        if (!TARGET_COMPONENTS.has(name)) return;

        for (const attr of node.attributes) {
          if (attr.type !== 'JSXAttribute') continue;
          if (attr.name.type !== 'JSXIdentifier') continue;

          const propName = attr.name.name;
          const tokenDef = PROP_TOKEN_MAP[propName];
          if (!tokenDef) continue;

          // prop 값이 string literal인 경우만 검사
          if (!attr.value) continue;

          let strVal: string | null = null;

          if (attr.value.type === 'Literal' && typeof attr.value.value === 'string') {
            strVal = attr.value.value;
          } else if (attr.value.type === 'JSXExpressionContainer') {
            const expr = attr.value.expression;
            if (expr.type === 'Literal' && typeof expr.value === 'string') {
              strVal = expr.value;
            }
          }

          if (strVal !== null && !tokenDef.allowed.has(strVal)) {
            context.report({
              node: attr,
              messageId: 'invalidToken',
              data: {
                component: name,
                prop: propName,
                value: strVal,
                allowed: tokenDef.label,
              },
            });
          }
        }
      },

      'JSXOpeningElement:exit'() {
        componentStack.pop();
      },
    };
  },
};

export default rule;
