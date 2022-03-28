import React from 'react';

const ActiveGood = (props) => {
    return (
        <div className="activegood">
            <h4>ID товара: {props.oGoodId} | ID пользователя: {props.oUserId} | Адрес и информация: {props.oInfos}</h4>
            <button className='nm'>Готово</button>
        </div>
    );
};

export default ActiveGood;