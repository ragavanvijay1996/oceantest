import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link, useParams, useNavigate } from "react-router-dom"

export const ViewStudent = () => {
    const { id } = useParams()
    const [courses, setCourses] = useState([])
    const [staffs, setStaffs] = useState([])
    const [editStudent, setEditStudent] = useState(false)
    const [student, setStudent] = useState([])
    const [name, setName] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [motherName, setMotherName] = useState('')
    const [dob, setDob] = useState('')
    const [bloodGroup, setBloodGroup] = useState('')
    const [courseName, setCourseName] = useState('')
    const [staffName, setStaffName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    let navigate = useNavigate();

    useEffect(() => {
        const loadResponse = async () => {
            const response = await axios.get('/api/v1/students')
            const  student = response.data.student.filter((student) => student._id === id)
            setStudent(student[0])
            const responseStaff = await axios.get('/api/v1/staffs')
            setStaffs(responseStaff.data.staff)
            const responseCourse = await axios.get('/api/v1/courses')
            setCourses(responseCourse.data.course)
            setName(student[0].name)
            setEmail(student[0].email)
            setDob(student[0].dob)
            setFatherName(student[0].fatherName)
            setMotherName(student[0].motherName)
            setBloodGroup(student[0].bloodGroup)
            setCourseName(student[0].courseName)
            setStaffName(student[0].staffName)
            setAddress(student[0].address)
            // setFirstName(user[0].firstName)
            // setLastName(user[0].lastName)
            // setEmail(user[0].email)
            // setAddress(user[0].address)
        
        }

        loadResponse()

    }, [])
    const removeStudent = async (e) => {
        e.preventDefault()
        try {
            await axios.delete(`/api/v1/student/${id}`)
        } catch (err) {
            if (err.response.status === 500) {
                console.log('There was a problem with the server')
            } else {
                console.log(err.response.data.msg)
            }
        }
        navigate('/users');
    }

    const updateStudent = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`/api/v1/student/${id}`, { name: name, email: email, dob: dob, fatherName: fatherName, motherName: motherName, courseName: courseName, staffName: staffName, address: address})
        } catch (err) {
            if (err.response.status === 500) {
                console.log('There was a problem with the server')
            } else {
                console.log(err.response.data.msg)
            }
        }

    }

    if (editStudent) {
        const bloodGroupList = ["O+", "B+", "A+"]
        return (
            <div className="main-container">
                <div className="d-flex gap-2 mb-2">
                    <button onClick={() => setEditStudent(false)} className="btn btn-sm btn-primary "><i className="bi bi-arrow-left"></i> Back</button>
                </div>
                <h6>Edit Student Information</h6>
                <table className="table table-sm small view-user-table">
                    <tbody>
                        <tr className="align-middle">
                            <td>Student Name</td>
                            <td><input type="text" className="form-control form-control-sm" value={name} onChange={(e) => setName(e.target.value)} /></td>
                            <td>Email</td>
                            <td><input type="email" className="form-control form-control-sm" value={email} onChange={e => setEmail(e.target.value)} /></td>
                        </tr>
                        <tr className="align-middle">
                            <td>DOB</td>
                            <td><input type="date" className="form-control form-control-sm" value={dob} onChange={e => setDob(e.target.value)} /></td>
                            <td>Blood Group</td>
                            <td>
                                <select className="form-select form-select-sm" value={bloodGroup} onChange={e => setBloodGroup(e.target.value)}>
                                    <option>-Select-</option>
                                    {
                                        bloodGroupList && bloodGroupList.map((blood, index) => {

                                            return <option key={index}>{blood}</option>
                                        })
                                    }
                                </select>
                            </td>
                        </tr>
                        <tr className="align-middle">
                            <td>Father Name</td>
                            <td><input type="text" className="form-control form-control-sm" value={fatherName} onChange={(e) => setFatherName(e.target.value)} /></td>
                            <td>Mother Name</td>
                            <td><input type="text" className="form-control form-control-sm" value={motherName} onChange={(e) => setMotherName(e.target.value)} /></td>
                        </tr>
                        <tr className="align-middle">
                            <td>Course Name</td>
                            <td>
                                <select className="form-select form-select-sm" value={courseName} onChange={e => setCourseName(e.target.value)}>
                                    <option>-Select-</option>
                                    {
                                        courses && courses.map((course) => {
                                            const { courseName, _id } = course
                                            return <option key={_id}>{courseName}</option>
                                        })
                                    }
                                </select>
                            </td>
                            <td>Staff Name</td>
                            <td>
                                <select className="form-select form-select-sm" value={staffName} onChange={e => setStaffName(e.target.value)}>
                                    <option>-Select-</option>
                                    {
                                        staffs && staffs.map((staff) => {
                                            const { name, _id } = staff

                                            return <option key={_id}>{name}</option>


                                        })
                                    }
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td><textarea className="form-control" value={address} onChange={e => setAddress(e.target.value)}></textarea></td>
                        </tr>
                   
                  
                    </tbody>
                </table>
                <div className="d-flex gap-2">
                    <button onClick={(e) => updateStudent(e)} className="btn btn-sm btn-primary">Save</button>
                    <button className="btn btn-sm btn-secondary">Cancel</button>
                </div>
            </div>
        )
    }
    return (
        <div className="main-container">
            <div className="d-flex gap-2">
                <Link to='/students' className="btn btn-sm btn-primary "><i className="bi bi-arrow-left"></i> Back</Link>
                <button onClick={() => setEditStudent(true)} className="btn btn-sm btn-secondary"><i className="bi bi-pen"></i> Edit Student</button>
                <button onClick={removeStudent} className="btn btn-sm btn-danger"><i className="bi bi-trash"></i> Remove Student</button>
            </div>
            <div className="d-flex justify-content-between align-items-center my-3">
                <div className="d-flex align-items-center gap-3">
                    <div className="user-circle">
                        <img src={`/uploads/${student.studentImgUrl}`} className="bg-white rounded-circle" width="40" />
                    </div>
                    <h5 className="m-0">{student.name}</h5>
                </div>

            </div>
            <h6>Student Information</h6>
            <table className="table table-sm small view-user-table">
                <tbody>
                    <tr className="align-middle">
                        <td>Name</td>
                        <td>{student.name}</td>
                        <td>Email</td>
                        <td>{student.email}</td>
                    </tr>
                    <tr className="align-middle">
                        <td>Dob</td>
                        <td><p className="m-0">{student.dob}</p> </td>
                        <td>Blood Group</td>
                        <td><p className="m-0">{student.bloodGroup}</p> </td>
                    </tr>
                    <tr className="align-middle">

                        <td>Father Name</td>
                        <td><p className="m-0">{student.fatherName}</p></td>
                        <td>Mother Name</td>
                        <td><p className="m-0">{student.motherName}</p></td>
                    </tr>
                    <tr className="align-middle">

                        <td>Course Name</td>
                        <td><p className="m-0">{student.courseName}</p></td>
                        <td>Staff Name</td>
                        <td><p className="m-0">{student.staffName}</p></td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>{student.address}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}