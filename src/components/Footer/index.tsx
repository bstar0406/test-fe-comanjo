import { Fragment } from "react"
import './footer.css'

const Footer = () => {
  return (
    <Fragment>
      <div className="footer_section z-100" >
        <div className="footer_top_section" >
          <div className="footer_top_container" >
            <div className="footer_top_control flex gap-10" >
              <div className="footer_find_job" >
                <p className="!text-3xl"> Stay up to the date with the latest job opportunities</p>
                <button className="!text-xl !py-3 !px-10">FIND JOBS</button>
              </div>
              <div className="footer_top_item" >
                <li><h4 className="!text-xl">Explore</h4></li>
                <li><div className="!text-lg">Find jobs</div></li>
                <li><div className="!text-lg">Resources</div></li>
                <li><div className="!text-lg">Sign in</div></li>
              </div>
              <div className="footer_top_item" >
                <li><h4 className="!text-xl">Legal</h4></li>
                <li><div className="!text-lg">Privacy & Cookies</div></li>
                <li><div className="!text-lg">Terms & Conditions</div></li>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom_section" >
          <div className="footer_bottom_container" >
            <div className="footer_bottom_control flex items-center justify-between " >
              <div className="footer_bottom_left" >
                <p>Copyright © 2021 My Job Matcher Inc.</p>
                <p>All rights reserved </p>
                <p className="mt-8" >My Job Matcher Inc. DBA Job.com, 108 Wild Basin Road Suite 250,</p>
                <p>TX 78746</p>
              </div>
              <div className="footer_bottom_right" >
                <div className="social_group flex items-center gap-10 " >
                  <img alt="img1" src="assets/instagram.png" style={{ width: `34px` }} />
                  <img alt="img1" src="assets/twitter.png" style={{ width: `34px` }} />
                  <img alt="img1" src="assets/youtubu.png" style={{ width: `34px` }} />
                  <img alt="img1" src="assets/medium.png" style={{ width: `34px` }} />
                  <img alt="img1" src="assets/facebook.png" style={{ width: `34px` }} />
                  <img alt="img1" src="assets/linkdin.png" style={{ width: `34px` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default Footer