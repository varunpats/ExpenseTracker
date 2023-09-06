import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
    const getExpenseData = (data) => {
        const expense = {
            ...data,
            id: Math.random().toString()
        }
        props.expenseData(expense);
    }

    return <div className='new-expense'>
        <ExpenseForm onExpenseData={getExpenseData} />
    </div>
}

export default NewExpense;