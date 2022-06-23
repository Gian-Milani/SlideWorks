import logoFooter from '../assets/logo-footer.svg';
import logoFacebook from '../assets/facebook.svg';
import logoTwitter from '../assets/twitter.svg';
import logoInstagram from '../assets/instagram.svg';

import '../App.css';

export function Footer(){
  return(
    <div className='footer'>
      <div className='container-img'>
        <img src={logoFooter} alt="Logo Footer" />
      </div>
      
      <div className='bottom-footer'>    
        <div className='informations'>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
        </div>
        <div className='social-midias'>
          <a href="https://www.facebook.com" target='blank'>
              <img src={logoFacebook} alt="Logo Facebook" />
          </a>
          <a href="https://www.twitter.com" target='blank'>
            <img src={logoTwitter} alt="Logo Twitter" />
          </a>
          <a href="https://www.instagram.com" target='blank'>
            <img src={logoInstagram} alt="Logo Instagram" />
          </a>
        </div>
      </div>
    </div>
  )
}