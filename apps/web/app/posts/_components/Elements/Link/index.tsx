'use client';
import { Container, Link, TextUnderLineAnimation } from '@tripie-pyotato/design-system/@components';
import { classNames } from 'wrapper';

import useFilterLink from 'hooks/useFilterLink';

import { LinkProps } from 'models/Props';
import { useMemo } from 'react';
import Style from './link.module.scss';

const cx = classNames.bind(Style);

const ArticleLink = ({ item, regionId, dataUrl }: { item: LinkProps; regionId: string; dataUrl: string }) => {
  const { filteredLinks } = useFilterLink({ item, regionId, dataUrl });

  const links = useMemo(
    () => filteredLinks.map(item => ({ ...item, href: item.href.replace('regions', 'posts') })),
    [filteredLinks]
  );

  if (links.length === 0) {
    return null;
  }
  return (
    <Container margin="none" className={cx('link-wrap')}>
      {links.map(({ label, href }) => (
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
