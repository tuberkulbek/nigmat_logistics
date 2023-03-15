import React from "react";
import {useEffect, useState} from "react";
import { todoAPI } from "../../API/api"
import './contact.css'

export const SelectOptions = ({text, id, handleChangeMethod}) => {
    return (
        <div id={id} className={"options"} onClick={()=>handleChangeMethod(id)}>
            {text}
        </div>
    )
}

function Contact() {
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [method, setMethod] = useState("")
    const [items, setItems] = useState([]);
    const [options, setOptions] = useState(false);

    const handleChangeMessage = (event) => {
        setMessage(event.target.value);
    };
    const handleChangeName = (event) => {
        setName(event.target.value);
    };
    const handleChangeNumber = (event) => {
        setNumber(event.target.value);
    };
    const handleChangeMethod = (id) => {
        setMethod(variants[id].text);
        setOptions(!options)
    };

    const variants = [
        {
            id: 0,
            text: "Instagramm"
        }, {
            id: 1,
            text: "Интернет"
        }, {
            id: 2,
            text: "По рекомендации знакомых"
        }, {
            id: 3,
            text: "Другое"
        }
    ]

    const handleAddItem = () => {
        let newTask = {
            content: `номер телефона: ${number}, имя: ${name}, сообщение: ${message}, метод: ${method}`,
            project_id: 2277511004,
        }
        todoAPI.addTask(newTask, setItems, items)
    };
    const handleOpenOptions = () => {
        setOptions(!options)
    }

    useEffect(() => {
        todoAPI.getTasks(setItems)
    }, [])

    return (
        <section id="contact" className="wrapper style3">
            <div className="container">
                <h2>Позвольте нам помочь вам</h2>
                <p>Наша компания выражает вам огромное почтение за доверие, заполните нижеуказанные строки, мы вам обязательно дадим обратную связь</p>
                <div className="contact_form">
                    <div className="contact_half">
                        <input type="text" placeholder="Имя" onChange={handleChangeName}/>
                    </div>
                    <div className="contact_half">
                        <input type="email" placeholder="Номер телефона" onChange={handleChangeNumber}/>
                    </div>
                    <div className="contact_field" onClick={handleOpenOptions}>
                        <input className="contact_select" disabled placeholder={`Как вы нас нашли:                                                       ${method}`} />
                    </div>
                    {options && <div className="selected_options">{variants.map(e => <SelectOptions id={e.id} key={e.id} text={e.text} handleChangeMethod={handleChangeMethod} />)}</div>}
                    <div className="contact_field">
                        <textarea type="text" placeholder="Чем мы можем вам помочь" onChange={handleChangeMessage} value={message}/>
                    </div>
                    <button onClick={handleAddItem}>Отправить запрос</button>
                </div>
            </div>
        </section>
    );
}

export default Contact;