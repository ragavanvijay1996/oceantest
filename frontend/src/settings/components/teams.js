import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import axios from "axios"


export const Teams = () => {
    const [addTeam, setAddTeam] = useState(false)
    const [editTeam, setEditTeam] = useState(false)
    const [teams, setTeams] = useState(false)
    const teamNameRef = useRef()

    useEffect(() => {
        const loadResponse = async () => {
            const response = await axios.get('/api/v1/teams')
            setTeams(response.data.team)
        }

        loadResponse()

    }, [])
    const AddTeam = () => {
        const handleAdd = async (e) => {
            e.preventDefault()
            try {
                await axios.post('/api/v1/team/new', { teamName: teamNameRef.current.value })
            } catch (err) {
                if (err.response.status === 500) {
                    console.log('There was a problem with the server')
                } else {
                    console.log(err.response.data.msg)
                }
            }
        }
        return (
            <div className="add-role">
                <div className="container">
                    <button onClick={() => setAddTeam(false)} className="role-close btn btn-sm btn-danger">x</button>
                    <form>
                        <label>Team Name</label>
                        <input type="text" className="form-control" ref={teamNameRef} />
                        <button onClick={handleAdd} className="btn btn-sm btn-primary mt-2">Add</button>
                    </form>
                </div>

            </div>

        )
    }
    const EditTeam = () => {
        const handleEdit = async (e) => {
            e.preventDefault()
            try {
                await axios.put(`/api/v1/team/`, { teamName: teamNameRef.current.value })
            } catch (err) {
                if (err.response.status === 500) {
                    console.log('There was a problem with the server')
                } else {
                    console.log(err.response.data.msg)
                }
            }
        }

        return (
            <div className="add-role">
                <div className="container">
                    <button onClick={() => setEditTeam(false)} className="role-close btn btn-sm btn-danger">x</button>
                    <form>
                        <label>Team Name</label>
                        <input type="text" className="form-control" ref={teamNameRef} />
                        <button onClick={handleEdit} className="btn btn-sm btn-primary mt-2">Save</button>
                    </form>
                </div>
            </div>
        )
    }
    const removeTeam = async (e, _id) => {
        e.preventDefault()
        try {
            await axios.delete(`/api/v1/team/${_id}`)

        } catch (err) {
            if (err.response.status === 500) {
                console.log('There was a problem with the server')
            } else {
                console.log(err.response.data.msg)
            }
        }
    }
    return (
        <>
            <div className="main-container">
                <div className="d-flex gap-2 mb-2">
                    <Link to='/' className="btn btn-sm btn-primary ">Back</Link>
                    <button onClick={() => setAddTeam(true)} className="btn btn-sm btn-primary">Add Team</button>

                </div>
                <table className="table table-sm small table-striped">
                    <thead>
                        <tr>
                            <th>Action</th>
                            <th>Role Name</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            teams && teams.map((team) => {
                                const { teamName, _id } = team
                                return <tr key={_id}>
                                    <td><button onClick={() => setEditTeam(true)} className="bg-transparent border-0"><i className="bi bi-pen"></i></button>
                                        <button onClick={e => removeTeam(e, _id)} className="bg-transparent border-0"><i className="bi bi-trash"></i></button></td>
                                    <td>{teamName}</td>
                                    <td>{_id}</td>
                                </tr>
                            })
                        }


                    </tbody>
                </table>

            </div>
            {
                addTeam && <AddTeam />
            }
            {
                editTeam && <EditTeam />
            }
        </>

    )
}