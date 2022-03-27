import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './styles/listOfCats.css'

const ListOfCats = () => {
    let [allCats, setAllCats] = useState([])

    useEffect(() => {
        fetch('http://localhost:7000/api/cats')
            .then(response => response.json())
            .then(data => setAllCats(data))
    }, [])

    return (
        <div className="listOfCats">
            {
                allCats.map(el => <Link className='a' to={'/cat/' + el.id}>{el.name}</Link>)
            }
        </div>
    );
};

export default ListOfCats;