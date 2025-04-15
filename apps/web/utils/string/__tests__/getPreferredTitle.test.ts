import { describe, expect, it } from 'vitest';
import getPreferredTitle from '../getPreferredTitle';

describe('getPreferredTitle', () => {
  it('names가 null이거나 undefined일 경우 빈 문자열을 리턴한다.', () => {
    expect(getPreferredTitle({ names: null })).toBe('');
    expect(getPreferredTitle({ names: undefined })).toBe('');
  });

  it('primary title이 존재할 경우 해당 문자열을 리턴한다.', () => {
    expect(getPreferredTitle({ names: { primary: 'Primary Title' } })).toBe('Primary Title');
  });

  it('primary is undefined 일 경우 ko (한국어 제목)을 리턴한다.', () => {
    expect(getPreferredTitle({ names: { ko: 'Korean Title' } })).toBe('Korean Title');
  });

  it('ko와 primary가 undefined일 경우 en(영문 제목)을 리턴한다.', () => {
    expect(getPreferredTitle({ names: { en: 'English Title' } })).toBe('English Title');
  });

  it('primary, ko, en이 존재하지 않을 경우 local을 리턴한다.', () => {
    expect(getPreferredTitle({ names: { local: 'Local Title' } })).toBe('Local Title');
  });

  it('우선순위는 primary > ko > en > local을 따른다.', () => {
    expect(getPreferredTitle({ names: { primary: 'Primary', ko: 'Korean', en: 'English', local: 'Local' } })).toBe(
      'Primary'
    );
    expect(getPreferredTitle({ names: { ko: 'Korean', en: 'English', local: 'Local' } })).toBe('Korean');
    expect(getPreferredTitle({ names: { en: 'English', local: 'Local' } })).toBe('English');
    expect(getPreferredTitle({ names: { local: 'Local' } })).toBe('Local');
  });
});
