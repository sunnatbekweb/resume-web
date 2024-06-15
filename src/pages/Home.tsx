import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import styles from "../styles/Home.module.css";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className={styles.home}>
      <div className="container">
        <h1>Sunnatbek Qadamov</h1>
        <h2>
          I'm a <span>Frontend developer</span> from Uzbekistan
        </h2>
        <div className={styles.icons_container}>
          <div className={styles.icons_wrapper}>
            <Link to={"https://www.linkedin.com/in/sunnatbekqadamov/"} target="_blank">
              <FaLinkedin />
            </Link>
          </div>
          <div className={styles.icons_wrapper}>
            <Link to={"https://github.com/sunnatbekweb"} target="_blank">
              <FaGithub />
            </Link>
          </div>
          <div className={styles.icons_wrapper}>
            <Link to={"https://t.me/Sunnatbek_Kadamov"} target="_blank">
              <FaTelegram />
            </Link>
          </div>
          <div className={styles.icons_wrapper}>
            <Link to={"mailto:sunnatbekkadamov@gmail.com"} target="_blank">
              <MdEmail />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
