import { HeaderDesktop } from './components/HeaderDesktop';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

import './app.css';

export function App() {
  return (
    <div className='container'>
      <HeaderDesktop />
      <Main />
      <Footer />
    </div>
  )
  
}
