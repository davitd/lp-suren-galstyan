import Hero from '../../../../components/Hero/Hero';
import Footer from '../../../../components/Footer/Footer';
import LoginForm from './Form/LoginForm';

import './DesktopSize.css';

import hero from '../../../../images/desktopSize/hero.png';

import useWindowSize from '../../../../services/hooks/useWindowSize';

export default function DesktopSize() {
  
  const window_With = useWindowSize();

  return (
    <div className="descktop-size">
      <div className="outer-form">
        <LoginForm />
        {window_With > 1350 && <Footer />}
      </div>
      <Hero>
        <img src={hero} alt="hero" className="hero-image" />
      </Hero>
      {window_With <= 1350 && <Footer />}
    </div>
  );
}
