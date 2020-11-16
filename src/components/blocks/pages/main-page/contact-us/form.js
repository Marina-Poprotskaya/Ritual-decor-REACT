import React from "react";

function Form(props) {
  const {
    onSubmit,
    onChangeName,
    onChangePhone,
    onChangeMessage,
    name,
    phoneNumber,
    textareaText,
  } = props;

  return (
    <form className="contact-us__insert" onSubmit={onSubmit}>
      <input
        value={name}
        type="text"
        name="name"
        placeholder="Ваше имя*"
        required
        onChange={onChangeName}
      />
      <input
        value={phoneNumber}
        type="tel"
        name="tel"
        placeholder="Номер телефона*"
        required
        onChange={onChangePhone}
      />
      <textarea
        name="message"
        placeholder="Сообщение"
        value={textareaText}
        onChange={onChangeMessage}
      ></textarea>
      <input type="submit" className="button" value="Оставить заявку"></input>
    </form>
  );
}

export default Form;
