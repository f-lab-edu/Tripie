import { Card } from '@tripie-pyotato/design-system';
import classNames from 'classnames/bind';
import Description from '../Description';
import CitySelect from '../selectedList/City';
import CompanionSelect from '../selectedList/Companion';
import ContinentSelect from '../selectedList/Continent';
import CountrySelect from '../selectedList/Country';
import DurationSelect from '../selectedList/Duration';
import TravelStyleSelect from '../selectedList/TravelStyle';
import TripResultExample from '../selectedList/TripResult';
import Style from './our-process-list.module.scss';

const cx = classNames.bind(Style);

const cards = [
  {
    label: '떠나고 싶은 지역은?',
    content: <ContinentSelect />,
    description: '여행하고 싶은 곳을 아직 콕찝어 고르지 못했다면 먼저 여행하고 싶은 대륙(지역)을 골라보세요!',
  },
  {
    label: '떠나고 싶은 나라는?',
    content: <CountrySelect />,
    description: '떠나고 싶은 지역을 고르셨다면 어느 나라를 골라주세요.',
  },
  {
    label: '떠나고 싶은 도시는?',
    content: <CitySelect />,
    description: '떠나고 싶은 지역도 고르고 나라도 골랐다면 가보고 싶은 도시도 골라주세요!',
  },
  {
    label: '여행 기간은?',
    content: <DurationSelect />,
    description: '언제부터 여행을 떠나실 예정이신가요?',
  },
  {
    label: '누구와 떠나나요?',
    content: <CompanionSelect />,
    description:
      '여행은 누구와 함께하나요? 가족, 친구, 연인과 함께 혹은 혼자 여행을 떠나시나요?\n떠나는 대상을 골라주세요.',
  },
  {
    label: '내가 선호하는 여행 스타일은?',
    content: <TravelStyleSelect />,
    description:
      '자연 속을 거닐거나 힐링을 만끽하고 싶으신가요? 아니면 인생샷을 남길 곳을 찾거나 맛집투어를 하고 싶으신가요?\n 선호하는 여행 테마를 골라주시면 취향에 딱 맞는 일정을 짜드립니다!',
  },
  {
    label: '당장 떠나고 싶은 내 여행 일정 보기',
    content: <TripResultExample />,
    description: '여행하고자하는 지역, 기간, 대상, 그리고 취향을 모아 ai로 일정을 추천해드립니다.',
  },
];

export default function OurProcessList() {
  return cards.map(({ label, content, description }, index) => (
    <Card key={label} className={cx('card-wrap')}>
      <Card.Content className={cx('card-content')}>{content}</Card.Content>
      <Card.Description>
        <Description lineBreak={true} order={index + 1} descriptionTitle={label}>
          {description}
        </Description>
      </Card.Description>
    </Card>
  ));
}
