import logo from '../images/logo.png';

const Homepage = () => (
  <div className="home">
    <img className="logo" src={logo} alt='logo'/>
    <p>
      Try matching the WillowTree employee to their photo.
    </p>
    <button>Play!</button>
  </div>
)

export default Homepage
