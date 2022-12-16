import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
export const Header = () => {
    return (
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
                        <a href="/" className="user-circle text-decoration-none" >
                           
                        </a>
                       
                    </li>

                
                </ul>
            </div>
        </div>
    )
}