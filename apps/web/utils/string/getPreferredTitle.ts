import { AttractionArticle } from 'models/Attraction';

/**
 * 트리플 앱에서는 언어가 다양하게 제공된다. 표기될 언어의 제목이 undefined이 되지 않고 우선 순위를 정해주기 위한 유틸 함수
 * */
const getPreferredTitle = ({
  names,
  preference = 'primary',
}: {
  names?: AttractionArticle['source']['names'] | null;
  preference?: keyof AttractionArticle['source']['names'];
}) => {
  if (!names) return '';

  return names[preference] ?? names.ko ?? names.en ?? names.local ?? '';
};

export default getPreferredTitle;
