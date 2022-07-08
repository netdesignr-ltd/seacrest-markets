const Newsletter = () => {
  return (
    <div className="p-5 pb-20 bg-white">
      <div className="container p-10 mx-auto bg-seacrest-400 rounded-2xl bgOpacity"
      style={{backgroundImage:'url(/newsletterbg.svg)'}}>
      
        <div className="">
          <h1 className="pt-24 pb-1 text-3xl font-bold text-center text-white md:text-4xl ">
            Sign up and get trading now
          </h1>
          <h1 className="pb-5 text-lg font-medium text-center text-seacrest-200">
            Stay in the loop with everything you need to know.
          </h1>
          <div>
            <div>
              <div className="flex flex-col justify-center gap-3 pb-3 md:flex-row md:items-center">
                <div className=" xl:w-96">
                  <label className="inline-block text-gray-700 form-label"></label>
                  <input
                    type="text"
                    className="w-full h-12 m-0 text-base font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleText0"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="h-12 px-5 py-3 rounded-md bg-seacrest-50">
                  <button className="text-base font-medium text-white">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center pb-24">
                <h1 className="mr-3 text-xs font-medium text-seacrest-650">
                  We care about your data in our privacy policy
                </h1>{" "}
                <h1 className="px-2 text-xs font-medium text-seacrest-green-150">
                  privacy policy
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
