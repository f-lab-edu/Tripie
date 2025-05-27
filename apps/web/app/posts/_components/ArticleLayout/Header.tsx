'use client';

import { Container, Headings, Stack, Text } from '@tripie-pyotato/design-system/@core';
import { HeadingProps } from 'models/Props';
import decodeUnicodes from 'utils/string/decodeUnicodes';

const ArticleHeading = ({ item }: { item: HeadingProps }) => {
  const { type, value } = item;
  const { emphasize, headline, text } = value;
  const headerText = text.replaceAll('트리플', 'Tripie');
  const decodedStr = decodeUnicodes(headerText);

  const renderHeading = () => {
    switch (type) {
      case 'heading1':
        return <Headings.H1 hasHeadline={headline != null}>{decodedStr}</Headings.H1>;
      case 'heading2':
        return <Headings.H2 hasHeadline={headline != null}>{decodedStr}</Headings.H2>;
      case 'heading3':
        return <Headings.H3 hasHeadline={headline != null}>{decodedStr}</Headings.H3>;
      case 'heading4':
        return <Headings.H4 hasHeadline={headline != null}>{decodedStr}</Headings.H4>;
      case 'heading5':
        return <Container margin={'none'}>{decodedStr}</Container>;
      default:
        return null;
    }
  };

  return (
    <Stack direction="column" margin="none">
      {headline !== '' && headline != null ? (
        <Text.Accented margin="none">{headline.replaceAll('트리플', 'Tripie')}</Text.Accented>
      ) : null}
      {emphasize ? <Text.Accented>{renderHeading()}</Text.Accented> : renderHeading()}
    </Stack>
  );
};

export default ArticleHeading;
