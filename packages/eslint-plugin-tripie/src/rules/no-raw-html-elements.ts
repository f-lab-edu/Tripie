import { Rule } from 'eslint';

/**
 * 디자인 시스템 컴포넌트 없이 네이티브 HTML 요소를 직접 사용하는 것을 금지한다.
 *
 * JSXOpeningElement의 name이 소문자(네이티브 HTML 태그)인지 AST에서 감지하여
 * 대신 DS 컴포넌트를 사용하도록 안내한다.
 */

const RESTRICTED_ELEMENTS: Record<string, string> = {
  button: 'TripieButton (@tripie-pyotato/design-system/@components/inputs/TripieButton)',
  img: 'TripieImage (@tripie-pyotato/design-system/@components/data-display/Image)',
  input: 'TripieInput (@tripie-pyotato/design-system/@components/inputs/Input)',
};

const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description: '네이티브 HTML 요소 대신 Tripie 디자인 시스템 컴포넌트를 사용하세요.',
      recommended: true,
    },
    messages: {
      useDesignSystemComponent:
        '<{{element}}> 대신 디자인 시스템 컴포넌트 {{replacement}}를 사용하세요.',
    },
    schema: [
      {
        type: 'object',
        properties: {
          // 특정 파일 경로는 린트 검사에서 제외 (예: 디자인 시스템 내부)
          ignoreFiles: {
            type: 'array',
            items: { type: 'string' },
          },
        },
        additionalProperties: false,
      },
    ],
  },

  create(context) {
    const options = (context.options[0] ?? {}) as { ignoreFiles?: string[] };
    const ignoreFiles: string[] = options.ignoreFiles ?? [];

    const filename = context.filename;
    if (ignoreFiles.some(pattern => filename.includes(pattern))) {
      return {};
    }

    return {
      JSXOpeningElement(node) {
        // JSX 태그 이름이 식별자(Identifier)인 경우만 처리 (소문자 = HTML 네이티브 태그)
        if (node.name.type !== 'JSXIdentifier') return;

        const tagName = node.name.name;
        const replacement = RESTRICTED_ELEMENTS[tagName];

        if (replacement) {
          context.report({
            node,
            messageId: 'useDesignSystemComponent',
            data: { element: tagName, replacement },
          });
        }
      },
    };
  },
};

export default rule;
