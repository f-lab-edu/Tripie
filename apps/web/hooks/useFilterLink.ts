import { LinkProps } from 'app/regions/[regionId]/_components/ArticleLayout/Elements/Link';
import { useMemo } from 'react';

/**
 * 트리플에서 가져온 데이터 중 현재 서비스에서 포함하지 않은 호텔, 구매 서비스 링크는 제외하고,
 * 식당과 관광명소 페이지 링크만 보여주도록
 */
const useFilterLink = ({ item, dataUrl, regionId }: { item: LinkProps; regionId: string; dataUrl: string }) => {
  const { links } = item.value;

  const filteredLinks = useMemo(() => {
    // 트리플 구매 서비스 내부 링크는 제외
    const regex = /(inlink|air)\?path=(.+)/g;
    // 항공권 예약 링크 제외
    const regexAir = /\/air\/regions\/([^\/]+)/g;
    // 호텔 관련 데이터는 수집하지 않았으므로 제외
    const regexHotel = /([^\/]+)\/(hotels)\/([^\/]+)/g;
    // 관광명소, 식당 링크 찾기
    const regexAttraction = /([^\/]+)\/(attractions|restaurants)\/([^\/]+)/g;

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
  return { links, filteredLinks };
};

export default useFilterLink;
