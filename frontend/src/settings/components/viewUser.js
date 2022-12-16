import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link, useParams, useNavigate } from "react-router-dom"

export const ViewUser = () => {
    const {id} = useParams()
    const[editUser, setEditUser] = useState(false)
    const[user, setUser] = useState([])
    const [teams, setTeams] = useState([])
    const [roles, setRoles] = useState([])
    const [team, setTeam] = useState('')
    const [role, setRole] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState('')
    let navigate = useNavigate();
   
    useEffect(() => {
        const loadResponse = async () => {
            const response = await axios.get('/api/v1/admin/users')
            const user = response.data.users.filter((user) => user._id === id)
            setUser(user[0])
            const responseRoles = await axios.get('/api/v1/roles')
            setRoles(responseRoles.data.role)
            const responseTeam = await axios.get('/api/v1/teams')
            setTeams(responseTeam.data.team)
            setFirstName(user[0].firstName)
            setLastName(user[0].lastName)
            setEmail(user[0].email)
            setAddress(user[0].address)
            setNumber(user[0].number)
            setRole(user[0].role)
            setTeam(user[0].team)
        }

        loadResponse()

    }, [])
    const removeUser = async (e) => {
        e.preventDefault()
        try {
            await axios.delete(`/api/v1/admin/user/${id}`)
        } catch (err) {
            if (err.response.status === 500) {
                console.log('There was a problem with the server')
            } else {
                console.log(err.response.data.msg)
            }
        }
        navigate('/users');
    }
    
    const updateUser = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`/api/v1/admin/user/${id}`, {firstName: firstName, lastName: lastName, number: number, email: email, address: address, role: role, team: team})
        } catch (err) {
            if (err.response.status === 500) {
                console.log('There was a problem with the server')
            } else {
                console.log(err.response.data.msg)
            }
        }
       
    }

    if(editUser) {
        return (
            <div className="main-container">
                <div className="d-flex gap-2 mb-2">
                    <button onClick={() => setEditUser(false)} className="btn btn-sm btn-primary "><i className="bi bi-arrow-left"></i> Back</button>
                </div>
                <h6>Edit User Information</h6>
                <table className="table table-sm small view-user-table">
                    <tbody>
                        <tr className="align-middle">
                            <td>First Name</td>
                            <td><input type="text" value={firstName}  className="form-control form-control-sm" onChange={e =>  setFirstName(e.target.value)}/></td>
                            <td>Last Name</td>
                            <td><input type="text" value={lastName} className="form-control form-control-sm" onChange={e => setLastName(e.target.value)} /></td>
                        </tr>
                        <tr className="align-middle">
                            <td>Team</td>
                            <td>
                                <select className="form-select form-select-sm" value={team}  onChange={e => setTeam(e.target.value)} >
                                    <option>-Select-</option>
                                    {
                                        teams && teams.map((team) => {
                                            const { teamName, _id } = team
                                            return <option key={_id}>{teamName}</option>
                                        })
                                    }
                                </select>
                            </td>
                            <td>Role</td>
                            <td>
                                <select className="form-select form-select-sm" value={role} onChange= {e => setRole(e.target.value)} >
                                    <option>-Select-</option>
                                    {
                                        roles && roles.map((role) => {
                                            const { roleName, _id, teamName } = role
                                            if(!team) {
                                                return <option key={_id}>{roleName}</option>

                                            }
                                          if(team === teamName) {
                                            return <option key={_id}>{roleName}</option>
                                          }
                                                
                                         

                                        })
                                    }
                                </select>
                            </td>
                        </tr>
                        <tr className="align-middle">
                            <td>Mobile Number</td>
                            <td><input type="number" value={number} className="form-control form-control-sm" onChange={e => setNumber(e.target.value)} /></td>
                            <td>Email</td>
                            <td><input type="email" className="form-control form-control-sm" value={email} onChange={e => setEmail(e.target.value)} /></td>
                        </tr>
                        <tr>

                          
                            <td>Address</td>
                            <td><textarea value={address} onChange={e => setAddress(e.target.value)} className="form-control"></textarea></td>
                        </tr>
                    </tbody>
                </table>
                <div className="d-flex gap-2">
                    <button onClick={(e) => updateUser(e)} className="btn btn-sm btn-primary">Save</button>
                    <button className="btn btn-sm btn-secondary">Cancel</button>
                </div>
            </div>
        )
    }
    return (
        <div className="main-container">
            <div className="d-flex gap-2">
                <Link to='/users' className="btn btn-sm btn-primary "><i className="bi bi-arrow-left"></i> Back</Link>
                <button onClick={() => setEditUser(true)} className="btn btn-sm btn-secondary"><i className="bi bi-pen"></i> Edit User</button>
                <button onClick={removeUser} className="btn btn-sm btn-danger"><i className="bi bi-trash"></i> Remove User</button>
            </div>
            <div className="d-flex justify-content-between align-items-center my-3">
                <div className="d-flex align-items-center gap-3">
                       <div className="user-circle">{user.firstName && user.firstName.slice(0, 2)}</div>
                <h5 className="m-0">{user.firstName}</h5>
                </div>
            
            </div>
            <h6>User Information</h6>
            <table className="table table-sm small view-user-table">
                <tbody>
                    <tr className="align-middle">
                        <td>Name</td>
                        <td>{user.firstName}</td>
                        <td>Last Name</td>
                        <td>{user.lastName}</td>
                     </tr>
                    <tr className="align-middle">
                        <td>Role</td>
                        <td><p className="text-primary m-0">{user.role}</p> </td>
                        <td>Team</td>
                        <td><p className="m-0">{user.team}</p> </td>
                    </tr>
                        <tr className="align-middle">
                            
                        <td>Email</td>
                        <td><p className="text-primary m-0">{user.email}</p></td>
                        <td>Mobile Number</td>
                        <td>{user.number}</td>
                        </tr>
                      
                    <tr>
                        
                      
                        <td>Address</td>
                        <td>{user.address}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}