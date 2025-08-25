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
  const emailRef = useRef<string>('');
  const passwordRef = useRef<string>('');
  const nicknameRef = useRef<string>('');
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    emailRef.current = e.target.value;
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    passwordRef.current = e.target.value;
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    nicknameRef.current = e.target.value;
  };

  const handleSignup = () => {
    // todo1 나중에 API 넣을 자리
    alert('회원가입 완료되었습니다. 로그인 페이지로 이동합니다.');
    navigate('/');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const email = emailRef.current ?? '';
    const pw = passwordRef.current ?? '';
    const nickname = nicknameRef.current ?? '';

    if (!email.includes('@')) {
      alert('이메일 형식이 올바르지 않습니다.');
      return;
    }
    if (!(pw.length >= 2 && pw.length <= 10)) {
      alert('비밀번호는 2자 이상 10자 이하여야 합니다.');
      return;
    }

    // todo2 닉네임 유효성 검사 로직 추가
    handleSignup();
  };

  return (
    <Container>
      <ContentWrapper>
        <SignupForm onSubmit={handleSubmit}>
          <p>이메일</p>
          <SignupInput type="email" placeholder="이메일을 입력해주세요" onChange={handleEmailChange} />
          <p>비밀번호</p>
          <SignupInput type="password" placeholder="비밀번호를 입력해주세요" onChange={handlePasswordChange} />
          <p>닉네임</p>
          <SignupInput type="nickname" placeholder="닉네임을 입력해주세요" onChange={handleNicknameChange} />
          <SignupButton type="submit">회원가입</SignupButton>
        </SignupForm>
      </ContentWrapper>
    </Container>
  );
};

export default SignupPage;
