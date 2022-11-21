import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom'
const SideBar = (props: any) => {
  return (
    <Menu {...props}>
      <div className="menu-item" >
        <Link to={'/'} className="no-underline">
          Home
        </Link>
      </div>
      <div className="menu-item" >
        <Link to={'/job'} className="no-underline">
          JobBoard
        </Link>
      </div>
      <div className="menu-item" >
        <Link to={'/benefits'} className="no-underline">
          Benefits
        </Link>
      </div>
      <div className="menu-item" >
        <Link to={'/prices'} className="no-underline">
          Prices
        </Link>
      </div>
      <div className="menu-item" >
        <Link to={'/technology'} className="no-underline">
          Technology
        </Link>
      </div>
      <div className="menu-item" >
        <Link to={'/contact'} className="no-underline">
          Contact
        </Link>
      </div>
      <div className="menu-item" >
        <Link to={'/auth/signin'} className="no-underline">
          SignIn
        </Link>
      </div>
    </Menu>
  )
}
export default SideBar