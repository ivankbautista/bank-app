import React, { useState } from "react";

function ExpenseForm(props) {
  const [expenses, setExpenses] = useState({
    name: "",
    email: "",
    amount: "",
  });

  const handleChange = (e) => {
    setExpenses((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = { ...expenses, id: Math.floor(Math.random() * 10000) };

    props.createExpense(newExpense);
    setExpenses({ name: "", email: "", amount: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container w-12/12 flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <div className="form">
            <h1 className="mb-8 text-2xl font-bold text-center">
              Account Sign-Up
            </h1>
            <input
              type="text"
              name="name"
              className="mb-5 shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              placeholder="Name"
              value={expenses.name}
              onChange={handleChange}
            ></input>
          </div>

          <div className="form">
            <input
              type="text"
              name="email"
              className="mb-5 shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              placeholder="Email Address"
              value={expenses.email}
              onChange={handleChange}
            ></input>
          </div>

          <div className="form">
            <input
              type="number"
              name="amount"
              className="mb-5 shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="amount"
              placeholder="Balance"
              value={expenses.amount}
              onChange={handleChange}
            ></input>
          </div>

          <button
            className="w-full align-center text-center py-3 rounded bg-blue-500 hover:bg-blue-700 text-white font-bold focus:outline-none my-1"
            type="submit"
            onClick={handleSubmit}
          >
            Add Client
          </button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
