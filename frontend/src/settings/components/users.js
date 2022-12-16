import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";



export const Users = () => {
    const [users, setUsers] = useState([])
    let navigate = useNavigate(); 
    const routeChange = (_id) => {
        let path = `/viewUser/${_id}`;
        navigate(path);
    }
    useEffect(() => {
        const loadResponse = async () => {
            const response = await axios.get('/api/v1/admin/users')
            setUsers(response.data.users)
        }

        loadResponse()

    }, [])

    return(
        <div className="main-container">
            <div className="d-flex gap-2">
                <Link to="/" className="btn btn-sm btn-primary"><i class="bi bi-arrow-left"></i> Back</Link>
                <Link to="/createUser" className="btn btn-sm btn-primary"><i class="bi bi-plus"></i> Add User</Link>
            </div>
            <div className="text-center">
                <button className="btn btn-sm btn-primary">Active Users {users.length}</button>
                <button className="btn btn-sm btn-outline-primary">Inactive Users 0</button>
            </div>
            <table className="table table-sm small">
            <thead >
                <tr>
                        <th></th>
                        <th>Name and Email</th>
                        <th>Role</th>
                        <th>Team</th>
                        <th>Mobile Number</th>
                </tr>
            </thead>
            <tbody>
                {
                    users && users.map((user) => {
                        const {firstName,lastName, email,team, role,number, _id} = user
                        return <tr className="align-middle user-list" key={_id} onClick={() => routeChange(_id)}>
                            <td></td>
                            <td>
                                <div className="d-flex gap-2">
                                    <div className="user-circle">{firstName.slice(0, 2)}</div>
                                    <div>
                                        <p className="m-0 text-primary">{firstName} {lastName}</p>
                                        <p className="m-0 text-primary">{email}</p>
                                    </div>
                                </div>
                            </td>
                            <td>{role}</td>
                            <td>{team}</td>
                            <td>{number}</td>
                        </tr>
                    })
                }
            {/* <tr className="align-middle user-list" onClick={routeChange}>
                <td></td>
                <td>
                    <div className="d-flex gap-2">
                        <div className="user-circle">Jo</div>
                        <div>
                            <p className="m-0 text-primary">John</p>
                            <p className="m-0 text-primary">john@example.com</p>
                        </div>
                    </div>
                </td>
                <td>CEO</td>
                <td></td>
            </tr> */}
            </tbody>
            </table>
        </div>
    )
}