import { Fragment } from "react";
import './getStarted.css'
import { Fade } from 'react-awesome-reveal';

const GetStarted = () => {
  return (
    <Fragment>
      <div className="getStarted_section" >
        <Fade direction="up" duration={1000}><div className="getStarted_title_group" data-aos="fade-up" data-aos-duration="2000"  >
          <p className="getStarted_title" >Why should you apply ?</p>
          <p className="different_intro text-center "  >The concept is innovative and guarantees<br /> multiple advantages. </p>
        </div></Fade>
        <Fade direction="up" duration={1200}>
        <div className="w-full mb-20" >
          <div className="flex items-center px-3 lg:px-20 mb-3" >
            <div className="block w-[35px] h-[35px] bg-[#00C4FF] rounded-full"></div>
            <div className="text ml-5">No longer advertisments for the companies and search ads</div>
          </div>
          <div className="flex items-center px-3 lg:px-20 mb-3" >
            <div className="block w-[35px] h-[35px] bg-[#00C4FF] rounded-full"></div>
            <div className="text ml-5">No longer writing and adjusting the CV’s</div>
          </div>
          <div className="flex items-center px-3 lg:px-20 mb-3" >
            <div className="block w-[35px] h-[35px] bg-[#00C4FF] rounded-full"></div>
            <div className="text ml-5">No longer wasting time for checking if the written skills in the CV are true</div>
          </div>
          <div className="flex items-center px-3 lg:px-20 mb-3" >
            <div className="block w-[35px] h-[35px] bg-[#00C4FF] rounded-full"></div>
            <div className="text ml-5">No longer interviews</div>
          </div>
          <div className="flex items-center px-3 lg:px-20 mb-3" >
            <div className="block w-[35px] h-[35px] bg-[#00C4FF] rounded-full"></div>
            <div className="text ml-5">No longer wasting time and money</div>
          </div>
          <div className="flex items-center px-3 lg:px-20 mb-3" >
            <div className="block w-[35px] h-[35px] bg-[#00C4FF] rounded-full"></div>
            <div className="text ml-5">No longer job searching, contacting companies, sending CV to everyone</div>
          </div>
          <div className="flex items-center px-3 lg:px-20 mb-3" >
            <div className="block w-[35px] h-[35px] bg-[#00C4FF] rounded-full"></div>
            <div className="text ml-5">No longer wasting time for traveling to many interviews</div>
          </div>
          <div className="flex items-center px-3 lg:px-20 mb-3" >
            <div className="block w-[35px] h-[35px] bg-[#00C4FF] rounded-full"></div>
            <div className="text ml-5">No longer discrimination in the company(we hire beautiful girls)</div>
          </div>
        </div>
        </Fade>
      </div>
    </Fragment>
  )
}
export default GetStarted