import './works.css'
import { Fade, Zoom } from 'react-awesome-reveal';

const Works = () => {
  return (
    <div className="works-section" >
      <div className="works-control " >
        <Zoom>
          <div data-aos="zoom-out" data-aos-duration="1500" >
            <img alt="developer-woman" className="works-left-img" src="assets/developer_w.png" />
            <div className="works-position" >
              <p>Jennie Edward</p>
              <div className=" works-position-detail" >
                <img alt="img1" className="mr-2" src="assets/location.png " style={{ width: `47px` }} />
                Scotland, GA2
              </div>

              <div className="works-left-content1  flex items-center" data-aos="fade-up" data-aos-duration="1000" >
                QA 
                <img alt="img1" src="assets/delete.png" className="ml-4 mt-0.5" style={{ width: `15px` }} />
              </div>
              <div className="works-left-content2  flex items-center" data-aos="fade-up" data-aos-duration="1500" >
                Process Control 
                <img alt="img1" src="assets/delete.png" className="ml-4 mt-0.5" style={{ width: `15px` }} />
              </div>
              <div className="works-left-content3  flex items-center" data-aos="fade-up" data-aos-duration="1000">
                Also certified
                <img alt="img1" src="assets/delete.png" className="ml-4 mt-0.5" style={{ width: `15px` }} />
              </div>
              <div className="works-left-content4  flex items-center" data-aos="fade-up" data-aos-duration="1500" >
                Case analysis
                <img alt="img1" src="assets/delete.png" className="ml-4 mt-0.5" style={{ width: `15px` }} />
              </div>
            </div>
          </div>
        </Zoom>
        <div className="works_right" >
          <div className="works_right-control" data-aos="fade-up" data-aos-duration="1000">
            <Fade direction="up" duration={1000}>
              <p className="works-right-title"  >How it works ?</p>
            </Fade>
            <div className="works-right-content" >
              <Fade direction="up" duration={1000}>Find the company and match with the required skills. Pay the deposit and download directly the work contract. Start working at the indicated date</Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Works