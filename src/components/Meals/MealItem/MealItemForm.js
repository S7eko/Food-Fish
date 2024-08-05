import React, { useRef, useState } from 'react';
import classes from './mealItemForm.module.css';
import Input from '../../UI/Input';

const MealForm = (props) => {
    const amountInputRef = useRef();
    const [amountIsvaled,setAmountIsValid]=useState(true);

    const amountChangeHandler = () => {
        setAmountIsValid(true);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 6) {
            setAmountIsValid(false);
            // Optionally display an error message here
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label='Amount'
                input={{
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '6',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>+ Add</button>
            {
                !amountIsvaled &&
                <p className={classes.error}>Please enter a valid amount (1-6)</p>
            }
        </form>
    );
};

export default MealForm;
