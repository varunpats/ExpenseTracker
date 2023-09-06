import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = props => {
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }

    return <div className='expenses-list'>
        {props.items.map(data => <ExpenseItem key={data.id} expense={data} />)}
    </div>
}

export default ExpenseList;