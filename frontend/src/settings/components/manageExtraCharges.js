import React, { useState } from "react"
import { Link } from "react-router-dom"

export const ManageExtraCharges = () => {
    const [addExtraCharges, setAddExtraCharges] = useState(false)

    const AddExtraCharges = () => {
        return (
            <div className="add-role">
                <div className="container">
                    <button onClick={() => setAddExtraCharges(false)} className="role-close btn btn-sm btn-danger">x</button>
                    <form>
                        <div>
                            <label>ExtraCharges Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="">
                            <label>On</label>
                            <div className="d-flex gap-2">
                                <div className="d-flex gap-2">
                                <label>Sales</label>
                                <input type="radio" name="on" className="form-check-input" />
                            </div>
                                <div className="d-flex gap-2">
                                <label>Purchase</label>
                                <input type="radio" name="on" className="form-check-input" />
                            </div>
                            </div>
                         
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
                    <button onClick={() => setAddExtraCharges(true)} className="btn btn-sm btn-primary">Add ExtraCharges</button>

                </div>
                <table className="table table-sm small table-striped">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>ExtraCharges</th>
                            <th>On Sale</th>
                            <th>On Purchase</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>Freight Charges</td>
                            <td>Yes</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>Service Charge</td>
                            <td>Yes</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>Unloading Charges</td>
                            <td>Yes</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>test Charges</td>
                            <td>Yes</td>
                            <td>No</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            {
                addExtraCharges && <AddExtraCharges />
            }
        </>

    )
}