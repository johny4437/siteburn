import React,{useState} from 'react';
import emailjs from   'emailjs-com';
export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [reset, setReset] = useState({
    name:'',
    email:'',
    message:''
  });

 
 async  function handleSubmit(e){
    e.preventDefault();
    const data = {
      name,
      email, 
      message,
      phone
    };
   
    await emailjs.send("smtp_server", "template_o1ZC9Fq8", data, "user_6ibdvBCSA0rnsWzkHr4WV"); 
    setReset(data);
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
          <form id="contactForm" onSubmit={handleSubmit} name="sentMessage"  >
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control"  name="name" id="name" type="text" placeholder="Nome *" 
                  value={name}
                  onChange={e =>setName(e.target.value)}
                   required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" name="email" id="email" 
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
                type="email" placeholder="Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control"  name="phone" id="phone"
                  value={phone}
                  onChange={e=>setPhone(e.target.value)}
                  type="tel" placeholder="Telefone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" name="message" id="message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Sua Mensagem *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button  className="btn btn-primary btn-xl text-uppercase" type="submit" >Enviar Mensagem</button>
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
