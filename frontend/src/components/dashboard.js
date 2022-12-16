import React, {useState, useEffect} from "react"
import axios from "axios"


export const Dashboard = ({departments, forms, teams}) => {
    const [users, setUsers] = useState([])
 
    useEffect(() => {
        const loadResponse = async () => {
            const response = await axios.get('/api/v1/admin/users')
            setUsers(response.data.users)
        }

        loadResponse()
    }, [])
    return (
        <div className="main-container">
            <h4>Dashboard</h4>
             <div className="d-flex gap-2 border-top border-bottom py-2">
                <div className="d-flex flex-column w-100 border-line-i ps-2">
                    <p className="m-0 text-secondary">Total Users</p>
                    <h5>{users.length}</h5>
                </div>
                <div className="d-flex flex-column w-100 border-line-ii ps-2">
                    <p className="m-0 text-secondary">Total Modules</p>
                    <h5>{departments.length}</h5>
                </div>
                <div className="d-flex flex-column w-100 border-line-iii ps-2">
                    <p className="m-0 text-secondary">Total Forms</p>
                    <h5>{forms.length}</h5>
                </div>
                <div className="d-flex flex-column w-100 border-line-iv ps-2">
                    <p className="m-0 text-secondary">No. Of Team</p>
                    <h5>{teams.length}</h5>
                </div>
            </div>
        </div>
    )
}