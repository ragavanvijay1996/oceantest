import React, { useState, useRef } from "react";
import Elements from './Elements'
import axios from "axios";

const FormContainer = () => {
    const [formName, setFormName] = useState('')
    const [formNameShow, setFormNameShow] = useState(false)
    const [forms, setForms] = useState([
        // {
        //     id: 1,
        //     type: 'text',
        //     placeholder: 'Enter Name',
        //     label: 'Name',
        // },
        // {
        //     id: 2,
        //     type: 'email',
        //     placeholder: 'Enter Email',
        //     label: 'Email',
        // },
        // {
        //     id: 3,
        //     type: 'textArea',
        //     placeholder: 'Enter Message',
        //     label: 'Message'
        // },
        // {
        //     id: 4,
        //     type: 'button',
        //     color: 'btn-primary',
        //     text: 'Save',
        // },

    ])
    const [showEdit, setShowEdit] = useState(false)
    const [editSection, setEditSection] = useState([{}])
    const [dragging, setDragging] = useState(false);
    const [eId , setEid] = useState('')
    const [sectionClass, setSectionClass] = useState('')


    const addText = () => {
        setForms([...forms, { id: new Date().getTime().toString(),type: 'text', placeholder: 'Enter Text', label: 'Text' }])
    }
    const addNumber = () => {
        setForms([...forms, { id: new Date().getTime().toString(),type: 'number', placeholder: 'Enter Number', label: 'Number' }])
    }
    const addBtn = () => {
        setForms([...forms, { id: new Date().getTime().toString(),type: 'button', color: 'btn-primary', text: 'Button' }])
    }
    const addDate = () => {
        setForms([...forms, { id: new Date().getTime().toString(),type: 'date', label: 'Date' }])

    }
    const addEmail = () => {
        setForms([...forms, { id: new Date().getTime().toString(),type: 'email', placeholder: 'Enter Email', label: 'Email' }])

    }
    const addFile = () => {
        setForms([...forms, { id: new Date().getTime().toString(),type: 'file', label: 'Attachments' }])

    }
    const addRadio = () => {
        setForms([...forms, { id: new Date().getTime().toString(),type: 'radio', label: 'Radio' }])

    }
    const addCheckBox = () => {
        setForms([...forms, { id: new Date().getTime().toString(),type: 'checkbox', label: 'Checkbox' }])

    }
    const addSelect = () => {
        setForms([...forms, { id: new Date().getTime().toString(),type: 'select', label: 'Select', options: []}])

    }
    const addTextArea = () => {
        setForms([...forms, { id: new Date().getTime().toString(),type: 'textarea', placeholder: 'Enter Message', label: 'Message' }])

    }
    const addPassword = () => {
        setForms([...forms, { id: new Date().getTime().toString(), type: 'password', placeholder: 'Enter Password', label: 'Password' }])

    }
    const addLabel = () => {
        setForms([...forms, { id: new Date().getTime().toString(), type: 'label', label: 'Label' }])

    }
    const addHeading = () => {
        setForms([...forms, { id: new Date().getTime().toString(), type: 'heading', label: 'Heading' }])

    }
    const removeElement = (id) => {
        const newForm = forms.filter((form) => form.id !== id)
        setForms(newForm)
    }
    const onDrop = (e) => {
        const type = e.dataTransfer.getData('type')
        if (type === 'text') {
            addText()
        }
        if (type === 'number') {
            addNumber()
        }
        if (type === 'date') {
            addDate()
        }
        if (type === 'email') {
            addEmail()
        }
        if (type === 'file') {
            addFile()
        }
        if (type === 'password') {
            addPassword()
        }
        if (type === 'radio') {
            addRadio()
        }
        if (type === 'textarea') {
            addTextArea()
        }
        if (type === 'checkbox') {
            addCheckBox()
        }
        if (type === 'button') {
            addBtn()
        }
        if (type === 'label') {
            addLabel()
        }
        if (type === 'select') {
            addSelect()
        }
        if (type === 'heading') {
            addHeading()
        }

    }
    const addSingleSection = () => {
        setSectionClass('')
    }
    const addDoubleSection = () => {
        setSectionClass('double-section')
    }
    const addTripleSection = () => {
        setSectionClass('triple-section')
    }
    const EditElements = ({label, placeholder}) => {
        const [labelName, setLabelName] = useState('')
        const [placeholderName, setPlaceHolderName] = useState('')
        const [btnText, setBtnText] = useState('')
        const [btnColor, setBtnColor] = useState('')
        const [radioLabel, setRadioLabel] = useState('')
        const [selectLabel, setSelectLabel] = useState('')
        const [selectOption, setSelectOption] = useState('')
        const [selectOptions, setSelectOptions] = useState([])
        const [headingTxt, setHeadingTxt] = useState('')
        const [isRequired, setIsRequired] = useState(false)
        // const singleElement = forms.filter((form) => form.id === eId)
        // console.log(singleElement[0].label = labelName)
        // console.log(singleElement)
       const objIndex = forms.findIndex((form => form.id === eId));
       if(labelName && placeholderName) {
        forms[objIndex].label = labelName
           forms[objIndex].placeholder = placeholderName
           forms[objIndex].isRequired = isRequired
       }
        if (forms[objIndex].type === 'radio' || forms[objIndex].type === 'checkbox') { 
            if (radioLabel) {
                forms[objIndex].label= radioLabel
            }
            return (
                <div className="shadow p-2 w-50 edit-elements  bg-white">

                    <div>
                        <label>Label</label>
                        <input type="text" className="form-control" value={radioLabel} onChange={(e) => setRadioLabel(e.target.value)} />
                    </div>
                    <div className="mt-2">
                        <button onClick={() => setShowEdit(false)} className="btn btn-sm btn-secondary">Close</button>
                    </div>
                </div>
            )
        }
       
        if (forms[objIndex].type === 'button') {
          if (btnText && btnColor) {
              forms[objIndex].text = btnText
              forms[objIndex].color = btnColor
          }
          return (
             <div className="shadow p-2 w-50 edit-elements  bg-white">

              <div>
                  <label>Button Text</label>
                  <input type="text" className="form-control" value={btnText} onChange={(e) => setBtnText(e.target.value)} />
              </div>
              <div>
                  <label>Button Color</label>
                  <input type="text" className="form-control" value={btnColor} onChange={(e) => setBtnColor(e.target.value)} />
              </div>
              <div className="mt-2">
                  <button onClick={() => setShowEdit(false)} className="btn btn-sm btn-secondary">Close</button>
              </div>
          </div>
          )
         
      }
        if (forms[objIndex].type === 'heading') {
            if (headingTxt) {
                forms[objIndex].label = headingTxt
            }
            return (
                <div className="shadow p-2 w-50 edit-elements  bg-white ">

                    <div>
                        <label>Heading Text</label>
                        <input type="text" className="form-control" value={headingTxt} onChange={(e) => setHeadingTxt(e.target.value)} />
                    </div>
                    <div className="mt-2">
                        <button onClick={() => setShowEdit(false)} className="btn btn-sm btn-secondary">Close</button>
                    </div>
                </div>
            )

        }
        if (forms[objIndex].type === 'select') {
            
            if (selectLabel && selectOptions && forms[objIndex].id === eId) {
                forms[objIndex].label = selectLabel
                forms[objIndex].options = selectOptions
            }
            
            const handleSelect = () => {
                setSelectOptions([...selectOptions, selectOption])
                setSelectOption('')

            }
            console.log(selectOptions)
            return (
                <div className="shadow p-2 w-50 edit-elements  bg-white">

                    <div>
                        <label>Label</label>
                        <input type="text" className="form-control" value={selectLabel} onChange={(e) => setSelectLabel(e.target.value)} />
                    </div>
                    <div>
                        <label>Options</label>
                        <div className="d-flex gap-2 mt-2"> 
                        <input type="text" className="form-control" value={selectOption} onChange={(e) => setSelectOption(e.target.value)} />
                        <button onClick={handleSelect} className="btn btn-sm btn-secondary">Add</button>
                        </div>
                    </div>
                    <div className="mt-2">
                        <button onClick={() => setShowEdit(false)} className="btn btn-sm btn-secondary">Close</button>
                    </div>
                </div>
            )

        }
        return (
             <div className="shadow p-2 w-50 edit-elements  bg-white">
               
                <div>
                    <label>Label Name</label>
                    <input type="text" className="form-control" value={labelName} onChange={(e) => setLabelName(e.target.value)}  />
                </div>
                <div>
                    <label>Placeholder Name</label>
                    <input type="text" className="form-control mb-2" value={placeholderName} onChange={(e) => setPlaceHolderName(e.target.value)}  />
                </div>
                <div>
                    <input type="checkbox" className="form-check-input me-2 "  onChange={(e) => setIsRequired(e.target.checked)} />
                    <label>Required</label>

                </div>
                <div className="mt-2">
                    <button onClick={() => setShowEdit(false)} className="btn btn-sm btn-secondary">Close</button>
                </div>
            </div>
        )
    }
    const editElement = (id) => {
        const editData = forms.find((form) => form.id === id)
        setEditSection(editData)
       setShowEdit(true)
        setEid(id)

    }
    console.log(forms)
    const createForm = async () => {
        try {
            await axios.post(`/api/v1/form/new`, { formName: formName, formElements: forms, formClassName: sectionClass })

        } catch (err) {
            if (err.response.status === 500) {
                console.log('There was a problem with the server')
            } else {
                console.log(err.response.data.msg)
            }
        }
    }
   

    const dragItem = useRef();
    const dragItemNode = useRef();

    const handleDragStart = (e, item) => {
        console.log('drag start', item)
        dragItemNode.current = e.target;
        dragItem.current = item;

    }

    const handleDragEnter = (e, item) => {
        console.log('drag Enter', item)
        // if (dragItemNode.current !== e.target) {
        //     setForms(oldForms => {
        //         let newList = JSON.parse(JSON.stringify(oldForms))
        //         newList.splice(item, 0, newList.splice(dragItem.current, 1)[0])
        //         return newList
        //     })

        // }
    }
  



    return (
        <div className="main-container d-flex gap-2">

            <div className="w-100">
                {
                    formNameShow && <div className="set-form-name">
                        <label>Form Name</label>
                        <input type='text' value={formName} onChange={e => setFormName(e.target.value)} className="form-control mb-2" placeholder="Enter Form Name" />
                        <button onClick={() => setFormNameShow(false)} className="btn btn-sm btn-secondary">Close</button>
                    </div>
                }
                <div className="d-flex gap-2 justify-content-between mb-2">
                    <div className="d-flex align-items-center gap-2">
                        <h5 className="m-0">{formName ? formName : "Enter Form Name"}</h5>
                        <button onClick={() => setFormNameShow(true)} className="border-0 bg-transparent"><i class="bi bi-pen"></i></button>
                    </div>
                    <button onClick={createForm} className="btn btn-sm btn-success">Save</button>
                </div>
                <div className={sectionClass ? `form-field ${sectionClass}`: 'form-field'}onDrop={onDrop} onDragOver={(e) => e.preventDefault()} >
                    {
                        forms.map((form, item) => {
                            const { id, type, placeholder, label, color, text, options, isRequired } = form
                            if (type === 'text' || type === 'email' || type === 'number' || type === 'date' || type === 'file' || type === 'password') {
                                return (
                                    <div key={id} className="mb-2 i-item" draggable onDragEnter={(e) => handleDragEnter(e, item)} onDragStart={(e) => handleDragStart(e, item)}>
                                        <div className="d-flex justify-content-between">
                                            <label>{label}</label>
                                            <div className="d-flex i-btn">
                                                <button onClick={() => editElement(id)} className="badge btn-secondary border-0">Edit</button>
                                                <button onClick={() => removeElement(id)} className="badge btn-danger border-0">Delete</button>
                                            </div>
                                        </div>
                                        <input placeholder={placeholder} type={type} required={isRequired} className='form-control' />
                                        {

                                          eId === id &&  showEdit && <EditElements label={label} placeholder={placeholder}/>
                                        }
                                    </div>
                                )
                            }
                            if (type === 'radio' || type === 'checkbox') {
                                return (
                                    <div key={id} className="mb-2 i-item d-flex gap-2 ">
                                        <input type={type} className='form-check-input me-2 ' required={isRequired} />
                                        <label className="form-check-label">{label}</label>
                                        <div className="d-flex i-btn">
                                            <button onClick={() => editElement(id)} className="badge btn-secondary border-0">Edit</button>
                                            <button onClick={() => removeElement(id)} className="badge btn-danger border-0">Delete</button>
                                        </div>
                                        {

                                            eId === id && showEdit && <EditElements label={label} />
                                        }
                                    </div>
                                )
                            }
                            if (type === 'textarea') {
                                return (
                                    <div key={id} className="mb-2 i-item">
                                        <div className="d-flex justify-content-between">
                                            <label>{label}</label>
                                            <div className="d-flex i-btn">
                                                <button onClick={() => editElement(id)} className="badge btn-secondary border-0">Edit</button>
                                                <button onClick={() => removeElement(id)} className="badge btn-danger border-0">Delete</button>
                                            </div>
                                        </div>
                                        <textarea placeholder={placeholder} className='form-control' required={isRequired} />
                                        {

                                            eId === id && showEdit && <EditElements label={label} placeholder={placeholder} />
                                        }
                                    </div>
                                )
                            }
                            if (type === 'select') {
                                return (
                                    <div key={id} className="mb-2 i-item">
                                        <div className="d-flex justify-content-between">
                                            <label>{label}</label>
                                            <div className="d-flex i-btn">
                                                <button onClick={() => editElement(id)} className="badge btn-secondary border-0">Edit</button>
                                                <button onClick={() => removeElement(id)} className="badge btn-danger border-0">Delete</button>
                                            </div>
                                        </div>
                                        <select className="form-select" required={isRequired}>
                                            <option>-select-</option>
                                            {
                                                options.map((option) => {
                                                    return <option key={option.id}>{option}</option>
                                                })
                                              
                                            }
                                        </select>
                                        {

                                            eId === id && showEdit && <EditElements label={label} />
                                        }
                                    </div>
                                )
                            }
                            if (type === 'button') {
                                return (
                                    <div key={id} className="mb-2 i-item d-flex gap-2">
                                        <button className={`d-flex align-items-center btn btn-sm ${color}`}>{text}</button>
                                        <div className="d-flex i-btn">
                                            <button onClick={() => editElement(id)} className="badge btn-secondary border-0">Edit</button>
                                            <button onClick={() => removeElement(id)} className="badge btn-danger border-0">Delete</button>
                                        </div>
                                        {

                                            eId === id && showEdit && <EditElements color={color} text={text} />
                                        }
                                    </div>

                                )
                            }
                            if (type === 'label') {
                                return (
                                    <div key={id} className="mb-2 i-item d-flex gap-2">
                                        <label>{label}</label>

                                        <div className="d-flex i-btn">
                                            <button onClick={() => editElement(id)} className="badge btn-secondary border-0">Edit</button>
                                            <button onClick={() => removeElement(id)} className="badge btn-danger border-0">Delete</button>
                                        </div>
                                    </div>
                                )
                            }
                            if (type === 'heading') {
                                return (
                                    <div key={id} className="i-item d-flex align-items-center gap-2 heading-ele">
                                        <h5>{label}</h5>

                                        <div className="d-flex i-btn">
                                            <button onClick={() => editElement(id)} className="badge btn-secondary border-0">Edit</button>
                                            <button onClick={() => removeElement(id)} className="badge btn-danger border-0">Delete</button>
                                        </div>
                                        {

                                            eId === id && showEdit && <EditElements label={label} />
                                        }
                                    </div>
                                )
                            }
                            return (
                                <></>
                            )
                        })
                    }
                    {
                        forms.length === 0 && <h4 className="text-center container-1">+</h4>
                    }


                </div>
            </div>
            <Elements
                addText={addText}
                addNumber={addNumber}
                addBtn={addBtn}
                addDate={addDate}
                addEmail={addEmail}
                addFile={addFile}
                addRadio={addRadio}
                addTextArea={addTextArea}
                addPassword={addPassword}
                addCheckBox={addCheckBox}
                addLabel={addLabel}
                addSelect={addSelect}
                addHeading={addHeading}
                addSingleSection= {addSingleSection}
                addDoubleSection={addDoubleSection}
                addTripleSection={addTripleSection}
            />
        </div>

    )
}

export default FormContainer