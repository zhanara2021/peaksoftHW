import './ExpenseItem.css';
import Card from './UI/Card'
import ExpenseDate from './ExpenceDate';

function ExpenseItem(props) {
    const expenseDate = props.date;
    const expenseAmount = props.amount;
    let expenseTitle  = props.title;
    return (
        <Card className='expense-item'>
            <ExpenseDate date = {expenseDate}/>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </Card>
    );
}
export default ExpenseItem;