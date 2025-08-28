import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { GGAMJA_COLOR } from '../styles/Colors.ts';
import useLogin from '@hooks/useLogin.tsx';

const PageWrapper = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  background-color: #faf8f5;
  color: ${GGAMJA_COLOR.DARK_BROWN};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px 20px 20px 20px;
  box-sizing: border-box;
  gap: 40px;
`;

const PageTitle = styled.h1`
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 36px;
  font-weight: 700;
  color: ${GGAMJA_COLOR.DARK_BROWN};
`;

const PageTitleImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid ${GGAMJA_COLOR.DARK_BROWN};
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const LoginInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const LoginInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #e1ded7;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 12px;
  border: 2px solid ${GGAMJA_COLOR.DARK_BROWN};
  border-radius: 8px;
  box-shadow: 4px 4px 0 ${GGAMJA_COLOR.DARK_BROWN};
`;

const LoginInputContent = styled.p`
  font-size: 14px;
  color: #888888;
`;

const LoginButton = styled.button`
  display: inline-block;
  background-color: ${GGAMJA_COLOR.GREEN};
  color: white;
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 20px;
  padding: 10px 20px;
  text-decoration: none;
  border: 2px solid ${GGAMJA_COLOR.DARK_BROWN};
  border-radius: 8px;
  box-shadow: 4px 4px 0 ${GGAMJA_COLOR.DARK_BROWN};
  cursor: pointer;
`;

const SignUpContent = styled.p`
  font-size: 12px;
  color: #888888;
  text-align: center;
  line-height: 2.5;
`;

const SignUpButton = styled.button`
  display: inline-block;
  background-color: ${GGAMJA_COLOR.LIGHT_BROWN};
  color: white;
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 20px;
  padding: 10px 20px;
  text-decoration: none;
  border: 2px solid ${GGAMJA_COLOR.DARK_BROWN};
  border-radius: 8px;
  box-shadow: 4px 4px 0 ${GGAMJA_COLOR.DARK_BROWN};
  cursor: pointer;
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const { fetchLogin } = useLogin();

  const inputRefs = {
    email: useRef<HTMLInputElement>(null),
    password: useRef<HTMLInputElement>(null),
  };

  const login = () => {
    fetchLogin(inputRefs.email.current?.value ?? '', inputRefs.password.current?.value ?? '');
    navigate('/home');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  const validate = (email: string, pw: string) => {
    if (!email.includes('@')) {
      alert('이메일 형식이 올바르지 않습니다.');
      return false;
    }

    if (!(pw.length >= 2 && pw.length <= 10)) {
      alert('비밀번호는 2자 이상 10자 이하여야 합니다.');
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const email = inputRefs.email.current?.value ?? '';
    const pw = inputRefs.password.current?.value ?? '';

    if (!validate(email, pw)) {
      return;
    }

    login();
  };

  return (
    <PageWrapper>
      <PageTitle>커몬 깜자!</PageTitle>
      <PageTitleImage></PageTitleImage>
      <LoginForm onSubmit={handleSubmit}>
        <LoginInputWrapper>
          <LoginInputContent>회원이신가요? 로그인해주세요!</LoginInputContent>
          <LoginInput type="email" ref={inputRefs.email} placeholder="이메일을 입력해주세요" />
          <LoginInput type="password" ref={inputRefs.password} placeholder="비밀번호를 입력해주세요" />
          <LoginButton type="submit">로그인</LoginButton>
        </LoginInputWrapper>

        <SignUpContent>아직 회원이 아니신가요? 당장 가입해주세요!</SignUpContent>

        <SignUpButton type="button" onClick={handleSignUp}>
          회원가입
        </SignUpButton>
      </LoginForm>
    </PageWrapper>
  );
};

export default LoginPage;
