import { Outlet } from "react-router-dom";
import "./fullLayout.css"

const FullLayout = () =>{
    return (
        <div >
            <Outlet />
            <div className="fullLayoutFooter bg-[#111D5E] flex items-center justify-center text-[#ffffff]" style={{height: "10vh"}}>
                © 2015 - 2022 Company & Job® Global Inc. • Privacy Policy
            </div>
        </div>
    )
}

export default FullLayout;