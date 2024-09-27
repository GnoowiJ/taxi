import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Lineup () {
  const [isPoint, setIsPoint] = useState()
  const btnHandler = () => {

    return 
  }

  return (
    <div>
      <div className='line-container'>
        <div  className='line-swiper'>
          <div className='line-contentbox'>
          <button><FontAwesomeIcon icon={faChevronLeft} style={{fontSize: 50}} /></button>
            <div className='line-textbox'>
              <h3>인터내셔널 택시 라인업</h3>
              <div>
                <ul className='line-btn-list'>
                  <li>
                    <button className='line-btn' onClick={btnHandler}>
                      <i className="" style={{display: 'none', btnHandler}}></i>
                        중형택시
                    </button>
                  </li>
                  <li>
                    <button className='line-btn'>
                      <i></i>
                      모범택시
                    </button>
                  </li>
                  <li>
                    <button className='line-btn'>
                      <i></i>
                      대형택시
                    </button>
                  </li>
                </ul>
              </div>
              <div className='line-desc'>
                <p>자유로운 소통과 친절함으로 즐거운 이동을</p>
                <div className='line-info'>
                  <span>
                    탑승 가능 3명
                  </span>
                  <span>
                    수하물 3개
                  </span>
                </div>
              </div>
            </div>
            <div className='line-imgbox'>
            </div>
          <button><FontAwesomeIcon icon={faChevronRight} style={{fontSize: 50}} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}