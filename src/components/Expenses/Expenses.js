import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses({ expenses }) {
  return (
    <>
      <Card className="expenses">
        {expenses.map((e) => (
          <ExpenseItem title={e.title} date={e.date} amount={e.amount} />
        ))}
      </Card>
    </>
  );
}

export default Expenses;
