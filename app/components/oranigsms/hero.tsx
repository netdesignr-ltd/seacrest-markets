
import { Link } from '@remix-run/react';
const Hero = () => {
  return (
    <div className="mt-36">
    <h1 className="pt-8 text-center text-3xl font-bold  leading-[45px] text-white md:pt-0 md:text-6xl">
      <span className="block pb-4 text-blue-300">Trade with the World's</span>
      #1 Rated Broker   
    </h1>
    <div className="flex justify-center max-w-3xl px-5 mx-auto md:px-0">
      <h2 className="pt-12 text-xl text-center text-white leading-12">
        Our fast execution speeds, tight spreads, deep liquidity and commitment to transparency makes us the
        broker of choice*.
      </h2>
    </div>
    <div className="text-center">
      <button className="px-8 py-4 mt-8 text-xl text-white rounded-md bg-seacrest-350 font-poppins hover:bg-seacrest-100">
        Ready to start?
      </button>
    </div>
    <div className="mt-8 text-center text-white">
      Not ready? <br /> Try a{' '}
      <Link to="/" className="hover:text-seacrest-200">
        Free Demo Account
      </Link>
    </div>
  </div>
  )
}

export default Hero ;
