import React from 'react';

export default function Home () {
  return (
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
      <div id='about'>
        <div className='home-section-wrap'>
          <section className='section1'>
            <i className='section-img1'></i>
            <div className='section-textbox'>
              <span>point</span>
              <b>자유로운 소통</b>
              <h3>한국에서의 모든 이동을 자유롭고 편안하게</h3>
              <p>영어, 일본어, 중국어 등 외국어를 자유자재로 구사하는 전문 드라이버와 함께 소통의 불편함 없이 편안하게 이동할 수 있어요.</p>
            </div>
          </section>
          <section className='section2'>
            <div className='section-textbox'>
              <span></span>
              <b>신뢰할 수 있는 요금 정책</b>
              <h3></h3>
              <p></p>
            </div>
            <i className='section-img2'></i>
          </section>
          <section className='section3'>
            <i className='section-img3'></i>
            <div className='section-textbox'>
              <span></span>
              <b>고객 맞춤 서비스</b>
              <h3></h3>
              <p></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}