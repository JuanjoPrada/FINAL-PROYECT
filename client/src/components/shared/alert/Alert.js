import { Toast } from "react-bootstrap"
import logo from './logo.png'
import './Toast.css'

const Alert = ({ handleAlert, show, text }) => {

    if (text.length > 0) {

        return (

            <Toast className='toast' autohide delay={6000} show={show} onClose={() => handleAlert('', false)} style={{ backgroundColor: 'black', zIndex: 9999, position: 'fixed', top: 90, right: 10, width: 300 }}>
                <Toast.Header closeButton={false} >
                    <img
                        src={logo}
                        className="rounded mr-2"
                        alt="Logotipo"
                        style={{ width: 40, height: 40 }}
                    />
                    {text}
                </Toast.Header>
            </Toast>
        )
    } else { return '' }
}

export default Alert