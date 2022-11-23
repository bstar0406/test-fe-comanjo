import './hire.css'
import { Fade, Zoom } from 'react-awesome-reveal';
import RoundedWoman from "../../../assets/images/developer_w.png";
import Delete from "../../../assets/images/delete.png"
import Location from "../../../assets/images/location.png"

const Hire = () => {
  return (
    <div className="hire-section" >
    <div className="hire-control " >
      <Zoom>
        <div data-aos="zoom-out" data-aos-duration="1500" >
          <img alt="developer-woman" className="hire-left-img" src={RoundedWoman} />
          <div className="hire-position" >
            <p>Jennie Edward</p>
            <div className=" hire-position-detail" >
              <img alt="img1" className="mr-2" src={Location} style={{ width: `47px` }} />
              Scotland, GA2
            </div>

            <div className="hire-left-content1  flex items-center" data-aos="fade-up" data-aos-duration="1000" >
              QA 
              <img alt="img1" src={Delete} className="ml-4 mt-0.5" style={{ width: `15px` }} />
            </div>
            <div className="hire-left-content2  flex items-center" data-aos="fade-up" data-aos-duration="1500" >
              Process Control 
              <img alt="img1" src={Delete} className="ml-4 mt-0.5" style={{ width: `15px` }} />
            </div>
            <div className="hire-left-content3  flex items-center" data-aos="fade-up" data-aos-duration="1000">
              Also certified
              <img alt="img1" src={Delete} className="ml-4 mt-0.5" style={{ width: `15px` }} />
            </div>
            <div className="hire-left-content4  flex items-center" data-aos="fade-up" data-aos-duration="1500" >
              Case analysis
              <img alt="img1" src={Delete} className="ml-4 mt-0.5" style={{ width: `15px` }} />
            </div>
          </div>
        </div>
      </Zoom>
      <div className="hire_right" >
        <div className="hire_right-control" data-aos="fade-up" data-aos-duration="1000">
          <Fade direction="up" duration={1000}>
            <p className="hire-right-title"  >Hire with guarantee</p>
          </Fade>
          <div className="hire-right-content" >
            <Fade direction="up" duration={1000}>Rating is not enough for us. Our service also foresee a depsoit from both sides, job-seeker and companies, that guarantee the honesty and seriousness of the published data</Fade>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Hire