import React from 'react';
import {Link} from "react-router-dom";

const OneGoods = (props) => {
    return (
        <div className="onegoods">
            <img
                src={props.imgSrc}
                alt="" className="goodImg"/>
            <Link to={'/order/new/' + props.pId} className='dd title'>{props.title}</Link>
            <Link to={'/order/new/' + props.pId} className='dd desc'>{props.desc}</Link>
            <Link to={'/order/new/' + props.pId} className='dd res'>{props.res}</Link>
            <Link to={'/order/new/' + props.pId} className='dd price'>{props.price}$</Link>
        </div>
    );
};

export default OneGoods;