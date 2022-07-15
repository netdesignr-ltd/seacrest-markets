interface InstallData {
    title: string;
    description: string;
    number: number;
    heading: string;
   
  }
  interface ISections {
    installData: InstallData[], 
    heading: string
  }
  

const    ISection = ({ installData, heading }: ISections ) => {
  return (
    <div className="py-24 bg-white ">
    <div className="container px-5 max-w-7xl">
    <div className="grid grid-cols-1 md:grid-cols-2 place-content-center">
      <div>
        <img src="/Rectangle-1.webp"  alt="heroimg"/>
      </div>
          
      <div>
        <div>
          <h2 className="py-5 text-5xl font-bold text-center md:text-left text-seacrest-600">
          {heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
        {installData.map((data, index) => (
            <div className="px-5 pt-8 pb-8 text-center md:text-left" key={index}>
             <div className="flex justify-center md:justify-start"> <div className="flex items-center justify-center w-12 h-12 rounded-full bg-seacrest-350 ">
                <h1 className="text-xl font-semibold text-white">
                  {data.number}
                </h1>
              </div></div>
              <h2 className="mt-2 mb-2 text-xl font-bold">{data.title}</h2>
              <p className="text-base font-bold text-seacrest-550">
                {data.description}
              </p>
            </div>
            ))}
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default ISection