import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


const LoginPage = (props) => {

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUserId = (e) =>{
    setUserId(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };


  const loginRequestHandler = () => {  
    axios({
      url: "https://localhost:4000/users/login",
      method: "post",
      data: {
        userId: `${userId}`,
        password: `${password}`,
      },
      headers: {
        accept: 'application/json',
      },
        // 'Content-Type':'application/json',
        withCredentials: true
      
    })
    .then((res) => {
      props.loginHandler();

      axios.get("https://localhost:4000/users/userinfo", {
        'Content-Type':'application/json',
        withCredentials: true
      })
      .then((res) => {
        // this.props.setUserInfo(res.data.data);
        props.setUserInfo({
          userId: res.data.data.userId,
          nickName: res.data.data.nickName,
          address: res.data.data.address,
          balance: res.data.data.balance,
        });
        console.log(res)
      });
    });
  };

  return (
    <div className='login-area'>
      <h2 className="login-title">로그인</h2>
      <form className="login-form" action="">
        <label className="label-name" htmlFor="user-id">아이디</label>
        <input className="label-input" 
          id="user-id" 
          type="text" 
          placeholder="아이디를 입력하세요" 
          onChange={onChangeUserId}
          value={userId}  
        />
        <p className="valid-msg">아이디를 확인하세요</p>
        <label className="label-name" htmlFor="user-pwd">비밀번호</label>
        <input className="label-input" 
          id="user-pwd" 
          type="password" 
          placeholder="비밀번호를 입력하세요" 
          onChange={onChangePassword}
          value={password}
        />
        <p className="valid-msg">아이디를 확인하세요</p>
        <button className="submit-btn" onClick={loginRequestHandler} type="submit">로그인</button>
      </form>
      <Link to='/register'>
        <p className="go-to-signup">회원가입 하러가기</p>
      </Link>
    </div>
  )
};

export default LoginPage; 