import React from 'react';
import { Link } from 'react-router-dom';
// import './css/Header.css'

const Header = () => {

  return (
    <div className='headerContainer'>
      <div className='logo'>
        지으삼
      </div>
      <div className='navigator'>
        <ul className='navi'>
          <li><Link to ='/'>MainPage</Link></li>
          <li><Link to ='/login'>LoginPage</Link></li>
          <li><Link to ='/mypage'>MyPage</Link></li>
          <li><Link to ='/NFTminting'>NFTMinting</Link></li>
          <li><Link to ='/postDetail'>PostDetail</Link></li>
          <li><Link to ='register'>Register</Link></li>
          <li><Link to ='writePost'>WritePost</Link></li>
        </ul>       
      </div>
    </div>
  );
};

export default Header;