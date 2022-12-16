import React, { useState } from "react"
import { Link } from "react-router-dom"

export const CreateJobTitle= () => {
    const [addJobTitle, setAddJobTitle] = useState(false)

    const AddJobTitle = () => {
        return (
            <div className="add-role">
                <div className="container">
                    <button onClick={() => setAddJobTitle(false)} className="role-close btn btn-sm btn-danger">x</button>
                    <form>
                        <div>
                            <label>Job Title Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <button className="btn btn-sm btn-primary mt-2">Add</button>
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
                    <button onClick={() => setAddJobTitle(true)} className="btn btn-sm btn-primary">Add JobTitle</button>

                </div>
                <table className="table table-sm small table-striped">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>JobTitle Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>Manager</td>
                        </tr>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>Director</td>
                        </tr>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>Developer</td>
                        </tr>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>Finance Manager</td>
                        </tr>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>Payroll Admin</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            {
                addJobTitle && <AddJobTitle />
            }
        </>

    )
}