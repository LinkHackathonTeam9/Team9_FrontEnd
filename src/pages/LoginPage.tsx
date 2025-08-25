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
  const email = useRef<string>('');
  const password = useRef<string>('');
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (email.current === '') {
      alert('이메일을 입력해주세요.');
      return;
    }

    if (!email.current.includes('@')) {
      alert('이메일 형식이 올바르지 않습니다.');
      return;
    }
    email.current = e.target.value;
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (password.current === '') {
      alert('비밀번호를 입력해주세요.');
      return;
    }
    password.current = e.target.value;
  };

  const handleLogin = () => {
    // 나중에 API 넣을 자리
    navigate('/home');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <Container>
      <ContentWrapper>
        <LoginForm>
          <LoginInput type="email" placeholder="이메일을 입력해주세요" onChange={handleEmailChange} />
          <LoginInput type="password" placeholder="비밀번호를 입력해주세요" onChange={handlePasswordChange} />
          <LoginButton onClick={handleLogin}>로그인</LoginButton>
          <p>아직 회원이 아니신가요?</p>
          <SignUpButton onClick={handleSignUp}>회원가입</SignUpButton>
        </LoginForm>
      </ContentWrapper>
    </Container>
  );
};

export default LoginPage;
