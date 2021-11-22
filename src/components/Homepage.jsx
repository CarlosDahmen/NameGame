import logo from '../images/logo.png';

const Homepage = (props) => (
  <div className="home">
    <img className="logo" src={logo} alt='logo'/>
    <p>
      Try matching the WillowTree employee to their photo.
    </p>
    <button onClick={(evt) => {
      evt.preventDefault();
      props.history.push(`/play`)
    }} className="play-button" type="button">Play!</button>
  </div>
)

export default Homepage
