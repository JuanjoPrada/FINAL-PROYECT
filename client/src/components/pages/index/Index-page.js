import { Link } from 'react-router-dom'

const IndexPage = () => {
    return (
        <>
        <h1>Inicio</h1>
            <Link to={'/ciudades'} >Explora tu ciudad</Link>
        </>
    )
}

export default IndexPage