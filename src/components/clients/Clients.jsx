import { useState } from "react";
import "./Clients.css";

const Clients = ({ logos = [], title = "CLIENTES" }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (idx) => {
    setActiveIndex((prev) => (prev === idx ? null : idx));
  };

  if (!logos?.length) return null;
  return (
    <section className="clients">
      <div className="clients__anchor" id="clientes" />
      <div className="clients__inner">
        <header className="clients__header">
          <h2 className="clients__title">{title}</h2>
        </header>

        <div className="clients__grid" role="list">
          {logos.map((logo, index) => (
            <div
              className={`clients__item ${
                activeIndex === index ? "is-active" : ""
              }`}
              onClick={() => toggleActive(index)}
              role="listitem"
              key={index}
            >
              <img
                className="clients__logo"
                src={logo.logo}
                alt="logo cliente"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
