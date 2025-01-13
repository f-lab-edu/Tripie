'use client';
import { Container } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useMemo } from 'react';
import TextUnderLineAnimation from 'shared/components/TextUnderlineAnimation/TextUnderlineAnimation';
import Style from './link.module.scss';

export type Link = {
  href: string;
  label: string;
};

export type LinkProps = {
  type: 'links';
  value: { links: Link[] };
};

const cx = classNames.bind(Style);

const ArticleLink = ({ item }: { item: LinkProps }) => {
  const { links } = item.value;
  // 트리플 구매 서비스 내부 링크는 제외
  const regex = /inlink\?path=(.+)/g;
  const filteredLinks = useMemo(() => links.filter(link => link.href.match(regex) == null), [item]);

  console.log(filteredLinks);

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
