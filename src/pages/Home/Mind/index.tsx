import { Fragment } from "react"
import "./mind.css"
import { Fade } from 'react-awesome-reveal';

const Mind = () => {
  return (
    <Fragment>
      <div className="mind_section" >
        <div className="mind_container" >

          <div className="mind_control"   >
            <Fade direction="up" duration={1000}><img alt="img1" className="mind_image !h-[100px]" src="assets/rectangle1.png" data-aos="fade-up" data-aos-duration="2000" />
              <p className="mind_title !text-4xl !mt-0" data-aos="fade-up" data-aos-duration="2000">Keep in mind</p></Fade>

            <div className="mind_lists" >

              <div className="mind_item" >
                <img alt="img1" src="assets/mind1.png" className="!w-[80%]" />
                <div className="mind_content !w-[95%] !h-[150px] !rounded-3xl" >
                  <p className="!text-xl">International working visa</p>
                  <div className="flex justify-between items-center" >
                  <div className="!text-lg">What you need to know</div>
                    <div><img alt="img1" src="assets/arrow-icon.png" className="!w-[20px] !mr-3" /></div>
                  </div>
                </div>
              </div>

              <div className="mind_item" >
                <img alt="img1" src="assets/mind2.png" className="!w-[80%]" />
                <div className="mind_content !w-[95%] !h-[150px] !rounded-3xl" >
                  <p className="!text-xl">Your work contract</p>
                  <div className="flex justify-between items-center" >
                  <div className="!text-lg">What you need to know</div>
                    <div><img alt="img1" src="assets/arrow-icon.png" className="!w-[20px] !mr-3" /></div>
                  </div>
                </div>
              </div>

              <div className="mind_item" >
                <img alt="img1" src="assets/mind3.png" className="!w-[80%]" />
                <div className="mind_content !w-[95%] !h-[150px] !rounded-3xl" >
                  <p className="!text-xl">Technologies so balue persons at the job</p>
                  <div className="flex justify-between items-center" >
                    <div className="!text-lg">What you need to know</div>
                    <div><img alt="img1" src="assets/arrow-icon.png" className="!w-[20px] !mr-3" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mind_last_img" >
          <img alt="img1" src="assets/mind_last.png" className="!h-[150px]" />
        </div>
      </div>
    </Fragment>
  )
}
export default Mind