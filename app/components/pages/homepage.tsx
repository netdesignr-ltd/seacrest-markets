import Footer from '../templates/footer';
import Stats from '../templates/stats';
import Heatmap from '../templates/heatmap';
import Platform from '../templates/platform';
import Newsletter from '../templates/newsletter';
import Faq from '../templates/faq';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, Box } from '@mui/material';
import Navbar from '../templates/header';
import BackgroundVideo from '../BackgroundVideo';
import { Link } from '@remix-run/react';
import Ratings from '../oranigsms/ratings';
import Hero from '../oranigsms/hero';

const Testimonials = [
  {
    description:
      'The best solution for anyone who wants to work a flexible schedule but still earn a full-time income.',
    title: 'CEO & Founder at Etc.co',
    name: 'Macauley Herring',
  },
  {
    description:
      'The best solution for anyone who wants to work a flexible schedule but still earn a full-time income.',
    title: 'CEO & Founder at Etc.co',
    name: 'Macauley Herring',
  },
  {
    description:
      'The best solution for anyone who wants to work a flexible schedule but still earn a full-time income.',
    title: 'CEO & Founder at Etc.co',
    name: 'Macauley Herring',
  },
  {
    description:
      'The best solution for anyone who wants to work a flexible schedule but still earn a full-time income.',
    title: 'CEO & Founder at Etc.co',
    name: 'Macauley Herring',
  },
  {
    description:
      'The best solution for anyone who wants to work a flexible schedule but still earn a full-time income.',
    title: 'CEO & Founder at Etc.co',
    name: 'Macauley Herring',
  },
  {
    description:
      'The best solution for anyone who wants to work a flexible schedule but still earn a full-time income.',
    title: 'CEO & Founder at Etc.co',
    name: 'Macauley Herring',
  },
];
const features = [
  {
    title: 'Tight Spreads',
    description: 'Enjoy spreads as low as 0.0 pips with deep tier 1 liquidity aggregation',
    txt: '1',
  },
  {
    title: 'Hyperfast Execution',
    description: 'Up to 99.8% fill rate on all orders',
    txt: '2',
  },
  {
    title: 'Next Generation Platforms',
    description: 'Execute trades on Metatrader 5',
    txt: '3',
  },
  {
    title: 'Leverage Flexibility',
    description: 'Utilize up to 500:1 trading leverage',
    txt: '4',
  },
  {
    title: ' Low Commissions',
    description: '2$ per lot commissions on ECN accounts',
    txt: '5',
  },
  {
    title: ' 24/7 Support',
    description: 'Contact our support team at anytime day and night',
    txt: '6',
  },
];

const statsData = [
  {
    statName: 'Spreads From',
    statValue: '0.0 Pips ',
  },
  {
    statName: 'Execution From',
    statValue: ' 1 MS ',
  },
  {
    statName: 'Trade Markets',
    statValue: ' 24/5  ',
  },
  {
    statName: 'Deposit & Withdrawal',
    statValue: ' $0 Fee  ',
  },
];
export default function Homepage() {
  return (
    <div>
      <div className="hidden min-h-screen md:block">
        <BackgroundVideo videoSource={'https://vimeo.com/726372740'} >
          <Navbar />
          <Hero />
        </BackgroundVideo>
      </div>
      <div className="min-h-screen md:hidden " style={{ backgroundImage: 
        "url('/mobilebgn.webp')",
        backgroundSize: 'cover',}}>
          <Navbar />
          <Hero />
      </div>
      {/* Section 2 cards */}
      <div className="relative py-20 bg-seacrest-300 ">
        <div className="hidden curveBG md:block"> </div>
     <Ratings />
        <div className="flex justify-center pb-20">
          <h2 className=" py-10 text-center text-3xl md:text-5xl font-bold leading-[70px] tracking-[-0.02em] text-white md:w-2/5">
            Why we are the World's #1 Rated Broker
          </h2>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 mx-auto place-content-center place-items-center md:grid-cols-3">
            {features.map((data, index) => (
              <div key={index} className="px-5 md:px-0">
                <Card
                  sx={{ 
                    maxWidth: '350px',
                    minHeight: '220px',
                    boxShadow: '0px 1px 2px rgba(85, 105, 135, 0.1)',
                    marginBottom: '56px',
                    background: '#161F36',
                    padding: '24px',
                    position: 'relative',
                    overflow: 'visible',
                  }}>
                  <div className="absolute transform -translate-x-1/2 left-1/2 -top-6">
                    {/* <img src="/fr1.png" alt="cardsimg" /> */}
                    <div className="flex  h-12  w-12 items-center justify-center rounded-full border-[6px] border-seacrest-150 bg-seacrest-350 p-3 ">
                      <h2 className="text-xl font-semibold text-seacrest-150">{data.txt}</h2>
                    </div>
                  </div>
                  <CardContent>
                    <h3 className=" whitespace-nowrap text-xl font-bold leading-[30px] text-white">
                      {data.title}
                   
                    </h3>
                    <p className="pt-5 text-md text-seacrest-200">{data.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Heatmap*/}
      <div className="relative">
       <div className='px-8 bg-white'><Heatmap /></div> 
      </div>
      {/* Stats */}
      <Stats statsData={statsData} />
      {/* Platform */}
      <Platform />
      {/* Testomonial */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="pt-5">
            <div className="flex justify-center pb-10 text-center">
              <h2 className="md:w-3/5 text-3xl md:text-5xl font-bold text-center leading-[70px] text-seacrest-400 ">
                What traders like you think of Seacrest Markets
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 mx-auto place-content-center place-items-center md:grid-cols-3">
              {Testimonials.map((data, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Box className="px-5 md:px-0">
                    <Card
                      sx={{
                        boxShadow: '0px 0px 10px rgba(16, 23, 41, 0.1)',

                        background: 'white',
                        padding: '15px',
                        position: 'relative',
                        overflow: 'visible',
                        borderRadius: '6px',
                        border: '1px solid #e6e6e6',
                      }}>
                      <div className="p-4">
                        <div className="flex items-center justify-center pb-5 md:justify-start">
                          {[1, 2, 3, 4, 5].map((data, index) => (
                            <div key={index} className="p-1 ">
                             <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 17.9896L18.9375 21.875L17.2292 14.5521L22.9167 9.625L15.4271 8.98958L12.5 2.08333L9.57291 8.98958L2.08333 9.625L7.77083 14.5521L6.0625 21.875L12.5 17.9896Z" fill="#FF8A00"/></svg>
                            </div>
                          ))}
                        </div>

                        <h5 className="pb-10 text-2xl font-medium text-center text-seacrest-300 md:text-left">
                          {data.description}
                        </h5>

                        <p className="mt-4 text-lg font-semibold text-center text-seacrest-150 md:text-left">
                          {data.name}
                        </p>
                        <p className="text-center text-lg leading-[28px] text-seacrest-200 md:text-left">
                          {data.title}
                        </p>
                      </div>
                    </Card>
                  </Box>
                </Grid>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter */}
      <Newsletter />
      {/* faqs */}
      <Faq />
      <Footer />
    </div>
  );
}
