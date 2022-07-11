import { Link } from '@remix-run/react';

const Footer = () => {
  return (
    <div className="mx-auto text-center max-w-7xl bg-seacrest-300 md:text-left ">
      <div className="flex flex-col items-center justify-center pt-5 md:items-start md:justify-start">
        <div>{/* Updated logo will come here*/}</div>
        <h3 className="text-base text-white ">
          Lorem ipsum is placeholder text <br />
          commonly{' '}
        </h3>

        <div className="flex items-start justify-start py-8 text-center gap-9">
          <Link to="#" className="text-base font-medium text-seacrest-200 hover:text-white ">
            Features
          </Link>
          <Link to="#" className="text-base font-medium text-seacrest-200 hover:text-white">
            Pricing
          </Link>
          <Link to="#" className="text-base font-medium text-seacrest-200 hover:text-white">
            FAQ
          </Link>
          <Link to="#" className="text-base font-medium text-seacrest-200 hover:text-white">
            Contact
          </Link>
        </div>
      </div>

      <div className="my-2 h-[2px] w-[100%] border border-seacrest-150 bg-seacrest-150"></div>

      <div className="flex flex-col items-center space-y-2 pt-[2rem] pb-[5rem] text-center md:flex-row md:items-center md:justify-between md:space-y-0 md:text-left">
        <h2 className="text-base font-medium text-seacrest-200">© 2022 Seacrest Markets. All rights reserved.</h2>

        <div className="flex items-start justify-center gap-8 py-4">
          <img src="/Twitter.svg" alt="twiter" />
          <img src="/LinkedIn.svg" alt="linkedin" />
          <img src="/Instagram.svg" alt="instagram" />
          <img src="/Github.svg" alt="github" />
          <img src="/Facebook.svg" alt="facebook" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
