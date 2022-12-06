import { useEffect } from "react"
import Aos from "aos";
import "aos/dist/aos.css";
import './home.css'

import Banner from "./Banner"
import Different from "./Different"
import Works from "./Works"
import Technology from "./Technology"
import Hire from "./Hire"
import GetStarted from "./GetStarted"
import Mind from "./Mind"

const Home = () => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="overflow-hidden">
      <div className="arrow1_img" >
        <img src="assets/arrow1.png" alt="arrow" className="!h-[130px]" />
      </div>
      <Banner />
      <Different />
      <Works />
      <Technology />
      <Hire />
      <GetStarted />
      <Mind /> 
    </div>
  )
}
export default Home