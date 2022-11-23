import './getStarted.scss'
import { Fade, Zoom } from 'react-awesome-reveal';
import RightImage from "../../../assets/images/getStarted2.png"
import LeftImage from "../../../assets/images/getStarted1.png"

const GetStarted = () => {
  return (
    <div className="getStarted-section" >
      <Fade direction="up" duration={1000}>
        <div className="getStarted-title-group" data-aos="fade-up" data-aos-duration="2000"  >
          <p className="getStarted-title" >Get Started With comanjo.com</p>
          <p className="getStarted-intro"  >Lörem ipsum astrofagisk sad, i dykädade. Monor syl respektive personlig därför att anening yra i dälogi. Pode spegisk. Div nityngen, plabelt trening okilingar exor. Dide mis, i ism dodoheten. </p>
        </div>
      </Fade>

      <div className="w-full getStared-register" >
        <Zoom>
          <div className="getStarted-left" data-aos="zoom-out" data-aos-duration="1500"  >
            <img alt="img1" src={LeftImage} />
            <div className="getStarted-content">
              <p className="getStarted-content-title" >Registartion for Job-seeker;</p>
              <p className="getStarted-content-intro " >Lörem ipsum astrofagisk sad, i dykädade. Monor syl respektive personlig därför att anening yra i dälogi. Pode spegisk</p>

              <button className="register-button" >Register</button>
            </div>
          </div>
        </Zoom>
        <Zoom>
          <div className="getStarted-left" data-aos="zoom-out" data-aos-duration="1500"  >
            <img alt="img1" src={RightImage} />
            <div className="getStarted-content">
              <p className="getStarted-content-title" >Registartion for Job-seeker;</p>
              <p className="getStarted-content-intro " >Lörem ipsum astrofagisk sad, i dykädade. Monor syl respektive personlig därför att anening yra i dälogi. Pode spegisk</p>

              <div className="register-button" >Register</div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  )
}
export default GetStarted