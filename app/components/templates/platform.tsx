const platform = () => {
  const trade = [
    {
      title: 'TradingView',
      description: 'Stay connected with your team and make quick decisions wherever you are.  ',
      id: 1,
    },
    {
      title: 'MetaTrader 4',
      description: 'Stay connected with your team and make quick decisions wherever you are.  ',
      id: 2,
    },
    {
      title: 'MetaTrader 5',
      description: 'Stay connected with your team and make quick decisions wherever you are.  ',
      id: 3,
    },
  ];
  return (
    <div className="bg-white ">
      <div className="pt-32 mx-auto md:max-w- 7xl md:max-w-[100%]">
        <div className="grid items-center md:grid-cols-2 place-content-center place">
          <div className="mt-40 md:mt-10 ">
            <img src="/tradingplateformbg.svg" alt="trading platform" />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-center text-seacrest-450 md:text-left">Trading Platforms</h1>
            <p className="max-w-xl pt-8 pb-3 text-xl font-medium text-center md:text-left text-seacrest-550">
              With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage
              every aspect of your business in one secure platform.
            </p>
            {trade.map((data) => (
              <div key={data.id}>
                <div className="gap-4 pt-5 md:items-center md:justify-start md:flex">
                  <div className="flex items-center justify-center p-2 m-auto rounded-lg md:self-start bg-seacrest-350 h-14 w-14 md:m-0">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.75 11.375H2.625C2.39294 11.375 2.17038 11.4672 2.00628 11.6313C1.84219 11.7954 1.75 12.0179 1.75 12.25V18.375C1.75 18.6071 1.84219 18.8296 2.00628 18.9937C2.17038 19.1578 2.39294 19.25 2.625 19.25H8.75C8.98206 19.25 9.20462 19.1578 9.36872 18.9937C9.53281 18.8296 9.625 18.6071 9.625 18.375V12.25C9.625 12.0179 9.53281 11.7954 9.36872 11.6313C9.20462 11.4672 8.98206 11.375 8.75 11.375ZM7.875 17.5H3.5V13.125H7.875V17.5ZM18.375 1.75H12.25C12.0179 1.75 11.7954 1.84219 11.6313 2.00628C11.4672 2.17038 11.375 2.39294 11.375 2.625V8.75C11.375 8.98206 11.4672 9.20462 11.6313 9.36872C11.7954 9.53281 12.0179 9.625 12.25 9.625H18.375C18.6071 9.625 18.8296 9.53281 18.9937 9.36872C19.1578 9.20462 19.25 8.98206 19.25 8.75V2.625C19.25 2.39294 19.1578 2.17038 18.9937 2.00628C18.8296 1.84219 18.6071 1.75 18.375 1.75ZM17.5 7.875H13.125V3.5H17.5V7.875ZM18.375 11.375H12.25C12.0179 11.375 11.7954 11.4672 11.6313 11.6313C11.4672 11.7954 11.375 12.0179 11.375 12.25V18.375C11.375 18.6071 11.4672 18.8296 11.6313 18.9937C11.7954 19.1578 12.0179 19.25 12.25 19.25H18.375C18.6071 19.25 18.8296 19.1578 18.9937 18.9937C19.1578 18.8296 19.25 18.6071 19.25 18.375V12.25C19.25 12.0179 19.1578 11.7954 18.9937 11.6313C18.8296 11.4672 18.6071 11.375 18.375 11.375ZM17.5 17.5H13.125V13.125H17.5V17.5ZM8.75 1.75H2.625C2.39294 1.75 2.17038 1.84219 2.00628 2.00628C1.84219 2.17038 1.75 2.39294 1.75 2.625V8.75C1.75 8.98206 1.84219 9.20462 2.00628 9.36872C2.17038 9.53281 2.39294 9.625 2.625 9.625H8.75C8.98206 9.625 9.20462 9.53281 9.36872 9.36872C9.53281 9.20462 9.625 8.98206 9.625 8.75V2.625C9.625 2.39294 9.53281 2.17038 9.36872 2.00628C9.20462 1.84219 8.98206 1.75 8.75 1.75ZM7.875 7.875H3.5V3.5H7.875V7.875Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1 className="py-3 text-2xl font-bold text-center md:text-left text-seacrest-600">{data.title}</h1>
                    <p className="text-base font-medium text-center xl:text-left md:w-3/4 text-seacrest-550 md:text-left">
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default platform;
