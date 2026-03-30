import { Rule } from 'eslint';

/**
 * CardNoise는 CSS background-image로 정적 노이즈 텍스처를 렌더링한다.
 * CSS background-image는 브라우저 preload 스캐너가 감지하지 못하므로
 * 루트 layout.tsx의 <head>에 반드시 <link rel="preload" as="image"> 힌트를 추가해야 LCP가 개선된다.
 *
 * 이 규칙은 layout.tsx 파일에서 해당 preload 힌트가 빠져 있을 경우 경고한다.
 */

// Keep in sync with RESOURCE.STATIC_BACKGROUND in @tripie-pyotato/design-system/shared/resource.ts
const NOISE_URL_FRAGMENT = 'static-background';

const rule: Rule.RuleModule = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'CardNoise의 CSS background-image LCP 최적화를 위해 layout.tsx에 <link rel="preload" as="image"> 를 추가하세요.',
      recommended: true,
    },
    messages: {
      missingPreload:
        'CardNoise는 CSS background-image({{url}})를 사용합니다. ' +
        '브라우저 preload 스캐너가 이를 감지하지 못하므로 ' +
        'layout.tsx의 <head>에 <link rel="preload" as="image" href="{{url}}" fetchPriority="high" /> 를 추가하세요.',
    },
    schema: [
      {
        type: 'object',
        properties: {
          noiseUrlFragment: { type: 'string' },
        },
        additionalProperties: false,
      },
    ],
  },

  create(context) {
    const filename = context.filename;
    // layout.tsx 파일에서만 실행
    if (!filename.endsWith('layout.tsx')) return {};

    const options = (context.options[0] ?? {}) as { noiseUrlFragment?: string };
    const fragment = options.noiseUrlFragment ?? NOISE_URL_FRAGMENT;

    let hasPreload = false;

    return {
      // <link rel="preload" as="image" href="...static-background..."> 존재 여부 확인
      JSXOpeningElement(node) {
        if (node.name.type !== 'JSXIdentifier' || node.name.name !== 'link') return;

        const attrs = node.attributes.filter(a => a.type === 'JSXAttribute') as Rule.NodeParentExtension[];

        const get = (name: string) =>
          (node.attributes as any[]).find((a: any) => a.type === 'JSXAttribute' && a.name?.name === name);

        const rel = get('rel');
        const as = get('as');
        const href = get('href');

        const relVal = rel?.value?.value;
        const asVal = as?.value?.value;
        const hrefVal =
          href?.value?.type === 'Literal'
            ? href.value.value
            : href?.value?.type === 'JSXExpressionContainer'
              ? (href.value.expression?.value ?? href.value.expression?.quasis?.[0]?.value?.raw ?? '')
              : '';

        if (relVal === 'preload' && asVal === 'image' && String(hrefVal).includes(fragment)) {
          hasPreload = true;
        }
      },

      'Program:exit'(node) {
        if (!hasPreload) {
          context.report({
            node,
            messageId: 'missingPreload',
            data: {
              url: `{API.MEDIA_URL}/dbzzletpw/image/upload/f_auto,q_auto:good/v1753510934/${fragment}_pz1ojq`,
            },
          });
        }
      },
    };
  },
};

export default rule;
