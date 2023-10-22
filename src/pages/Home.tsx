import "./Home.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowDown,
} from "react-icons/ai";

export function Home() {
  return (
    <div className="content">
      <section className="home">
        <h1>leonardo-valentin</h1>
        <header>
          <div className="icons">
            <a href="">
              <AiFillGithub />
            </a>
            <a href="">
              <AiFillLinkedin />
            </a>
          </div>
          <img
            src="https://github.com/leonardo-valentin.png"
            alt="imagem do github de leonardo-valentin"
          />
        </header>

        <div className="presentation">
          <h2>
            Prazer, me chamo <span>Leonardo Valentin</span>.
          </h2>
          <p>
            Nascido do interior de São Paulo, um estudante de programação
            fullstack, que constrói aplicações acessíveis com amor
          </p>
          <div className="links">
            <div className="link-button">
              <a href="">CONTACT ME</a>
            </div>
            <a href="#a">
              <AiOutlineArrowDown />
            </a>
          </div>
        </div>
      </section>

      <div>
        <h2 className="separator">Tecnologias: </h2>
        <section className="border">
          <h3>HTML</h3>
          <h3>CSS</h3>
          <h3>JavaScript</h3>
          <h3>TypeScript</h3>
          <h3>ReactJS</h3>
          <h3>NodeJS</h3>
          <h3>Acessibilidade</h3>
        </section>
      </div>

      <section className="projects">
        <div>
          <h2 id="a">Projects</h2>
          <div className="link-button">
            <a href="">CONTACT ME</a>
          </div>
        </div>
      </section>
    </div>
  );
}
