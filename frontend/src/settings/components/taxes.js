import React, { useState } from "react"
import { Link } from "react-router-dom"

export const Taxes = () => {
    const [addRole, setAddRole] = useState(false)

    const AddRole = () => {
        return (
            <div className="add-role">
                <div className="container">
                    <button onClick={() => setAddRole(false)} className="role-close btn btn-sm btn-danger">x</button>
                    <form>
                        <div>
                           <label>Tax Name</label>
                        <input type="text" className="form-control" /> 
                        </div>
                        <div>
                            <label>Tax Value</label>
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
                    <Link to='/' className="btn btn-sm btn-primary ">Back</Link>
                    <button onClick={() => setAddRole(true)} className="btn btn-sm btn-primary">Add Tax</button>

                </div>
                <table className="table table-sm small table-striped">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Tax Name</th>
                            <th>Tax Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>CGST</td>
                            <td>6.00000%</td>
                        </tr>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>SGST</td>
                            <td>6.00000%</td>
                        </tr>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>IGST</td>
                            <td>12.00000%</td>
                        </tr>
                    </tbody>
                </table>
            
            </div>
            {
                addRole && <AddRole />
            }
        </>

    )
}