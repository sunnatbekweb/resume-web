import { FaLocationDot } from "react-icons/fa6";
import "../styles/about.scss";

const About = () => {
  return (
    <section className="container">
      <div className="about">
        <div className="about__row">
          <div className="about__row--col">
            <div className="about__row--col-imageContainer">
              <img src="/src/assets/images/image.jpg" alt="Avatar" />
            </div>
            <h3>Sunnatbek Qadamov</h3>
            <div className="about__row--col-location">
              <FaLocationDot style={{ fontSize: 20 }} />
              <span>Tashkent, Uzbekistan</span>
            </div>
            <div className="about__row--col-skills">
              <div className="skills__item">#HTML5</div>
              <div className="skills__item">#CSS3</div>
              <div className="skills__item">#SCSS</div>
              <div className="skills__item">#JavaScript</div>
              <div className="skills__item">#TypeScript</div>
              <div className="skills__item">#React</div>
              <div className="skills__item">#Redux</div>
              <div className="skills__item">#ReduxToolkit</div>
              <div className="skills__item">#git</div>
            </div>
          </div>
          <div>
            <h2>Frontend Developer</h2>
          </div>
          <div>
            <h4>My stack</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
