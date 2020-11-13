import React from 'react';
import Form from '../pages/main-page/contact-us/form';

import './style.css';

function Modal(props) {

    const {onSubmit, onClick} = props;
    return (
    <div className="modal-wrapper">
        <div className="modal-form">
            <button type='button' className="close-btn" onClick={onClick}>x</button>
            <div className="title">
                <h3>У вас есть вопросы?</h3>
            </div>
            <p>Введите свои данные  наш менеджер свяжется с вами!</p>
            <Form onSubmit={onSubmit}/>
        </div>
  </div>
  )
}

export default Modal;