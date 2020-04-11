import React from 'react'

export default function About() {
    return (
        <div>
            <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Sobre Nós</h2>
          <h3 className="section-subheading text-muted">Ajudamos marcas e negócios a resolver seus desafios com soluções Web e mobiles de forma gratificante e significativa.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2019-2020</h4>
                  <h4 className="subheading">Nosso Começo</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Foi onde decidimos colocar nossos conhecimentos em prática de forma a somar e gerar valor para nossos clientes.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
        </div>
    )
}
