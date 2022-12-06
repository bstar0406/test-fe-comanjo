import './footer.css'
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineMedium } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer_section  z-100" >
      <div className="footer_top_section max-w-screen-xl m-auto" >
        <div className="footer_top_container" >
          <div className="footer_top_control flex justify-between" >
            <div className="footer-find-job" >
              <p className="top-description !text-3xl"> Stay up to the date with the latest job opportunities</p>
              <button className="top-button !text-xl">Find Jobs</button>
            </div>
            <div className="footer-top-item flex" >
              <h4 className="!text-2xl">Explore</h4>
              <div className="!text-lg">Find jobs</div>
              <div className="!text-lg">Resources</div>
              <div className="!text-lg">Sign in</div>
            </div>
            <div className="footer-top-item flex" >
              <h4 className="!text-2xl">Legal</h4>
              <div className="!text-lg">Privacy & Cookies</div>
              <div className="!text-lg">Terms & Conditions</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom_section max-w-screen-xl m-auto" >
        <div className="footer_bottom_container" >
          <div className="footer_bottom_control flex justify-between " >
            <div className="footer_bottom_left" >
              <div>
                <p>Copyright © 2021 My Job Matcher Inc.</p>
                <p>All rights reserved </p>
              </div>
              <div>
                <p className=" left-bottom mt-8" >My Job Matcher Inc. DBA Job.com, 108 Wild Basin Road Suite 250,</p>
                <p>TX 78746</p>
              </div>
            </div>
            <div className="footer_bottom_right" >
              <div className="social_group flex items-center gap-10 " >
                <AiOutlineInstagram style={{fontSize: "30px"}} />
                <AiOutlineTwitter style={{fontSize: "30px"}} />
                <AiFillYoutube style={{fontSize: "30px"}} />
                <AiOutlineMedium style={{fontSize: "30px"}} />
                <FaFacebookF style={{fontSize: "30px"}} />
                <FaLinkedinIn style={{fontSize: "30px"}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer