interface IStatsData {
  statName: string;
  statValue: string;
}

const Stats = ({ statsData }: { statsData: IStatsData[] }) => {
  return (
    <div className="py-10 bg-white h-max ">
      <div className="container px-5 max-w-7xl statsbg ">
        <h1 className="pt-10 text-xl font-bold text-center md:text-4xl text-seacrest-450">
          ALL traders are welcome
        </h1>
        <h1 className="py-5 text-xl font-bold text-center md:py-12 md:text-4xl text-seacrest-450 md:p-0">
          including Scalpers, Day-and-News Traders
        </h1>
        <div>
          <div className="flex-row justify-between gap-10 pt-0 md:pt-32 mditems-center md:flex">
            {statsData &&
              statsData.map((data, index) => (
                <div key={index} className="py-2 md:py-0"> 
                  <h1 className="text-xl font-medium text-center text-seacrest-550">{data.statName}</h1>
                  <h1 className="text-xl font-bold text-center md:text-5xl text-seacrest-600">{data.statValue}</h1>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
