import React, {useEffect, useState} from 'react';
import OneGoods from "./OneGoods";
import {Link} from "react-router-dom";

const Goods = (props) => {
    let [listTitle, setListTitle] = useState('Все товары: ')
    let [allGoods, setAllGoods] = useState([])

    useEffect(() => {
        fetch('http://localhost:7000/api/cats/id/' + props.id)
            .then(response => response.json())
            .then((data) => {
                setListTitle(data.name)

                // getting all goods
                // localhost:7000/api/goods/cat/1
                fetch('http://localhost:7000/api/goods/cat/' + props.id)
                    .then(response2 => response2.json())
                    .then(data2 => setAllGoods(data2))
            })
    }, [props.id])

    return (
        <div className="goods">
            <h1>{listTitle}</h1>
            <div className='gds'>
                {
                    allGoods.map(el => <OneGoods pId={el.id} imgSrc={el.imgSrc} title={el.title} desc={el.description} res={el.composition} price={el.price}/>)
                }
            </div>
        </div>
    );
};

export default Goods;