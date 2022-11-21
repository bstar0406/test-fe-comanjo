import './banner.css'
import React from 'react';

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(function () {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="banner_section" >
      <div className="banner_container" >
        <div className="banner_control" >
          <div className="banner_left" >
            <img alt="img1" src='assets/rectangle1.png' className='!h-[100px]' />
            <h2 style={{ color: `#245D7D` }} className="!text-5xl" >HIRE</h2>
            <h2 style={{ color: `#20AAB7` }} className="!text-5xl"  >FOR VALUES</h2>

            <p className="banner_intro !text-2xl" >
              Lörem ipsum astrofagisk sad, i dykädade. Monor syl respektive personlig därför att anening yra i dälogi. Pode spegisk. Div nityngen, plabelt trening okilingar exor. Dide mis, i ism dodoheten.
            </p>
            <div className="verticalline1" ></div>
          </div>
          <div className="banner_right" >
            <div className="banner_right_control" >
              <div className="banner_right_img" >
                <img alt="img1" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500" src="assets/woman.png" />
              </div>
              <div className="banner_right_content !py-3" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1500" >
                <img alt="img1" src="assets/woman.png" />
                <p className='!text-lg'>Lörem ipsum vor megan. </p>
                <div style={{ cursor: `pointer` }} className="!py-2 !px-4" >Follow</div>
              </div>
              <div className="banner_right_content2" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="2000" >
                <div></div>
                <p>Lörem ipsum vor megan.</p>
              </div>
            </div>
          </div>

        </div>
        <div className="banner_bottom flex items-center  justify-between" >
          <div className="banner_bottom_getStarted" >
            <p className='!text-3xl whitespace-nowrap leading-relaxed'>GET STARTED </p>
            <p className='!text-3xl whitespace-nowrap leading-relaxed'> WITH YOUR </p>
            <p className='!text-3xl whitespace-nowrap leading-relaxed'> DREAM JOB </p>
          </div>
          <div className="banner_bottom_arrowImg" style={{ marginLeft: `150px` }}>
            <img alt="img1" src="assets/arrow2.png" />
          </div>
          <div className="banner_right_bottom" >
            <div className="banner_right_bottom_item" >
              <p className='!text-xl'>Lörem ipsum vor megan. </p>
              <div className='!py-3'>Job seeker</div>
            </div>
            <div className="banner_right_bottom_item" >
              <p className='!text-xl'>Lörem ipsum vor megan. </p>
              <div className='!py-3'>Company</div>
            </div>
            <div className="banner_right_bottom_item banner_right_bottom_item_register " >
              <p style={{ color: `transparent` }} className='!text-xl' >1111<br/>111</p>
              <div className='!py-3'>Register</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Banner