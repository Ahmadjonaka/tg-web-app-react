import React, {useState} from 'react';
import './Form.css';
const Form = () => {
    const {country , setCountry} = useState('');
    const {street , setStreet} = useState('');
    const {subject , setSubject} = useState('');

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={"form"}>
            <h3>Olish</h3>
            <input className={'input'} type={"type"} placeholder={"yurt"} value={country} onChange={onChangeCountry} />
            <input className={'input'} type={"text"} placeholder={"kocha"} value={street} onChange={onChangeStreet} />
            <select className={'select'} value={subject} onChange={onChangeSubject}>
                <option value={"physical"}>yuz</option>
                <option value={"physical"}>Street</option>
            </select>
        </div>
    );
};

export default Form;