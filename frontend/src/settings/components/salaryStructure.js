import React, { useState } from "react"
import { Link } from "react-router-dom"

export const SalaryStructure = () => {
    const [addSalaryStructure, setAddSalaryStructure] = useState(false)
    const [showStructure, setShowStructure] = useState(false)

    const AddSalaryStructure = () => {
        return (
            <div className="add-role">
                <div className="container">
                    <button onClick={() => setAddSalaryStructure(false)} className="role-close btn btn-sm btn-danger">x</button>
                    <form>
                        <div>
                            <label>Structure Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div>
                            <label>Description</label>
                            <textarea className="form-control" />
                        </div>
                       
                        <button className="btn btn-sm btn-primary mt-2">Add</button>
                    </form>
                </div>

            </div>

        )
    }

    const ViewSalaryStructure = () => {
            return(
                <div className="main-container">
                    <table className="table table-sm table-bordered small">
                    <thead>
                        <tr>
                                <th>Salary Component</th>
                                <th>Annual Calculation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                                <td>Basic</td>
                                <td>CTC * 0.4</td>
                        </tr>
                            <tr>
                                <td>HRA</td>
                                <td>Basic * 0.5</td>
                            </tr>
                            <tr>
                                <td>Medical Allowance</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Conveyance Allowance</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Professional Allowance</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>LTA</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Food Coupons</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>House Rent</td>
                                <td>0</td>
                            </tr>
                    </tbody>
                    </table>
                </div>
            )
    }

    return (
        <>
            <div className="main-container">
                <div className="d-flex gap-2 mb-2">
                    <Link to="/" className="btn btn-sm btn-primary ">Back</Link>
                    <button onClick={() => setAddSalaryStructure(true)} className="btn btn-sm btn-primary">Add Salary Structure</button>

                </div>
                <table className="table table-sm small table-striped">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Salary Structure</th>
                            <th>Last Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr onClick={() => setShowStructure(!showStructure)} className="cursor-pointer ">
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>Manager</td>
                            <td>
                                19-sep-2021
                            </td>
                        </tr>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>HR</td>
                            <td>
                                19-sep-2021
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>
            {
                addSalaryStructure && <AddSalaryStructure />
            }
            {
                showStructure && <ViewSalaryStructure />
            }
        </>

    )
}