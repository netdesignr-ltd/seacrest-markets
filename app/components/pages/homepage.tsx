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
    title: 'Custom analytics',
    description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing',
    txt: '1',
  },
  {
    title: 'Custom analytics',
    description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing',
    txt: '2',
  },
  {
    title: 'Custom analytics',
    description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing',
    txt: '3',
  },
  {
    title: 'Custom analytics',
    description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing',
    txt: '4',
  },
  {
    title: 'Custom analytics',
    description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing',
    txt: '5',
  },
  {
    title: 'Custom analytics',
    description: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing',
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
      <div className="min-h-screen">
        <BackgroundVideo videoSource={'https://vimeo.com/726372740'}>
          <Navbar />
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
        </BackgroundVideo>
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
                    <h3 className="whitespace-normal text-xl font-bold leading-[30px] text-white">
                      {data.title}
                      <br />
                      analytics
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
                              <img src="/star.svg" alt="star" />
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
