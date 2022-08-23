import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className='sign-up-area'>
      <h2 className="sign-up-title">회원가입</h2>
      <form className="sign-up-form" action="">
        <label className="label-name" htmlFor="user-id">아이디</label>
        <input name="userId" className="label-input" id="user-id" type="text" placeholder="아이디를 입력하세요" />
        <p className="valid-msg">이미 존재하는 ID입니다.</p>
        <label className="label-name" htmlFor="user-pwd">비밀번호</label>
        <input name="pwd" className="label-input" id="user-pwd" type="password" placeholder="비밀번호를 입력하세요" />        
        <label className="label-name" htmlFor="user-pwd">비밀번호 확인</label>
        <input name="pwd" className="label-input" id="user-pwd" type="password" placeholder="비밀번호를 한번 더 입력해주세요" />
        <p className="valid-msg">비밀번호가 일치하지않습니다.</p>
        <label className="label-name" htmlFor="user-pwd">닉네임</label>
        <input name="nickname" className="label-input" id="user-pwd" type="text" placeholder="닉네임을 입력하세요" />
        <p className="valid-msg">사용할 수 없는 닉네임입니다.</p>
        <button className="submit-btn" type="submit">가입하기</button>
      </form>
      <Link to='/login'>
        <p className="go-to-login">로그인하기</p>
      </Link>
    </div>
  )
};

export default Register;