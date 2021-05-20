import { Link } from 'react-router-dom'

const Categories = (props) => {
    const { city } = props.match.params
    return (
        <>
            <Link className="btn btn-outline-light" to={'/ciudades'}> ← Volver</Link>
            <h1>Categorias</h1>
            <Link to={`/${city}/restaurantes`} >Restaurantes</Link>
            <hr></hr>
            <Link to={`/${city}/eventos`} >Eventos</Link>
            <hr></hr>
            <Link to={`/${city}/lugares-de-interes`} >Lugares de interes</Link>
        </>
    )
}

export default Categories