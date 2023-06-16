import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({ product, handleRemoveItem }) => {
    const {id, name, price, quantity,shipping,img } = product;
    return (
        <div className='reviewItem'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="details-container">
                <div className="details">
                    <p>{name}</p>
                    <p><small>Price: ${ price}</small></p>
                    <p><small>Shipping: ${ shipping}</small></p>
                    <p><small>Quantity:{ quantity}</small></p>

                </div>
                <div className="delete-container">
                    <button onClick={()=>handleRemoveItem(id)} className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;