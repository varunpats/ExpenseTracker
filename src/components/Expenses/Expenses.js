import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpenseList from './ExpenseList';

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2021');

    const onYearChange = year => {
        setSelectedYear(year);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear;
    })

    let expenseContent = <p>No data found.</p>

    if (filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map(data => <ExpenseItem key={data.id} expense={data} />);
    }

    return <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onYearChange={onYearChange} />
        <ExpenseList items={filteredExpenses} />
    </Card>
}

export default Expenses;