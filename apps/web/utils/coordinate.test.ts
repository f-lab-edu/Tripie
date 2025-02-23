import { describe, expect, it } from 'vitest';
import dmsToDecimalLatLng from './coordinate';

describe('dmsToDecimalLatLng', () => {
  it('올바르게 DMS를 숫자로 리턴한다.', () => {
    expect(dmsToDecimalLatLng(['37°00′N', '127°30′E'])).toEqual([37.0, 127.5]);
    expect(dmsToDecimalLatLng(['45°30′S', '122°00′W'])).toEqual([-45.5, -122.0]);
  });

  it('분(minute)이 생략되어도 위도/경도를 리턴한다.', () => {
    expect(dmsToDecimalLatLng(['37°N', '127°E'])).toEqual([37.0, 127.0]);
    expect(dmsToDecimalLatLng(['45°S', '122°W'])).toEqual([-45.0, -122.0]);
  });

  it('invalid한 input이 전달되면 빈 배열을 리턴한다.', () => {
    expect(dmsToDecimalLatLng(['invalid', 'input'])).toEqual([]);
    expect(dmsToDecimalLatLng(['', ''])).toEqual([]);
    expect(dmsToDecimalLatLng(['37°N'])).toEqual([]);
  });

  it('하나라도 invalid한 값을 전달하면 빈 배열을 리턴한다.', () => {
    expect(dmsToDecimalLatLng(['37°00′N', 'invalid'])).toEqual([]);
  });

  it('위도(-90에서 90사이의 수)와 경도(-1800에서 180사이의 수)가 valid한 값이 아니면 빈 배열을 반환한다.', () => {
    expect(dmsToDecimalLatLng(['99°S', '122°W'])).toEqual([]);
    expect(dmsToDecimalLatLng(['29°S', '182°W'])).toEqual([]);
  });
});
