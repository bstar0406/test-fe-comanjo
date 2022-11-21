import { Fragment } from "react";
import { Link } from 'react-router-dom'
import './Header.css'
import SideBar from "./sidebar";
import Logo from "../../assets/images/colored-logo.png";
import { useAppSelector, useAppDispatch} from '../../redux/hooks';
import { IUser } from "../../interfaces/interface";
import { RootState } from "../../redux/store";
import { userAction } from "../../redux/user/userSlice";
const Header = () => {
  const user = useAppSelector((state: RootState)=> state.user)
  const dispatch = useAppDispatch();
  const logout = () =>{
    console.log(user)
    let temp: IUser = {
      type: null,
      seeker: null,
      company: null
  };
  dispatch(userAction.setUser(temp))
  }
  return (
    <Fragment>
      <div className="header_section" >
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <div className="header_container" >
          <div className="header_control flex items-center justify-between  !py-3" >
            <div className="header_logo" >
              <img src={Logo} alt="logo" width="250px" />
            </div>
            <div className="header_lists flex items-center justify-between text-lg" >
              <div className="mr-5  text-white hover:text-yellow-500">
                <Link to={'/'} className="no-underline">
                  Home
                </Link>
              </div>
              <div className="mr-5  text-orange-500 hover:text-yellow-500">
                <Link to={'/jobboard'} className="no-underline">
                  JobBoard
                </Link>
              </div>
              <div className="mr-5  text-white hover:text-yellow-500">
                <Link to={'/benefits'} className="no-underline">
                  Benefits
                </Link>
              </div>
              <div className="mr-5  text-white hover:text-yellow-500">
                <Link to={'/prices'} className="no-underline">
                  Prices
                </Link>
              </div>
              <div className="mr-5  text-white hover:text-yellow-500">
                <Link to={'/technology'} className="no-underline">
                  Technology
                </Link>
              </div>
              <div className="mr-5  text-white hover:text-yellow-500">
                <Link to={'/contact'} className="no-underline">
                  Contact
                </Link>
              </div>
              {user.type ==='company' && <div className="mr-5  text-white hover:text-yellow-500">
                <Link to={'/jobcontract'} className="no-underline">
                  JobContract
                </Link>
              </div>}
              {user.type === null &&<div className="mr-5  text-white hover:text-yellow-500">
                <Link to={'/auth/signin'} className="no-underline">
                  SignIn
                </Link>
              </div>}
              { user.type !== null&&
                <div className="flex items-center text-orange-500 text-xl cursor-pointer">
                  {user.type==="seeker" &&<Link to={'/seeker-profile'} className="no-underline whitespace-nowrap flex">
                     <div>{user.seeker?.firstname}</div>
                  </Link>}
                  {user.type==="company" && 
                  <Link to={'/company-profile'} className="no-underline whitespace-nowrap flex">
                    <div>{user.company?.name}</div>
                  </Link>}
                </div>
              }
              { user.type !== null&&
                <div className="flex items-center text-gray-300 hover:text-white text-lg cursor-pointer ml-4" onClick={()=>logout()}>
                  Logout
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default Header