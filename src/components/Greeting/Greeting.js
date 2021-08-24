function Greeting() {
  return (
    <div>
      <div className="m-auto bg-gray-800 rounded shadow-md text-black w-max">
        <div className="relative rounded shadow-lg flex bg-white w-max p-3">
          <div className="m-4 flex-no-shrink">
            <img
              alt=""
              className="w-32 h-32 block mx-auto"
              src="https://image.flaticon.com/icons/png/512/633/633780.png"
            ></img>
          </div>
          <div className="ml-1 flex-1 card-block relative">
            <div className="p-2">
              <h4 className="font-medium text-4xl mb-3">Greetings, Ivan!</h4>
              <p className="mt-6 font-size leading-relaxed">
                Hope you're having a good day.
              </p>
              <p className="text-sm text-grey block mt-8">
                Please remember to log out when you're done.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Greeting;
