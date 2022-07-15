import { HeroSubPage } from "../../components/oranigsms/heroSubPage";
import Stats from "../../components/templates/stats";
import NavBar from "~/components/templates/header";
import Footer from "~/components/templates/footer";
import ISection from "~/components/oranigsms/installSection";
import Trading from "~/components/oranigsms/trading";

const MetaTraderAndroid = () => {
  const statsData = [
    {
      statName: "Spreads From",
      statValue: "0.0 Pips ",
    },
    {
      statName: "Execution From",
      statValue: " 1 MS ",
    },
    {
      statName: "Trade Markets",
      statValue: " 24/5  ",
    },
    {
      statName: "Deposit & Withdrawal",
      statValue: " $0 Fee  ",
    },
  ];

  const heroData = [
    {
      title: "MT4 for Android",
      description:
        "We’re different. Flex is the only saas business platform that lets you run your business on one platform, seamlessly across all digital channels.",
      buttonText: "Start Trading",
      buttonLink: "/",
      image: "/Image-Container.webp",
    },
  ];

  const installData = [
    
    {
      heading: "Download MT4 for Android",
      number: "1",
      title: "Loginat",
      description: "Secure .secrest marketplace.com",
    },
    {
      number: "2",
      title: "Select",
      description: "Select Download MT4 (from main menu) then MT4 Mac",
    },
    {
      number: "3",
      title: "Download Completed",
      description:
        "When download completed, drag file into Applications folder",
    },
    {
      number: "4",
      title: "Follow",
      description: "Follow any installation prompts",
    },
  ];
  const tradingData = [
    {
      title:"Trade using MT4 for Android",
      description: "MT4 for Android offers a customisable, user-friendly interface giving the confidence you need trading global markets",
      image:"/macbookimg.webp",
      buttonText:"Start Trading via MT4 Android",
      buttonLink:"/",
    },
  ];
  return (
    <>
    <div>
      <NavBar />
      <HeroSubPage heroData={heroData} />
       
       
        {/* Trade Section */}

        <Trading tradingData={tradingData}  />

        </div>



        {/* how to install Section  */}
        
        <ISection installData={installData} heading="How to  install  for Android" />

        {/* Stats */}
          <Stats statsData={statsData} />
      <Footer />
    </>
  );
};

export default MetaTraderAndroid;
