import React, {useState} from "react"
import { Link } from "react-router-dom"

export const Sidebar = ({departments, permittedRole}) =>{
    const [showMenu, setShowMenu] = useState(false)
    const [showMenuId, setShowMenuId] = useState('')
   
    const handleMenu = (e, _id) => {
      e.preventDefault()
        setShowMenuId(_id)
        setShowMenu(!showMenu)
    }
   
    return(
        <div className="sidebar">
            <div className="logo">
                HOLIDAY
            </div>
            <ul>
                <li>
                    <a href="/" className="active">
                        <i className="bi bi-speedometer2"></i>
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="/students">
                        <i className="bi bi-speedometer2"></i>
                       Students
                    </a>
                </li>
                <li>
                    <a href="/staffs">
                        <i className="bi bi-speedometer2"></i>
                        Staffs
                    </a>
                </li>
                <li>
                    <a href="/courses">
                        <i className="bi bi-speedometer2"></i>
                        Courses
                    </a>
                </li>
                <li>
                    <Link to="/" >
                        <i className="bi bi-gear"></i>
                      Settings
                    </Link>
                </li>
            </ul>
        </div>
    )
}