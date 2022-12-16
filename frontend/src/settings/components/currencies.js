import React, { useState } from "react"
import { Link } from "react-router-dom"

export const Currencies = () => {
    const [addCurrency, setAddCurrency] = useState(false)

    const AddCurrency = () => {
        return (
            <div className="add-role">
                <div className="container">
                    <button onClick={() => setAddCurrency(false)} className="role-close btn btn-sm btn-danger">x</button>
                    <form>
                        <div>
                             <label>Currency Name</label>
                             <input type="text" className="form-control" />
                        </div>
                        <div>
                            <label>Currency Code</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div>
                            <label>Symbol</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div>
                            <label>Conversion Rate</label>
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
                    <button onClick={() => setAddCurrency(true)} className="btn btn-sm btn-primary">Add Currency</button>

                </div>
                <table className="table table-sm small table-striped">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Currency Name</th>
                            <th>Currency Code</th>
                            <th>Symbol</th>
                            <th>Conversion Rate</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>Rupees, India</td>
                            <td>INR</td>
                            <td>₹</td>
                            <td>1.00000</td>
                            <td>active</td>
                        </tr>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>Dollars, USA</td>
                            <td>USD</td>
                            <td>$</td>
                            <td>1.00000</td>
                            <td>active</td>
                        </tr>
                      
                      
                    </tbody>
                </table>
            
            </div>
            {
                addCurrency && <AddCurrency />
            }
        </>

    )
}