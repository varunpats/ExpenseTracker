import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses(props) {
    return <Card className="expenses">
        <ExpensesFilter />
        <ExpenseItem expense={props.expenses[0]} />
        <ExpenseItem expense={props.expenses[1]} />
        <ExpenseItem expense={props.expenses[2]} />
        <ExpenseItem expense={props.expenses[3]} />
    </Card>
}

export default Expenses;