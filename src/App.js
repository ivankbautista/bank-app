import React, { useState } from "react";
import ExpenseDashboard from "./components/ExpenseForm/ExpenseDashboard";
import ClientDashboard from "./components/ClientDashboard/ClientDashboard";
import CreateNavbar from "./components/Navbar/Navbar";
import Greeting from "./components/Greeting/Greeting";
import Signup from "./components/Login/Signup";
import Login from "./components/Login/Login";
import Records from "./components/Records/Records";

function App() {
  const [expenses, setExpenses] = useState([
    { name: "Ivan", email: "ivan@gmail.com", amount: 570000, id: 11000 },
    {
      name: "Kevin",
      email: "kevin@gmail.com",
      amount: 700000,
      id: 12513,
    },
  ]);

  // const [initialUser] = useState({ username: "Ivan" });

  const [loggedIn, toggledLogin] = useState(false);

  const [signedUp, toggledSignup] = useState(false);

  const [records, toggledRecords] = useState(false);

  const [clientDashboard, toggleClientDashboard] = useState(false);

  const createExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleLogin = () => {
    toggleClientDashboard(true);
    toggledLogin(true);
  };

  const handleSignup = () => {
    toggledSignup(true);
  };

  const handleLogout = () => {
    toggledLogin(false);
    toggledSignup(false);
    toggleClientDashboard(false);
    toggledRecords(false);
  };

  const handleRecords = (e) => {
    toggledRecords(true);
    toggleClientDashboard(false);
  };

  const handleClientDashboard = () => {
    toggledRecords(false);
    toggleClientDashboard(true);
  };

  const handleDeposit = (email, depositAmount) => {
    const updatedBalance = [...expenses];
    const updatedBalanceIndex = updatedBalance.findIndex((e) => {
      return e.email === email;
    });
    const intDepositAmount = parseInt(depositAmount);
    const intUpdatedBalanceAmount = parseInt(
      updatedBalance[updatedBalanceIndex].amount
    );
    updatedBalance[updatedBalanceIndex].amount =
      intUpdatedBalanceAmount + intDepositAmount;
    setExpenses(updatedBalance);
  };

  const handleWithdrawal = (email, depositAmount) => {
    const updatedBalance = [...expenses];
    const updatedBalanceIndex = updatedBalance.findIndex((e) => {
      return e.email === email;
    });
    const intDepositAmount = parseInt(depositAmount);
    const intUpdatedBalanceAmount = parseInt(
      updatedBalance[updatedBalanceIndex].amount
    );
    updatedBalance[updatedBalanceIndex].amount =
      intUpdatedBalanceAmount - intDepositAmount;
    setExpenses(updatedBalance);
  };

  const handleTransferTransaction = (
    senderEmail,
    recepientEmail,
    transferAmount
  ) => {
    const updatedAccounts = [...expenses];
    const senderIndex = updatedAccounts.findIndex((e) => {
      return e.email === senderEmail;
    });

    const recipientIndex = updatedAccounts.findIndex((e) => {
      return e.email === recepientEmail;
    });

    const intBalanceTransfer = parseInt(transferAmount);
    const intUpdatedBalanceTransfer = parseInt(
      updatedAccounts[senderIndex].amount
    );

    updatedAccounts[senderIndex].amount =
      intUpdatedBalanceTransfer - intBalanceTransfer;
    updatedAccounts[recipientIndex].amount =
      intUpdatedBalanceTransfer + intBalanceTransfer;
    setExpenses(updatedAccounts);
  };

  const clientPage = (
    <div>
      <div>
        <CreateNavbar
          handleLogout={handleLogout}
          handleRecords={handleRecords}
          handleClientDashboard={handleClientDashboard}
        />
      </div>
      <div className="bg-white w-screen items-center flex-col justify-center items-center">
        <Greeting />
        <div className="w-11/12 mt-12 flex flex-row justify-center">
          <ExpenseDashboard createExpense={createExpense} />
          <ClientDashboard expenses={expenses} deleteExpense={deleteExpense} />
        </div>
      </div>
    </div>
  );

  const clientRecords = (
    <div>
      <div>
        <CreateNavbar
          handleLogout={handleLogout}
          handleRecords={handleRecords}
          handleClientDashboard={handleClientDashboard}
        />
      </div>
      <div>
        <Records
          handleRecords={handleRecords}
          expenses={expenses}
          handleDeposit={handleDeposit}
          handleWithdrawal={handleWithdrawal}
          handleTransferTransaction={handleTransferTransaction}
        />
      </div>
    </div>
  );

  return (
    <div>
      {/* {signedUp ? innerContent : <Signup handleSignup={handleSignup} />} */}
      {/* {clientDashboard ? clientPage : <Records handleRecords={handleRecords} />} */}
      {/* {clientDashboard ? clientPage : <Login handleLogin={handleLogin} />} */}
      {/* {records ? <Records handleRecords={handleRecords} /> : clientPage} */}
      {!loggedIn && <Login handleLogin={handleLogin} />}
      {records && clientRecords}
      {clientDashboard && clientPage}
    </div>
  );
}

//   return (
//     <div>
//       <div>
//         <Login />
//       </div>
//       <div>
//         <CreateNavbar />
//       </div>
//       <div className="w-screen items-center border-red-500 flex-col justify-center items-center">
//         <Greeting />
//         <div className="w-11/12 mt-12 flex flex-row justify-center">
//           <ExpenseDashboard createExpense={createExpense} />
//           <ClientDashboard expenses={expenses} deleteExpense={deleteExpense} />
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
