import { Fragment } from "react"
import './technology.css'
import { Fade, Zoom } from 'react-awesome-reveal';

const Technology = () => {
  return (
    <Fragment>
      <div className="technology-section" >
        <div className="technology-control" >
          <div className="technology_left flex " >
            <div className="technology_left_content" >
              <Fade direction="up" duration={1000}>
                <p className="technology-left-title" data-aos="fade-up" data-aos-duration="2000" >
                  Our Technology
                </p>
              </Fade>
              <div className="technology-left-intro" data-aos="fade-up" data-aos-duration="2000" >
                <Fade direction="up" duration={1000}>
                  Our system is based and managed by invioable sm,art contracts. Moreopver , our integrated artificial intellgence checks databases and recongise any negative feedback from companies r job.
                </Fade>
              </div>
            </div>
          </div>
          <div className="technology_right_image" data-aos="zoom-out" data-aos-duration="2000" >
            <Zoom><img alt="img1" src="assets/technology.png" /></Zoom>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default Technology