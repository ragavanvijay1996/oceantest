import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export const CreateStudent = () => {
    const [courses, setCourses] = useState([])
    const [staffs, setStaffs] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [dob, setDob] = useState('')
    const [bloodGroup, setBloodGroup] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [motherName, setMotherName] = useState('')
    const [courseName, setCourseName] = useState('')
    const [staffName, setStaffName] = useState('')
    const [address, setAddress] = useState('')
    const [file, setFile] = useState('')
    const [fileName, setFileName] = useState('')

    useEffect(() => {
        const loadResponse = async () => {
            const responseStaff = await axios.get('/api/v1/staffs')
            setStaffs(responseStaff.data.staff)
            const responseCourse = await axios.get('/api/v1/courses')
            setCourses(responseCourse.data.course)
            const response = await axios.get('/api/v1/students')
            console.log(response.data)
        }
        loadResponse()

    }, [])

  



    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData
        formData.append('file', file)
        formData.append('name', name)
        formData.append('fatherName', fatherName)
        formData.append('motherName', motherName)
        formData.append('email', email)
        formData.append('dob', dob)
        formData.append('bloodGroup', bloodGroup)
        formData.append('studentImgUrl', fileName)
        formData.append('courseName', courseName)
        formData.append('staffName', staffName)
        formData.append('address', address)

        // const data = name: name, fatherName: fatherName, motherName, motherName, email: email, dob: dob, bloodGroup: bloodGroup, courseName: courseName, staffName: staffName, address: address, studentImgUrl: fileName, file: file 
        try {
            await axios.post('/api/v1/student/new', formData)
        } catch (err) {
            if (err.response.status === 500) {
                console.log('There was a problem with the server')
            } else {
                console.log(err.response.data.msg)
            }
        }

    }
const bloodGroupList =["O+", "B+", "A+"]

const handleChangeFile = (e) => {
    setFile(e.target.files[0])
    setFileName(e.target.files[0].name)
}

console.log(file)
console.log(fileName)
     return (
        <div className="main-container">
            <div className="d-flex gap-2 mb-2">
                <Link to='/students' className="btn btn-sm btn-primary "><i class="bi bi-arrow-left"></i> Back</Link>
            </div>
            <h6>Creating New Student</h6>
             <form onSubmit={handleSubmit} method="POST" enctype="multipart/form-data">
 <table className="table  small view-user-table">
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
                                    bloodGroupList&& bloodGroupList.map((blood, index) => {
                                       
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
                                        const { name, _id} = staff
                                     
                                            return <option key={_id}>{name}</option>
                                      

                                    })
                                }
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Student Photo</td>
                             <td><input type='file' name="image"  onChange={handleChangeFile}/></td>
                        <td>Address</td>
                        <td><textarea className="form-control" value={address} onChange={e => setAddress(e.target.value)}></textarea></td>
                    </tr>
                </tbody>
            </table>

           
           
            <div className="d-flex gap-2">
                <button type="submit" className="btn btn-sm btn-primary">Create</button>
                <button className="btn btn-sm btn-secondary">Cancel</button>
            </div>
             </form>
        </div>
    )
}