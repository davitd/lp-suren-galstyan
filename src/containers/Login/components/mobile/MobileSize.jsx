import Hero from '../../../../components/Hero/Hero';
import Footer from '../../../../components/Footer/Footer';
import RenderFormStep from './RenderFromStep/RenderFormStep';

import nettTref_1 from '../../../../images/mobileSize/nettTreff_3.png';
import nettTref_2 from '../../../../images/mobileSize/nettTreff_4.png';
import couple from '../../../../images/mobileSize/couple.png';

import './MobileSize.css';

export default function MobileSize() {
  
  return (
    <div className="mobile-size">
      <RenderFormStep />
      <Hero>
        <div className="hero-image-container">
          <div className="nett-tref-image-wrapper">
            <img src={nettTref_1} alt="nettTref" />
            <img src={nettTref_2} alt="nettTref" />
          </div>
          <div className="couple-image-wrapper">
            <img src={couple} alt="couple" />
          </div>
        </div>
      </Hero>
      <Footer />
    </div>
  );
}
