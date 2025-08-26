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
  const navigate = useNavigate();
  const inputRefs = {
    email: useRef<HTMLInputElement>(null),
    password: useRef<HTMLInputElement>(null),
    nickname: useRef<HTMLInputElement>(null),
  };

  const signUp = () => {
    // todo1 나중에 API 넣을 자리
    alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
    navigate('/');
  };

  const validate = (email: string, pw: string, nickname: string) => {
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

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const email = inputRefs.email.current?.value ?? '';
    const pw = inputRefs.password.current?.value ?? '';
    const nickname = inputRefs.nickname.current?.value ?? '';

    if (!validate(email, pw, nickname)) {
      return;
    }

    // todo2 닉네임 유효성 검사 로직 추가
    signUp();
  };

  return (
    <Container>
      <ContentWrapper>
        <SignupForm onSubmit={handleSubmit}>
          <p>이메일</p>
          <SignupInput type="email" ref={inputRefs.email} placeholder="이메일을 입력해주세요" />
          <p>비밀번호</p>
          <SignupInput type="password" ref={inputRefs.password} placeholder="비밀번호를 입력해주세요" />
          <p>닉네임</p>
          <SignupInput type="nickname" ref={inputRefs.nickname} placeholder="닉네임을 입력해주세요" />
          <SignupButton type="submit">회원가입</SignupButton>
        </SignupForm>
      </ContentWrapper>
    </Container>
  );
};

export default SignupPage;
