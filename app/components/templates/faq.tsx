import Accordion from '@mui/material/Accordion';
import { Container, Typography } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const faq = () => {
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
  return (
    <div className="relative py-20 bg-seacrest-300 footerbg">
      <div>
        <h2 className="pb-8 pt-36 text-center text-3xl font-bold leading-[60px] tracking-[-0.02em] text-white md:text-5xl ">
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
                  <Accordion className="mb-2  rounded-[15px]  md:w-4/5 " sx={{ background: '#161F36' }}>
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default faq;
