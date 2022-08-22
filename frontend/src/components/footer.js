import React from 'react';
import { Link } from 'react-router-dom'
import './css/Footer.css'

const Footer = () => {
  return (
    
      <div className='footer'>
          <div className='footer1'>
              <Link to=''>이용약관</Link> |
              <Link to="">개인정보취급방침</Link> |
              <Link to="">인재채용</Link> |
              <Link to="">고객센터</Link> 
          </div>

          <div className='footer2'>
              <p className='p1'>
                  임원소개:
              </p>
              <p className='p2'>
                  지으삼(주)
              </p>
          </div>
      </div>


  )
 
};

export default Footer;