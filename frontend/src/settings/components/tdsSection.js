import React, { useState } from "react"
import { Link } from "react-router-dom"

export const TdsSection = () => {
    const [addTdsSection, setAddTdsSection] = useState(false)

    const AddTdsSection = () => {
        return (
            <div className="add-role">
                <div className="container">
                    <button onClick={() => setAddTdsSection(false)} className="role-close btn btn-sm btn-danger">x</button>
                    <form>
                        <div>
                            <label>Section Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div>
                            <label>TDS%</label>
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
                    <button onClick={() => setAddTdsSection(true)} className="btn btn-sm btn-primary">Add TDS Section</button>

                </div>
                <table className="table table-sm small table-striped">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Section Name</th>
                            <th>TDS%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>194Q</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>94C</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>195</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>94I</td>
                            <td>20</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            {
                addTdsSection && <AddTdsSection />
            }
        </>

    )
}