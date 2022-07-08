import React from 'react';

const Stats = () => {
  const stats = [
    {
      statname: 'Spreads From',
      statvalue: '0.0 Pips ',
    },
    {
      statname: 'Execution From',
      statvalue: ' 1 MS ',
    },
    {
      statname: 'Trade Markets',
      statvalue: ' 24/5  ',
    },
    {
      statname: 'Deposit & Withdrawal',
      statvalue: ' $0 Fee  ',
    },
  ];
  return (
    <div className="bg-white h-max ">
      <div className="container pt-24 mx-auto statsbg ">
        <h1 className="p-10 text-xl font-bold text-center md:text-4xl text-seacrest-450 md:p-0">
          ALL traders are welcome
        </h1>
        <h1 className="p-10 text-xl font-bold text-center md:text-4xl text-seacrest-450 md:p-0">
          including Scalpers, Day-and-News Traders
        </h1>
        <div>
          <div className="flex-row justify-between gap-10 pt-32 mditems-center md:flex">
            {stats.map((data, index) => (
              <div key={index}>
                <h1 className="text-xl font-medium text-center text-seacrest-550">{data.statname}</h1>
                <h1 className="text-xl font-bold text-center md:text-5xl text-seacrest-600">{data.statvalue}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
