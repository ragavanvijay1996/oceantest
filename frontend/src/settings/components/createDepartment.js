import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export const CreateDepartment = () => {
    const [departments, setDepartments] = useState([])
    const [forms, setForms] = useState([])
    const [addDepartment, setAddDepartment] = useState(false)
    const [editDepartment, setEditDepartment] = useState(false)
    const [editDepartmentId, setEditDepartmentId] = useState('')

    useEffect(() => {
        const loadResponse = async () => {
            const response = await axios.get('/api/v1/forms')
            setForms(response.data.forms)
        }

        loadResponse()

    }, [])
    console.log(forms)
    
    const AddDepartment = () => {
        const [departmentName, setDepartmentName] = useState('')
        const [departmentListName, setDepartmentListName] = useState('')
        const [departmentList, setDepartmentList] = useState([])
        const [radioValue, setRadioValue] = useState('')
        const [formId, setFormId] = useState('')
        const addList = (e) => {
            e.preventDefault()
            setDepartmentList([...departmentList, {id: new Date().getTime().toString(), listName: departmentListName}])
            setDepartmentListName('')
        }
  
        const onChangeRadio =(e, id) => {
            departmentList.map(dep =>  {
                if(dep.id === id) {
                 dep.type = e.target.value
                } return dep
            })
          setRadioValue(e.target.value)
        }
        const onChangeSelect = (e, id) => {
            setFormId(e.target.value)
            departmentList.map(dep => {
                if (dep.id === id) {
                    dep.formId = e.target.value
                } return dep
            })
        } 
        console.log(departmentList)
        const createDepartment = async (e) => {
            e.preventDefault()
            try {
                await axios.post(`/api/v1/department/new`, { departmentName: departmentName, departmentList: departmentList  })

            } catch (err) {
                if (err.response.status === 500) {
                    console.log('There was a problem with the server')
                } else {
                    console.log(err.response.data.msg)
                }
            }
        }


        return (
            <div className="add-department">
                <div className="container">
                    <button onClick={() => setAddDepartment(false)} className="role-close btn btn-sm btn-danger">x</button>
                    <form onSubmit={createDepartment}>
                        <div>
                            <label>Department Name</label>
                            <input type="text" className="form-control" value={departmentName} onChange={(e) => setDepartmentName(e.target.value)}/>
                        </div>
                        <div>
                            <label>Add Menu</label>
                            <div className="d-flex gap-2 align-items-center">
                            <input type="text" className="form-control" value={departmentListName} onChange={(e) => setDepartmentListName(e.target.value)}/>
                                <button onClick={addList} className="btn btn-sm btn-primary">Add</button>
                            </div>
                         
                            <table className="table table-sm mt-2">
                                <tbody>
                                 
                                        {
                                            departmentList.map((department) => {
                                                const {listName, id} = department
                                            
                                                return <tr key={id}>
                                                    <td>{listName}</td>
                                                    <td>

                                                        <div className="d-flex gap-2" >
                                                            <div className=" d-flex gap-2">
                                                                <label >Create</label>
                                                                <input type="radio" value='create' onChange={(e) => onChangeRadio(e,id)}  name={listName} className="form-check-input" />
                                                            </div>
                                                            <div className="d-flex gap-2">
                                                                <label>View</label>
                                                                <input type="radio" value='view' onChange={(e) => onChangeRadio(e,id)} name={listName} className="form-check-input" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>  <select className="form-select" onChange={e => onChangeSelect(e, id)}>
                                                        <option>-Select-</option>
                                                        {
                                                             forms.map((form) => {
                                                                const {_id, formName} = form
                                                                return <option key={_id} value={_id}>{formName}</option>
                                                            })
                                                        }
                                                     
                                                    </select></td>
                                                    <td><button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                                                </tr>
                                            })
                                        }
                                            {/* <td>Add New Call</td>
                                            <td>
                                                <div className="d-flex gap-2">
                                                    <div className=" d-flex gap-2">
                                                        <label >Create</label>
                                                        <input type="radio" name="addNewCall" className="form-check-input" />
                                                    </div>
                                                    <div className="d-flex gap-2">
                                                        <label>View</label>
                                                        <input type="radio" name="addNewCall" className="form-check-input" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>  <select className="form-select">
                                                <option>Form 1</option>
                                                <option>Form 2</option>
                                            </select></td>
                                            <td><button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td> */}

                               
                                </tbody>
                            </table>
                        </div>
                        <button  className="btn btn-sm btn-primary mt-2">Add</button>
                    </form>
                </div>

            </div>

        )
    }
    useEffect(() => {
        const loadResponse = async () => {
            const response = await axios.get('/api/v1/departments')
            setDepartments(response.data.departments)
        }

        loadResponse()

    }, [])
console.log(departments)
    const removeDepartment = async (_id) => {
        const res = await axios.delete(`/api/v1/department/${_id}`)
        console.log(res)
    }
    const editDepartmentShow = (_id) => {
        setEditDepartment(true)
        setEditDepartmentId(_id)

    }
    const EditDepartment = () => {
        const [departments, setDepartments] = useState([])
        const [departmentMenu, setDepartmentMenu] = useState([])
        const [departmentMenuNew, setDepartmentMenuNew] = useState([])
        const [departmentListName, setDepartmentListName] = useState('')
        const [departmentName, setDepartmentName] = useState('')
        const [radioValue, setRadioValue] = useState('')
        const [formId, setFormId] = useState('')
        // const department = departments.filter(department => department._id === editDepartmentId)
        // console.log(department)
        // const {departmentName, departmentList} = department[0]


        useEffect(() => {
            const loadResponse = async () => {
                const response = await axios.get('/api/v1/departments')
                setDepartments(response.data.departments)
                const department = response.data.departments.filter(department => department._id === editDepartmentId)
                setDepartmentName(department[0].departmentName)
                setDepartmentMenu(department[0].departmentList)
            }

            loadResponse()

        }, [])

console.log(departmentMenu)
        const onChangeRadio = (e, _id) => {
           setDepartmentMenu( departmentMenu.map(dep => {
                if (dep._id === _id) {
                    dep.type = e.target.value
                } 
                return  dep
            }))
            
        }
        const onChangeSelect = (e, _id) => {
         setDepartmentMenu(
            departmentMenu.map(dep => {
                if (dep._id === _id) {
                    dep.formId = e.target.value
                } return dep
            }))
        } 
        const onChangeRadioNew = (e, id) => {
            departmentMenuNew.map(dep => {
                if (dep.id === id) {
                    dep.type = e.target.value
                } return dep
            })
            setRadioValue(e.target.value)
        }
        const onChangeSelectNew = (e, id) => {
           
           setDepartmentMenuNew( departmentMenuNew.map(dep => {
                if (dep.id === id) {
                    dep.formId = e.target.value
                } return dep
            }))
        } 
        const addList = (e) => {
            e.preventDefault()
            setDepartmentMenuNew([...departmentMenuNew,{ id: new Date().getTime().toString(), listName: departmentListName }])
            setDepartmentListName('')
        }
   console.log(departmentMenuNew)
        const removeDepartmentMenu = (_id) => {
                setDepartmentMenu(departmentMenu.filter(dep => dep._id !== _id))
        }
        const removeDepartmentMenuNew = (id) => {
            setDepartmentMenuNew(departmentMenuNew.filter(dep => dep.id !== id))
        }

        const updateDepartment = async (e) => {
            e.preventDefault()
            try {
                await axios.put(`/api/v1/department/${editDepartmentId}`, { departmentName: departmentName, departmentList: [...departmentMenu, ...departmentMenuNew] })

            } catch (err) {
                if (err.response.status === 500) {
                    console.log('There was a problem with the server')
                } else {
                    console.log(err.response.data.msg)
                }
            }
        }

        return (
            <div className="add-department">
                <div className="container">
                    <button onClick={() =>setEditDepartment(false)} className="role-close btn btn-sm btn-danger">x</button>
                    <form onSubmit={updateDepartment}>
                        <div>
                            <label>Department Name</label>
                            <input type="text" value={departmentName} onChange={e => setDepartmentName(e.target.value)}  className="form-control"  />
                        </div>
                        <div>
                            <label>Add Menu</label>
                            <div className="d-flex gap-2 align-items-center">
                                <input value={departmentListName} onChange={(e) => setDepartmentListName(e.target.value)} type="text" className="form-control"  />
                                <button onClick={addList} className="btn btn-sm btn-primary">Add</button>
                            </div>

                            <table className="table table-sm mt-2">
                                <tbody>

                                     {
                                        departmentMenu.map((department) => {
                                            const { listName, _id, type} = department
                                            return <tr key={_id}>
                                                <td>{listName}</td>
                                                <td>

                                                    <div className="d-flex gap-2" >
                                                        <div className=" d-flex gap-2">
                                                            <label >Create</label>
                                                            <input type="radio" value='create' checked={type === 'create'}   onChange={(e) => onChangeRadio(e, _id)} name={listName} className="form-check-input" />
                                                        </div>
                                                        <div className="d-flex gap-2">
                                                            <label>View</label>
                                                            <input type="radio" value='view' checked={type === 'view'} onChange={(e) => onChangeRadio(e, _id)} name={listName} className="form-check-input" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>  <select className="form-select" onChange={e => onChangeSelect(e, _id)}>
                                                    {
                                                        forms.map((form) => {
                                                            const { _id, formName } = form
                                                            return <option key={_id} value={_id}>{formName}</option>
                                                        })
                                                    }

                                                </select></td>
                                                <td><button onClick={() => removeDepartmentMenu(_id)} className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                                            </tr>
                                        })
                                    } 
                                    {
                                        departmentMenuNew.map((department) => {
                                            const { listName, id} = department
                                            return <tr key={id}>
                                                <td>{listName}</td>
                                                <td>

                                                    <div className="d-flex gap-2" >
                                                        <div className=" d-flex gap-2">
                                                            <label >Create</label>
                                                            <input type="radio" value='create'  onChange={(e) => onChangeRadioNew(e, id)} name={listName} className="form-check-input" />
                                                        </div>
                                                        <div className="d-flex gap-2">
                                                            <label>View</label>
                                                            <input type="radio" value='view' onChange={(e) => onChangeRadioNew(e, id)} name={listName} className="form-check-input" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>  <select className="form-select" onChange={e => onChangeSelectNew(e, id)}>
                                                    {
                                                        forms.map((form) => {
                                                            const { _id, formName } = form
                                                            return <option key={_id} value={_id}>{formName}</option>
                                                        })
                                                    }

                                                </select></td>
                                                <td><button onClick={() => removeDepartmentMenuNew(id)} className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                                            </tr>
                                        })
                                    } 
                                </tbody>
                            </table>
                        </div>
                        <button  className="btn btn-sm btn-primary mt-2">Add</button>
                    </form>
                </div>

            </div>

        )
    }

    return (
        <>
            <div className="main-container">
                <div className="d-flex gap-2 mb-2">
                    <Link to="/" className="btn btn-sm btn-primary ">Back</Link>
                    <button onClick={() => setAddDepartment(true)} className="btn btn-sm btn-primary">Add Department</button>

                </div>

                <table className="table table-sm small table-striped">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Department Name</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        departments.map(dep => {
                            const {_id, departmentName} = dep
                            return <tr key={_id}>
                                <td>
                                        <button onClick={() => editDepartmentShow(_id)} className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button onClick={() => removeDepartment(_id)} className="bg-transparent border-0"><i class="bi bi-trash"></i></button> 
                                </td>
                           
                                <td>{departmentName}</td>
                            </tr>
                        })
                      }
                        {/* <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>Information Technology</td>
                        </tr>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>Sales and Marketing</td>
                        </tr>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>HR</td>
                        </tr>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>Accounts</td>
                        </tr>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>Store</td>
                        </tr> */}
                    </tbody>
                </table>

            </div>
            {
                addDepartment && <AddDepartment />
            }
            {
                editDepartment && <EditDepartment />
            }
        </>

    )
}