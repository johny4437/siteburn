import React from 'react'

export default function Services() {
    return (
        <div>
            <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Serviços</h2>
          <h3 className="section-subheading text-muted">Estaremos 100% focados no seu projeto.</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-globe fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">WEB</h4>
          <p className="text-muted">Nós oferecemos desenvolvimento do Frontend e do Backend. Nosso time de desenvolvimento 
          é especializado em PHP, NodeJs, Python, JavaScript,HTML5, CSS3,BootStrap, React e Angular.
          </p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-mobile fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Mobile</h4>
          <p className="text-muted">Desenvolvemos aplicativos híbridos para Android e IOS.
          Ultilizamos linguagens de programação moderna como React-Native e IONIC.</p>
        </div>
        <div className="col-md-4">
          <span className="fab-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary" color="#000000"></i>
            <i className="fa fa-desktop fa-stack-1x fa-inverse"></i>
          </span>
          <br/>
          <br/>

          <h4 className="service-heading">Sistemas</h4>
          <p className="text-muted">Desenvolvemos o seu sistema conforme a necessidade do seu negócio.</p>
        </div>
      </div>
    </div>
  </section>
        </div>
    )
}
