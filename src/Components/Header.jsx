import logo from "../images/images/bjp logo.jpeg";
import "../App.css";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: 'none',
  color :'White' 
};

function Header() {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div class="logo-heading">BJP Engineer's Cell, Solapur District</div>

        <button id="Regi">
          <Link to="/Registration" style={linkStyle} >Registration</Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
