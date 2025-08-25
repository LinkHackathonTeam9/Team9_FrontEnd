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
  gap: 100px;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const SignupInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #e1ded7;
  border-radius: 5px;
  padding: 0 10px;
`;

const SignupButton = styled.button`
  width: 100%;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SignupPage = () => {
  const email = useRef<string>('');
  const password = useRef<string>('');
  const nickname = useRef<string>('');
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value.includes('@')) {
      alert('이메일 형식이 올바르지 않습니다.');
      return;
    }

    if (e.target.value === '') {
      alert('이메일을 입력해주세요.');
      return;
    }

    email.current = e.target.value;
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      alert('비밀번호를 입력해주세요.');
      return;
    }

    password.current = e.target.value;
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      alert('닉네임을 입력해주세요.');
      return;
    }

    nickname.current = e.target.value;
  };

  const handleSignup = () => {
    // 나중에 API 넣을 자리
    navigate('/login');
  };

  return (
    <Container>
      <ContentWrapper>
        <SignupForm>
          <p>이메일</p>
          <SignupInput type="email" placeholder="이메일을 입력해주세요" onChange={handleEmailChange} />
          <p>비밀번호</p>
          <SignupInput type="password" placeholder="비밀번호를 입력해주세요" onChange={handlePasswordChange} />
          <p>닉네임</p>
          <SignupInput type="nickname" placeholder="닉네임을 입력해주세요" onChange={handleNicknameChange} />
          <SignupButton onClick={handleSignup}>회원가입</SignupButton>
        </SignupForm>
      </ContentWrapper>
    </Container>
  );
};

export default SignupPage;
