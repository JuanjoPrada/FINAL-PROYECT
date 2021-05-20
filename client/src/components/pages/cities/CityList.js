import { Link } from 'react-router-dom'
import './CityList.css'

const CityList = () => {
    return (
        <>
            <Link className="btn btn-outline-light back-button" to={`/`}>◁</Link>
            <div className='city-container city-container-mad'>
                <Link className='city-title2' to={'/madrid/categorias'} > <p>Madrid</p>
                </Link>
            </div>
            <div className='city-container city-container-bcn'>
                <Link className='city-title2' to={'/barcelona/categorias'} ><p>Barcelona</p>
                </Link>
            </div>
            <div className='city-container city-container-sev'>
                <Link className='city-title2' to={'/sevilla/categorias'} ><p>Sevilla</p>
                </Link>
            </div>
        </>
    )
}

export default CityList