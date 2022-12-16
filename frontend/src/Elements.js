import React from "react";

const Elements = ({
    addText, 
    addNumber, 
    addBtn, 
    addDate, 
    addEmail, 
    addFile, 
    addRadio, 
    addTextArea, 
    addPassword, 
    addCheckBox,
    addLabel,
    addSelect,
    addSingleSection,
    addDoubleSection,
    addTripleSection,
    addHeading
}) => {
   
    return (
        <div className="elements-container">
            <ul className="list-unstyled">
                <li>
                    <button draggable  onDragStart={(e) => e.dataTransfer.setData('type', 'text') } onClick={addText}><i className="bi bi-chat-left-text"></i>
                        Text
                    </button>
                </li>
                <li>
                    <button draggable onDragStart={(e) => e.dataTransfer.setData('type', 'number')} onClick={addNumber}><i className="bi bi-123"></i>
                        Number
                    </button>
                </li>
                <li>
                    <button draggable onDragStart={(e) => e.dataTransfer.setData('type', 'date')} onClick={addDate}><i className="bi bi-calendar-date"></i>
                        Date
                    </button>
                </li>
                <li>
                    <button draggable onDragStart={(e) => e.dataTransfer.setData('type', 'email')} onClick={addEmail}><i className="bi bi-envelope"></i>
                        Email
                    </button>
                </li>
                <li>
                    <button onDragStart={(e) => e.dataTransfer.setData('type', 'file')} draggable onClick={addFile}><i className="bi bi-folder"></i>
                        File
                    </button>
                </li>
                <li>
                    <button onDragStart={(e) => e.dataTransfer.setData('type', 'password')} draggable onClick={addPassword}><i className="bi bi-eye-slash"></i>
                        Password
                    </button>
                </li>
                <li>
                    <button onDragStart={(e) => e.dataTransfer.setData('type', 'radio')} draggable onClick={addRadio}><i className="bi bi-ui-radios-grid"></i>
                        Radio
                    </button>
                </li>
                <li>
                    <button onDragStart={(e) => e.dataTransfer.setData('type', 'textarea')} draggable onClick={addTextArea}><i className="bi bi-textarea-t"></i>
                        text area
                    </button>
                </li>
                <li>
                    <button onDragStart={(e) => e.dataTransfer.setData('type', 'checkbox')} draggable onClick={addCheckBox}><i className="bi bi-ui-checks"></i>
                        checkbox
                    </button>
                </li>
                <li>
                    <button onDragStart={(e) => e.dataTransfer.setData('type', 'select')} draggable onClick={addSelect}><i className="bi bi-arrow-down-square"></i>
                        Select
                    </button>
                </li>
                <li>
                    <button onDragStart={(e) => e.dataTransfer.setData('type', 'button')} draggable onClick={addBtn}><i className="bi bi-menu-button"></i>
                        Button
                    </button>
                </li>
                <li>
                    <button draggable onDragStart={(e) => e.dataTransfer.setData('type', 'heading')} onClick={addHeading}><i className="bi bi-chat-left-text"></i>
                        Heading
                    </button>
                </li>
                <li>
                    <button onClick={addSingleSection}><i className="bi bi-box"></i>
                        Single section
                    </button>
                </li>
                <li>
                    <button onClick={addDoubleSection}><i className="bi bi-box"></i>
                        Double Section
                    </button>
                </li>
                <li>
                    <button onClick={addTripleSection}><i className="bi bi-box"></i>
                        Triple Section
                    </button>
                </li>
            </ul>
           
        </div>
    )
}

export default Elements