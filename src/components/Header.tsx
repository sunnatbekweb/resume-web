import { Link, NavLink } from "react-router-dom";
import "../styles/Header.scss";

const Header = () => {
  const logoText = "<SQ/>";
  return (
    <header className="header">
      <div className="container">
        <div className="wrapper">
          <Link to={"/"} className="logo">
            {logoText}
          </Link>
          <div className="header_right">
            <ul className="nav_list">
              <li className="nav_list_item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav_list_item">
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
            <button className="download_button">Download CV</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
