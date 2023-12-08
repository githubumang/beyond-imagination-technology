import React from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  return (
    <nav className='navbar'>
          <Link to={"/"} className='title'>
            <div className='logoName'>BEYOND<br/>IMAGINATION<br/>TECHNOLOGIES</div>
            <img src={logo} alt="" />
            </Link>
          <ul>
            <li className='userName'>
              
              {isAuthenticated&&(user.nickname)}
            </li>
            <li className='button'>
              {isAuthenticated?
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>LOGOUT</button>:
                <button onClick={() => loginWithRedirect()}>LOGIN</button>
              }
            </li>
          </ul>
    </nav>
  )
}

export default Navbar