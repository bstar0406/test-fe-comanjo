import { Fragment } from "react"
import './technology.css'
import { Fade, Zoom } from 'react-awesome-reveal';

const Technology = () => {
  return (
    <Fragment>
      <div className="technology_section" >
        <div className="technology_container" >
          <div className="technology_control flex items-center justify-between" >
            <div className="technology_left flex " >
              <img alt="img1" className="!h-[200px]" src="assets/arrow4.png" />
              <div className="technology_left_content ml-16" >
                <Fade direction="up" duration={1000}><p className="technology_left_title !text-4xl whitespace-nowrap mb-5" data-aos="fade-up" data-aos-duration="2000" >
                  Our Technology
                </p></Fade>
                <div className="technology_left_intro !text-3xl" data-aos="fade-up" data-aos-duration="2000" >
                  <Fade direction="up" duration={1000}>Our system is based and managed by invioable sm,art contracts. Moreopver , our integrated artificial intellgence checks databases and recongise any negative feedback from companies r job.</Fade>
                </div>
              </div>
            </div>
            <div className="technology_right right-0" >
              <div className="technology_right_image" data-aos="zoom-out" data-aos-duration="2000" >
                <Zoom><img alt="img1" src="assets/technology.png" /></Zoom>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default Technology