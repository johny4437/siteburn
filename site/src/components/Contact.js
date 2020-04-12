import React,{useState} from 'react';
import emailjs from   'emailjs-com';
export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, sentMessage] = useState('');

 async  function handleSubmit(e){
    e.preventDefault();
    const data = {
      name,
      email, 
      message
    };
    try {
      const response = await emailjs.send(data) 
    } catch (error) {
      alert('Error to send Email..');
    }
  }
    return (
        <div>
            <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Contato</h2>
          <h3 className="section-subheading text-muted">Nos envie uma mensagem e entraremos em contato o mais rápido possivel.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" onSubmit={handleSubmit} name="sentMessage" novalidate="novalidate" >
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Nome *" 
                  value={name}
                  onChange={e =>setName(e.target.value)}
                   required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" 
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
                type="email" placeholder="Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Telefone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message"
                  value={message}
                  onChange={sentMessage}
                  placeholder="Sua Mensagem *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <a id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit" href="">Enviar Mensagem</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

        </div>
    )
}
