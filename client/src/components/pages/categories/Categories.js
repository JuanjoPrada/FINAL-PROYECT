import { Link } from 'react-router-dom'
import './Categories.css'

const Categories = (props) => {
    const { city } = props.match.params
    return (
        <>
            <Link className="btn btn-outline-light back-button" to={'/ciudades'}>◁</Link>
            <div className='categories-container categories-container-event'>
                <Link to={`/${city}/eventos`} ><p>Eventos</p></Link>
            </div>
            <div className='categories-container categories-container-rest'>
                <Link to={`/${city}/restaurantes`} ><p>Restaurantes</p></Link>
            </div>
            <div className='categories-container categories-container-place'>
                <Link to={`/${city}/lugares-de-interes`} ><p>Lugáres de interés</p></Link>
            </div>
        </>
    )
}

export default Categories