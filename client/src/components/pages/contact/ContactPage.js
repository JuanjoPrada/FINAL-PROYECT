
import {Row, Col } from 'react-bootstrap'
import "./Contact.css"

const ContactPage = () => {
    return (
        <>
            <section className="contact-header">
                <h1>Contacta con Nosotros</h1>
                <h3>Donde quieras, como quieras</h3>
            </section>
            <Row>
                <Col lg={4}>
                    <article>
                        <h4>Llámanos</h4>
                        <p>Te atendemos personalmente de lunes a domingo de 9 a 19:30 h., 1 h. menos en Canarias.</p>
                        <h5>9001239871</h5>
                    </article>
                </Col>
                <Col lg={4}>
                    <article>
                        <h4>Escríbenos</h4>
                        <p>Haznos llegar tus comentarios a través de nuestro formulario o escríbenos a </p>
                        <h5>sugerencias@ohmyplan.es</h5>
                    </article>
                </Col>
                <Col lg={4}>
                    <article>
                        <h4>Por RRSS</h4>
                        <p>También puedes contactar con nosotros desde nuestro <strong>Facebook, Twitter, Youtube, Instagram y Linkedin</strong>.</p>

                    </article>
                </Col>
            </Row>
        </>
    )
}

export default ContactPage
