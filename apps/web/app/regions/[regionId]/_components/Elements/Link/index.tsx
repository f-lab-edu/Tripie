'use client';
import { Container, Link, TextUnderLineAnimation } from '@tripie-pyotato/design-system';
import classNames from 'wrapper';

import useFilterLink from 'hooks/useFilterLink';
import { Link as LinkType } from 'models/Link';

import Style from './link.module.scss';

export type LinkProps = {
  type: 'links';
  value: { links: Pick<LinkType, 'href' | 'label'>[] };
};

const cx = classNames.bind(Style);

const ArticleLink = ({ item, regionId, dataUrl }: { item: LinkProps; regionId: string; dataUrl: string }) => {
  const { filteredLinks } = useFilterLink({ item, regionId, dataUrl });

  if (filteredLinks.length === 0) {
    return null;
  }
  return (
    <Container margin="none" className={cx('link-wrap')}>
      {filteredLinks.map(({ label, href }) => (
        <TextUnderLineAnimation key={href} className={cx('link')}>
          <Link size="small" href={href}>
            {label}
          </Link>
        </TextUnderLineAnimation>
      ))}
    </Container>
  );
};

export default ArticleLink;
