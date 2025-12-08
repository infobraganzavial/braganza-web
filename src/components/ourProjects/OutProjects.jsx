import { useState } from "react";
import "./OurProject.css";

const OurProjects = ({ ourProjects, projectBackground }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (idx) => {
    setActiveIndex((prev) => (prev === idx ? null : idx));
  };

  if (!projectBackground || !ourProjects) return <div>Cargando...</div>;

  return (
    <div className="ourProjects">
      <div className="ourProjects__anchor" id="proyectos" />

      <div
        className="container-bg"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.3), rgba(0, 0, 0, 0.1)), url(${projectBackground.background})`,
        }}
      >
        <div className="projects__hexagon-wrapper">
          {ourProjects.map((project, index) => (
            <section className="projects__hexagon" key={index}>
              <div
                className={`projectCard ${
                  activeIndex === index ? "is-active" : ""
                }`}
                onClick={() => toggleActive(index)}
              >
                <article className="shape">
                  <img
                    src={project.backgroundProject}
                    alt="img"
                    loading="lazy"
                    decoding="async"
                  />

                  <section className="content">
                    <header>
                      <h2>{project.titleProject}</h2>
                    </header>
                    <p>{project.service}</p>
                    <footer>{project.placeDate}</footer>
                  </section>
                </article>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
