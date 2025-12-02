import styled from "styled-components";

// Theming
import colors from "../../theming/colors";
import renderDescription from "../../helpers/rich-text";

const Wrapper = styled.div`
  position: relative;
`;

const IdDiv = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100vh - 102px);
`;

const AboutUsContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 100px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-attachment: scroll; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 5rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const ImageISO = styled.div`
  flex: 1;
  width: 100%;
  height: 800px;
  min-height: 600px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Service = styled.article`
  display: flex;
  position: relative;
  width: 40%;
  min-width: 340px;
  height: auto;
  min-height: max-content;
  max-height: max-content;
  margin: 1rem 0;
  flex-direction: column;
  background-color: #fff;

  & section:first-of-type h2 {
    font-size: 2rem;
  }
`;

const Info = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: ${colors.darkColor};
  width: 100%;
  padding: 1rem;

  & h2,
  p {
    font-size: 1rem;
    text-align: center;
    white-space: pre-line;
  }

  & p {
    text-indent: 3em;
  }

  & h2 {
    font-size: 1.5rem;
    color: ${colors.primaryColor};
    text-transform: uppercase;
  }
`;

const AboutUs = ({ aboutUs }) => {
  if (!aboutUs) return null;
  const buildServices = () => {
    return (
      <Service className="aboutus__service">
        <Info
          className="aboutus__info"
          key={aboutUs.title}
          length={aboutUs.description.length}
        >
          <h2>{aboutUs.title}</h2>
          {renderDescription(aboutUs.description)}
        </Info>
      </Service>
    );
  };

  return (
    <Wrapper>
      <IdDiv id="sobre-nosotros"></IdDiv>
      <AboutUsContainer
        className="about-us__containner"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.3), rgba(0, 0, 0, 0.1)), url(${aboutUs.background.url})`,
        }}
      >
        {buildServices()}

        <ImageISO
          style={{
            backgroundImage: `url(${aboutUs.certificateISO.url})`,
          }}
        />
      </AboutUsContainer>
    </Wrapper>
  );
};

export default AboutUs;
