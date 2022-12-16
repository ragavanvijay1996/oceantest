import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import axios from "axios"


export const Staffs = () => {
    const [addStaff, setAddStaff] = useState(false)
    const [editStaff, setEditStaff] = useState(false)
    const [editStaffId, setEditStaffId] = useState('')
    const [staffs, setStaffs] = useState([])
    const [staffName, setStaffName] = useState('')
    const [mobile, setMobile] = useState('')
    const [dob, setDob] = useState('')
    const [courseName, setCourseName] = useState('')
    const [email, setEmail] = useState('')
    const [courses, setCourses] = useState([])
    const staffNameRef = useRef()
    const mobileRef = useRef()
    const emailRef = useRef()
    const dobRef = useRef()
    const courseNameRef = useRef()
    useEffect(() => {
        const loadResponse = async () => {
            const response = await axios.get('/api/v1/courses')
            setCourses(response.data.course)
            const responseStaffs = await axios.get('/api/v1/staffs')
            setStaffs(responseStaffs.data.staff)
        }

        loadResponse()

    }, [])


console.log(staffs)

    const AddStaff = () => {
        const handleAdd = async (e) => {
            e.preventDefault()
            try {
                await axios.post('/api/v1/staff/new', { name: staffNameRef.current.value, mobile: mobileRef.current.value, email: emailRef.current.value, dob: dobRef.current.value, courseName: courseNameRef.current.value })
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
                    <button onClick={() => setAddStaff(false)} className="role-close btn btn-sm btn-danger">x</button>
                    <form>

                        <div>
                            <label>Staff Name</label>
                            <input type="text" className="form-control" ref={staffNameRef} />
                        </div>
                        <div>
                            <label>Mobile</label>
                            <input type="text" className="form-control" ref={mobileRef} />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" className="form-control" ref={emailRef} />
                        </div>
                        <div>
                            <label>DOB</label>
                            <input type="date" className="form-control" ref={dobRef} />
                        </div>
                        <div>
                            <label>Course</label>
                            <select className="form-control" ref={courseNameRef}>
                                <option>-Select-</option>
                                {
                                    courses && courses.map((course) => {
                                        const { courseName, _id } = course
                                        return <option key={_id}>{courseName}</option>
                                    })
                                }
                            </select>
                        </div>
                        <button onClick={handleAdd} className="btn btn-sm btn-primary mt-2">Add</button>
                    </form>
                </div>

            </div>

        )
    }


    const handleEdit = (e, _id) => {
        console.log(_id)
        e.preventDefault()
        setEditStaff(true)
        setEditStaffId(_id)

        const editingStaff = staffs.filter(staff => staff._id === _id)
        console.log(editingStaff)
        if (editingStaff[0]) {
            setStaffName(editingStaff[0].name)
            setMobile(editingStaff[0].mobile)
            setEmail(editingStaff[0].email)
            setDob(editingStaff[0].dob)
            setCourseName(editingStaff[0].courseName)
            setStaffName(editingStaff[0].name)
        }


    }


    const EditStaff = () => {
        const handleEdit = async (e) => {
            e.preventDefault()
            try {
                await axios.put(`/api/v1/staff/${editStaffId}`, { name: staffName, mobile: mobile, email: email, dob: dob, courseName: courseName })
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
                    <button onClick={() => setEditStaff(false)} className="role-close btn btn-sm btn-danger">x</button>
                    <form>

                        <div>
                            <label>Staff Name</label>
                            <input type="text" className="form-control" value={staffName} onChange={(e) => setStaffName(e.target.value)} />
                        </div>
                        <div>
                            <label>Mobile</label>
                            <input type="text" className="form-control" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                        </div>

                        <div>
                            <label>Email</label>
                            <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div>
                            <label>DOB</label>
                            <input type="text" className="form-control" value={dob} onChange={(e) => setDob(e.target.value)} />
                        </div>
                        <div>
                            <label>Course</label>
                            <select className="form-control" value={courseName} onChange={(e) => setCourseName(e.target.value)}>
                                <option>-Select-</option>
                                {
                                    courses && courses.map((course) => {
                                        const { courseName, _id } = course
                                        return <option key={_id}>{courseName}</option>
                                    })
                                }
                            </select>
                        </div>
                        <button onClick={handleEdit} className="btn btn-sm btn-primary mt-2">Save</button>
                    </form>
                </div>

            </div>

        )
    }
    const removeStaff = async (e, _id) => {
        e.preventDefault()
        try {
            await axios.delete(`/api/v1/staff/${_id}`)

        } catch (err) {
            if (err.response.status === 500) {
                console.log('There was a problem with the server')
            } else {
                console.log(err.response.data.msg)
            }
        }
    }


   
    return (
        <>
            <div className="main-container">
                <div className="d-flex gap-2 mb-2">
                    <Link to='/' className="btn btn-sm btn-primary ">Back</Link>
                    <button onClick={() => setAddStaff(true)} className="btn btn-sm btn-primary">Add Staff</button>

                </div>
                <table className="table table-sm small table-striped">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Staff Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>DOB</th>
                            <th>Course Name</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            staffs && staffs.map((staff) => {

                                const { courseName, _id, name, mobile, email, dob } = staff
                                return <tr key={_id}>
                                    <td><button onClick={(e) => handleEdit(e, _id)} className="bg-transparent border-0"><i className="bi bi-pen"></i></button>
                                        <button onClick={(e) => removeStaff(e, _id)} className="bg-transparent border-0"><i className="bi bi-trash"></i></button></td>
                                    <td>{name}</td>
                                    <td>{mobile}</td>
                                    <td>{email}</td>
                                    <td>{dob}</td>
                                    <td>{courseName}</td>
                                    <td>{_id}</td>
                                </tr>
                            })
                        }


                    </tbody>
                </table>

            </div>
            {
                addStaff && <AddStaff />
            }
            {
                editStaff && <EditStaff />
            }
        </>

    )
}