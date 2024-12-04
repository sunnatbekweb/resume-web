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
            <h3 className="about__row--col-name">Sunnatbek Qadamov</h3>
            <div className="about__row--col-location">
              <FaLocationDot style={{ fontSize: 20 }} />
              <span>Tashkent, Uzbekistan</span>
            </div>
            <div className="about__row--col-skills">
              <div className="skills__item">#HTML5</div>
              <div className="skills__item">#CSS3</div>
              <div className="skills__item">#SASS/SCSS</div>
              <div className="skills__item">#JavaScript</div>
              <div className="skills__item">#TypeScript</div>
              <div className="skills__item">#React</div>
              <div className="skills__item">#Redux</div>
              <div className="skills__item">#ReduxToolkit</div>
              <div className="skills__item">#git</div>
            </div>
          </div>
          <div className="about__row--col with-background">
            <h3 className="about__row--col-title">Frontend Developer</h3>
            <h4 className="secondary-title">About me</h4>
            <p className="text">
              Being a frontend developer, I have skills in JavaScript, React.js,
              and Next.js. I ensure that I integrate the latest js knowledge
              into every task I perform. I pay attention to details, being
              passionate about creating a user-friendly website for this
              purpose.
            </p>
          </div>
          <div className="about__row--col">
            <h3 className="about__row--col--title">My stack</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
