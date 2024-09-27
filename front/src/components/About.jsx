import React from 'react';

export default function About () {
  return (
    <div id='about'>
      <div className='home-section-wrap'>
        <section className='section1'>
          <i className='section-img1'></i>
          <div className='section-textbox'>
            <span className='section-point'>
              <em></em>
            </span>
            <b className='section-subtitle'>자유로운 소통</b>
            <h3 className='section-title'>한국에서의 모든 이동을 자유롭고 편안하게</h3>
            <p>영어, 일본어, 중국어 등 외국어를 자유자재로 구사하는 전문 드라이버와 함께 소통의 불편함 없이 편안하게 이동할 수 있어요.</p>
          </div>
        </section>
        <section className='section2'>
          <div className='section-textbox'>
          <span className='section-point'>
              <em></em>
            </span>
            <b className='section-subtitle'>신뢰할 수 있는 요금 정책</b>
            <h3 className='section-title'>부당요금에 대한 걱정은 더 이상 NO!</h3>
            <p>누구나 신뢰하며 이용할 수 있도록 서울 권역 고정요금 체계를 마련했어요. 정직하게 운행하는 인터내셔널 택시, 마음 편하게 이용해 보세요.</p>
          </div>
          <i className='section-img2'></i>
        </section>
        <section className='section3'>
          <i className='section-img3'></i>
          <div className='section-textbox'>
          <span className='section-point'>
              <em></em>
            </span>
            <b className='section-subtitle'>고객 맞춤 서비스</b>
            <h3 className='section-title'>이동의 시작과 끝, 모두 만족할 수 있도록</h3>
            <p>다양한 차종이 준비되어 있어 어떤 상황이든 쾌적하게 이동할 수 있어요. 성공적인 비즈니스를 위한 공항 피켓 서비스, 전문 의전 등 기타 부가 서비스도 </p>
          </div>
        </section>
      </div>
    </div>
  );
}