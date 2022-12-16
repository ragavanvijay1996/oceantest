import { React,useState } from "react"
import { Link } from "react-router-dom"


export const CompanyInformation = () => {
    const [editInformation, setEditInformation] = useState(false)
    if(editInformation) {
        return (
            <div className="main-container">
                <div className="d-flex gap-2 mb-2">
                    <button onClick={() => setEditInformation(false)} className="btn btn-sm btn-primary ">Back</button>
                </div>
                <h6>Company Information</h6>
                <table className="table  small view-user-table">
                    <tbody>
                        <tr className="align-middle">
                            <td>Company Logo</td>
                            <td><input type="file" className="form-control form-control-sm" /></td>
                            <td><img src="./logo192.png" alt="" width='100' /></td>

                        </tr>
                        <tr className="align-middle">
                            <td>Company Name</td>
                            <td><input type="text" value="ERP" className="form-control form-control-sm" /></td>
                            <td>Address</td>
                            <td><input type="text" value="23A Golden Street Chennai India" className="form-control form-control-sm" /></td>
                        </tr>
                        <tr className="align-middle">
                            <td>City</td>
                            <td><input type="text" value='Chennai' className="form-control form-control-sm" /></td>
                            <td>State</td>
                            <td><input type="text" value="Tamilnadu" className="form-control form-control-sm" /></td>
                        </tr>
                        <tr className="align-middle">
                            <td>Postal Code</td>
                            <td><input type="text" value="600088" className="form-control form-control-sm" /></td>
                            <td>Country</td>
                            <td><input type="text" value="India" className="form-control form-control-sm" /></td>
                        </tr>
                        <tr className="align-middle">
                            <td>Website</td>
                            <td><input type="text" className="form-control form-control-sm" /></td>
                            <td>Facebook</td>
                            <td><input type="text" className="form-control form-control-sm" /></td>
                        </tr>
                        <tr className="align-middle">
                            <td>Twitter</td>
                            <td><input type="text" className="form-control form-control-sm" /></td>
                            <td>LinkedIn</td>
                            <td><input type="text" className="form-control form-control-sm" /></td>
                        </tr>
                        <tr className="align-middle">
                            <td>Financial year starts in month</td>
                            <td><input type="text" className="form-control form-control-sm" /></td>
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
            <button onClick={() => setEditInformation(true)} className="btn btn-primary btn-sm">Edit</button>
            </div>
            <h6>Company Information</h6>
            <table className="table  small view-user-table">
                <tbody>
                    <tr>
                        <td className="align-middle">Company Logo</td>
                        <td><img src="./logo192.png" alt="" width='100' /></td>

                    </tr>
                    <tr className="align-middle">
                        <td>Company Name</td>
                        <td>ERP</td>
                        <td>Address</td>
                        <td>23A Golden Street Chennai India</td>
                    </tr>
                    <tr className="align-middle">
                        <td>City</td>
                        <td>Chennai</td>
                        <td>State</td>
                        <td>Tamilnadu</td>
                    </tr>
                    <tr className="align-middle">
                        <td>Postal Code</td>
                        <td>600088</td>
                        <td>Country</td>
                        <td>India</td>
                    </tr>
                    <tr className="align-middle">
                        <td>Website</td>
                        <td>https://example.com</td>
                        <td>Facebook</td>
                        <td></td>
                    </tr>
                    <tr className="align-middle">
                        <td>Twitter</td>
                        <td></td>
                        <td>LinkedIn</td>
                        <td></td>
                    </tr>
                     <tr className="align-middle">
                        <td>Financial year starts in month</td>
                        <td></td>
                        <td>Registered GSTIN</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}