import React from 'react';
import './Cart.css'
const Cart = (props) => {
   const {cart} = props
    return (
        <div>
            <h5 className='order-summery'>Order Summery</h5>
            <div className='cart-info'>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: $</p>
                <p>Total Shipping Charge: $</p>
                <p>Tax: $114</p>
            </div>
            <h6 className='grand-total'>Grand Total: $</h6>
        </div>
    );
};

export default Cart;