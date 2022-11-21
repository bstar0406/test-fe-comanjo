import { Fragment } from "react"
import './technology.css'
import { Fade, Zoom } from 'react-awesome-reveal';
import Developer from '../../../assets/images/developer.png'

const Technology = () => {
  return (
    <Fragment>
      <div className="technology_section" >
        <div className="technology_container" >
          <div className="technology_control flex items-center justify-between" >
            <div className="technology_left flex " >
              <img alt="img1" className="arrow4_img" src="assets/arrow4.png" />
              <div className="technology_left_content ml-16 " >
                <Fade direction="up" duration={1000}><p className="technology_left_title" data-aos="fade-up" data-aos-duration="2000" >
                  Easy to use
                </p></Fade>
                <div className="technology_left_intro" data-aos="fade-up" data-aos-duration="2000" >
                  <Fade direction="up" duration={1000}>New technologies such as artificial intelligence,smart contracts,blockchain that work behind the scene,allows us to offer a unique and secure service to the world,while maintaining user-friendly navigation as we know it.</Fade>
                </div>
              </div>
            </div>
            <div className="technology_right right-0" >
              <div className="technology_right_image" data-aos="zoom-out" data-aos-duration="2000" >
                <Zoom><img alt="img1" src={Developer} /></Zoom>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default Technology