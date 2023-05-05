import logo from '../../images/logo.png';

import './Header.css';

export default function Header() {
  
  return (
    <header>
      <div className="logo-wrapper">
        <img src={logo} alt="nettTref" />
      </div>
    </header>
  );
}
