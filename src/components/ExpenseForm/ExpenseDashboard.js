import ExpenseForm from "./ExpenseForm";

function ExpenseDashboard(props) {
  return (
    <div className="-ml-12 w-3/12 flex justify-center">
      <ExpenseForm createExpense={props.createExpense} />
    </div>
  );
}

export default ExpenseDashboard;
