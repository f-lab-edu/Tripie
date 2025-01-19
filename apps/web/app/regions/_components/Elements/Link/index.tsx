'use client';
import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';

import useFilterLink from 'hooks/useFilterLink';
import { Link as LinkType } from 'models/Link';
import Link from 'next/link';
import TextUnderLineAnimation from 'shared/components/TextUnderlineAnimation/TextUnderlineAnimation';
import Style from './link.module.scss';

export type LinkProps = {
  type: 'links';
  value: { links: Pick<LinkType, 'href' | 'label'>[] };
};

const cx = classNames.bind(Style);

const ArticleLink = ({ item, regionId, dataUrl }: { item: LinkProps; regionId: string; dataUrl: string }) => {
  const { filteredLinks } = useFilterLink({ item, regionId, dataUrl });

  return (
    <Container applyMargin="top" className={cx('link-wrap')}>
      {filteredLinks.map(({ label, href }) => (
        <TextUnderLineAnimation key={href} className={cx('link')}>
          <Link href={href}>{label}</Link>
        </TextUnderLineAnimation>
      ))}
    </Container>
  );
};

export default ArticleLink;
