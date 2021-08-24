import React, { useState } from "react";

function Records(props) {
  const [expenses, setExpenses] = useState({
    email: "",
    depositAmount: "",
  });

  const [transferTransaction, setTransfer] = useState({
    senderEmail: "",
    recipientEmail: "",
    transferAmount: "",
  });

  const handleTransfer = (e) => {
    setTransfer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChange = (e) => {
    setExpenses((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onDeposit = (e) => {
    e.preventDefault();
    props.handleDeposit(expenses.email, expenses.depositAmount);
  };

  const onWithdraw = (e) => {
    e.preventDefault();
    props.handleWithdrawal(expenses.email, expenses.depositAmount);
  };

  const onTransfer = (e) => {
    e.preventDefault();
    props.handleTransferTransaction(
      transferTransaction.senderEmail,
      transferTransaction.recipientEmail,
      transferTransaction.transferAmount
    );
  };

  return (
    <div>
      <form>
        <div className="mt-12 container w-3/12 flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <div className="form">
              <h1 className="mb-8 text-2xl font-bold text-center">
                Basic Transactions
              </h1>
              <input
                type="text"
                name="email"
                list="name-datalist"
                className="mb-5 shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                placeholder="Choose client account"
                onChange={handleChange}
              ></input>
              <datalist id="name-datalist">
                {props.expenses.map((expenses, index) => {
                  return (
                    <option
                      key={index}
                      label={`${expenses.name} (${expenses.email})`}
                      value={expenses.email}
                    />
                  );
                })}
              </datalist>
            </div>

            <div className="form">
              <input
                type="number"
                name="depositAmount"
                className="mb-5 shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="amount"
                placeholder="Amount"
                onChange={handleChange}
              ></input>
            </div>

            <button
              className="w-6/12 gap-3 align-center text-center py-3 rounded bg-blue-500 hover:bg-gray-700 text-white font-bold focus:outline-none my-1"
              type="submit"
              onClick={onDeposit}
            >
              Deposit
            </button>
            <button
              className="w-6/12 align-center text-center py-3 rounded bg-red-500 hover:bg-gray-700 text-white font-bold focus:outline-none my-1"
              type="submit"
              onClick={onWithdraw}
            >
              Withdraw
            </button>
          </div>
        </div>
      </form>

      <form>
        <div className="mt-12 container w-3/12 flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <div className="form">
              <h1 className="mb-8 text-2xl font-bold text-center">
                Transfer Funds
              </h1>
              <h2 className="mb-2 font-bold">Sender Account</h2>
              <input
                type="text"
                name="senderEmail"
                list="name-datalist"
                className="mb-5 shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                placeholder="Choose client account"
                onChange={handleTransfer}
              ></input>
              <datalist id="name-datalist">
                {props.expenses.map((expenses, index) => {
                  return (
                    <option
                      key={index}
                      label={`${expenses.name} (${expenses.email})`}
                      value={expenses.email}
                    />
                  );
                })}
              </datalist>
              <input
                type="text"
                name="recipientEmail"
                list="name-datalist"
                className="mb-5 shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                placeholder="Choose client account"
                onChange={handleTransfer}
              ></input>
              <datalist id="name-datalist">
                {props.expenses.map((expenses, index) => {
                  return (
                    <option
                      key={index}
                      label={`${expenses.name} (${expenses.email})`}
                      value={expenses.email}
                    />
                  );
                })}
              </datalist>
            </div>

            <div className="form">
              <input
                type="number"
                name="transferAmount"
                className="mb-5 shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="amount"
                placeholder="Amount"
                onChange={handleTransfer}
              ></input>
            </div>

            <button
              className="w-full align-center text-center py-3 rounded bg-green-500 hover:bg-gray-700 text-white font-bold focus:outline-none my-1"
              type="submit"
              onClick={onTransfer}
            >
              Transfer
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Records;
