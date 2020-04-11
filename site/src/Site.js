import React from 'react'
import Navigation from './components/Navigation';
import Header from './components/Header';
import Team from './components/Team';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from   './components/Portfolio';
import About from   './components/About';


export default function Site() {
    return (
        <div>
            <Navigation/>{/* Navigation*/ }
            <Header/>{/* Header */}
            <Services/>{/*Services */}
            <Portfolio/>{/*Portfolio Grid*/}
            <About/>{/*About */}
            <Team/>{/*Team*/}
 {/*Clients*/}
  <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <a href="#">
            <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#">
            <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#">
            <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#">
            <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt=""/>
          </a>
        </div>
      </div>
    </div>
  </section>

  {/*Contato*/}
    <Contact/>
  {/*Footer*/}
  <Footer/>
 </div>
    );
}
