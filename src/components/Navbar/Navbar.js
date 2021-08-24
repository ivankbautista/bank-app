function CreateNavbar(props) {
  const handleRecordNav = (e) => {
    e.preventDefault();
    props.handleRecords();
  };

  const handleClientNav = (e) => {
    e.preventDefault();
    props.handleClientDashboard();
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-2">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
          src="https://icons.veryicon.com/png/o/business/financial-icon-2/bank-21.png"
          className="fill-current h-16 w-16"
          alt="Bank Header Logo"
        ></img>
        <span className="ml-6 text-2xl font-semibold tracking-tight">
          The Banko
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="text-xl ml-6 bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            onClick={handleClientNav}
          >
            Client Dashboard
          </a>
          <a
            href="#responsive-header"
            className="text-xl ml-6 bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            onClick={handleRecordNav}
          >
            Client Records
          </a>
        </div>
        <div>
          <a
            href="#"
            className="text-xl inline-block text-sm px-4 py-2 leading-none rounded text-white bg-gray-900 hover:bg-gray-700 hover:text-white mt-4 lg:mt-0"
            onClick={props.handleLogout}
          >
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
}

export default CreateNavbar;
