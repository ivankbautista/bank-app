import Expense from "../ExpenseForm/Expense";

function ClientDashboard(props) {
  const output = props.expenses.map((expense) => (
    <Expense
      key={expense.id}
      expense={expense}
      deleteExpense={props.deleteExpense}
    />
  ));

  return (
    <div className="h-screen w-6/12">
      <div className="p-2 h-3/6  bg-white px-6 py-8 rounded shadow-md text-black w-full height overflow-y-auto">
        <div className="mb-8 text-4xl font-bold text-black text-center">
          CURRENT CLIENT LIST
        </div>
        {output}
      </div>
    </div>
  );
}

export default ClientDashboard;
