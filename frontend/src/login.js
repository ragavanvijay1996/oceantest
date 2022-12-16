import React, { useEffect, useRef, useState } from "react";
import axios from "axios";


export const Login = ({login}) => {
    const usernameRef = useRef()
    const passwordRef = useRef()
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    setTimeout(() => {
        if (message) {
            setMessage(false)
        }
        if (errorMessage) {
            setErrorMessage(false)

        }
    }, 3000)
    const Message = () => {
        if (message) {
            return (
                <div className="bg-success message">
                    <p className="text-white m-0">{message}</p>
                </div>
            )
        }

        return (
            <div className="bg-danger message">
                <p className="text-white m-0">{errorMessage}</p>
            </div>
        )
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          const response =  await axios.post('/api/v1/login', { email: usernameRef.current.value, password: passwordRef.current.value })
          console.log(response.data)
         setMessage('Logged in successfully')
          login()
        } catch (err) {
            if (err.response.status === 500) {
                setErrorMessage('There was a problem with the server')
            } else {
                setErrorMessage(err.response.data.msg)
            }
        }
    }
    return(
        <div className="login">
            <form onSubmit={handleSubmit} className='shadow bg-white p-4 rounded'>
                <h3>Login</h3>
                <p className="text-secondary">Sign In to your account</p>
                <div>
                    <label>Username</label>
                    <input type='text' className="form-control" ref={usernameRef}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' className="form-control" ref={passwordRef}/>
                </div>
                <button className="btn btn-sm btn-primary mt-2">Login</button>
            </form>
            {message && <Message />}
            {errorMessage && <Message />}
        </div>
    )
}