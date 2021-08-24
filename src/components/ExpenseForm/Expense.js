function Expense(props) {
  const deleteTransaction = () => {
    props.deleteExpense(props.expense.id);
  };

  return (
    <div
      className="
    flex justify-between align-center
    py-4 px-6 mt-4 mb-4
    border-gray-200 border-2 rounded-lg
    hover:shadow-md
    transition duration-200
    flex-shrink"
    >
      <div className="font-bold">{props.expense.name}</div>
      <div>{props.expense.email}</div>
      <div>{props.expense.amount}</div>
      <div>
        <button onClick={deleteTransaction}>
          <img src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png" />
        </button>
      </div>
    </div>
  );
}

export default Expense;
