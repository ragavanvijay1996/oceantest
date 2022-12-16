import React, { useState } from "react"
import { Link } from "react-router-dom"

export const ManageLedgers = () => {
    const [addLedger, setAddLedger] = useState(false)

    const AddLedger = () => {
        return (
            <div className="add-role">
                <div className="container">
                    <button onClick={() => setAddLedger(false)} className="role-close btn btn-sm btn-danger">x</button>
                    <form>
                        <div>
                           <label>Ledger Name</label>
                        <input type="text" className="form-control" /> 
                        </div>
                        <div>
                            <label>Account Code</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div>
                            <label>Account Code</label>
                            <select className="form-select">
                                <option>Bank Account</option>
                            <option>Cash in Hand</option>
                                <option>Current Assets</option>
                            </select>
                        </div>
                        <div>
                            <label>Opening Balance</label>
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
                    <button onClick={() => setAddLedger(true)} className="btn btn-sm btn-primary">Add Ledger</button>

                </div>
                <table className="table table-sm small table-striped">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Ledger Name</th>
                            <th>Under</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>ABC</td>
                            <td>Trade Payables</td>
                        </tr>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>XYZ</td>
                            <td>Trade Receivables</td>
                        </tr>
                     
                    </tbody>
                </table>

            </div>
            {
                addLedger && <AddLedger />
            }
        </>

    )
}