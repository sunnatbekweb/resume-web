import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import "../styles/home.scss";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <h1>Sunnatbek Qadamov</h1>
        <h2>
          I'm a <span>Frontend developer</span> from Uzbekistan
        </h2>
        <div className="icons_container">
          <Link
            to={"https://www.linkedin.com/in/sunnatbekqadamov/"}
            target="_blank"
          >
            <div className="icons_wrapper">
              <FaLinkedin />
            </div>
          </Link>
          <Link to={"https://github.com/sunnatbekweb"} target="_blank">
            <div className="icons_wrapper">
              <FaGithub />
            </div>
          </Link>
          <Link to={"https://t.me/Sunnatbek_Kadamov"} target="_blank">
            <div className="icons_wrapper">
              <FaTelegram />
            </div>
          </Link>
          <Link to={"mailto:sunnatbekkadamov@gmail.com"} target="_blank">
            <div className="icons_wrapper">
              <MdEmail />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
