'use client';
import { Container, Headings, Text } from '@tripie-pyotato/design-system';
import { decodeUnicodes } from 'utils/string';
import { classNames } from 'wrapper';
import Style from './header.module.scss';

export type HeadingProps = {
  type: HeadingSizes;
  value: HeadingDefaultValue & Partial<HeadingStylingProps>;
};

export type HeadingDefaultValue = {
  text: string;
};

export type HeadingStylingProps = {
  emphasize: boolean;
  headline: string;
  href: string;
};

export type HeadingSizes = 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5';

const cx = classNames.bind(Style);

const ArticleHeading = ({ item }: { item: HeadingProps }) => {
  const { type, value } = item;
  const { emphasize, headline, text } = value;

  const headerText = text.replaceAll('트리플', 'Tripie');

  const decodedStr = decodeUnicodes(headerText);

  const renderHeading = () => {
    const commonProps = { className: cx([emphasize ? 'accented' : '', headline !== '' ? 'has-headline' : '']) };

    switch (type) {
      case 'heading1':
        return <Headings.H1 {...commonProps}>{decodedStr}</Headings.H1>;
      case 'heading2':
        return <Headings.H2 {...commonProps}>{decodedStr}</Headings.H2>;
      case 'heading3':
        return <Headings.H3 {...commonProps}>{decodedStr}</Headings.H3>;
      case 'heading4':
        return <Headings.H4 {...commonProps}>{decodedStr}</Headings.H4>;
      case 'heading5':
        return <Container {...commonProps}>{decodedStr}</Container>;
      default:
        return null;
    }
  };

  return (
    <Container applyMargin="top-bottom" margin={type == 'heading1' ? 'l' : 'm'} key={headerText}>
      {headline !== '' && headline != null ? (
        <Container applyMargin="top">
          <Text.Accented>{headline.replaceAll('트리플', 'Tripie')}</Text.Accented>
        </Container>
      ) : null}
      {renderHeading()}
    </Container>
  );
};

export default ArticleHeading;
