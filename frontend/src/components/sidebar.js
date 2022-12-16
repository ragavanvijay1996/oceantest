import React, {useState} from "react"
import { Link } from "react-router-dom"

export const Sidebar = () =>{
  
   
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