import React, { useState } from "react"
import { Link } from "react-router-dom"

export const ShiftPolicy= () => {
    const [addShiftPolicy, setAddShiftPolicy] = useState(false)

    const AddShiftPolicy = () => {
        return (
            <div className="add-role">
                <div className="container">
                    <button onClick={() => setAddShiftPolicy(false)} className="role-close btn btn-sm btn-danger">x</button>
                    <form>
                        <div>
                            <label>Shift Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div>
                            <label>Shift Time</label>
                            <input type="date" className="form-control" />
                        </div>
                        <div>
                            <label>Employees</label>
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
                    <button onClick={() => setAddShiftPolicy(true)} className="btn btn-sm btn-primary">Add Shift</button>

                </div>
                <table className="table table-sm small table-striped">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Shift Classification</th>
                            <th>Allotted Time of Shift</th>
                            <th>Applicable to Employees</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>Default Shift</td>
                            <td>
                            09.00AM - 06.00PM
                            </td>
                            <td>74 Employees</td>
                        </tr>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>Night Shift</td>
                            <td>
                                09.00 PM - 06.00AM
                            </td>
                            <td>23 Employees</td>
                        </tr>
                      
                    </tbody>
                </table>

            </div>
            {
                addShiftPolicy && <AddShiftPolicy />
            }
        </>

    )
}