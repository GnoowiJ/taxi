import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


export default function Header () {
  return (
    <div className='header'>
      <div className='header-img'>
        <div className='header-box'>
          <h1 className='header-logo' />
          <ul className="navbox">
            <li>ABOUT</li>
            <li>LINE-UP</li>
            <li>SERVICE</li>
            <li>PRICE</li>
            <li>RESERVATION</li>
          </ul>
          <div className='header-select-box'>
            <div className='select-box'>
              <span>KOR</span>
              <FontAwesomeIcon icon={faChevronDown} style={{"color": "yellow"}}/>
            </div>
            <ul className='header-select' style={{"display": "none"}}>
              <li>KOR</li>
              <li>ENG</li>
              <li>JPN</li>
              <li>CHN</li>
              <li>KOR</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}