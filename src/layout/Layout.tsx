
import { NavLink , Outlet} from 'react-router-dom'
import "./Layout.css"
function Layout() {
  return (
    <div>
      {/* A "Layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav className="navbar-container">
        <ul className="navList">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/booking">Booking</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
          
        </ul>
      </nav>

     
      <Outlet />
    </div>
  )
}

export default Layout