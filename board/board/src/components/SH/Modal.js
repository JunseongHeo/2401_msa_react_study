import React from "react";
import './Modal.css';

function Modal(props) {
    const closeModal = () => {
        props.closeModal();
    }

    return (
        <div className = 'Modal'>
            <div className='modalBody' onClick={(e) => e.stopPropagation()}>
                <button id = "modalCloseBtn" onClick={closeModal}>
                    X
                </button>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;