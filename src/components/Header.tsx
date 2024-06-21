import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

const Header = () => {
  const logoText = "<SQ/>";
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link to={"/"} className={styles.logo}>
            {logoText}
          </Link>
          <div className={styles.header_right}>
            <ul className={styles.nav_list}>
              <li className={styles.nav_list_item}>
                <Link to="/">Home</Link>
              </li>
              <li className={styles.nav_list_item}>
                <Link to="/about">About</Link>
              </li>
            </ul>
            <button className={styles.download_button}>Download CV</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
