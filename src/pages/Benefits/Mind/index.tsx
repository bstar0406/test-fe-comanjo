import { Fragment } from "react"
import "./mind.css"
import { Fade } from 'react-awesome-reveal';

const Mind = () => {
  return (
    <Fragment>
      <div className="mind_section" >
        <div className="mind_container" >

          <div className="mind_control"   >
            <Fade direction="up" duration={1000}><img alt="img1" className="mind_image" src="assets/rectangle1.png" data-aos="fade-up" data-aos-duration="2000" />
              <p className="mind_title" data-aos="fade-up" data-aos-duration="2000">Keep in mind</p></Fade>

            <div className="mind_lists" >

              <div className="mind_item" >
                <img alt="img1" src="assets/mind1.png" />
                <div className="mind_content" >
                  <p>International working visa</p>
                  <div className="flex justify-between items-center" >
                    What you need to know
                    <img alt="img1" src="assets/arrow-icon.png" />
                  </div>
                </div>
              </div>

              <div className="mind_item" >
                <img alt="img1" src="assets/mind2.png" />
                <div className="mind_content" >
                  <p>Your work contract</p>
                  <div className="flex justify-between items-center" >
                    What you need to know
                    <img alt="img1" src="assets/arrow-icon.png" />
                  </div>
                </div>
              </div>

              <div className="mind_item" >
                <img alt="img1" src="assets/mind3.png" />
                <div className="mind_content" >
                  <p>Technologies so balue persons at the job</p>
                  <div className="flex justify-between items-center" >
                    What you need to know
                    <img alt="img1" src="assets/arrow-icon.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mind_last_img" >
          <img alt="img1" src="assets/mind_last.png" />
        </div>
      </div>
    </Fragment>
  )
}
export default Mind