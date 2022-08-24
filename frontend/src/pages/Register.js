import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {

  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const changeUserid = (e) => {
    setUserid(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const changenickname = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/signup", {
        userid, password, nickname
      })
      .then(() => console.log("Created"));
  };



  return (
    <div className='sign-up-area'>
      <h2 className="sign-up-title">회원가입</h2>

      <form className="sign-up-form" onSubmit={handleSubmit}>

        <label className="label-name" >아이디</label>
        <input name="userId" className="label-input" id="user-id" type="text" placeholder="아이디를 입력하세요" onChange={(e) => changeUserid(e)} />

        <label className="label-name">비밀번호</label>
        <input name="pwd" className="label-input" id="user-pwd" type="password" placeholder="비밀번호를 입력하세요" onChange={(e) => changePassword(e)} />

        <label className="label-name" >닉네임</label>
        <input name="nickname" className="label-input" id="user-pwd" type="text" placeholder="닉네임을 입력하세요" onChange={(e) => changenickname(e)} />

        <button className="submit-btn">가입하기</button>
      </form>
      <Link to='/login'>
        <p className="go-to-login">로그인하기</p>
      </Link>
    </div>
  )
};

export default Register;