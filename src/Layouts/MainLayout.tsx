import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () =>{
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout;