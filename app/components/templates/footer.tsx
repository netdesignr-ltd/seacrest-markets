import { Link } from '@remix-run/react';

const Footer = () => {
  return (
    <div className="mx-auto text-center max-w-7xl bg-seacrest-300 md:text-left ">
      <div className="flex flex-col items-center justify-center pt-5 md:items-start md:justify-start">
        <Link to="/">
          <span className="sr-only">Seacrest Markets</span>
          <img className="w-48" src="/seacrest-markets-white-logo.svg" alt="Seacrest Markets logo" />
        </Link>
        {/* <h3 className="text-base text-white ">
          Lorem ipsum is placeholder text <br />
          commonly{' '}
        </h3> */}

        <div className="flex items-start justify-start py-8 text-center gap-9">
          
          <Link to="/about-us" className="text-base font-medium text-seacrest-200 hover:text-white">
           About
          </Link>
          <Link to="/contact-us" className="text-base font-medium text-seacrest-200 hover:text-white">
            Contact
          </Link>
        </div>
      </div>

      <div className="my-2 h-[2px] w-[100%] border border-seacrest-150 bg-seacrest-150"></div>

      <div className="flex flex-col items-center space-y-2 pt-[2rem]  text-center md:flex-row md:items-center md:justify-between md:space-y-0 md:text-left">
        <h2 className="text-base font-medium text-seacrest-200">© 2022 Seacrest Markets. All rights reserved.</h2>
        <div className="flex items-start justify-center gap-8 py-4">
          <img src="/Twitter.svg" alt="twiter" />
          <img src="/LinkedIn.svg" alt="linkedin" />
          <img src="/Instagram.svg" alt="instagram" />
          <img src="/Github.svg" alt="github" />
          <img src="/Facebook.svg" alt="facebook" />
        </div>
      </div>
      <h1 className='text-base pb-[5rem] font-medium text-seacrest-200'> <h2 >Risk Warning and Disclaimer :</h2>   Leveraged products such as CFD’s and Forex trading are complex instruments with a high risk of losing money. The products offered are intended for professional and retail clients. Please note that client accounts could sustain losses of deposited funds or in some cases even exceeding their deposit amount. <br/> Please note; The information on the website is not directed at any jurisdiction and is not intended for any use that would be contrary to local law or regulation. Seacrest Markets LLC is a registered business in Saint Vincent and Grenadines under BAN xxxxxxxxxx.</h1>
    </div>
  );
};

export default Footer;
