import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import './styles/neworder.css'

const NewOrder = () => {
    let {id} = useParams()

    let [info_address, set_info_address] = useState('')
    let [info_info, set_info_info] = useState('')

    function sendForm() {
        const dto = {
            goodId: id,
            clientId: 0,
            addressAndInfo: info_address + ',' + info_info
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dto)
        };

        fetch('http://localhost:7000/api/orders', requestOptions)
            .then(response => response.json())
            .then(dataa => console.log(dataa))

        set_info_address('')
        set_info_info('')
    }

    useEffect(() => {

    }, [id])

    return (
        <div className="neworder sect">
            <h2>Новый заказ</h2>
            <div className="br"></div>


<div className="indev">
    <h3>Информация о товаре: </h3>
    <p className='pgg'><strong>Название: </strong> Title</p>
    <p className='pgg'><strong>Описание: </strong> Description</p>
    <p className='pgg'><strong>Инградиенты: </strong> Composition</p>
    <p className='pgg'><strong>Цена: </strong> price</p>
</div>

            <div className="br"></div>

            <h3>Заполните данные: </h3>
            <div className="dataenter">
                <strong>Адрес: </strong> <input type='text' value={info_address} onChange={event => set_info_address(event.target.value)}/>
            </div>
            <div className="br"></div>
            <div className="br"></div>
            <div className="dataenter">
                <strong>Предпочтения: </strong> <input type='text' value={info_info} onChange={event => set_info_info(event.target.value)}/>
            </div>
            <div className="br"></div>
            <div className="br"></div>
            <button onClick={sendForm}>Отправить</button>
        </div>
    );
};

export default NewOrder;