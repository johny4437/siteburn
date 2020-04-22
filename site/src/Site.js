import React from 'react'
import Header from './components/Header';
import Team from './components/Team';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from   './components/Portfolio';
import About from   './components/About';
import ReactPixel from 'react-facebook-pixel';


import './assets/css/bootstrap.min.css';
import './assets/css/agency.min.css';


export default function Site() {
    const advancedMatching = { em: 'burnbrainje@gmail.com' };
    const options = {
        autiConfig: true,
        debug:false
    };

    ReactPixel.init('224347831980798', advancedMatching, options);
    ReactPixel.pageView();
    return (
        <div>
          
            
             <Header/>
             <Services/>
             <Portfolio/>
             <About/>
             <Team/>
             <Contact/>
            
 
  
  {/*Footer*/}
  <Footer/>
 </div>
    );
}
