import { Fragment } from "react";
import './getStarted.scss'
import { Fade, Zoom } from 'react-awesome-reveal';

const GetStarted = () => {
  return (
    <Fragment>
      <div className="getStarted_section" >
        <Fade direction="up" duration={1000}><div className="getStarted_title_group" data-aos="fade-up" data-aos-duration="2000"  >
          <p className="getStarted_title !text-4xl mb-5" >Get Started</p>
          <p className="getStarted_intro !text-3xl"  >Lörem ipsum astrofagisk sad, i dykädade. Monor syl respektive personlig därför att anening yra i dälogi. Pode spegisk. Div nityngen, plabelt trening okilingar exor. Dide mis, i ism dodoheten. </p>
        </div></Fade>

        <div className="w-full" >
          <div className="getStarted_control flex justify-between mt-24 " >
            <Zoom><div className="getStarted_left !w-[60%]" data-aos="zoom-out" data-aos-duration="1500"  >
              <img alt="img1" src="assets/getStarted1.png" />
              <div className="getStarted_content" style={{ marginTop: `-130px` }}  >
                <p className="getStarted_content_title !text-3xl" >Registartion for Job-seeker;</p>
                <p className="getStarted_content_intro !text-lg" >Lörem ipsum astrofagisk sad, i dykädade. Monor syl respektive personlig därför att anening yra i dälogi. Pode spegisk</p>
                <button className="mt-24 !text-2xl !px-10 !py-3 !rounded-2xl !font-medium" >Register</button>
              </div>
            </div></Zoom>

            <Zoom><div className="getStarted_right !w-[60%]" data-aos="zoom-out" data-aos-duration="1500"  >
              <img alt="img1" src="assets/getStarted2.png" />
              <div className="getStarted_content" style={{ marginTop: `-100px` }} data-aos="zoom-out" data-aos-duration="1500" >
                <p className="getStarted_content_title !text-3xl" >Registartion for Job-seeker;</p>
                <p className="getStarted_content_intro !text-lg" >Lörem ipsum astrofagisk sad, i dykädade. Monor syl respektive personlig därför att anening yra i dälogi. Pode spegisk</p>
                <button className="mt-24 !text-2xl !px-10 !py-3 !rounded-2xl !font-medium" >Register</button>
              </div>
            </div>
            </Zoom>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default GetStarted