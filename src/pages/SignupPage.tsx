import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { GGAMJA_COLOR } from '../styles/Colors.ts';
import useSignup from '@hooks/useSignup.tsx';

const PageWrapper = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  background-color: #faf8f5;
  color: ${GGAMJA_COLOR.DARK_BROWN};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 32px;
  color: ${GGAMJA_COLOR.DARK_BROWN};
  margin-bottom: 12px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: ${GGAMJA_COLOR.LIGHT_BROWN};
  line-height: 1.6;
  margin-bottom: 40px;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px;
`;

const SignupInputContent = styled.p`
  font-size: 14px;
  color: ${GGAMJA_COLOR.DARK_BROWN};
  text-align: left;
  width: 100%;
`;

const SignupInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  font-size: 12px;
  border: 2px solid ${GGAMJA_COLOR.DARK_BROWN};
  border-radius: 8px;
  box-shadow: 4px 4px 0 ${GGAMJA_COLOR.DARK_BROWN};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  padding: 40px 0 0 0;
`;

const SignupButton = styled.button`
  padding: 10px 20px;
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 16px;
  color: white;
  background-color: ${GGAMJA_COLOR.GREEN};
  text-decoration: none;
  border: 2px solid ${GGAMJA_COLOR.DARK_BROWN};
  border-radius: 8px;
  box-shadow: 4px 4px 0 ${GGAMJA_COLOR.DARK_BROWN};
  cursor: pointer;
`;

const BackButton = styled.button`
  padding: 10px 20px;
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 16px;
  color: white;
  background-color: ${GGAMJA_COLOR.LIGHT_BROWN};
  text-decoration: none;
  border: 2px solid ${GGAMJA_COLOR.DARK_BROWN};
  border-radius: 8px;
  box-shadow: 4px 4px 0 ${GGAMJA_COLOR.DARK_BROWN};
  cursor: pointer;
`;

const SignupPage = () => {
  const navigate = useNavigate();
  const { fetchSignup } = useSignup();

  const inputRefs = {
    email: useRef<HTMLInputElement>(null),
    password: useRef<HTMLInputElement>(null),
    passwordConfirm: useRef<HTMLInputElement>(null),
    nickname: useRef<HTMLInputElement>(null),
  };

  const signUp = () => {
    fetchSignup(
      inputRefs.nickname.current?.value ?? '',
      inputRefs.email.current?.value ?? '',
      inputRefs.password.current?.value ?? '',
      inputRefs.passwordConfirm.current?.value ?? '',
    );

    alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
    navigate('/');
  };

  const validate = (email: string, pw: string, pwConfirm: string, nickname: string) => {
    if (!email.includes('@')) {
      alert('이메일 형식이 올바르지 않습니다.');
      return false;
    }

    if (!(pw.length >= 2 && pw.length <= 10)) {
      alert('비밀번호는 2자 이상 10자 이하여야 합니다.');
      return false;
    }

    if (nickname.trim() === '') {
      alert('닉네임을 입력해주세요.');
      return false;
    }

    if (pw !== pwConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const email = inputRefs.email.current?.value ?? '';
    const pw = inputRefs.password.current?.value ?? '';
    const pwConfirm = inputRefs.passwordConfirm.current?.value ?? '';
    const nickname = inputRefs.nickname.current?.value ?? '';

    if (!validate(email, pw, pwConfirm, nickname)) {
      return;
    }

    signUp();
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        <SignupForm onSubmit={handleSubmit}>
          <Title>회원가입</Title>
          <Subtitle>회원가입을 위해 아래 정보를 입력해주세요.</Subtitle>
          <SignupInputContent>* 이메일</SignupInputContent>
          <SignupInput type="email" ref={inputRefs.email} placeholder="이메일을 입력해주세요" />
          <SignupInputContent>* 비밀번호</SignupInputContent>
          <SignupInput type="password" ref={inputRefs.password} placeholder="비밀번호를 입력해주세요" />
          <SignupInputContent>* 비밀번호 확인</SignupInputContent>
          <SignupInput type="password" ref={inputRefs.passwordConfirm} placeholder="비밀번호를 입력해주세요" />
          <SignupInputContent>* 닉네임</SignupInputContent>
          <SignupInput type="nickname" ref={inputRefs.nickname} placeholder="닉네임을 입력해주세요" />
          <ButtonWrapper>
            <BackButton type="button" onClick={handleBack}>
              뒤로가기
            </BackButton>
            <SignupButton type="submit">회원가입</SignupButton>
          </ButtonWrapper>
        </SignupForm>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default SignupPage;
