import logo from '../assets/logo.svg';
import loupe from '../assets/loupe.svg';

import '../App.css';

export function HeaderDesktop(){
  return (
    <div className='header-desktop'>
      <img src={logo} alt="Logo Bibbble" />
      <div className='header-menu'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Gallery</li>
          <li>Team</li>
          <li>
            <img src={loupe} alt="Lupa" />
          </li>
        </ul>
      </div>      
    </div>
  );
}