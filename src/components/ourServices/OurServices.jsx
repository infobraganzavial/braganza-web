import "./OurServices.css";

const OurServices = ({ ourServices }) => {
  if (!ourServices?.services?.length) return null;

  return (
    <section
      id="nuestros-servicios"
      className="our-services"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.3), rgba(0, 0, 0, 0.1)), url(${ourServices.imageBg.url})`,
      }}
    >
      {ourServices.services.map((s) => (
        <article className="our-services__service" key={s.id}>
          <div className="our-services__info">
            <h2>{s.title}</h2>
            <p>{s.shortDescription}</p>
          </div>

          <div className="our-services__figure-container">
            <div className="our-services__figure-wrapper">
              <figure
                className="our-services__figure"
                style={{ backgroundImage: `url(${s.images?.[0]?.url})` }}
              />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default OurServices;
