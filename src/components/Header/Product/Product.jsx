import React from 'react';
import './Product.css'
import { AiFillStar } from 'react-icons/ai';

const Product = (props) => {
    console.log(props);
    const { name, price, ratings, seller, img } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6 className='product-name'>{name}</h6>
            <p className='product-price'>Price: ${price}</p>
            <div className='product-info'>
                <p>Manufacturer:  {seller}</p>
                <p>Rating: {ratings} star <AiFillStar></AiFillStar></p>
            </div>

        </div>
    );
};

export default Product;