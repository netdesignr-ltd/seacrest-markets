export const HeroSubPage = () => {
  const heroData = [
    {
      title: 'Demo Trading',
      description: 'We’re different. Flex is the only saas business platform that lets you run your business on one platform, seamlessly across all digital channels.',
      buttonText: 'Try Our Demo',
      buttonLink: '/trading',
      image: '/Image-Container.webp',
    },
  ]
  return (<div>
    {heroData.map((data, index) => (
    <div key={index} className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:py-32 md:max-w-7xl place-content-center place-items-center p-2 px-8 md:px-0">
        <div>
          <div>
            <div>
              <h1 className="py-5 pt-8 text-4xl  md:text-6xl font-bold md:text-left text-white">
               {data.title}
              </h1>
            </div>
            <div></div>
            <div className="flex md:w-3/4 md:text-left">
              <h1 className="text-base text-xl text-seacrest-200">
           {data.description}
              </h1>
            </div>
            <div className="md:text-left  text-center">
              <button className="px-8 py-4 mt-8 text-xl text-white rounded-md bg-seacrest-350 font-poppins hover:bg-seacrest-100">
                {data.buttonText}
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <img src={data.image} />
        </div>
      </div>
    ))}

      <div className="max-w-5xl mx-auto p-5">
        <div className="flex flex-col gap-8 p-5 bg-white md:flex-row rounded-xl md:justify-around">
          <div className="m-auto">
            <img src="/fpa-rating-img.svg" alt="fpa" />
          </div>
          <div className="m-auto">
            <img src="/google-rating.svg" alt="google" />
          </div>
          <div className="m-auto">
            <img src="/logo-mt4.svg" alt="mtlogo" />
          </div>
          <div className="m-auto">
            <img src="/tv-logo.svg" alt="tvlogo" />
          </div>
        </div>
      </div>
 </div> )
}
export default HeroSubPage;