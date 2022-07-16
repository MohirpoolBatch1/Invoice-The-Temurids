import React, { useEffect, useState } from "react";
import "./services.css";
import img from "./Services photos/1.png";
import img2 from "./Services photos/2.png";
import img3 from "./Services photos/3.png";
import logo from "./Services photos/Vector (1)1.png";
import logo2 from "./Services photos/Vector (1).png";
import logo3 from "./Services photos/Vector2.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Basic_Url } from "../BasicUrl";

function Services() {
  const { language = "ru" } = useParams();

  const [slogan, setSlogan] = useState([]);
  const [firstIconText, setFirstIconText] = useState([]);
  const [secondIconText, setSecondIconText] = useState([]);

  useEffect(() => {
    getSlogan();
    getFirstIconText();
    getSecondIconText();
  }, []);
  useEffect(() => {
    getSlogan();
    getFirstIconText();
    getSecondIconText();
  }, [language]);
  async function getSlogan() {
    const data = await axios
      .get(
        Basic_Url + "/api/" + (language ? language : "ru") + "/service_slogan/"
      )
      .then((res) => res.data);
    setSlogan(data[0]);
  }
  async function getFirstIconText() {
    const data = await axios
      .get(Basic_Url + "/api/" + (language ? language : "ru") + "/icon_text/")
      .then((res) => res.data);
    setFirstIconText(data[0]);
  }
  async function getSecondIconText() {
    const data = await axios
      .get(Basic_Url + "/api/" + (language ? language : "ru") + "/icon_text/")
      .then((res) => res.data);
    setSecondIconText(data[1]);
  }

  return (
    <>
      <section className="services__content-container" id="services">
        <h2>
          {language == "ru"
            ? "УСЛУГИ"
            : language == "uz"
            ? "Xizmatlar"
            : "Services"}
        </h2>
        <div className="services__photos row">
          <div className="services__photos__item col-lg-7 col-md-12">
            <img src={img} alt="img" />
          </div>
          <div className="services__photos__items col-lg-4 col-md-12 col-sm-12">
            <img src={img2} alt="img" />
            <img src={img3} alt="img" />
          </div>
        </div>
        <h4>{slogan.text}</h4>
        <div className="services__about d-flex">
          <div className="services__about-logo">
            <img src={logo} alt="logo" />
            <img src={logo2} alt="logo" />
          </div>
          <div className="services__about-text">
            <h5>{firstIconText.title}</h5>
            <p>{firstIconText.text}</p>
          </div>
        </div>
        <div className="services__about services_second d-flex">
          <div className="services__about-logo">
            <img src={logo3} alt="logo" />
          </div>
          <div className="services__about-text">
            <h5>{secondIconText.title}</h5>
            <p>{secondIconText.text}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
