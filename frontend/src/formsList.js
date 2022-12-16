import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export const FormsList = () => {
    const [forms, setForms] = useState([])
    const [deleteForm, setDeleteForm] = useState(false)
    // const [addApprove, setAddApprove] = useState(false)
    // const [teams, setTeams] = useState([])
    // const [roles, setRoles] = useState([])
    // const [approval, setApproval] = useState([])
    // const [teamValue, setTeamValue] = useState('')
    // const [checkBoxValue, setcheckBoxValue] = useState([])
    const [checked, setChecked] = useState(false)
    const [formId, setFormId] = useState('')

    useEffect(() => {
        const loadResponse = async () => {
            const response = await axios.get('/api/v1/forms')
            setForms(response.data.forms)
            // const responseTeam = await axios.get('/api/v1/teams')
            // setTeams(responseTeam.data.team)
            // const responseRole = await axios.get('/api/v1/roles')
            // setRoles(responseRole.data.role)
            // const responseApproval = await axios.get('/api/v1/approval')
            // setApproval(responseApproval.data.approval)
        }

        loadResponse()

    }, [deleteForm, checked])

    const removeForm = async (_id) => {
        const res = await axios.delete(`/api/v1/form/${_id}`)
        console.log(res)
        setDeleteForm(true)
    }
    // const handleChange = (e) => {
    //     setTeamValue(e.target.value)
    // }
    // const handleInputChange = (e,_id, roleName, teamName) => {
    //     console.log(e.target.checked, _id)
   

    //     if(e.target.checked )  {
    //         // checkBoxValue.id = _id
    //         // checkBoxValue.roleName = roleName
    //         roles.map(role => {
    //             if (role._id === _id) {
    //                 role.check = true
    //             } return role
    //         }) 
    //         setcheckBoxValue([...checkBoxValue, {id: _id, roleName: roleName, teamName: teamName}])
    //     }if (e.target.check === false)  {
    //         roles.map(role => {
    //             if (role._id === _id) {
    //                 role.check = false
    //             } return role
    //         }) 
    //     }
     
    // }
//    const handleSubmitApproval = async(e) => {
//        e.preventDefault()
//        try {
//            await axios.post('/api/v1/approval/new', {formId: formId, approval:  checkBoxValue})
//        } catch (err) {
//            if (err.response.status === 500) {
//                console.log('There was a problem with the server')
//            } else {
//                console.log(err.response.data.msg)
//            }
//        }
//    }
//  console.log(approval)
//     const AddApproval = () => {
//         return (
//             <div className="add-role">
//                 <div className="container">
//                     <button onClick={() => setAddApprove(false)} className="role-close btn btn-sm btn-danger">x</button>
//                     <form>
//                         <div className="mb-2">
//                             <label className="mb-1">Approval From</label>
//                             <select className="form-control mb-1" onChange={e => handleChange(e)}>
//                                 {
//                                     teams.map(team => {
//                                         const { _id, teamName } = team
//                                         return <option key={_id}>{teamName}</option>
//                                     })
//                                 }
//                             </select>
//                         </div>
//                         <div className="d-flex gap-2">
//                             {
//                                 roles.map(role => {
//                                     const { _id, roleName, teamName, check } = role
//                                     if (teamValue === teamName) {
//                                         return <div className="mb-1" key={_id} >
//                                             <input type="checkbox" name={roleName} checked={check}    className="form-check-input me-2" onChange={(e) => handleInputChange(e,_id, roleName, teamName)} />
//                                             <span>{roleName}</span>
//                                         </div>
//                                     }

//                                 })
//                             }
//                         </div>
//                         <button onClick={handleSubmitApproval} className="btn btn-sm btn-primary mt-2">Save</button>
//                     </form>
//                 </div>

//             </div>

//         )
//     }
    
// const handleApprove =(_id) => {
//     setAddApprove(true)
//     setFormId(_id)
// }
    return (
        <div className="main-container">
            <div className="text-end">
                <Link to="/createForm" className="btn btn-sm btn-outline-primary">Create New Form</Link>

            </div>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Form Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        forms.map(form => {
                            const { formName, formElements, _id } = form
                            return <tr key={_id}>
                                <td>{_id}</td>
                                <td>{formName}</td>
                                <td>
                                    <div className="d-flex gap-2">
                                        <Link to={`/viewForm/${_id}`} className="btn btn-sm btn-primary">View</Link>
                                        <button onClick={() => removeForm(_id)} className="btn btn-sm btn-secondary">Delete</button>
                                        {/* <button onClick={() => handleApprove(_id)} className="btn btn-sm btn-dark">Approve</button> */}
                                    </div>
                                </td>
                            </tr>
                        })
                    }


                </tbody>
            </table>
            {/* {
                addApprove && <AddApproval />
            } */}
        </div>
    )
}