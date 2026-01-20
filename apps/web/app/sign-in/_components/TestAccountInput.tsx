'use client';

import API from '@/constants/api-routes';
import { TEST_USER_ID, TEST_USER_PWD } from '@/constants/auth';
import {
  Accordion,
  FlickTextButton,
  Icon,
  Input,
  TextUnderLineAnimation,
} from '@tripie-pyotato/design-system/@components';
import { Container, Stack, Text } from '@tripie-pyotato/design-system/@core';
import { openNewTab } from '@tripie-pyotato/utils';
import { signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';

const INVALID = { NO_ID: '', NO_PWD: '', INCORRECT_ID: '', INCORRECT_PWD: '' };

function TestAccountInput() {
  const [id, setId] = useState<string | null>(null);
  const [pwd, setPwd] = useState<string | null>(null);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [_errorMsg, setErrorMsg] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (id === TEST_USER_ID && pwd === TEST_USER_PWD) {
      await signIn('credentials', {
        username: id,
        password: pwd,
        redirect: true,
        redirectTo: '/',
      });
    }
  };

  useEffect(() => {
    if (id === TEST_USER_ID && pwd === TEST_USER_PWD) {
      setIsValid(true);
    } else if (!id || id.length === 0) {
      setErrorMsg(prev => (prev.length === 0 ? [INVALID['NO_ID']] : [...prev, INVALID['NO_ID']]));
    } else if (!pwd || pwd.length === 0) {
      setErrorMsg(prev => (prev.length === 0 ? [INVALID['NO_PWD']] : [...prev, INVALID['NO_PWD']]));
    } else if (id !== TEST_USER_ID && pwd !== TEST_USER_PWD) {
      setIsValid(false);
    } else if (id !== TEST_USER_ID) {
      setErrorMsg(prev => (prev.length === 0 ? [INVALID['INCORRECT_ID']] : [...prev, INVALID['INCORRECT_ID']]));
    } else if (id !== TEST_USER_PWD) {
      setErrorMsg(prev => (prev.length === 0 ? [INVALID['INCORRECT_PWD']] : [...prev, INVALID['INCORRECT_PWD']]));
    }
  }, [pwd, id]);

  useEffect(() => {
    return () => setIsValid(false);
  }, []);

  return (
    <Accordion>
      <Accordion.Header applyMargin="top" margin="l">
        <Container justifyContent="start" margin="m" gap="sm" applyMargin="bottom">
          테스트 계정으로 로그인하기 <Accordion.Icon cloudinaryUrl={API.MEDIA_URL} />
          <Accordion.Divider />
        </Container>
      </Accordion.Header>
      <form key={'test-account-signin'} onSubmit={handleSubmit}>
        <Accordion.Body padding={'m'} applyPadding="top-bottom" style={{ height: 'fit-content' }}>
          <Stack gap="l" direction="column" applyMargin="top-bottom" margin="sm">
            <label htmlFor="id">
              <Text.Accented size="tiny">아이디</Text.Accented>
              <Input
                id="id"
                margin="m"
                value={id ?? ''}
                placeHolder="아이디"
                type="text"
                onChange={e => setId(e.target.value)}
              />
            </label>

            <label htmlFor="pwd">
              <Text.Accented size="tiny">비밀번호</Text.Accented>
              <Input
                id="pwd"
                margin="m"
                applyMargin="left"
                value={pwd ?? ''}
                placeHolder="비밀번호"
                type="password"
                onChange={e => setPwd(e.target.value)}
              />
            </label>
          </Stack>
          <Container applyMargin="bottom">
            {!isValid && (
              <TextUnderLineAnimation
                onClick={() => openNewTab(`https://github.com/Pyotato/Tripie?tab=readme-ov-file#테스트-계정`)}
              >
                <Stack
                  gap="default"
                  alignItems="start"
                  justifyContent="start"
                  applyPadding="bottom"
                  margin="none"
                  padding="xsm"
                >
                  <Text.Accented size="tiny">테스트 계정 로그인 정보 보기</Text.Accented>
                  <Icon />
                </Stack>
              </TextUnderLineAnimation>
            )}
          </Container>
          <FlickTextButton type="submit" withBorder={true} sizes="large" disabled={!isValid} style={{ color: '' }}>
            <Text noGapUnderText={true} gap={'sm'}>
              Sign in with Test Account
            </Text>
          </FlickTextButton>
        </Accordion.Body>
      </form>
    </Accordion>
  );
}

export default TestAccountInput;
