import { BiLogoTypescript } from "react-icons/bi";
import "../styles/about.scss";
import { FaLocationDot, FaReact } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { MdLanguage } from "react-icons/md";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-container">
          <div className="about-container__row">
            <div className="about-container__row--col">
              <div className="about-container__row--col-imageContainer">
                <img src="/src/assets/images/image.jpg" alt="Avatar" />
              </div>
              <h3 className="about-container__row--col-name">Sunnatbek Qadamov</h3>
              <div className="about-container__row--col-location">
                <FaLocationDot style={{ fontSize: 20 }} />
                <span>Tashkent, Uzbekistan</span>
              </div>
              <div className="about-container__row--col-skills">
                <div className="skills__item">#HTML5</div>
                <div className="skills__item">#CSS3</div>
                <div className="skills__item">#SASS/SCSS</div>
                <div className="skills__item">#JavaScript</div>
                <div className="skills__item">#TypeScript</div>
                <div className="skills__item">#React</div>
                <div className="skills__item">#Redux</div>
                <div className="skills__item">#Next.js</div>
                <div className="skills__item">#ReduxToolkit</div>
                <div className="skills__item">#REST API</div>
                <div className="skills__item">#Zustand</div>
                <div className="skills__item">#git</div>
              </div>
            </div>
            <div className="about-container__row--col with-background">
              <h3 className="about-container__row--col-title">Frontend Developer</h3>
              <h4 className="secondary-title">About me</h4>
              <p className="text">
                Being a frontend developer, I have skills in JavaScript,
                React.js, and Next.js. I ensure that I integrate the latest js
                knowledge into every task I perform. I pay attention to details,
                being passionate about creating a user-friendly website for this
                purpose.
              </p>
              <h4 className="secondary-title">Languages</h4>
              <div className="language__item">
                <MdLanguage style={{ fontSize: 24 }} />
                <span>Uzbek - Native</span>
              </div>
              <div className="language__item">
                <MdLanguage style={{ fontSize: 24 }} />
                <span>Russian - Intermediate</span>
              </div>
              <div className="language__item">
                <MdLanguage style={{ fontSize: 24 }} />
                <span>English - Upper Intermediate</span>
              </div>
            </div>
            <div className="about-container__row--col">
              <h3 className="about-container__row--col--title">I use</h3>
              <div className="stack__item">
                <SiJavascript
                  style={{
                    fontSize: 32,
                    color: "yellow",
                    backgroundColor: "#000",
                    borderRadius: 2,
                  }}
                />
                <span>JavaScript</span>
              </div>
              <div className="stack__item">
                <BiLogoTypescript
                  style={{
                    fontSize: 42,
                    color: "#007BCD",
                    borderRadius: 2,
                  }}
                />
                <span>TypeScript</span>
              </div>
              <div className="stack__item">
                <FaReact
                  style={{
                    fontSize: 32,
                    color: "rgb(86, 196, 225)",
                    borderRadius: 2,
                  }}
                />
                <span>React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
