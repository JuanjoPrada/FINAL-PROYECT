import { Link } from 'react-router-dom'
import './CityList.css'

const CityList = () => {
    return (
        <>
            <div className='city-container city-container-mad'>
                <Link className='city-title2' to={'/madrid/categorias'} > <p>Madrid</p>
                </Link>
            </div>
            <div className='city-container city-container-bcn'>
                <Link className='city-title2' to={'/barcelona/categorias'} ><p>Barcelona</p>
                </Link>
            </div>
        </>
    )
}

export default CityList