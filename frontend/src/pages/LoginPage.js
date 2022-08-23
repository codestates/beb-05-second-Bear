import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className='login-area'>
      <h2 className="login-title">로그인</h2>
      <form className="login-form" action="">
        <label className="label-name" htmlFor="user-id">아이디</label>
        <input className="label-input" id="user-id" type="text" placeholder="아이디를 입력하세요" />
        <p className="valid-msg">아이디를 확인하세요</p>
        <label className="label-name" htmlFor="user-pwd">비밀번호</label>
        <input className="label-input" id="user-pwd" type="password" placeholder="비밀번호를 입력하세요" />
        <p className="valid-msg">아이디를 확인하세요</p>
        <button className="submit-btn" type="submit">로그인</button>
      </form>
      <Link to='/register'>
        <p className="go-to-signup">회원가입 하러가기</p>
      </Link>
    </div>
  )
};

export default LoginPage; 