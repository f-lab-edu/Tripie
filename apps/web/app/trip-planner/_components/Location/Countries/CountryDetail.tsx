import { Headings } from '@tripie-pyotato/design-system';

import classNames from 'classnames/bind';
import useContinentl from 'hooks/query/useContinentl';
import { Continentl } from 'models/Continentl';
import Card from 'shared/components/Card/Card';
import Chip from 'shared/components/Chip/Chip';
import List from 'shared/components/List/List';
import Style from './countries.module.scss';

const cx = classNames.bind(Style);

const Detail = ({ data }: { data: Continentl }) => {
  return (
    <Card>
      <List className={cx('list-wrap')}>
        <li className={cx('list-item')}>
          <Headings.H2>{data.name}</Headings.H2> <Headings.H4 className={cx('accented')}>({data.code})</Headings.H4>
        </li>
        <ul className={cx('info-wrap')}>
          <li className={cx('country-flag')}>
            {data['flag-image']?.[0] != null ? (
              <img className={cx('flex-item', 'flag-image')} src={data['flag-image'][0]} alt={data['flag-image'][0]} />
            ) : (
              'loading..'
            )}
          </li>
          <li className={cx('info-text')}>
            <ul>
              <li className={cx('list-item')}>
                <Headings.H3 className={cx('accented', 'capital')}>수도</Headings.H3>
                <div className={cx('capital-name')}>{data.capital}</div>
              </li>
              <li className={cx('list-item')}>
                <Headings.H3 className={cx('accented', 'language')}>공식 언어</Headings.H3>
                {data.official_language != null ? (
                  <List className={cx('flex', 'wrap')}>
                    {data?.official_language.map((language: string) => (
                      <li key={language}>
                        <Chip>{language}</Chip>
                      </li>
                    ))}
                  </List>
                ) : null}
              </li>
            </ul>
          </li>
        </ul>
      </List>
    </Card>
  );
};

const CountryDetail = ({ selectedCountry }: { selectedCountry: string }) => {
  const { data } = useContinentl(selectedCountry);

  if (data == null) {
    return <div>{selectedCountry}</div>;
  }

  return <Detail data={data[0]} />;
};
export default CountryDetail;
