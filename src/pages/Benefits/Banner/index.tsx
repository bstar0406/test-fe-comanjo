import './banner.css'
import React from 'react';

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Benefit from "../../../assets/images/benefit.png"
const Banner = () => {
  useEffect(function () {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="banner_section" >
      <div className="banner_container" >
        <div className="banner_control" >
          <div className="banner_left" >

            <img alt="img1" src='assets/rectangle1.png' />
            <h2 style={{ color: `#245D7D` }} >HIRE</h2>
            <h2 style={{ color: `#20AAB7` }} >FOR VALUES</h2>

            <p className="banner_intro" >
              Lörem ipsum astrofagisk sad, i dykädade. Monor syl respektive personlig därför att anening yra i dälogi. Pode spegisk. Div nityngen, plabelt trening okilingar exor. Dide mis, i ism dodoheten.
            </p>
            <div className="verticalline1" ></div>
          </div>
          <div className="banner_right" >
            <div className="banner_right_control" >
              <div className="banner_right_img" >
                <img alt="img1" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500" src={Benefit} />
              </div>
              <div className="banner_right_content" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1500" >
                <img alt="img1" src={Benefit}/>
                <p>Lörem ipsum vor megan. </p>
                <div style={{ cursor: `pointer` }} >Follow</div>
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
            <p>GET STARTED   </p>
            <p> TO KNOW OUR </p>
            <p> BENEFITS </p>
          </div>
          <div className="banner_bottom_arrowImg" style={{ marginLeft: `150px` }}>
            <img alt="img1" src="assets/arrow2.png" />
          </div>
          <div className="banner_right_bottom !flex !justify-center" >
            <div className='text-[#00C4FF] text-[44px] font-medium'>Benefits of the company</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Banner