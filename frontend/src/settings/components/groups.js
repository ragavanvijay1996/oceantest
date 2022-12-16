import React, { useState } from "react"
import { Link } from "react-router-dom"

export const Groups = () => {
    const [addGroups, setAddGroups] = useState(false)

    const AddGroups = () => {
        return (
            <div className="add-role">
                <div className="container">
                    <button onClick={() => setAddGroups(false)} className="role-close btn btn-sm btn-danger">x</button>
                    <form>
                        <div>
                            <label>Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div>
                            <label>Description</label>
                            <textarea type="text" className="form-control" />
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
                    <button onClick={() => setAddGroups(true)} className="btn btn-sm btn-primary">Add Groups</button>

                </div>
                <table className="table table-sm small table-striped">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>Team Selling</td>
                            <td>Group Related to Sales</td>
                        </tr>
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>Marketing Group</td>
                            <td>Group Related to Marketing Activities</td>
                        </tr>
                       
                        <tr>
                            <td><button className="bg-transparent border-0"><i class="bi bi-pen"></i></button>
                                <button className="bg-transparent border-0"><i class="bi bi-trash"></i></button></td>
                            <td>Support Group</td>
                            <td>Group Related to providing Support to Customers</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            {
                addGroups && <AddGroups />
            }
        </>

    )
}