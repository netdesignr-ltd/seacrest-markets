import { Grid, Box } from '@mui/material';
import HeroSubPage from '../../components/oranigsms/heroSubPage';
import Header from '../../components/templates/header';
import Footer from '~/components/templates/footer';
import Stats from '~/components/templates/stats';
import Ratings from '~/components/oranigsms/ratings';

export default function Shares() {
  const features = [
    {
      feature: 'Ultra Low Latency',
    },
    {
      feature: 'See the performance of every trade execution ',
    },
    {
      feature: 'MT4 and TradingView. Fully supported.',
    },
  ];

  const blogs = [
    {
      heading: 'Header 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiatconsequat purus. Non massa enim vitae duis mattis. Vel inultricies vel fringilla ',
      username: ' — John Doe, CEO & Founder ',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. ',
      img: '/Rectangle-20-_1_.webp',
    },
  ];

  const heroData = [
    {
      title: 'Shares',
      description:
        'We’re different. Flex is the only saas business platform that lets you run your business on one platform, seamlessly across all digital channels.',
      buttonText: 'Try Our Live',
      buttonLink: '/',
      image: '/Image-Container.webp',
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

  return (
    <div className="">
      <Header />
      <HeroSubPage heroData={heroData} />
      <Ratings />
      <div className="px-8 bg-white">
        <div className="container pb-10 max-w-7xl ">
          <Grid container spacing={4} className="pt-10 ">
            <Grid item xs={12} md={8}>
              <Box>
                <p className="text-xl font-medium text-left text-seacrest-550">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices
                  praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non
                  massa enim vitae duis mattis. Vel in ultricies vel fringilla.
                </p>
                {blogs.map((data, index) => (
                  <div key={index}>
                    <h1 className="pt-10 pb-4 text-3xl font-semibold">{data.heading} </h1>
                    <p className="text-lg font-normal text-left text-seacrest-550">{data.description}</p>

                    <div className="py-10">
                      <div
                        style={{
                          borderLeft: '2px solid #22C55E',
                          padding: '15px',
                        }}>
                        <p className="py-5 text-2xl font-medium ">{data.review}</p>
                        <h1 className="text-lg font-medium text-seacrest-550">{data.username}</h1>
                      </div>
                      <p className="py-6 text-lg font-normal text-left text-seacrest-550">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non.
                        Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat
                        consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
                      </p>
                      <img src={data.img} alt="Rectangle-20-_1_" />
                      <p className="pt-2 pb-6 font-normal text-left tex5t-lg text-seacrest-550">
                        Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
                      </p>
                    </div>
                  </div>
                ))}

                <div>
                  <h1 className="pb-4 text-3xl font-semibold ">Header 1 </h1>
                  <p className="text-lg font-normal text-left text-seacrest-550">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non.
                    Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
                    purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.<div className="py-4"></div>
                    Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc
                    sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur
                    ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate
                    gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.<p className="py-4"></p>
                    <p>1. Lectus id duis vitae porttitor enim gravida morbi.</p>
                    <p>
                      2. turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae
                      placerat.
                    </p>
                    <p className="pb-5">3. Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</p>
                    <p>
                      Vestibulum placerat magna nulla, sit amet venenatis sapien consequat ut. Cras pulvinar, lorem
                      tristique pharetra finibus, dui erat finibus orci, a vehicula arcu sapien id metus. Quisque quis
                      lorem a sem porttitor feugiat. Etiam quis congue est. Donec fermentum ac libero a pretium. Nulla
                      nisl sem, euismod ut eros vitae, egestas scelerisque enim.
                      <p className="text-seacrest-green-150"> Vivamus id pharetra massa. </p> Nulla aliquet erat elit, a
                      gravida dui efficitur vel. Sed pulvinar diam sed neque ullamcorper semper. Nulla elementum arcu
                      lacus, quis porta nisl posuere varius. Quisque tempus libero sed urna posuere hendrerit.
                    </p>{' '}
                  </p>
                </div>
              </Box>
            </Grid>

            <Grid item xs={12} md={4} className="order-first md:order-last">
              <Box>
                <div className="text-center">
                  <h1 className="pb-5 text-lg font-semibold">Try Trading with Us</h1>
                </div>
                {features.map((data, index) => (
                  <div key={index} className="flex items-center justify-start ">
                    <div className="flex items-center justify-center gap-2 ">
                      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {' '}
                        <g filter="url(#filter0_d_231_979)">
                          {' '}
                          <circle cx="13" cy="12" r="9.375" fill="#22C55E" stroke="#16A34A" strokeWidth="1.25" />
                        </g>
                        <path
                          d="M18.5917 8.00846C18.5142 7.93035 18.4221 7.86836 18.3205 7.82605C18.219 7.78374 18.11 7.76196 18 7.76196C17.89 7.76196 17.7811 7.78374 17.6796 7.82605C17.578 7.86836 17.4858 7.93035 17.4084 8.00846L11.2 14.2251L8.59171 11.6085C8.51127 11.5308 8.41632 11.4697 8.31227 11.4287C8.20823 11.3877 8.09713 11.3676 7.98531 11.3695C7.87349 11.3714 7.76315 11.3954 7.66058 11.4399C7.55802 11.4845 7.46524 11.5489 7.38754 11.6293C7.30984 11.7097 7.24875 11.8047 7.20774 11.9087C7.16674 12.0128 7.14663 12.1239 7.14856 12.2357C7.1505 12.3475 7.17444 12.4579 7.21902 12.5604C7.2636 12.663 7.32794 12.7558 7.40837 12.8335L10.6084 16.0335C10.6858 16.1116 10.778 16.1736 10.8796 16.2159C10.9811 16.2582 11.09 16.28 11.2 16.28C11.3101 16.28 11.419 16.2582 11.5205 16.2159C11.6221 16.1736 11.7142 16.1116 11.7917 16.0335L18.5917 9.23346C18.6763 9.15543 18.7438 9.06072 18.79 8.9553C18.8361 8.84988 18.86 8.73605 18.86 8.62096C18.86 8.50588 18.8361 8.39204 18.79 8.28662C18.7438 8.18121 18.6763 8.0865 18.5917 8.00846Z"
                          fill="white"
                        />
                        <defs>
                          <filter
                            id="filter0_d_231_979"
                            x="0.5"
                            y="0.75"
                            width="25"
                            height="25"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="1.25" />
                            <feGaussianBlur stdDeviation="1.25" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_231_979" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_231_979" result="shape" />
                          </filter>
                        </defs>
                      </svg>
                      <h1 className="block py-3 text-base font-medium ">{data.feature}</h1>
                    </div>
                  </div>
                ))}
              </Box>
            </Grid>
          </Grid>
        <Stats statsData={statsData}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
