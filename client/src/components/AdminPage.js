import React, {useState} from 'react';
import './styles/admin.css'
import AllActiveGoods from "./AllActiveGoods";

const AdminPage = () => {
    let [catInput, setCatInput] = useState('')

    let [gi_title, sgi_title] = useState('')
    let [gi_desc, sgi_desc] = useState('')
    let [gi_res, sgi_res] = useState('')
    let [gi_price, sgi_price] = useState('')
    let [gi_bycat, sgi_bycat] = useState('')
    let [gi_imgsrc, sgi_imgsrc] = useState('')

    function newCategory() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: catInput})
        };

        fetch('http://localhost:7000/api/cats', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))

        setCatInput('')
    }

    function newGood() {
        const dto = {
            title: gi_title,
            description: gi_desc,
            composition: gi_res,
            price: parseInt(gi_price),
            byCat: parseInt(gi_bycat),
            imgSrc: gi_imgsrc
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dto)
        };

        fetch('http://localhost:7000/api/goods', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))

        sgi_title('')
        sgi_desc('')
        sgi_res('')
        sgi_price('')
        sgi_bycat('')
        sgi_imgsrc('')
    }

    return (
        <div className="adminpage sect">
            <h1>Admin page</h1>

            <h3>Новая категория: </h3>
            <input type="text" placeholder='Название' value={catInput} onChange={event => setCatInput(event.target.value)}/>
            <br/>
            <button onClick={newCategory}>Создать</button>

            <br/><br/>

            <h3>Новый товар: </h3>
            <input className='marginrt' type="text" placeholder='Заголовок' value={gi_title} onChange={event => sgi_title(event.target.value)}/>
            <input className='marginrt' type="text" placeholder='Описание' value={gi_desc} onChange={event => sgi_desc(event.target.value)}/>
            <input className='marginrt' type="text" placeholder='Инградиенты' value={gi_res} onChange={event => sgi_res(event.target.value)}/>
            <input className='marginrt' type="text" placeholder='Цена' value={gi_price} onChange={event => sgi_price(event.target.value)}/>
            <input className='marginrt' type="text" placeholder='Номер категории' value={gi_bycat} onChange={event => sgi_bycat(event.target.value)}/>
            <input className='marginrt' type="text" placeholder='Ссылка на фото' value={gi_imgsrc}  onChange={event => sgi_imgsrc(event.target.value)}/>

            <br/>
            <button onClick={newGood}>Создать</button>

            <br/><br/>
            <h3>Активные заказы: </h3>
            <AllActiveGoods/>
        </div>
    );
};

export default AdminPage;