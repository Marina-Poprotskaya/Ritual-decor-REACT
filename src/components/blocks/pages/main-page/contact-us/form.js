import React from 'react';

function Form({onSubmit}) {

    return (
        <form className="contact-us__insert" onSubmit={onSubmit}>
            <input type="text" name="name" placeholder="Ваше имя*" required />
            <input
            type="tel"
            name="tel"
            placeholder="Номер телефона*"
            required
            />
            <textarea name="message" placeholder="Сообщение"></textarea>
            <input
            type="submit"
            className="button"
            value="Оставить заявку"
            ></input>
        </form>
    )
}

export default Form;