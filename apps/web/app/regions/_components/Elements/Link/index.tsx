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

const ArticleLink = ({ item, regionId, dataUrl }: { item: LinkProps; regionId: string; dataUrl: string }) => {
  const { links } = item.value;

  // 트리플 구매 서비스 내부 링크는 제외
  const regex = /(inlink|air)\?path=(.+)/g;

  // 항공권 예약 링크 제외
  const regexAir = /\/air\/regions\/([^\/]+)/g;

  // 호텔 관련 데이터는 수집하지 않았으므로 제외
  const regexHotel = /([^\/]+)\/(hotels)\/([^\/]+)/g;

  // 관광명소, 식당 링크 찾기
  const regexAttraction = /([^\/]+)\/(attractions|restaurants)\/([^\/]+)/g;

  const filteredLinks = useMemo(() => {
    const filtered = links.filter(
      link => link.href.match(regex) == null && link.href.match(regexAir) == null && link.href.match(regexHotel) == null
    );

    if (dataUrl?.match(regexAttraction) == null) {
      return filtered;
    }
    // 현재 경로가 관광명소나 식당링크와 일치한다면
    return filtered.map(link =>
      link.href.match(regexAttraction) == null
        ? link
        : {
            ...link,
            href: link.href
              .replaceAll('/attractions', `/regions/${regionId}/attractions`)
              .replaceAll('/restaurants', `/regions/${regionId}/restaurants`),
          }
    );
  }, [item, regionId, dataUrl]);

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
