import React from 'react';
import { Link } from 'react-router-dom';
// import './css/Header.css'

const Header = () => {

  return (
    <div className='site-header'>
      <Link to='/'>
        <h1 className='logo'>
          지으삼
        </h1>
      </Link>
      <ul className='nav'>
        {/* 비로그인시 before-login 노출, 로그인시 after-login 노출 */}
        <div className="before-login">
          <Link to='register'><li className='nav-item'>회원가입</li></Link>
          <Link to='/login'><li className='nav-item btn-login'>로그인</li></Link>
        </div>
        <div className="after-login">
          <Link to='/mypage'><li className='nav-item'>마이페이지</li></Link>
          <li className='nav-item btn-logout'>로그아웃</li>
          <Link to='/write'><li className='nav-item btn-write'>시 짓기</li></Link>
        </div>
      </ul>
    </div>
  );
};

export default Header;