import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import axios from "axios"


export const Courses = () => {
    const [addCourse, setAddCourse] = useState(false)
    const [editCourse, setEditCourse] = useState(false)
    const [editCourseId, setEditCourseId] = useState('')
    const [courses, setCourses] = useState([])
    const courseNameRef = useRef()
    const [courseName, setCourseName] = useState('')

    useEffect(() => {
        const loadResponse = async () => {
            const response = await axios.get('/api/v1/courses')
            setCourses(response.data.course)
        }

        loadResponse()

    }, [])




    const AddCourse = () => {
        const handleAdd = async (e) => {
            e.preventDefault()
            try {
                await axios.post('/api/v1/course/new', { courseName: courseNameRef.current.value })
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
                    <button onClick={() => setAddCourse(false)} className="role-close btn btn-sm btn-danger">x</button>
                    <form>

                        <div>
                            <label>Course Name</label>
                            <input type="text" className="form-control" ref={courseNameRef} />
                        </div>

                        <button onClick={handleAdd} className="btn btn-sm btn-primary mt-2">Add</button>
                    </form>
                </div>

            </div>

        )
    }
    const EditCourse = () => {
        const handleEdit = async (e) => {
            e.preventDefault()
            try {
                await axios.put(`/api/v1/course/${editCourseId}`, { courseName: courseName })
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
                    <button onClick={() => setEditCourse(false)} className="role-close btn btn-sm btn-danger">x</button>
                    <form>

                        <div>
                            <label>Course Name</label>
                            <input type="text" className="form-control" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
                        </div>

                        <button onClick={handleEdit} className="btn btn-sm btn-primary mt-2">Save</button>
                    </form>
                </div>

            </div>

        )
    }
    const removeCourse = async (e, _id) => {
        e.preventDefault()
        try {
            await axios.delete(`/api/v1/course/${_id}`)

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
        setEditCourse(true)
        setEditCourseId(_id)
        const editingCourse = courses.filter(course => course._id === _id)
        if (editingCourse[0]) {
            setCourseName(editingCourse[0].courseName)
        }

    }
    return (
        <>
            <div className="main-container">
                <div className="d-flex gap-2 mb-2">
                    <Link to='/' className="btn btn-sm btn-primary ">Back</Link>
                    <button onClick={() => setAddCourse(true)} className="btn btn-sm btn-primary">Add Course</button>

                </div>
                <table className="table table-sm small table-striped">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Course Name</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses && courses.map((course) => {

                                const { courseName, _id } = course
                                return <tr key={_id}>
                                    <td><button onClick={(e) => handleEdit(e, _id)} className="bg-transparent border-0"><i className="bi bi-pen"></i></button>
                                        <button onClick={(e) => removeCourse(e, _id)} className="bg-transparent border-0"><i className="bi bi-trash"></i></button></td>
                                    <td>{courseName}</td>
                                    <td>{_id}</td>
                                </tr>
                            })
                        }


                    </tbody>
                </table>

            </div>
            {
                addCourse && <AddCourse />
            }
            {
                editCourse && <EditCourse />
            }
        </>

    )
}