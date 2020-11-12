import React from 'react';

function AddressItem(props) {
    return (
        <div className="point__adress__item">
            <div className="point__adress__img"></div>
            <div className="point__adress__name">{props.address}</div>
            <div className="point__adress__phone">
                <a href={`tel:${props.phoneLink}`}>{props.phone}</a>
            </div>
       </div>
    )
}

export default AddressItem;