'use client';
import ROUTE from 'constants/routes';
import Error from 'shared/components/Error';

export default function RegionIdError() {
  return (
    <Error
      code={404}
      message="이런! 해당 지역 정보는 없습니다."
      redirectUrl={ROUTE.REGIONS.href}
      redirectBtnText={'다른 지역 정보 알아보기'}
    />
  );
}
