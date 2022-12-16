import { React, useState } from "react"
import { Link } from "react-router-dom"


export const AddLocation = () => {
    const [addLocation, setAddLocation] = useState(false)
    if (addLocation) {
        return (
            <div className="main-container">
                <div className="d-flex gap-2 mb-2">
                    <button onClick={() => setAddLocation(false)} className="btn btn-sm btn-primary ">Back</button>
                </div>
                <h6>Add Location</h6>
                <table className="table  small view-user-table">
                    <tbody>
                      
                        <tr className="align-middle">
                            <td>Company Name</td>
                            <td><input type="text"  className="form-control form-control-sm" /></td>
                            <td>Address</td>
                            <td><input type="text"  className="form-control form-control-sm" /></td>
                        </tr>
                        <tr className="align-middle">
                            <td>City</td>
                            <td><input type="text"  className="form-control form-control-sm" /></td>
                            <td>State</td>
                            <td><input type="text" className="form-control form-control-sm" /></td>
                        </tr>
                        <tr className="align-middle">
                            <td>Postal Code</td>
                            <td><input type="text"  className="form-control form-control-sm" /></td>
                            <td>Country</td>
                            <td><input type="text"  className="form-control form-control-sm" /></td>
                        </tr>
                    
                        <tr className="align-middle">
                           
                            <td>Registered GSTIN</td>
                            <td><input type="text" className="form-control form-control-sm" /></td>
                        </tr>
                    </tbody>
                </table>
                <div className="d-flex gap-2">
                    <button className="btn btn-sm btn-primary">Save</button>
                    <button className="btn btn-sm btn-secondary">Cancel</button>
                </div>
            </div>
        )
    }
    return (
        <div className="main-container">
            <div className="d-flex justify-content-between mb-2">
                <Link to="/" className="btn btn-sm btn-primary ">Back</Link>
                <button onClick={() => setAddLocation(true)} className="btn btn-primary btn-sm">Add Location</button>
            </div>
            <h6>Locations</h6>
            <table className="table table-bordered small">
                <thead>
                    <tr>
                        <th></th>
                        <th>Company Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Postal Code</th>
                        <th>Country</th>
                        <th>GSTIN</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr className="align-middle">
                        <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                            <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                        <td>XYZ</td>
                        <td>23A Golden Street Chennai India</td>
                        <td>Chennai</td>
                        <td>Tamilnadu</td>
                        <td>600088</td>
                        <td>India</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}