import React from 'react';
import './styles/listOfGoods.css'
import Goods from "./Goods";
import {useParams} from "react-router-dom";

const ListOfGoods = () => {
    let {id} = useParams()

    return (
        <div className="listOfGoods">
            <Goods id={id}/>
        </div>
    );
};

export default ListOfGoods;