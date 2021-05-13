import { Toast } from "react-bootstrap"
import logo from './logo.svg'

const Alert = ({ handleAlert, show, text }) => {
    
    if(text.length > 0) {
    return (
        <Toast autohide delay={4000} show={show} onClose={() => handleAlert('', false)} style={{ zIndex: 9999, position: 'fixed', top: 55, right: 10, width: 300 }}>
            <Toast.Header closeButton={false} >
                <img
                    src={logo}
                    className="rounded mr-2"
                    alt="Logotipo"
                    style={{ width: 20, height: 20 }}
                />
                <strong className="mr-auto">Mensaje del sistema</strong>
            </Toast.Header>
            <Toast.Body>{text}</Toast.Body>
        </Toast>
    )
    } else { return '' }
}


export default Alert