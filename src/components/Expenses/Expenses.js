import React from 'react';
import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('2020');

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          setFilteredYear={setFilteredYear}
        />
        {expenses.map((e) => (
          <ExpenseItem title={e.title} date={e.date} amount={e.amount} />
        ))}
      </Card>
    </>
  );
}

export default Expenses;
