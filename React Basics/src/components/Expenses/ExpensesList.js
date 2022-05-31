import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((e) => (
        <ExpenseItem
          key={e.id}
          title={e.title}
          date={e.date}
          amount={e.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
