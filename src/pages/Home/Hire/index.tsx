import { Fragment } from "react"
import './hire.css'
import { Fade, Zoom } from 'react-awesome-reveal';

const Hire = () => {
  return (
    <Fragment>
      <div className="hire_section" >
        <div className="hire_container" >
          <div className="hire_control" >
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

            <div className="hire_right flex" >
              <Fade direction="up" duration={1000}><div className="hire_right_control" data-aos="fade-up" data-aos-duration="1000"  >
                <p className="hire_right_title !text-4xl whitespace-nowrap mb-5" >Hire with guarantee</p>
                <div className="hire_right_content !text-3xl" >
                  Rating is not enough for us. Our service also foresee a depsoit from both sides, job-seeker and companies, that guarantee the honesty and seriousness of the published data
                </div>
              </div>
              </Fade>
              <img alt="img1" src='assets/arrow3.png' className="!h-[150px] !w-[100px]" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default Hire