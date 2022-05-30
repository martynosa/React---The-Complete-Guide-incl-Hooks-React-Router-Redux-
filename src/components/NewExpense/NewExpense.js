import React from 'react';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setIsFormOpen(false);
  };

  return (
    <div className="new-expense">
      {!isFormOpen && (
        <button
          onClick={() => {
            setIsFormOpen(true);
          }}
        >
          Add New Expense
        </button>
      )}
      {isFormOpen && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          setIsFormOpen={setIsFormOpen}
        />
      )}
    </div>
  );
};

export default NewExpense;
