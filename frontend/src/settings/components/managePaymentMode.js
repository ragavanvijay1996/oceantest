import React, { useState } from "react"
import { Link } from "react-router-dom"

export const ManagePaymentMode = () => {
    const [addPaymentMode, setAddPaymentMode] = useState(false)

    const AddPaymentMode = () => {
        return (
            <div className="add-role">
                <div className="container">
                    <button onClick={() => setAddPaymentMode(false)} className="role-close btn btn-sm btn-danger">x</button>
                    <form>
                        <div>
                           <label>PaymentMode</label>
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
                    <button onClick={() => setAddPaymentMode(true)} className="btn btn-sm btn-primary">Add PaymentMode</button>

                </div>
                <table className="table table-sm small table-striped">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>PaymentMode</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>Cash</td>
                        </tr>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>Credit Card</td>
                        </tr>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>Debit Card</td>
                        </tr>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>Bank Tranfer</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            {
                addPaymentMode && <AddPaymentMode />
            }
        </>

    )
}