import { Fragment } from "react"
import './works.css'
import { Fade, Zoom } from 'react-awesome-reveal';

const Works = () => {
  return (
    <Fragment>
      <div className="works_section" >
        <div className="works_container" >
          <div className="works_control " >

            <Zoom><div className="works_left" data-aos="zoom-out" data-aos-duration="1500" >
              <img alt="img1" className="works_left_img" src="assets/developer_w.png" />
              <div className="works_left_control" >
                <p>Jennie Edward</p>
                <div className=" works_left_content flex justify-center items-center mt-4 " >
                  <img alt="img1" className="mr-2" src="assets/location.png " style={{ width: `47px` }} />
                  Scotland, GA2
                </div>

                <div className="works_left_content1  flex items-center" data-aos="fade-up" data-aos-duration="1000" >
                  QA <img alt="img1" src="assets/delete.png" className="ml-4 mt-0.5" style={{ width: `15px` }} />
                </div>
                <div className="works_left_content2  flex items-center" data-aos="fade-up" data-aos-duration="1500" >
                  Process Control <img alt="img1" src="assets/delete.png" className="ml-4 mt-0.5" style={{ width: `15px` }} />
                </div>
                <div className="works_left_content3  flex items-center" data-aos="fade-up" data-aos-duration="1000">
                  Also certified <img alt="img1" src="assets/delete.png" className="ml-4 mt-0.5" style={{ width: `15px` }} />
                </div>
                <div className="works_left_content4  flex items-center" data-aos="fade-up" data-aos-duration="1500" >
                  Case analysis <img alt="img1" src="assets/delete.png" className="ml-4 mt-0.5" style={{ width: `15px` }} />
                </div>

              </div>
            </div></Zoom>

            <div className="works_right" >
              <div className="works_right-control" data-aos="fade-up" data-aos-duration="1000">
                <Fade direction="up" duration={1000}><p className="works_right_title"  >How it works ?</p></Fade>
                <div className="works_right_content !text-3xl" >
                  <Fade direction="up" duration={1000}>Find the company and match with the required skills. Pay the deposit and download directly the work contract. Start working at the indicated date</Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default Works