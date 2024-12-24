import images from '/assets/main1.png';
import Navbar from '../elements/Navbar';
import Hero from '../elements/Hero';
import Footer from '../elements/Footer';

const LandingPages = () => {
  return (
    <>
      <Navbar />
      <div className='flex mt-3 w-full justify-center'>
        <img className='w-3/4' src={images} alt='images' />
      </div>
      <Hero />
      <Footer />
    </>
  );
};

export default LandingPages;
