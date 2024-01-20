// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-Bar">
    <div className="nav-items-Container">
      <div className="logo-Container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="nav-logo-size"
        />
        <h1 className="logo-heading">Wave</h1>
      </div>
      <ul className="options-Container">
        <li className="list-items">
          <Link to="/">Home</Link>
        </li>
        <li className="list-items">
          <Link to="/about">About</Link>
        </li>
        <li className="list-items">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
