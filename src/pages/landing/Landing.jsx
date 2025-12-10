import { useEffect, useState } from "react";

// Components
import Carousel from "../../components/carousel/Carousel";
import ContactUs from "../../components/contactUs/ContactUs";
import AboutUs from "../../components/aboutUs/AboutUs";
import OurProjects from "../../components/ourProjects/OutProjects";
import ImagesHoverEffect from "../../components/imagesHoverEffect/ImagesHoverEffect";
import { getCarousel } from "../../services/Carousel";
import { getServices } from "../../services/Services";
import { getAboutUs } from "../../services/AboutUs";
import {
  getProjectBackground,
  getProjects,
} from "../../services/ProjectBackground";
import { getClients } from "../../services/Clients";
import Clients from "../../components/clients/Clients";

const Landing = () => {
  const [slideImages, setSlideImages] = useState([]);
  const [services, setServices] = useState([]);
  const [aboutUs, setAboutUs] = useState(null);
  const [projectBackground, setProjectBackground] = useState(null);
  const [ourProjects, setOurProjects] = useState([]);
  const [clients, setClients] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCarousel()
      .then((data) => {
        setSlideImages(data.images);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getServices()
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getAboutUs()
      .then((data) => {
        setAboutUs(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getProjectBackground()
      .then((data) => {
        setProjectBackground(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getProjects()
      .then((data) => {
        setOurProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getClients()
      .then((data) => {
        setClients(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Carousel slideImages={slideImages} />
      <ImagesHoverEffect sections={services} />
      <AboutUs aboutUs={aboutUs} />
      <OurProjects
        ourProjects={ourProjects}
        projectBackground={projectBackground}
      />
      <Clients logos={clients} />
      <ContactUs />
    </>
  );
};

export default Landing;
