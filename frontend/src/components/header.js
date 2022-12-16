import React, {useEffect, useState} from "react"
import axios from "axios"
import { Link } from "react-router-dom"
export const Header = ({isLoggedOut, user}) => {
    const [showMenu, setShowMenu]= useState(false)
   
   
  const logout = (e) => {
    e.preventDefault()
    try{
     const response = axios.get('/api/v1/logout')
     console.log(response)
     isLoggedOut()
    } catch (err) {
        if (err.response.status === 500) {
            console.log('There was a problem with the server')
        } else {
            console.log(err.response.data.msg)
        }
    }
  }

  const Profile = () => {
    return(
        <div className="profile">
            <h5 className="text-center mb-0">{user.firstName} {user.lastName}</h5>
            <p className="text-center m-0 small text-secondary">{user.role}</p>
            <ul className="p-0">
                <li>
                    
                    <Link to='/profile' className="d-flex gap-3 align-items-center"><i className="bi bi-person"></i>Profile</Link>
                </li>
                <li>
                    <a href="/" className="d-flex gap-3 align-items-center"><i className="bi bi-gear"></i>Settings</a>
                </li>
                <li>
                    
                    <a href="/" onClick={logout} className="d-flex gap-3 align-items-center"><i className="bi bi-box-arrow-in-right"></i>Logout</a>
                </li>
            </ul>
        </div>
    )
  }
  const showMenuBar =(e) => {
    e.preventDefault()
    setShowMenu(!showMenu)
  }
   
    return(
        <div className="header d-flex align-items-center justify-content-between">
            <div className="d-flex header-left">
                <i className="fa-solid fa-magnifying-glass p-1"></i>
                <input className="" placeholder="Search..." />
            </div>
            <div className="header-right">
                <ul className="d-flex list-unstyled align-items-center p-0 m-0">
                    <li>
                        <a href="/">
                            <i className="fa-solid fa-bell"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i className="fa-solid fa-list-check"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i className="fa-solid fa-message"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="user-circle text-decoration-none" onClick={showMenuBar}>
                            {/* <i className="fa-solid fa-user"></i> */}
                            {user.firstName && user.firstName.slice(0, 2)}
                        </a>
                    {   showMenu &&  <Profile />}
                    </li>
                   
                    {/* <li className="text-white">
                      {user && user.name}
                    </li> */}
                    {/* <li>
                        <button >
                            <i class="bi bi-box-arrow-in-right"></i>
                        </button>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}