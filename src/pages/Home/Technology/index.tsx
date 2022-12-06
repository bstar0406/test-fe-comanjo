import './technology.css'
import { Fade, Zoom } from 'react-awesome-reveal';
import HomeTechnology from "../../../assets/images/getStarted1.png"

const Technology = () => {
  return (
    <div className="technology-section max-w-screen-xl m-auto flex items-center justify-between mt-16" >
      <div className="technology-left flex flex-col gap-3 " >
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

      <Zoom className='technology-right w-1/3'>
        <img alt="img1" className='home-technology-image full-width' src={HomeTechnology} />
      </Zoom>
    </div>
  )
}
export default Technology