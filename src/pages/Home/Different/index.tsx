import './different.css'
import { Fade } from 'react-awesome-reveal';

const Different = () => {
  return (
    <div className="different_section max-w-screen-xl m-auto mt-8 flex justify-between" >
      <div className="different-vertical" />
      <div className="different-content" >
        <Fade direction='up' duration={1000}><p className="different-content-title" >What is different?</p></Fade>
        <Fade direction='up' duration={1200}><p className="different-content-subtitle" >Dedicated People + Smart Tech</p></Fade>
        <Fade direction='up' duration={1300}>
          <p className="different-content-intro">
            Using new technolgies we list onlyt the best job seeker and best companies. Thanks to the rating, companies hire only the skills they will be needed. Dont waste time and money shifting throuygh resumes and interviews they arent a 
          </p></Fade>
      </div>
      <div className="different-bottom" />
    </div>
  )
}
export default Different