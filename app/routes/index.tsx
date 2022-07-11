import Homepage from '../components/pages/homepage';
import Trading from '../components/pages/trading';
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
