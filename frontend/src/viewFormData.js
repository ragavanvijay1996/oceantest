import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const ViewFormData = () => {
    const { id } = useParams()
    const [formData, setFormData] = useState([])
    const [formKeys, setFormKeys] = useState([])
    const [formValues, setFormValues] = useState([])
    const [singleFormData, setSingleFormData] = useState([])
    const [deleteFormData, setDeleteFormData] = useState(false)
    const [dataNew, setDataNew] = useState([])
    const [viewData, setViewData] = useState(false)
    const [viewSingleData, setViewSingleData] = useState([])
    const [user, setUser] = useState([])
    const [roles, setRoles] = useState([])
    const [approvalUser, setApprovalUser] = useState(false)
    const [formDataId, setFormDataId] = useState('')
    const [status, setStatus] = useState('Pending')
    const [isAuthorized, setIsAuthorized] = useState(false)

    useEffect(() => {
        const loadResponse = async () => {
            const responseUser = await axios.get('/api/v1/me')
            setUser(responseUser.data.user)
            const responseRole = await axios.get('/api/v1/roles')
            setRoles(responseRole.data.role)
            const response = await axios.get('/api/v1/formData')
            setFormData(response.data.formDdata)
            const data = response.data.formData.filter(data => data.formId === id)
            setDataNew(data)
            const singleDataNew = data.filter(dat => dat.userId === responseUser.data.user._id)
            // console.log(singleDataNew)

          
            setFormKeys(Object.keys(singleDataNew[0]))
            setFormValues(singleDataNew.map((dat) => {
                return Object.values(dat)
            }))
           
            // setFormKeys(Object.keys(data[0]))
            // setFormValues(data.map((dat) => {
            //     return Object.values(dat)
            // }))
           
        }
        loadResponse()
    }, [id, deleteFormData])

 
    
    // const removeForm = async (_id) => {
    //     const res = await axios.delete(`/api/v1/form/${_id}`)
    //     console.log(res)

    // }

    // const headingTxt = Object.keys(users.map((user) => user))

   
// console.log(user)
//     console.log(dataNew)
//     console.log(roles)   
    
useEffect(() => {
    const isApproveUser = roles.filter((role) => role.roleName === user.role)

    isApproveUser.map((user) => {
        // await user.approval.map(app => {
            
        //     setApprovalUser(app.formId === id) 
        //     return app
        // } )
       const appUser =  user.approval.filter((app) => app.formId === id)
        if (appUser[0]) {
            setApprovalUser(appUser[0].formId === id)
        }
        return user
    })
    
    viewSingleData.map(data => {
        setFormDataId(data._id)
        return data
    })
    const isAuthorizedRole = roles.filter((role) => role.roleName === user.role)
    console.log(isAuthorizedRole)
    if(isAuthorizedRole[0]) {
           isAuthorizedRole[0].approval.map(app => setIsAuthorized(app.formId === id) )
           
    }
 
    // roles.map(role => {
    //     role.approval.map(app => {
    //         console.log(app.formId === id)
    //         if(app.formId === id) {
    //             setIsAuthorized(true)
    //         }
    //     })
    // })
   
    if (dataNew[0] && user.role === "admin" || isAuthorized) {
        if(dataNew[0]) {
            setFormKeys(Object.keys(dataNew[0]))
        setFormValues(dataNew.map((dat) => {
            return Object.values(dat)
        }))
        }
        
    }


}, [user, roles, viewSingleData, dataNew, id])
   
    console.log(approvalUser)
    const updateFormData = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`/api/v1/formData/${formDataId}`, { [`Status (${user.role})`] : status}  )

        } catch (err) {
            if (err.response.status === 500) {
                console.log('There was a problem with the server')
            } else {
                console.log(err.response.data.msg)
            }
        }
    }
   

    const removeFormData = async (id) => {
        if(id) {
            const res = await axios.delete(`/api/v1/formData/${id}`)
        console.log(res)
        setDeleteFormData(true)
        }
        
    }
  
  
    // console.log(dataNew)
    // console.log(formKeys)
    // console.log(formValues)
    if(viewData) {
        return(
            <> 
            <div className="main-container">
                <button onClick={() => setViewData(false)} className="btn btn-sm btn-primary ">Back</button>
                {/* <table className="table table-sm table-bordered">
                    <tbody> */}
  {
    viewSingleData && viewSingleData.map(dat => {
        console.log(Object.entries(dat))
        return <table className="table table-bordered table-sm mt-3">
            <tbody>
                {
                    Object.entries(dat).map(ent => {
                        return <tr><td>{ent[0]}</td>
                            <td>{ent[1]}</td></tr>
                    })
                }
            </tbody>
        </table>
        // return <div className="d-flex gap-5">
        //         <ul className="list-unstyled">
                   
        //            {
        //             Object.keys(dat).map(key => {
        //                 return <li className="text-dark">{key}</li>
        //             })
        //            }
        //         </ul>
        //         <ul className="list-unstyled">
                   
        //             {
        //                Object.values(dat).map(value => {
        //                 return  <li>{value}</li>
        //                })
        //             }
                    
        //         </ul>
        // </div>
    })
  }
                  
                    {/* </tbody>
                 
                </table> */}
           
            </div>
            {
              approvalUser && <div className="main-container">
                            <div className="mb-2">
                                <label>Update Status</label>
                            <select className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option>Pending</option>
                        <option>Approved</option>
                        <option>Not Approved</option>
                            </select>
                            </div>
                            
                            <button onClick={updateFormData} className="btn btn-sm btn-primary">Submit</button>
                        </div>

            }
                       
  
            </>
           
        )
    }

    // const ViewSingleData = () => {
    //     return
    // }

const handleViewData = (_id) => {
    const singleData = dataNew.filter((data) => data._id === _id)
    setViewSingleData(singleData)
    setViewData(true)
    setApprovalUser(false)
}
    return (
        <div className="main-container">

            <table className="table table-sm small">
                <thead>
                    <tr>
                        {
                         formKeys.slice(1, 4).map((form, index) => {
                                return <th key={index}>{form}</th>
                            })
                        }
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        {
                            formValues.map((form, index) => {
                                return <td key={index}>{form}</td>
                            })
                        }
                        <div className="d-flex gap-2">
                            <button className="btn btn-sm btn-primary">Edit</button>
                            <button className="btn btn-sm btn-secondary">Delete</button>
                        </div>
                    </tr> */}

                    {
                       formValues.map((form, index) => {
                        
                            return <tr key={form[0]}>
                                {
                                    form.slice(1, 4).map((text, index) => {
                                        return <td key={index}>{text}</td>
                                    })
                                }
                                <td>
                                    <div className="d-flex gap-2">
                                        <button onClick={() => handleViewData(form[0])} className="btn btn-sm btn-dark">View</button>
                                        {/* <button className="btn btn-sm btn-primary">Edit</button> */}
                                        <button onClick={() => removeFormData(form[0])} className="btn btn-sm btn-secondary">Delete</button>
                                    </div>

                                </td>
                            </tr>
                        })
                    }




                </tbody>
            </table>
           
        </div>
    )
}