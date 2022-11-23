import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom'
const SideBar = (props: any) => {
  return (
    <Menu {...props}>
      <div className="menu-item" >
        <Link to={'/'} className="no-underline text-white text-xl">
          Home
        </Link>
      </div>
      <div className="menu-item" >
        <Link to={'/job'} className="no-underline text-white text-xl">
          JobBoard
        </Link>
      </div>
      <div className="menu-item" >
        <Link to={'/benefits'} className="no-underline text-white text-xl">
          Benefits
        </Link>
      </div>
      <div className="menu-item" >
        <Link to={'/prices'} className="no-underline text-white text-xl">
          Prices
        </Link>
      </div>
      <div className="menu-item" >
        <Link to={'/technology'} className="no-underline text-white text-xl">
          Technology
        </Link>
      </div>
      <div className="menu-item" >
        <Link to={'/contact'} className="no-underline text-white text-xl">
          Contact
        </Link>
      </div>
      <div className="menu-item" >
        <Link to={'/auth/signin'} className="no-underline text-white text-xl">
          SignIn
        </Link>
      </div>
    </Menu>
  )
}
export default SideBar