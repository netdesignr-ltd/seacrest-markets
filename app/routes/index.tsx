import Homepage from '../components/pages/homepage';
import Trading from './gettingStarted/demo-Trading'
import Header from '../components/templates/header';
import Footer from '~/components/templates/footer';
const index = () => {
  return (
    <div>
      {/* <Homepage /> */}
      <Header />
      <Trading />
      <Footer />
    </div>
  );
};

export default index;
