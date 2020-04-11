import React from 'react';
import port1 from '../assets/img/portifolios/port1.jpg';
import port2 from '../assets/img/portifolios/port2.jpg';
import port3 from '../assets/img/portifolios/port3.jpg';
import port4 from '../assets/img/portifolios/port4.jpg';
import port5 from '../assets/img/portifolios/port5.jpg';
import port6 from '../assets/img/portifolios/port6.jpg';


export default function Portfolio() {
    return (
        <div>
            <section className="bg-light page-section" id="portfolio">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Portfolio</h2>
          <h3 className="section-subheading text-muted">Um pouco do nosso trabalho.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="http://www.vassouraslinsbrasil.com.br/">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src={port1} alt=""/>
          </a>
          <div className="portfolio-caption">
            <h4>Vassouras Lins</h4>
   
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="http://www.defesaagricola.com.br/">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src={port2} alt=""/>
          </a>
          <div className="portfolio-caption">
            <h4>Desfesa Agrícola</h4>
            
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="http://www.docefruit.com/">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src={port3} alt=""/>
          </a>
          <div className="portfolio-caption">
            <h4>Doce Fruit</h4>
          
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="http://www.wsnaturais.com.br/">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src={port4} alt=""/>
          </a>
          <div className="portfolio-caption">
            <h4>Ws Naturais</h4>
            
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="https://www.goldilockone.com/">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src={port5} alt=""/>
          </a>
          <div className="portfolio-caption">
            <h4>GOLDLOCK ONE</h4>
            <p className="text-muted">Website Design</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a className="portfolio-link" data-toggle="modal" href="http://www.institutoelo.com.br/">
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img className="img-fluid" src={port6} alt=""/>
          </a>
          <div className="portfolio-caption">
            <h4>Instituto ELO</h4>
            
          </div>
        </div>
      </div>
    </div>
  </section>
        </div>
    )
}
