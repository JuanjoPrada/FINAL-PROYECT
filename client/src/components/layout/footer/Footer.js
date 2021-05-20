import React from "react"
import './Footer.css'

const Footer = () =>
    <footer className="">
    <div className="container-fluid text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">OH MY PLAN!</h5>
                <p>
                Mejora la forma en la que hacer planes, con OH MY PLAN!. ¿Quieres descubrir los últimos eventos y experiencias restaurantes y lugares en tu ciudad? ¡Explora OH MY PLAN!
                </p>
            </div>

            <hr className="hr clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Contacto</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Atención al Cliente</a></li>
                    <li><a href="#!">soporte@ohmyplan.com</a></li>
                    <li><a href="#!">Trabaja con nosotros</a></li>
                    <li><a href="#!">No hagas nada</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Legal</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Preguntas frecuentes</a></li>
                    <li><a href="#!">Términos de Uso</a></li>
                    <li><a href="#!">Política de Privacidad</a></li>
                    <li><a href="#!">Política de Cookies</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright: OH MY PLAN!
        
    </div>

</footer>

export default Footer