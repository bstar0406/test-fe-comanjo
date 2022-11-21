import { Fragment, useEffect } from "react"
import Aos from "aos";
import "aos/dist/aos.css";
import './Home.css'

import Banner from "./Banner"
import Different from "./Different"
import Works from "./Works"
import Technology from "./Technology"
import Hire from "./Hire"
import GetStarted from "./GetStarted"

const Benefit = () => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Fragment>
      <div className="arrow1_img" >
        <img src="assets/arrow1.png" alt="arrow" />
      </div>
      <Banner />
      <Different />
      <Works />
      <Technology />
      <Hire />
      <GetStarted />
    </Fragment>
  )
}
export default Benefit