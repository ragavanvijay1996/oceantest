import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";



export const Students = () => {
    const [students, setStudents] = useState([])


    let navigate = useNavigate();
    const routeChange = (_id) => {
        let path = `/viewStudent/${_id}`;
        navigate(path);
    }

    useEffect(() => {
        const loadResponse = async () => {
            const response = await axios.get('/api/v1/students')
            setStudents(response.data.student)
        }

        loadResponse()

    }, [])

    return (
        <div className="main-container">
            <div className="d-flex gap-2">
                <Link to="/" className="btn btn-sm btn-primary"><i class="bi bi-arrow-left"></i> Back</Link>
                <Link to="/createStudent" className="btn btn-sm btn-primary"><i class="bi bi-plus"></i> Add Student</Link>
            </div>
          
            <table className="table table-sm small">
                <thead >
                    <tr>
                        <th></th>
                        <th>Student Name and Email</th>
                        <th>DOB</th>
                        <th>Blood Group</th>
                        <th>Father Name</th>
                        <th>Mother Name</th>
                        <th>Course Name</th>
                        <th>Staff Name</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students && students.map((student) => {
                            const { name, email, dob, bloodGroup, fatherName, motherName, courseName, staffName, address, _id, studentImgUrl } = student

                            return <tr className="align-middle user-list" key={_id} onClick={() => routeChange(_id)}>
                                <td></td>
                                <td>
                                    <div className="d-flex gap-2">
                                        <div className="user-circle">
                                            <img src={`/uploads/${studentImgUrl}`} className="bg-white rounded-circle" width="40"/>
                                            
                                            </div>
                                        <div>
                                            <p className="m-0 text-primary">{name}</p>
                                            <p className="m-0 text-primary">{email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>{dob}</td>
                                <td>{bloodGroup}</td>
                                <td>{fatherName}</td>
                                <td>{motherName}</td>
                                <td>{courseName}</td>
                                <td>{staffName}</td>
                                <td>{address}</td>
                              
                            </tr>
                        })
                    }
                    {/* <tr className="align-middle user-list" onClick={routeChange}>
                <td></td>
                <td>
                    <div className="d-flex gap-2">
                        <div className="user-circle">Jo</div>
                        <div>
                            <p className="m-0 text-primary">John</p>
                            <p className="m-0 text-primary">john@example.com</p>
                        </div>
                    </div>
                </td>
                <td>CEO</td>
                <td></td>
            </tr> */}
                </tbody>
            </table>
        </div>
    )
}