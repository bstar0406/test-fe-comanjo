import { Fragment } from "react"
import './different.css'
import { Fade } from 'react-awesome-reveal';

const Different = () => {
  return (
    <Fragment>
      <div className="different_section" >
        <div className="different_container flex  justify-between " >
          <div className="different_control flex " >
            <div className=" different_content_item different_content_item1" >

            </div>
            <div className="different_content_item different_content_item2" >
              <Fade direction='up' duration={1000}><p className="different_title" >Whats Different ?</p></Fade>
              <Fade direction='up' duration={1200}><p className="different_subtitle" >Dedicated People + Smart Tech</p></Fade>
              <Fade direction='up' duration={1300}><p className="different_intro"  >Using new technolgies we list onlyt the best job seeker and best companies. Thanks to the rating, companies hire only the skills they will be needed. Dont waste time and money shifting throuygh resumes and interviews they arent a </p></Fade>
            </div>
            <div className="different_content_item different_content_item3" >

            </div>

          </div>
          <div className="arrow3_img" >
            <img alt="img1" src="assets/arrow3.png" />
          </div>
        </div>

      </div>
    </Fragment>
  )
}
export default Different