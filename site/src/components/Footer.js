import React from 'react'

export default function Footer() {
    return (
        <div>
            
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Burn Brain</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.facebook.com/Burn-Brain-100166934985796">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://instagram.com/burn_brain">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#">Politica de Privacidade</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Termos de Uso</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
        </div>
    )
}

