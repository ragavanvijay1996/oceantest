import React from "react"
import { Link } from "react-router-dom"

export const ManageLeave = () => {
    return (
        <>
            <div className="main-container">
                <div className="d-flex gap-2 mb-2">
                    <Link to="/" className="btn btn-sm btn-primary ">Back</Link>
                </div>
                <table className="table table-sm small table-striped">
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Casual Leave</th>
                            <th>Sick Leave</th>
                            <th>Comp Offs</th>
                            <th>Maternity Leave</th>
                            <th>Special Leave</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Amir</td>
                            <td>0</td>
                            <td>0</td>
                            <td>2</td>
                            <td>0</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Anamika</td>
                            <td>0</td>
                            <td>2</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                        </tr>

                    </tbody>
                </table>

            </div>
           
        </>

    )
}