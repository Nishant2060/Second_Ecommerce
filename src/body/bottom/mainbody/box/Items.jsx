import React from 'react';
import './Items.css';

const Items = ({ image, name, price }) => {
    console.log(name,price)
    return (
        <div className='item p-4'>
            <img src={image} alt={name} />
            <p className='title'>{name}</p>
            <div className="item-prices">
                <div className='font-bold'>$ {price}</div>
            </div>
            <button className='butt'>Add to Cart</button><br />
            <button className='butt'>Description</button>
        </div>
    );
};

export default Items;
