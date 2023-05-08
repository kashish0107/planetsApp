// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="planet-con">
      <img alt={`planet ${name}`} src={imageUrl} className="img-size" />
      <h1 className="planet-name">{name}</h1>
      <p className="para">{description}</p>
    </div>
  )
}

export default PlanetItem
