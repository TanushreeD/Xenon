import React, { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { UserContext } from "./UseContext"

const Header = () => {
  const navigate = useNavigate();

  const { loggedIn, setLoggedIn, currentUser } = useContext(UserContext);
  const logout = () => {
    sessionStorage.removeItem("user")
    setLoggedIn(false)
    navigate('/login1');
  }
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-white" to='/'><i class="fa-solid fa-graduation-cap"></i>EDUREAD</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">


              
  
              <li className="nav-item">
                <NavLink className="nav-link active text-white" to="/signUp">
                  SIGN UP
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active text-white" to="/login">
                  LOGIN
                </NavLink>
              </li>
              {!loggedIn ? (
                <li className="nav-item">
                  <NavLink className="nav-link active text-white" to="/contact">
                    CONTACT US
                  </NavLink>
                </li>
              )
                :
                <button className="btn btn-primary" onClick={logout}>Logout</button>
              }
            </ul>

          </div>
        </div>
      </nav>

    </div>
  )
}

export default Header;