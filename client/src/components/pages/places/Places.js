import PlacesList from './Places-list'
import './Places.css'


const Places = (props) => {
    return (
        <div className="places-page">
            <PlacesList {...props} />
        </div>
    )
}
export default Places