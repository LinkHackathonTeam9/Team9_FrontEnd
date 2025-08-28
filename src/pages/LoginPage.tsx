import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { GGAMJA_COLOR } from '../styles/Colors.ts';
import useLogin from '@hooks/useLogin.tsx';
import { keyframes } from '@emotion/react';

const PageWrapper = styled.div`
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
  font-weight: 700;
  font-size: 40px;
  color: ${GGAMJA_COLOR.DARK_BROWN};
`;

const PageTitleImageWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border: 2px solid ${GGAMJA_COLOR.DARK_BROWN};
  border-radius: 50%;
  overflow: hidden;
`;

const floating = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const PageTitleImage = styled.img`
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: ${floating} 1.5s ease-in-out infinite;
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
  font-size: 16px;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 2px solid ${GGAMJA_COLOR.DARK_BROWN};
  border-radius: 8px;
  box-shadow: 4px 4px 0 ${GGAMJA_COLOR.DARK_BROWN};
`;

const LoginInputContent = styled.p`
  font-size: 18px;
  color: #888888;
`;

const LoginButton = styled.button`
  font-size: 26px;
  display: inline-block;
  background-color: ${GGAMJA_COLOR.GREEN};
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border: 2px solid ${GGAMJA_COLOR.DARK_BROWN};
  border-radius: 8px;
  box-shadow: 4px 4px 0 ${GGAMJA_COLOR.DARK_BROWN};
  cursor: pointer;
`;

const SignUpContent = styled.p`
  font-size: 14px;
  color: #888888;
  text-align: center;
  line-height: 2.5;
`;

const SignUpButton = styled.button`
  font-size: 26px;
  display: inline-block;
  background-color: ${GGAMJA_COLOR.LIGHT_BROWN};
  color: white;
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

  const login = async () => {
    const isloginSuccess = await fetchLogin(inputRefs.email.current?.value ?? '', inputRefs.password.current?.value ?? '');

    if (isloginSuccess) {
      navigate('/home');
    }
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
      <PageTitle>Comm'on 깜자!</PageTitle>
      <PageTitleImageWrapper>
        <PageTitleImage src="https://ggamja-images.s3.ap-northeast-2.amazonaws.com/level1.png" alt="깜자" />
      </PageTitleImageWrapper>
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
