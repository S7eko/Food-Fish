import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../Stor/Cart-Context';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const checkoutHandler = () => {
        cartCtx.clearCart();
    };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem 
                    key={item.id} 
                    name={item.name} 
                    amount={item.amount} 
                    price={item.price} 
                    onRemove={cartItemRemoveHandler.bind(null, item.id)} 
                    onAdd={cartItemAddHandler.bind(null, item)} 
                />
            ))}
        </ul>
    );

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button} onClick={checkoutHandler}>Checkout</button>}
            </div>
        </Modal>
    );
};

export default Cart;
