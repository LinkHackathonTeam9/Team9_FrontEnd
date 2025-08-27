import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: #fbf8f1;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const LoginInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #e1ded7;
  border-radius: 5px;
  padding: 0 10px;
`;

const LoginInputContent = styled.p`
  font-size: 14px;
  color: #888888;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SignUpButton = styled.button`
  width: 100%;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const LoginPage = () => {
  const navigate = useNavigate();

  const inputRefs = {
    email: useRef<HTMLInputElement>(null),
    password: useRef<HTMLInputElement>(null),
  };

  const handleLogin = () => {
    // 나중에 API 넣을 자리
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

    handleLogin();
  };

  return (
    <Container>
      <ContentWrapper>
        <LoginForm onSubmit={handleSubmit}>
          <LoginInput type="email" ref={inputRefs.email} placeholder="이메일을 입력해주세요" />
          <LoginInput type="password" ref={inputRefs.password} placeholder="비밀번호를 입력해주세요" />
          <LoginButton type="submit">로그인</LoginButton>
          <LoginInputContent>아직 회원이 아니신가요?</LoginInputContent>
          <SignUpButton type="button" onClick={handleSignUp}>
            회원가입
          </SignUpButton>
        </LoginForm>
      </ContentWrapper>
    </Container>
  );
};

export default LoginPage;
