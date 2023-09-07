import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2021');

    const onYearChange = year => {
        setSelectedYear(year);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear;
    })

    return <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onYearChange={onYearChange} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
    </Card>
}

export default Expenses;