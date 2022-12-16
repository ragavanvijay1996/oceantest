import React, { useState} from "react"
import { Link } from "react-router-dom"

export const ViewProfile = ({user}) => {
    const [editUser, setEditUser] = useState(false)
    const [loading, setLoading] = useState(false)
   
  
    // if (editUser) {
    //     return (
    //         <div className="main-container">
    //             <div className="d-flex gap-2 mb-2">
    //                 <button onClick={() => setEditUser(false)} className="btn btn-sm btn-primary ">Back</button>
    //             </div>
    //             <h6>Edit User Information</h6>
    //             <table className="table table-sm small view-user-table">
    //                 <tbody>
    //                     <tr className="align-middle">
    //                         <td>First Name</td>
    //                         <td><input type="text" value='John' className="form-control form-control-sm" /></td>
    //                         <td>Last Name</td>
    //                         <td><input type="text" className="form-control form-control-sm" /></td>
    //                     </tr>
    //                     <tr className="align-middle">
    //                         <td>Role</td>
    //                         <td>
    //                             <select className="form-select form-select-sm">
    //                                 <option>CEO</option>
    //                                 <option>Sales Manager</option>
    //                                 <option>Support Manager</option>
    //                             </select>
    //                         </td>
    //                         <td>Email</td>
    //                         <td><input type="text" value='john@foxow.com' className="form-control form-control-sm" /></td>
    //                     </tr>

    //                     <tr>

    //                         <td>User Type</td>
    //                         <td>
    //                             <select className="form-select form-select-sm">
    //                                 <option>Single App</option>
    //                                 <option>Standard</option>
    //                                 <option>Admin</option>
    //                             </select>
    //                         </td>
    //                         <td>Address</td>
    //                         <td><textarea value='23A Golden Street Chennai India' className="form-control"></textarea></td>
    //                     </tr>
    //                 </tbody>
    //             </table>
    //             <div className="d-flex gap-2">
    //                 <button className="btn btn-sm btn-primary">Save</button>
    //                 <button className="btn btn-sm btn-secondary">Cancel</button>
    //             </div>
    //         </div>
    //     )
    // }
    return (
        <div className="main-container">
            <div className="d-flex gap-2 ">
                <Link to='/' className="btn btn-sm btn-primary ">Back</Link>
            </div>
            <div className="d-flex justify-content-between align-items-center my-3">
                <div className="d-flex align-items-center gap-3">
                    <div className="user-circle">{user.firstName && user.firstName.slice(0, 2)}</div>
                    <h5 className="m-0">{user.firstName} {user.lastName}</h5>
                </div>

            </div>
            <h6>Profile Information</h6>
            <table className="table table-sm small view-user-table">
                <tbody>
                    <tr className="align-middle">
                        <td>First Name</td>
                        <td>{user.firstName}</td>
                        <td>Last Name</td>
                        <td>{user.lastName}</td>
                        
                    </tr>
                    <tr className="align-middle">
                        <td>Role</td>
                        <td><p className="text-primary m-0">{user.role}</p> </td>
                        <td>Team</td>
                        <td><p className="text-primary m-0">{user.team}</p> </td>
</tr>
                    <tr className="align-middle">
                       
                        <td>Email</td>
                        <td><p className="text-primary m-0">{user.email}</p></td>
                        <td>Mobile Number</td>
                        <td>{user.number}</td>
                    </tr>
                    <tr className="align-middle">
                        <td>Address</td>
                        <td>{user.address}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}