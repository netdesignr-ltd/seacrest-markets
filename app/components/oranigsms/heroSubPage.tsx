interface IHeroData {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

export const HeroSubPage = ({ heroData }: { heroData: IHeroData[] }) => {
  return (
    <div>
      {heroData.map((data, index: number) => (
        <div
          key={index}
          className="container grid grid-cols-1 gap-8 p-2 px-5 md:grid-cols-2 md:py-32 md:max-w-7xl place-content-center place-items-center ">
          <div>
            <div>
              <div>
                <h1 className="py-5 pt-8 text-4xl font-bold text-white md:text-6xl md:text-left">{data.title}</h1>
              </div>
              <div></div>
              <div className="flex md:w-3/4 md:text-left">
                <h1 className="text-xl text-seacrest-200">{data.description}</h1>
              </div>
              <div className="text-center md:text-left">
                <button className="px-8 py-4 mt-8 text-xl text-white rounded-md bg-seacrest-350 font-poppins hover:bg-seacrest-100">
                  {data.buttonText}
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <img src={data.image} alt="imagne"/>
          </div>
        </div>
      ))}

    </div>
  );
};
export default HeroSubPage;
