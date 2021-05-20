import { Container } from 'react-bootstrap'
import PlacesList from './Places-list'
import './Places.css'

const Places = (props) => {
    return (
        
        <Container className="places-page">
            <PlacesList {...props}/>
        </Container>
    )
}
export default Places