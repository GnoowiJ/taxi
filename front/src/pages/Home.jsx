import React from 'react';
import About from '../components/About';
import Lineup from '../components/Lineup';

export default function Home () {
  return (
    <div>
      <div className='body'>
        <div className='home-main'>
          <div className='home-main-container'>
            <div className='home-title'>
              <h2>
                <span className='point'>
                  <em></em>
                </span>
                전 세계인을 위한 프리미엄 이동 서비스
                <p className='home-title-eng'>International Taxi</p>
              </h2>
              <p>인터내셔널 택시는 글로벌 이동 서비스의 새로운 기준을 제시합니다.</p>
            </div>
            <ul className='home-subtitle'>
              <li>
                <i className='subtitle-img1'></i>
                <span>서울시 공식 지정 외국인 택시 서비스</span>
              </li>
              <li>
                <i className='subtitle-img2'></i>
                <span>
                  누적 이용객 수 1,000,000명 돌파
                  <p>(2021.12 기준)</p>
                </span>
              </li>
              <li>
                <i className='subtitle-img3'></i>
                <span>4개 국어 구사 전문 드라이버 보유</span>
              </li>
            </ul>
          </div>
        </div>
        <About />
        <Lineup />
      </div>
    </div>
  );
}