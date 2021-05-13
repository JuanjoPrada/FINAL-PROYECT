import { Link } from 'react-router-dom'

const IndexPage = () => {
    return (
        <>
        <h1>Soy el inicio</h1>
            <Link to={`/madrid/lugares-de-interes/`} >Ir a Madrid</Link>
        </>
    )
}

export default IndexPage