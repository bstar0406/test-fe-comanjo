import './banner.css'
import React from 'react';

import Aos from "aos";
import "aos/dist/aos.css";
import "./banner.css"
import { useEffect } from "react";

const Banner = () => {
  useEffect(function () {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="home_banner_section">
      <div className='home_banner_container'>
        <div className='container_left'>
          <img alt="img1" src='assets/rectangle1.png' className ='!h-[20px]' />
          <p className="title_One" >HIRE</p>
          <p className="title_two"  >FOR VALUES</p>
          <p className="home_banner_intro" >
            Lörem ipsum astrofagisk sad, i dykädade. Monor syl respektive personlig därför att anening yra i dälogi. Pode spegisk. Div nityngen, plabelt trening okilingar exor. Dide mis, i ism dodoheten.
          </p>
          <div className='vertical-line'/>
        </div>
        <div className='container_right'>
          <div className='mark-card'>
            <div className="home_banner_card" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1500" >
              <img alt="img1" src="assets/woman.png" />
              <p className="card-text">Lörem ipsum vor megan. </p>
              <div className='card-button' style={{ cursor: `pointer` }}>Follow</div>
              <div className='banner-mark-resume'>Resume Matched</div>
              <div className='banner-mark-schedule'>Schedule</div>
            </div>
          </div>
          <img alt='Home-Banner' src='assets/woman.png' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500" />
        </div>
      </div>
      <div className='home-banner-bottom'>
        <div className='bottom-title'>
          GET STARTED WITH YOUR DREAM JOB
        </div>
        <div className="bottom-arrow">
          <img alt="img-arrow" src="assets/arrow2.png" />
        </div>
        <div className='bottom-detail'>
          <div className='detail-item'>
            <div className='item-title'>What Do You Want to Do?</div>
            <div className='item-button'>Job Seeker</div>
          </div> 
          <div className='detail-item'>
            <div className='item-title'>Where Do you Want to Do IT?</div>
            <div className='item-button'>Company</div>
          </div>
          <div className='item-register'>Register</div>
        </div>
        
      </div>
    </div>
  )
}
export default Banner