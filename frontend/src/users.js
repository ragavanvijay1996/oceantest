import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export const UsersList= () => {
    const [users, setUsers] = useState([])
    const [usersKey, setUsersKey] = useState([])
    const [usersValues, setUsersValues] = useState([])
    console.log(usersValues)
    useEffect(() => {
        const loadResponse = async () => {
            const response = await axios.get('/api/v1/formData')
            setUsers(response.data.users)
            const headingTxt = response.data.users.map((user) => {
                return Object.keys(user)
            })
            setUsersKey(headingTxt)
            const mainTxt = response.data.users.map((user) => {
                return Object.values(user)
            })
            setUsersValues(mainTxt)
        }
        

        loadResponse()

    }, [])

 

    return (
        <div className="main-container">
           
            <table className="table table-sm small">
                <thead>
                    <tr>
                    {
                      usersKey[0] && usersKey[0].map((txt) => {
                            return <th>{txt}</th>
                        })
                    }
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                        {
                         usersValues.map((txt) => {
                             return <tr>
                                {
                                    txt.map((text) => {
                                        return <td>{text}</td>
                                    })
                                }
                                <td>
                                    <div className="d-flex gap-2">
                                         <button className="btn btn-sm btn-primary">Edit</button>
                                         <button className="btn btn-sm btn-secondary">Delete</button>
                                    </div>
                                    
                                </td>
                             </tr>
                            })
                        }

                  


                </tbody>
            </table>
        </div>
    )
}