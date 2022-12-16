import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios"
import { useParams } from "react-router-dom";


export const Approval = () => {
    const [formData, setFormData] = useState([])
    const [teams, setTeams] = useState([])
    const [roles, setRoles] = useState([])
    const [teamValue, setTeamValue] = useState('')
    const [newRole, setNewRole] = useState([])
    const [roleId, setRoleId] = useState('')
    const [formId, setFormId] = useState('')
    const [formName, setFormName] = useState('')
    const [showApproval, setShowApproval] = useState(false)
    useEffect(() => {
        const loadResponse = async () => {
            const response = await axios.get('/api/v1/forms')
            setFormData(response.data.forms)
            const responseTeam = await axios.get('/api/v1/teams')
            setTeams(responseTeam.data.team)
            const responseRole = await axios.get('/api/v1/roles')
            setRoles(responseRole.data.role)
        }

        loadResponse()
    }, [])
console.log(roles)
    // const handleChange = (e) => {
    //     setTeamValue(teams[0].teamName)
    //     console.log(e.target.value)
    //     setTeamValue(e.target.value)
    // }
    // const handleChangeRole = (e) => {
    //     const singleRole = roles.filter((role) => role.roleName === e.target.value)
    //     setRoleId(singleRole[0]._id)
    // }
    // const handleChangeForm = (e) => {
    //     const singleForm = formData.filter((form) => form.formName === e.target.value)
    //     setFormName(e.target.value)
    //     setFormId(singleForm[0]._id)
    // }
    // const updateRole = async (e) => {
    //     e.preventDefault()
    //     try {
    //         await axios.put(`/api/v1/role/${roleId}`, { approval: { formId: formId, formName: formName } })

    //     } catch (err) {
    //         if (err.response.status === 500) {
    //             console.log('There was a problem with the server')
    //         } else {
    //             console.log(err.response.data.msg)
    //         }
    //     }
    // }

    // const addApproval = async (e, _id) => {
    //     const role = roles.filter(role => role._id === _id)
    //     console.log(...role[0].approval)
    //     e.preventDefault()
    //     try {
    //         await axios.put(`/api/v1/role/${_id}`, { approval: [...role[0].approval, { formId: formId, formName: formName }] })

    //     } catch (err) {
    //         if (err.response.status === 500) {
    //             console.log('There was a problem with the server')
    //         } else {
    //             console.log(err.response.data.msg)
    //         }
    //     }
    // }

    const AddApprove = () => {
        const handleChangeForm = (e) => {
            console.log(e.target)
            const singleForm = formData.filter((form) => form.formName === e.target.value)
            setFormName(e.target.value)
            setFormId(singleForm[0]._id)
        }
       const addApproval = async (e) => {
        const role = roles.filter(role => role._id === roleId)
        console.log(...role[0].approval)
        
        e.preventDefault()
        if(roleId && formId && formName) {
            try {
            await axios.put(`/api/v1/role/${roleId}`, { approval: [...role[0].approval, { formId: formId, formName: formName }] })

        } catch (err) {
            if (err.response.status === 500) {
                console.log('There was a problem with the server')
            } else {
                console.log(err.response.data.msg)
            }
        } 
        }
       
    }


        return (
            <div className="add-role">
                <div className="container">
                    <button onClick={() => setShowApproval(false)} className="role-close btn btn-sm btn-danger">x</button>
                    <form>
                        <div className="mb-2">
                            <label className="mb-1">Select Form</label>
                            <select className="form-control" value={formName}   onChange={(e) => handleChangeForm(e)}>
                                <option>-Select-</option>
                                {
                                    formData.map(form => {
                                        const { _id, formName } = form
                                        return <option key={_id}>{formName}</option>
                                    })
                                }

                            </select>
                        </div>

                        <button onClick={addApproval}  className="btn btn-sm btn-primary mt-2">Add</button>
                    </form>
                </div>

            </div>

        )
    }
    const showAddApproval = (e, _id) => {
        setShowApproval(true)
        setRoleId(_id)
    }
    
    return (
        <>  
        {/* <div className="main-container">
            <form>

                <div className="mb-2">
                    <label className="mb-1">Approval From</label>
                    <select className="form-control mb-1" onChange={e => handleChange(e)} value={teamValue}>
                        {
                            teams.map(team => {
                                const { _id, teamName } = team
                                return <option key={_id} value={teamName} >{teamName}</option>
                            })
                        }
                    </select>
                    <div className="mb-2">
                        <label className="mb-1">Role</label>
                        <select className="form-control" onChange={e => handleChangeRole(e)}>
                            {
                                roles.map(role => {
                                    const { _id, roleName, teamName } = role
                                    if (teamValue === teamName) {
                                        return <option key={_id} >{roleName}</option>
                                        //    return <div className="mb-1" >
                                        //     <select></select>
                                        //        <input type="checkbox" className="form-check-input me-2" name={teamName} />
                                        //     <span>{roleName}</span>
                                        // </div> 
                                    }

                                })
                            }
                        </select>
                    </div>
                    <div className="mb-2">
                        <label className="mb-1">Select Form</label>
                        <select className="form-control" onChange={(e) => handleChangeForm(e)}>
                            {
                                formData.map(form => {
                                    const { _id, formName } = form
                                    return <option key={_id}>{formName}</option>
                                })
                            }

                        </select>
                    </div>

                </div>
                <button onClick={updateRole} className="btn btn-sm btn-primary">Save</button>
            </form>
        </div> */}
            <div className="main-container">
                <h5>Approval Users</h5>
                <table className="table table-sm table-bordered">
                    <thead>
                        <tr>
                          <th>Role</th>
                        <th>Team</th>
                        <th>Form Name</th>  
                        <th>Action</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                      {
    roles.map(role => {
        const {_id, roleName, teamName} = role 
        return <tr key={_id}>
            <td>{roleName}</td>
            <td>{teamName}</td>
                 <td>
                    {
                role.approval.map(appr => {
                    const { formName } = appr
                    return <button className="btn btn-sm btn-secondary me-1 mb-1">{formName}</button>
                })
                    }
                    </td>   
                    <td><button onClick={(e) => showAddApproval(e,_id)} className="btn btn-sm btn-primary">Add Approval</button></td>
                
            </tr>
       
        // return <div>
        //     <p>{role.roleName}</p>
        //     {
        //         role.approval.map(appr => {
        //             const { formName } = appr
        //             return <h4>{formName}</h4>
        //         })
        //     }
        // </div> 
       
    })
}
     
                    </tbody>
             </table>
{
    showApproval && <AddApprove />
}
            </div>

        </>

    )
}