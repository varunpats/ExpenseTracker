import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpense(props) {
    const [formVisibility, setFormVisibility] = useState(false);

    const getExpenseData = (data) => {
        const expense = {
            ...data,
            id: Math.random().toString()
        }
        props.expenseData(expense);
        changeFormVisibility();
    }

    const changeFormVisibility = () => {
        setFormVisibility(!formVisibility);
    }

    return <div className='new-expense'>
        {!formVisibility && <button onClick={changeFormVisibility}>Add new Expense</button>}
        {formVisibility && <ExpenseForm updateFormVisibility={changeFormVisibility} visibility={formVisibility} onExpenseData={getExpenseData} />}
    </div>
}

export default NewExpense;