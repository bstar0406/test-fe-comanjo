import "./mind.css"
import { Fade } from 'react-awesome-reveal';

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
              <img alt="img1" src="assets/mind1.png"/>
              <div className="mind-content" >
                <p className="content-title">International working visa</p>
                <div className="content-button" >
                  <div>What you need to know</div>
                  <img alt="img1" src="assets/arrow-icon.png" />
                </div>
              </div>
            </div>
          </div>

          <div className="mind-lists" >
            <div className="mind-item" >
              <img alt="img1" src="assets/mind2.png"/>
              <div className="mind-content" >
                <p className="content-title">Your work contract</p>
                <div className="content-button" >
                  <div>What you need to know</div>
                  <img alt="img1" src="assets/arrow-icon.png" />
                </div>
              </div>
            </div>
          </div>

          <div className="mind-lists" >
            <div className="mind-item" >
              <img alt="img1" src="assets/mind3.png"/>
              <div className="mind-content" >
                <p className="content-title">Technologies so persons at the job</p>
                <div className="content-button" >
                  <div>What you need to know</div>
                  <img alt="img1" src="assets/arrow-icon.png" />
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