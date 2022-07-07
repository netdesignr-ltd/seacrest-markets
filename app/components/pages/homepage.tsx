import Footer from '../templates/footer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, Box, Container } from '@mui/material';
import Navbar from '../header';
import BackgroundVideo from '../BackgroundVideo.tsx';
import { Link } from '@remix-run/react';
// import styles from "~/styles/global.css";

const Faq = [
  {
    heading: 'Lorem ipsum is placeholder text commonly ',
    description: 'Orders are usually shipped within 1-2 business days after placing the order.',
  },
  {
    heading: 'Lorem ipsum is placeholder text commonly ',
    description: 'Orders are usually shipped within 1-2 business days after placing the order.',
  },
  {
    heading: 'Lorem ipsum is placeholder text commonly ',
    description: 'Orders are usually shipped within 1-2 business days after placing the order.',
  },
];
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
export default function Homepage() {
  return (
    <div>
      <div className="min-h-screen">
        <BackgroundVideo videoSource={'https://vimeo.com/726372740'}>
          <Navbar />
          <div className="mt-36">
            <h1 className="pt-8 text-center text-3xl font-bold  leading-[45px] text-white md:pt-0 md:text-6xl">
              <span className="block pb-8 text-blue-300">Trade with the World's</span>
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
      <div className="py-20 bg-seacrest-300">
        <div>
          <h2 className="red py-8 text-center text-5xl font-bold leading-[45px] tracking-[-0.02em] text-white">
            Features
          </h2>
          <div className="flex items-center justify-center px-5 md:px-5">
            <h5 className=" mb-24  w-3/5 text-center  text-base font-medium leading-[45px] tracking-[-0.02em] text-seacrest-200">
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
            </h5>
          </div>
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
      <div className="py-20 bg-seacrest-400">
        <div className="mx-auto max-w-7xl">
          <div className="pt-5">
            <h2 className="text-center text-5xl font-medium leading-[60px] text-white md:text-left">Testimonials</h2>

            <br></br>
            <h2 className="pb-16 text-xl font-medium text-center text-seacrest-200 md:text-left">
              Lorem ipsum dolor insipir
            </h2>
            <div className="grid grid-cols-1 gap-8 mx-auto place-content-center place-items-center md:grid-cols-3">
              {Testimonials.map((data, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Box className="px-5 md:px-0">
                    <Card
                      sx={{
                        boxShadow: '0px 1px 2px rgba(85, 105, 135, 0.1)',
                        marginBottom: '56px',
                        background: '#161F36',
                        padding: '15px',
                        position: 'relative',
                        overflow: 'visible',
                        borderRadius: '6px',
                      }}>
                      <div className="p-4">
                        <h5 className="text-xl font-medium text-center text-white md:text-left">{data.description}</h5>

                        <p className="mt-4 text-center text-xl leading-[30px] text-seacrest-200 md:text-left">
                          {data.name}
                        </p>
                        <p className="text-center  leading-[28px] text-seacrest-200 md:text-left">{data.title}</p>
                      </div>
                    </Card>
                  </Box>
                </Grid>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* faqs */}
      <div className="bg-seacrest-300">
        <div>
          <h2 className="pb-8 pt-12 text-center text-3xl font-bold leading-[60px] tracking-[-0.02em] text-white md:text-5xl ">
            Frequently Asked Questions
          </h2>
          <br />
          <div className="flex justify-center">
            <h2 className=" mb-24   w-[847px] text-center  text-xl  font-medium leading-[30px] tracking-[-0.02em] text-seacrest-200">
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
              previewing layouts and visual mockups
            </h2>
          </div>
          <section>
            <div>
              {Faq.map((data, index) => (
                <Container key={index} sx={{ marginBottom: '20px' }}>
                  <div className="flex justify-center rounded-2xl">
                    <Accordion className="mb-2 w-4/5 rounded-[15px]  md:w-4/5 " sx={{ background: '#161F36' }}>
                      <AccordionSummary
                        expandIcon={<img src="/arowtop.png" alt="arowtop" />}
                        aria-controls="panel2a-content"
                        id="panel2a-header">
                        <div className="flex items-center justify-center rounded-2xl">
                          <Typography
                            sx={{
                              color: 'white',
                              fontWeight: '700',
                              fontSize: '20px',
                              lineHeight: '30px',
                              padding: '28px',
                            }}>
                            {data.heading}
                          </Typography>
                        </div>
                      </AccordionSummary>

                      <AccordionDetails>
                        <Typography className="text-base font-medium text-seacrest-200" sx={{ padding: '28px' }}>
                          {data.description}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </Container>
              ))}
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </div>
  );
}
