import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


export const ViewForm = () => {
    const {id} = useParams()
    const [formName, setFormName] = useState([])
    const [formClassName, setFormClassName] = useState('')
    const [elements, setElements] = useState([])
    const [value, setValue] = useState([])
    const [user, setUser] = useState([])
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    
    useEffect(() => {
        const loadResponse = async () => {
            const response = await axios.get('/api/v1/forms')
            const formData = response.data.forms.filter(data => data._id === id)
            console.log(formData)
            setFormName(formData[0].formName)
            setFormClassName(formData[0].formClassName)
            setElements(formData[0].formElements)
            const responseUser = await axios.get('/api/v1/me')
           
            setUser(responseUser.data.user)
        }

        loadResponse()

    }, [id, message])

  
const onChangeElement = (e) => {
    setValue({...value, [e.target.name]: e.target.value})
    console.log(value[e.target.name])
}
console.log(value)
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
const submitForm = async(e) => {
    e.preventDefault()
    try {
        await axios.post(`/api/v1/formData/new`, { ...value, formId: id, userId: user._id })
        setMessage('Submitted successfully')

    } catch (err) {
        if (err.response.status === 500) {
            setErrorMessage('There was a problem with the server')
        } else {
            setErrorMessage(err.response.data.msg)
        }
    }
    setTimeout(() => {
       window.location.reload();
    }, 1000)
    
}
    return (
        <div className="main-container">
            <h4>{formName}</h4>
            <form onSubmit={submitForm} className={formClassName}>

{
    elements.map(element => {
        const { _id, type, placeholder, label, color, text, options, isRequired } = element
        if (type === 'text' || type === 'email' || type === 'number' || type === 'date' || type === 'file' || type === 'password') {
            return (
                <div key={_id} className="mb-2 i-item w-100" >
                    <div className="d-flex justify-content-between">
                        <label>{label}</label>
                       
                    </div>
                    <input placeholder={placeholder} name={label} required={isRequired}  onChange={onChangeElement} type={type} className='form-control' />
                  
                </div>
            )
    }
    
       if (type === 'radio' || type === 'checkbox') {
            return (
                <div key={_id} className="mb-2 i-item d-flex gap-2 ">
                    <input type={type} name={label} onChange={onChangeElement} required={isRequired} className='form-check-input me-2 ' />
                    <label className="form-check-label">{label}</label>
                   
                </div>
            )
        }
        if (type === 'textarea') {
            return (
                <div key={_id} className="mb-2 i-item">
                    <div className="d-flex justify-content-between">
                        <label>{label}</label>
                       
                    </div>
                    <textarea placeholder={placeholder} name={label} required={isRequired} onChange={onChangeElement} className='form-control' />
                </div>
            )
        }
        if (type === 'select') {
            return (
                <div key={_id} className="mb-2 i-item">
                    <div className="d-flex justify-content-between">
                        <label>{label}</label>
                       
                    </div>
                    <select className="form-select" onChange={onChangeElement} name={label} required={isRequired} >
                        <option>-select-</option>
                        {
                            options.map((option) => {
                                return <>
                                    <option key={option._id} value={option}>{option}</option>
                                </>
                            })

                        }
                    </select>
                </div>
            )
        }
        if (type === 'button') {
            return (
                <div key={_id} className="mb-2 i-item d-flex gap-2">
                    <button className={`d-flex align-items-center btn btn-sm ${color}`}>{text}</button>
                   
                </div>

            )
        }
        if (type === 'heading') {
            return (
                <div key={id} className="mb-2 i-item d-flex align-items-center gap-2">
                    <h5 className="m-0">{label}</h5>
                </div>
            )
        }
return null

    } )
}
            </form>

            {message && <Message />}
            {errorMessage && <Message />}
        </div>

    )
}