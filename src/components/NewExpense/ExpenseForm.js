import './ExpenseForm.css';
import { useState } from 'react';

function ExpenseForm(props) {
    const [entertedTitle, setEntertedTitle] = useState('');
    const [entertedAmount, setEntertedAmount] = useState('');
    const [entertedDate, setEntertedDate] = useState('');

    const titleChangeHandler = (event) => {
        setEntertedTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEntertedAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEntertedDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: entertedTitle,
            amount: entertedAmount,
            date: new Date(entertedDate)
        }

        props.onExpenseData(expenseData);

        setEntertedTitle('');
        setEntertedAmount('');
        setEntertedDate('');
    }

    const onCancel = () => {
        props.updateFormVisibility();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={entertedTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={entertedAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={entertedDate} min="2020-01-01" max="2023-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;