import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../Stor/Cart-Context';

const HeaderCartButton = (props) => {
    const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const cartItemCount = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump:''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighLighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighLighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {cartItemCount}
            </span>
        </button>
    );
}

export default HeaderCartButton;
