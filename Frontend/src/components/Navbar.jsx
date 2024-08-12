import './Navbar.css'
import { FaSearch } from 'react-icons/fa';
import LOGO from '../images/logo.png';

function Navbar(){
    return(
        <nav className="navbar">
      <div className="logo">
        <img src={LOGO} alt="Logo" />
      </div>
      
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
      
      <div className="login-button">
        <button>Login</button>
      </div>
    </nav>
    );
}

export default Navbar;