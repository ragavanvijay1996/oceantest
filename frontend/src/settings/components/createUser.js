import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
export const CreateUser = () => {
    const[roles, setRoles] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const[email, setEmail] = useState('')
    const[number, setNumber] = useState('')
    const[address, setAddress] = useState('')
    const [role, setRole] = useState('')
    const [teams, setTeams] = useState([])
    const [team, setTeam] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')


    useEffect(() => {
        const loadResponse = async () => {
            const response = await axios.get('/api/v1/roles')
            setRoles(response.data.role)
            const responseTeam = await axios.get('/api/v1/teams')
            setTeams(responseTeam.data.team)
        }

        loadResponse()

    }, [message, errorMessage])

    setTimeout(() => {
        if(message) {
           setMessage(false) 
        }
        if(errorMessage) {
            setErrorMessage(false)

        }
    }, 3000)
   
 const Message = () => {
    if(message) {
         return (
        <div className="bg-success message">
            <p className="text-white m-0">{message}</p>
        </div>
    )
    }
 
      return (
        <div className="bg-danger message">
            <p className="text-white m-0">{errorMessage}</p>
        </div>
    )
   

  
 }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
          const response =  await axios.post('/api/v1/register', { firstName: firstName, lastName: lastName, email: email, number: number, address: address,team: team, role: role, password: password   })
          setMessage(response.data.message)
            setFirstName('')
            setLastName('')
        } catch (err) {
            if (err.response.status === 500) {
                setErrorMessage('There was a problem with the server')
            } else {
                setErrorMessage(err.response.data.msg)
            }
        }
      
    }
   
    return (
        <div className="main-container">
            <div className="d-flex gap-2 mb-2">
                <Link to='/users' className="btn btn-sm btn-primary "><i class="bi bi-arrow-left"></i> Back</Link>
            </div>
            <h6>Creating New User</h6>
            <table className="table  small view-user-table">
                <tbody>
                    <tr className="align-middle">
                        <td>First Name</td>
                        <td><input type="text" className="form-control form-control-sm" value={firstName} onChange={(e) => setFirstName(e.target.value)} /></td>
                        <td>Last Name</td>
                        <td><input type="text" className="form-control form-control-sm" value={lastName} onChange={(e) => setLastName(e.target.value)} /></td>
                    </tr>
                    <tr className="align-middle">
                        <td>Team</td>
                        <td>
                            <select className="form-select form-select-sm" value={team} onChange={e => setTeam(e.target.value)}>
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
                            <select className="form-select form-select-sm" value={role} onChange={e => setRole(e.target.value)}>
                                <option>-Select-</option>
                                {
                                    roles && roles.map((role) => {
                                        const { roleName, _id, teamName } = role
                                        if (team === teamName) {
                                          return <option key={_id}>{roleName}</option>  
                                        }
                                        
                                    })
                                }
                            </select>
                        </td>
                    </tr>
                    <tr className="align-middle">
                        <td>Mobile Number</td>
                        <td><input type="number" className="form-control form-control-sm" value={number} onChange={e => setNumber(e.target.value)}/></td>
                        <td>Email</td>
                        <td><input type="email" className="form-control form-control-sm" value={email} onChange={e => setEmail(e.target.value)} /></td>
                    </tr>

                    <tr>
                        <td>Address</td>
                        <td><textarea className="form-control" value={address} onChange={e => setAddress(e.target.value)}></textarea></td>
                    </tr>
                    <tr className="align-middle">
                        <td>Password</td>
                        <td><input type="password" className="form-control form-control-sm" value={password} onChange={e => setPassword(e.target.value)} /></td>
                    </tr>
                </tbody>
            </table>
            <div className="d-flex gap-2">
                <button onClick={handleSubmit} className="btn btn-sm btn-primary">Create</button>
                <button className="btn btn-sm btn-secondary">Cancel</button>
            </div>
            {message && <Message />}
            {errorMessage && <Message />}
        </div>
    )
}