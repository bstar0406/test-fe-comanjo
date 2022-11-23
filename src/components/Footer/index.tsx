import './footer.css'
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineMedium } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer_section z-100" >
      <div className="footer_top_section" >
        <div className="footer_top_container" >
          <div className="footer_top_control flex gap-36" >
            <div className="footer-find-job" >
              <p className="!text-3xl"> Stay up to the date with the latest job opportunities</p>
              <button className="!text-xl !py-3 !px-10">Find Jobs</button>
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
      <div className="footer_bottom_section" >
        <div className="footer_bottom_container" >
          <div className="footer_bottom_control flex justify-between " >
            <div className="footer_bottom_left" >
              <p>Copyright © 2021 My Job Matcher Inc.</p>
              <p>All rights reserved </p>
              <p className="mt-8" >My Job Matcher Inc. DBA Job.com, 108 Wild Basin Road Suite 250,</p>
              <p>TX 78746</p>
            </div>
            <div className="footer_bottom_right" >
              <div className="social_group flex items-center gap-10 " >
                <AiOutlineInstagram style={{fontSize: "40px"}} />
                <AiOutlineTwitter style={{fontSize: "40px"}} />
                <AiFillYoutube style={{fontSize: "40px"}} />
                <AiOutlineMedium style={{fontSize: "40px"}} />
                <FaFacebookF style={{fontSize: "40px"}} />
                <FaLinkedinIn style={{fontSize: "40px"}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer