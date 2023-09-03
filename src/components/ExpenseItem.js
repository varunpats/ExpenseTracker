import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props) {
    return (
        <Card className='expense-item'>
            <ExpenseDate expense={props.expense} />
            <div className='expense-item__description'>
                <h2>{props.expense.title}</h2>
                <div className='expense-item__price'>${props.expense.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;