import React, {useEffect, useState} from 'react';
import ActiveOrder from "./ActiveOrder";

const AllActiveOrders = () => {
    let [activegoods, sag] = useState([])

    useEffect(() => {
        fetch('http://localhost:7000/api/orders/active')
            .then(response => response.json())
            .then(data => sag(data))
    }, [])

    return (
        <div>
            {
                activegoods.map(el => <ActiveOrder oGoodId={el.goodId} oUserId={el.clientId} oInfos={el.addressAndInfo}/>)
            }
        </div>
    );
};

export default AllActiveOrders;