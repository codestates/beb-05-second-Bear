import './css/Login.css';

const LoginPage = () => {
  return (
    <div className='loginContainer'>
        <div className='login'>로그인</div>
        <div className='inputField'>
          <div className='label'>아이디</div>
          <input
            type='text'
            name='username'
            placeholder="아이디를 입력하세요"
            size='30'
          />
        </div>
        <div className='inputField'>
          <div className='label'>비밀번호</div>
          <input
            type='password'
            name='password'
            placeholder="비밀번호를 입력하세요"
            size='30'
          />
        </div>
        <div className='passwordField'>
          <button className='loginBtn'>
            Login
          </button>
        </div>
      </div>
  )
};

export default LoginPage; 