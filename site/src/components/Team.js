import React from 'react';

import CEO from '../assets/img/team/1.jpg';
import CTO from '../assets/img/team/2.jpg';

export default function Team() {
    return (
        <div>
             <section className="bg-light page-section" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Nossa Equipe</h2>
         
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={CEO} alt=""/>
            <h4>Erick Pereira</h4>
            <p className="text-muted">CEO</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="https://instagram.com/eric.pereira1" target="blank">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.facebook.com/Burn-Brain-100166934985796/" target="blank">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/eric-pereira-dev/" target="blank">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={CTO} alt=""/>
            <h4>Johny Anastacio</h4>
            <p className="text-muted">CTO</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="https://instagram.com/johnyanastacio" target="blank">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.facebook.com/Burn-Brain-100166934985796/" target="blank">
                  <i className="fa  fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/johny-dos-santos-anastacio-606121125/" target="blank">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large text-muted">Colocando talento em design e desevnvolvimento para trabalhar juntos, nós contruímos soluções web e mobile que te ajudará alcançar os objetivos
          do seu negócio e ainda agradar os seus clientes.</p>
        </div>
      </div>
    </div>
  </section>
            
        </div>
    )
}
