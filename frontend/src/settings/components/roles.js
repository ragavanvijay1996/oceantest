import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import axios from "axios"


export const Roles = () => {
    const [addRole, setAddRole] = useState(false)
    const [editRole, setEditRole] = useState(false)
    const [editRoleId, setEditRoleId] = useState('')
    const [roles, setRoles] = useState([])
    const [teams, setTeams] = useState([])
    const roleNameRef = useRef()
    const teamNameRef = useRef()
    const [roleName, setRoleName] = useState('')
    const [team, setTeam] = useState('')

    useEffect(() => {
        const loadResponse = async () => {
            const response = await axios.get('/api/v1/roles')
            const responseTeam = await axios.get('/api/v1/teams')
            setRoles(response.data.role)
            setTeams(responseTeam.data.team)
        }

        loadResponse()

    }, [])

   
   
  
    const AddRole = () => {
        const handleAdd = async(e) => {
            e.preventDefault()
            try {
               await axios.post('/api/v1/role/new', {roleName: roleNameRef.current.value, teamName: teamNameRef.current.value})
            }catch(err) {
                if (err.response.status === 500) {
                    console.log('There was a problem with the server')
                } else {
                    console.log(err.response.data.msg)
                }
            }
        }
      
        
        return (
            <div className="add-role">
                <div className="container">
                    <button onClick={() => setAddRole(false)} className="role-close btn btn-sm btn-danger">x</button>
                    <form>
                        <div>
                            <label>Team</label>
                            <select className="form-control"  ref={teamNameRef}>
                                <option>-Select-</option>
                                {
                                    teams && teams.map((team) => {
                                        const {teamName, _id} = team
                                       return <option key={_id}>{teamName}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <label>Role Name</label>
                        <input type="text" className="form-control" ref={roleNameRef} />
                        </div>
                        
                        <button onClick={handleAdd} className="btn btn-sm btn-primary mt-2">Add</button>
                    </form>
                </div>

            </div>

        )
    }
    const EditRole = () => {
        const handleEdit = async (e) => {
            e.preventDefault()
            try {
                await axios.put(`/api/v1/role/${editRoleId}`, { roleName: roleName, teamName: team})
            } catch (err) {
                if (err.response.status === 500) {
                    console.log('There was a problem with the server')
                } else {
                    console.log(err.response.data.msg)
                }
            }
        }
       
        return (
            <div className="add-role">
                <div className="container">
                    <button onClick={() => setEditRole(false)} className="role-close btn btn-sm btn-danger">x</button>
                    <form>
                        <div>
                            <label>Team</label>
                            <select className="form-control"  value={team} onChange={(e) => setTeam(e.target.value)}>
                                <option>-Select-</option>
                                {
                                    teams && teams.map((team) => {
                                        const { teamName, _id } = team
                                        return <option key={_id}>{teamName}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <label>Role Name</label>
                            <input type="text" className="form-control" value={roleName} onChange={(e) => setRoleName(e.target.value)} />
                        </div>

                        <button onClick={handleEdit} className="btn btn-sm btn-primary mt-2">Save</button>
                    </form>
                </div>

            </div>

        )
    }
    const removeRole = async (e, _id) => {
        e.preventDefault()
        try {
            await axios.delete(`/api/v1/role/${_id}`)

        } catch (err) {
            if (err.response.status === 500) {
                console.log('There was a problem with the server')
            } else {
                console.log(err.response.data.msg)
            }
        }
    }
 
   
    const handleEdit = (e, _id) => {
        e.preventDefault()
        setEditRole(true)
        setEditRoleId(_id)
        const editingRole = roles.filter(role => role._id === _id)
        if (editingRole[0]) {
            setTeam(editingRole[0].teamName)
            setRoleName(editingRole[0].roleName)
        }

    }
    return (
        <>
         <div className="main-container">
            <div className="d-flex gap-2 mb-2">
                <Link to='/' className="btn btn-sm btn-primary ">Back</Link>
                <button onClick={() => setAddRole(true)} className="btn btn-sm btn-primary">Add Role</button>

            </div>
            <table className="table table-sm small table-striped">
              <thead>
                <tr>
                    <th>Action</th>
                    <th>Role Name</th>
                    <th>Team</th>
                    <th>ID</th>
                </tr>
              </thead>
              <tbody>
                {
                   roles && roles.map((role) => {
                    
                        const {roleName, _id, teamName} = role
                        return <tr key={_id}>
                            <td><button onClick={(e) => handleEdit(e, _id)}  className="bg-transparent border-0"><i className="bi bi-pen"></i></button>
                                <button onClick={(e) => removeRole(e, _id)} className="bg-transparent border-0"><i className="bi bi-trash"></i></button></td>
                            <td>{roleName}</td>
                            <td>{teamName}</td>
                            <td>{_id}</td>
                        </tr>
                    })
                }
              
                  
              </tbody>
            </table>
          
        </div>
        {
            addRole && <AddRole />
        }
            {
                editRole && <EditRole />
            }
        </>
       
    )
}