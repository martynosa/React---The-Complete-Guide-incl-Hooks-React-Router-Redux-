import React from 'react';
import { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filteredExpenses = expenses.filter((e) => {
    return e.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          setFilteredYear={setFilteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </>
  );
}

export default Expenses;
