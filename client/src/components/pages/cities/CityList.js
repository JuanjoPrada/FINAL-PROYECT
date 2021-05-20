import { Link } from 'react-router-dom'

const CityList = () => {
    return (
        <>
            <Link className="btn btn-outline-light" to={`/`}> ← Volver</Link>
            <h1>Listado de Ciudades</h1>
            <Link to={'/madrid/categorias'} >Madrid</Link>
            <hr></hr>
            <Link to={'/barcelona/categorias'} >Barcelona</Link>
        </>
    )
}

export default CityList