function Login(props) {
  return (
    <div
    // class="bg-no-repeat bg-cover bg-center relative"
    // style="background-image: url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80');"
    >
      <div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
      <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
        <div className="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
          <div className="-mt 12 self-start hidden lg:flex flex-col  text-black">
            <h1 className="mb-3 font-bold text-6xl">Hi, there! 👋</h1>
            <h1 className="ml-1 mt-2 mb-2 font-bold text-2xl">Welcome back.</h1>
            <p className="ml-1 mt-2 pr-3 text-gray-800 text-1xl font-semibold">
              We hope you're having a pleasant day!
            </p>
          </div>
        </div>

        <div className="ml-12 flex justify-center self-center z-10">
          <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
            <div className="mb-4">
              <h3 className="mb-3 text-center justify-center align-center font-semibold text-2xl text-gray-800 font-bold">
                Sign In{" "}
              </h3>
              <p className="text-gray-500 text-center">
                Please sign in to your account.
              </p>
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Email Address
                </label>
                <input
                  className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type=""
                  placeholder="johndoe@gmail.com"
                ></input>
              </div>
              <div className="space-y-2">
                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                  Password
                </label>
                <input
                  className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type="password"
                  placeholder="Enter your password"
                ></input>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                  ></input>
                  <label className="ml-2 block text-sm text-gray-800">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="text-green-400 hover:text-green-500">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="-mb-7 w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  onClick={props.handleLogin}
                >
                  Sign in
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
              <span className="mt-2">Don't have an account?</span>
              <br />
              <a
                href="#"
                className="-mt-5 font-bold text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300"
              >
                Sign up
              </a>
            </div>
            <div className="pt-5 text-center text-gray-400 text-xs">
              <span>
                Copyright © 2021-2022
                <a
                  href=""
                  rel=""
                  target="_blank"
                  title=""
                  className="text-green hover:text-green-500 "
                ></a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
