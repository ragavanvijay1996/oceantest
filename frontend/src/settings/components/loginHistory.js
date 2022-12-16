import React from "react"
import { Link } from "react-router-dom"

export const LoginHistory = () => {

 

    return (
        <>
            <div className="main-container">
                <div className="d-flex gap-2 mb-2">
                    <Link to="/" className="btn btn-sm btn-primary ">Back</Link>
                </div>
                <table className="table table-sm small table-striped">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>IP Address</th>
                            <th>Sign-in Time </th>
                            <th>Sign-out Time  </th>
                            <th>Browser </th>
                            <th>Status </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John</td>
                            <td>106.198.3.46</td>
                            <td>22-09-2022 09:47 AM</td>
                            <td>-</td>
                            <td>firefox 104.0</td>
                            <td>Signed in</td>
                        </tr>
                     
                    </tbody>
                </table>

            </div>
           
        </>

    )
}