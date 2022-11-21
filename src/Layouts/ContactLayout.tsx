import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
const ContactLayout = () =>{
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default ContactLayout;