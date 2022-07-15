interface TradingData {
    title: string;
    description: string;
    image: string;
    buttonText: string;
    buttonlink: string;
   
  }
const trading = ({ tradingData }: { tradingData : TradingData[] }) => {
  return (
    <div className="relative ">
        <div className="curvePlateform"></div>
        {tradingData.map((data, index) => (
        <div className="container px-8 max-w-7xl place-content-center md:px-0" key={index}>
          
          <div className="pb-10 text-4xl font-bold text-center text-white">
            <h2>{data.title}</h2>
          </div>
        <div className="flex justify-center ">
            <img src={data.image} />
          </div>
          <div className="flex justify-center py-10"><div className="max-w-5xl text-center ">
            <h2 className="text-xl font-medium text-seacrest-200">
            {data.description}
            </h2>
          </div></div>
          <div className="flex justify-center pt-5 pb-28"><div className="flex items-center justify-center p-4 rounded-md w-72 h-14 bg-seacrest-350"><button className="text-lg font-medium text-white">Start Trading via MT4 Mac</button></div></div>
        </div>
        ))}
      </div>
  )
}

export default trading