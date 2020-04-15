import React from 'react'
import Header from './components/Header';
import Team from './components/Team';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from   './components/Portfolio';
import About from   './components/About';


import './assets/css/bootstrap.min.css';
import './assets/css/agency.min.css';


export default function Site() {
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
