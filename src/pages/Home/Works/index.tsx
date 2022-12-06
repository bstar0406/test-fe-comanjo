import './works.css'
import { Fade, Zoom } from 'react-awesome-reveal';
import RoundedWoman from "../../../assets/images/developer_w.png";
import Location from "../../../assets/images/location.png"
import { ImCross } from "react-icons/im";

const Works = () => {
  return (
    <div className="home_work_section max-w-screen-xl m-auto flex items-center justify-between" >
      <Zoom className='works-left w-1/4 ml-10'>
        <div className='flex flex-col justify-center items-center'  data-aos="zoom-out" data-aos-duration="1500" >
          <img alt="developer-woman" className="w-52" src={RoundedWoman} />
          <div className="works-position" >
            <div className='flex flex-col items-center justify-center  mt-28 gap-10'>
              <p className='text-[#111D5E] font-semibold font-xl'>Jennie Edward</p>
              <div className=" works-position-detail" >
                <img alt="img1" className="mr-2" src={Location} style={{ width: `47px` }} />
                Scotland, GA2
              </div>
            </div>

            <div className="works-left-content1  flex items-center gap-6" data-aos="fade-up" data-aos-duration="1000" >
              QA 
              <ImCross />
            </div>
            <div className="works-left-content2  flex items-center gap-6" data-aos="fade-up" data-aos-duration="1500" >
              Process Control 
              <ImCross />
            </div>
            <div className="works-left-content3  flex items-center gap-6" data-aos="fade-up" data-aos-duration="1000">
              Also certified
              <ImCross />
            </div>
            <div className="works-left-content4  flex items-center gap-6" data-aos="fade-up" data-aos-duration="1500" >
              Case analysis
              <ImCross />
            </div>
          </div>
        </div>
      </Zoom>
      <div className="works-right" >
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
  )
}
export default Works