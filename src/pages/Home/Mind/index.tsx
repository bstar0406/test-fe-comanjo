import "./mind.css"
import { Fade } from 'react-awesome-reveal';
import MindOne from "../../../assets/images/mind1.png"
import MindTwo from "../../../assets/images/mind2.png"
import MindThree from "../../../assets/images/mind3.png"
import Arrow from "../../../assets/images/arrow-icon.png"

const Mind = () => {
  return (
    <div className="mind-section" >
      <div className="mind_control"   >
        <Fade direction="up" duration={1000}>
          <img alt="mind" className="mind-image" src="assets/rectangle1.png" data-aos="fade-up" data-aos-duration="2000" />
          <p className="mind-title" data-aos="fade-up" data-aos-duration="2000">Keep in mind</p>
        </Fade>

        <div className="list-box">
          <div className="mind-lists" >
            <div className="mind-item" >
              <img alt="img1" src={MindOne}/>
              <div className="mind-content" >
                <p className="content-title">International working visa</p>
                <div className="content-button" >
                  <div>What you need to know</div>
                  <img alt="img1" src={Arrow} />
                </div>
              </div>
            </div>
          </div>

          <div className="mind-lists" >
            <div className="mind-item" >
              <img alt="img1" src={MindTwo}/>
              <div className="mind-content" >
                <p className="content-title">Your work contract</p>
                <div className="content-button" >
                  <div>What you need to know</div>
                  <img alt="img1" src={Arrow} />
                </div>
              </div>
            </div>
          </div>

          <div className="mind-lists" >
            <div className="mind-item" >
              <img alt="img1" src={MindThree}/>
              <div className="mind-content" >
                <p className="content-title">Technologies at the job</p>
                <div className="content-button" >
                  <div>What you need to know</div>
                  <img alt="img1" src={Arrow} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Mind