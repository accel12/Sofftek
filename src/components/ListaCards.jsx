import { useRef, useState } from "react";
import Slider from "react-slick";
import "../sass/Planes.scss";
import { useNavigate } from "react-router-dom";

const ListaCards = ({ isChecked1, isChecked2 }) => {
  const navigate = useNavigate();
  let sliderRef = useRef(null);
  let sliderRef2 = useRef(null);
  const [primerIndice, setPrimerIndice] = useState(0);
  const [segundoIndice, setSegundoIndice] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setPrimerIndice(current),
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setSegundoIndice(current),
  };

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const next2 = () => {
    sliderRef2.slickNext();
  };
  const previous2 = () => {
    sliderRef2.slickPrev();
  };
  return (
    <div>
      <div className={isChecked1 ? "block" : "hidden"}>
        <div>
          <div className="slider-container">
            <Slider
              {...settings}
              ref={(slider) => {
                sliderRef = slider;
              }}
            >
              <div className="contenedorCard2">
                <div className="card2">
                  <div className="flex flex-col">
                    <div className="flex">
                      <label
                        className="flex-1 fuenteBold"
                        style={{ fontSize: "24px" }}
                      >
                        Plan en Casa
                      </label>
                      <svg
                        width="56"
                        height="56"
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M54.25 35C54.2493 33.6909 53.8816 32.4082 53.1886 31.2977C52.4955 30.1871 51.5049 29.2931 50.3293 28.7172C49.1537 28.1413 47.8402 27.9067 46.5379 28.0398C45.2356 28.173 43.9967 28.6687 42.962 29.4706C41.9273 30.2725 41.1382 31.3485 40.6843 32.5764C40.2304 33.8043 40.1299 35.1348 40.3942 36.4169C40.6585 37.6991 41.2771 38.8814 42.1796 39.8296C43.0821 40.7778 44.2325 41.454 45.5 41.7812V52.5H49V41.7812C50.5032 41.3931 51.8347 40.5163 52.7851 39.2887C53.7354 38.0612 54.2508 36.5525 54.25 35Z"
                          fill="url(#paint0_linear_12_156416)"
                        />
                        <path
                          d="M42.875 49H35V42C35 40.1435 34.2625 38.363 32.9498 37.0503C31.637 35.7375 29.8565 35 28 35C26.1435 35 24.363 35.7375 23.0502 37.0503C21.7375 38.363 21 40.1435 21 42V49H9.625V20.3438H9.50469L26.4819 8.34315C26.9247 8.03055 27.4535 7.86272 27.9956 7.86272C28.5377 7.86272 29.0665 8.03055 29.5094 8.34315L46.375 20.2453V25.4166C46.6637 25.3903 46.9547 25.375 47.25 25.375C48.1378 25.3749 49.0213 25.4986 49.875 25.7425V22.715L54.25 25.8125V21.5185L31.5284 5.4819C30.4939 4.7538 29.2596 4.36304 27.9945 4.36304C26.7294 4.36304 25.4952 4.7538 24.4606 5.4819L1.75 21.5382V25.8257L6.125 22.7325V49C6.125 49.9283 6.49375 50.8185 7.15012 51.4749C7.8065 52.1313 8.69674 52.5 9.625 52.5H42.875V49ZM31.5 49H24.5V42C24.5 41.0718 24.8687 40.1815 25.5251 39.5252C26.1815 38.8688 27.0717 38.5 28 38.5C28.9283 38.5 29.8185 38.8688 30.4749 39.5252C31.1313 40.1815 31.5 41.0718 31.5 42V49Z"
                          fill="url(#paint1_linear_12_156416)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_12_156416"
                            x1="40.6163"
                            y1="29.9261"
                            x2="58.0062"
                            y2="39.8646"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.35" stop-color="#F7052D" />
                            <stop offset="0.85" stop-color="#CA5AFA" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_12_156416"
                            x1="1.75"
                            y1="4.36304"
                            x2="26.0494"
                            y2="63.992"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.272135" stop-color="#34263B" />
                            <stop offset="0.658079" stop-color="#13172C" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <label style={{ color: "#7981B2", fontSize: "14px" }}>
                      COSTO DEL PLAN
                    </label>
                    <label style={{ fontSize: "18px" }} className="fuenteBold">
                      $39 al mes
                    </label>
                  </div>
                  <hr className="separador" />
                  <div style={{ minHeight: "300px" }}>
                    <div className="flex mb-5">
                      <div className="logoDescripcion">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 20 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.1254 3.62561V4.87681C10.1254 5.70577 9.79608 6.50078 9.20992 7.08694C8.62375 7.6731 7.82874 8.0024 6.99978 8.0024C6.58932 8.0024 6.18289 7.92156 5.80367 7.76448C5.42446 7.60741 5.07989 7.37718 4.78965 7.08694C4.49941 6.7967 4.26918 6.45214 4.11211 6.07292C3.95503 5.69371 3.87419 5.28727 3.87419 4.87681V3.62561C3.87482 2.79685 4.20432 2.00221 4.79035 1.41618C5.37637 0.830154 6.17102 0.500648 6.99978 0.500015C7.82855 0.500648 8.62319 0.830154 9.20922 1.41618C9.79524 2.00221 10.1247 2.79685 10.1254 3.62561ZM13.251 12.3768V15.5024H0.750977V12.3768C0.750742 11.3844 0.987429 10.4062 1.44136 9.52371C1.89529 8.64118 2.55335 7.87977 3.36081 7.30279C3.7603 7.90182 4.30142 8.39305 4.93618 8.73292C5.57095 9.0728 6.27976 9.25082 6.99978 9.25121C7.71981 9.25082 8.42862 9.0728 9.06339 8.73292C9.69815 8.39305 10.2393 7.90182 10.6388 7.30279C11.4465 7.87965 12.1049 8.64098 12.5593 9.52349C13.0136 10.406 13.2507 11.3842 13.251 12.3768ZM11.9998 11.7512H10.751V10.5024H9.49978V11.7512H8.25098V13.0024H9.49978V14.2512H10.751V13.0024H11.9998V11.7512Z"
                            fill="#03050F"
                          />
                        </svg>
                      </div>

                      <label>
                        Médico general a domicilio por S/20 y medicinas
                        cubiertas al 100%.
                      </label>
                    </div>
                    <div className="flex mb-5">
                      <div className="logoDescripcion">
                        <svg
                          width="40"
                          height="45"
                          viewBox="0 0 30 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5063 9.775V2.25C17.5063 1.21875 16.6625 0.375 15.6313 0.375H4.36875C3.3375 0.375 2.49375 1.21875 2.49375 2.25V9.775H0.625V11.65C0.625 12.6813 1.46875 13.525 2.5 13.525H17.5C18.5312 13.525 19.375 12.6813 19.375 11.65V9.775H17.5063ZM10 2.25C10.3438 2.25 10.625 2.53125 10.625 2.875C10.625 3.21875 10.3438 3.5 10 3.5C9.65625 3.5 9.375 3.21875 9.375 2.875C9.375 2.53125 9.65625 2.25 10 2.25ZM18.125 11.65C18.125 11.9938 17.8438 12.275 17.5 12.275H2.5C2.15625 12.275 1.875 11.9938 1.875 11.65V11.025H7.5C7.5 11.3688 7.78125 11.65 8.125 11.65H11.875C12.2188 11.65 12.5 11.3688 12.5 11.025H18.125V11.65Z"
                            fill="#03050F"
                          />
                        </svg>
                      </div>

                      <label>
                        Videoconsulta y orientación telefónica al 100% en
                        medicina general + pediatría.
                      </label>
                    </div>
                    <div className="flex mb-5">
                      <div className="logoDescripcion">
                        <svg
                          width="40"
                          height="50"
                          viewBox="0 0 24 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 5.87678H10.5V8.37678H9.25119V0.87439H1.7512V9.33667C1.37118 9.55579 1.05551 9.87104 0.835887 10.2508C0.616265 10.6305 0.500426 11.0613 0.5 11.5V16.5024H4.2512V13.3768H6.75119V16.5024H15.5V8.38394C15.5009 8.05504 15.437 7.72918 15.3118 7.42503C15.1865 7.12089 15.0025 6.84445 14.7703 6.61154C14.5381 6.37864 14.2621 6.19385 13.9584 6.06776C13.6546 5.94168 13.3289 5.87678 13 5.87678ZM8 5.87678H6.1256V7.75118H4.87441V5.87678H3V4.62558H4.87441V2.75118H6.1256V4.62558H8V5.87678ZM13.6256 13.9952H9.8744V12.7512H13.6328L13.6256 13.9952ZM13.6256 11.4952H9.8744V10.2512H13.6328L13.6256 11.4952ZM13.6256 8.99521H11.7512V7.75118H13.6328L13.6256 8.99521Z"
                            fill="#03050F"
                          />
                        </svg>
                      </div>

                      <label>
                        Indemnización de S/300 en caso de hospitalización por
                        más de un día.
                      </label>
                    </div>
                  </div>

                  <button
                    style={{
                      backgroundColor: "#FF1C44",
                      color: "white",
                      padding: "14px 32px 14px 32px",
                      borderRadius: "32px",
                    }}
                    onClick={() => {
                      navigate("/Sofftek/Resumen");
                    }}
                  >
                    Seleccionar plan
                  </button>
                </div>
              </div>

              <div className="contenedorCard2">
                <div className="card2">
                  <div className="flex flex-col">
                    <div className="flex">
                      <label
                        className="flex-1 fuenteBold"
                        style={{ fontSize: "24px" }}
                      >
                        Plan en Casa y Clínica
                      </label>
                      <svg
                        width="56"
                        height="56"
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M54.25 35C54.2493 33.6909 53.8816 32.4082 53.1886 31.2977C52.4955 30.1871 51.5049 29.2931 50.3293 28.7172C49.1537 28.1413 47.8402 27.9067 46.5379 28.0398C45.2356 28.173 43.9967 28.6687 42.962 29.4706C41.9273 30.2725 41.1382 31.3485 40.6843 32.5764C40.2304 33.8043 40.1299 35.1348 40.3942 36.4169C40.6585 37.6991 41.2771 38.8814 42.1796 39.8296C43.0821 40.7778 44.2325 41.454 45.5 41.7812V52.5H49V41.7812C50.5032 41.3931 51.8347 40.5163 52.7851 39.2887C53.7354 38.0612 54.2508 36.5525 54.25 35Z"
                          fill="url(#paint0_linear_12_156416)"
                        />
                        <path
                          d="M42.875 49H35V42C35 40.1435 34.2625 38.363 32.9498 37.0503C31.637 35.7375 29.8565 35 28 35C26.1435 35 24.363 35.7375 23.0502 37.0503C21.7375 38.363 21 40.1435 21 42V49H9.625V20.3438H9.50469L26.4819 8.34315C26.9247 8.03055 27.4535 7.86272 27.9956 7.86272C28.5377 7.86272 29.0665 8.03055 29.5094 8.34315L46.375 20.2453V25.4166C46.6637 25.3903 46.9547 25.375 47.25 25.375C48.1378 25.3749 49.0213 25.4986 49.875 25.7425V22.715L54.25 25.8125V21.5185L31.5284 5.4819C30.4939 4.7538 29.2596 4.36304 27.9945 4.36304C26.7294 4.36304 25.4952 4.7538 24.4606 5.4819L1.75 21.5382V25.8257L6.125 22.7325V49C6.125 49.9283 6.49375 50.8185 7.15012 51.4749C7.8065 52.1313 8.69674 52.5 9.625 52.5H42.875V49ZM31.5 49H24.5V42C24.5 41.0718 24.8687 40.1815 25.5251 39.5252C26.1815 38.8688 27.0717 38.5 28 38.5C28.9283 38.5 29.8185 38.8688 30.4749 39.5252C31.1313 40.1815 31.5 41.0718 31.5 42V49Z"
                          fill="url(#paint1_linear_12_156416)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_12_156416"
                            x1="40.6163"
                            y1="29.9261"
                            x2="58.0062"
                            y2="39.8646"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.35" stop-color="#F7052D" />
                            <stop offset="0.85" stop-color="#CA5AFA" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_12_156416"
                            x1="1.75"
                            y1="4.36304"
                            x2="26.0494"
                            y2="63.992"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.272135" stop-color="#34263B" />
                            <stop offset="0.658079" stop-color="#13172C" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <label>COSTO DEL PLAN</label>
                    <label>$39 al mes</label>
                  </div>
                  <hr className="separador" />
                  <div style={{ minHeight: "300px" }}>
                    <div className="flex mb-5">
                      <div className="logoDescripcion">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 20 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.1254 3.62561V4.87681C10.1254 5.70577 9.79608 6.50078 9.20992 7.08694C8.62375 7.6731 7.82874 8.0024 6.99978 8.0024C6.58932 8.0024 6.18289 7.92156 5.80367 7.76448C5.42446 7.60741 5.07989 7.37718 4.78965 7.08694C4.49941 6.7967 4.26918 6.45214 4.11211 6.07292C3.95503 5.69371 3.87419 5.28727 3.87419 4.87681V3.62561C3.87482 2.79685 4.20432 2.00221 4.79035 1.41618C5.37637 0.830154 6.17102 0.500648 6.99978 0.500015C7.82855 0.500648 8.62319 0.830154 9.20922 1.41618C9.79524 2.00221 10.1247 2.79685 10.1254 3.62561ZM13.251 12.3768V15.5024H0.750977V12.3768C0.750742 11.3844 0.987429 10.4062 1.44136 9.52371C1.89529 8.64118 2.55335 7.87977 3.36081 7.30279C3.7603 7.90182 4.30142 8.39305 4.93618 8.73292C5.57095 9.0728 6.27976 9.25082 6.99978 9.25121C7.71981 9.25082 8.42862 9.0728 9.06339 8.73292C9.69815 8.39305 10.2393 7.90182 10.6388 7.30279C11.4465 7.87965 12.1049 8.64098 12.5593 9.52349C13.0136 10.406 13.2507 11.3842 13.251 12.3768ZM11.9998 11.7512H10.751V10.5024H9.49978V11.7512H8.25098V13.0024H9.49978V14.2512H10.751V13.0024H11.9998V11.7512Z"
                            fill="#03050F"
                          />
                        </svg>
                      </div>

                      <label>
                        Consultas en clínica para cualquier especialidad.
                      </label>
                    </div>
                    <div className="flex mb-5">
                      <div className="logoDescripcion">
                        <svg
                          width="40"
                          height="45"
                          viewBox="0 0 30 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5063 9.775V2.25C17.5063 1.21875 16.6625 0.375 15.6313 0.375H4.36875C3.3375 0.375 2.49375 1.21875 2.49375 2.25V9.775H0.625V11.65C0.625 12.6813 1.46875 13.525 2.5 13.525H17.5C18.5312 13.525 19.375 12.6813 19.375 11.65V9.775H17.5063ZM10 2.25C10.3438 2.25 10.625 2.53125 10.625 2.875C10.625 3.21875 10.3438 3.5 10 3.5C9.65625 3.5 9.375 3.21875 9.375 2.875C9.375 2.53125 9.65625 2.25 10 2.25ZM18.125 11.65C18.125 11.9938 17.8438 12.275 17.5 12.275H2.5C2.15625 12.275 1.875 11.9938 1.875 11.65V11.025H7.5C7.5 11.3688 7.78125 11.65 8.125 11.65H11.875C12.2188 11.65 12.5 11.3688 12.5 11.025H18.125V11.65Z"
                            fill="#03050F"
                          />
                        </svg>
                      </div>

                      <label>
                        Medicinas y exámenes derivados cubiertos al 80%
                      </label>
                    </div>
                    <div className="flex mb-5">
                      <div className="logoDescripcion">
                        <svg
                          width="40"
                          height="50"
                          viewBox="0 0 24 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 5.87678H10.5V8.37678H9.25119V0.87439H1.7512V9.33667C1.37118 9.55579 1.05551 9.87104 0.835887 10.2508C0.616265 10.6305 0.500426 11.0613 0.5 11.5V16.5024H4.2512V13.3768H6.75119V16.5024H15.5V8.38394C15.5009 8.05504 15.437 7.72918 15.3118 7.42503C15.1865 7.12089 15.0025 6.84445 14.7703 6.61154C14.5381 6.37864 14.2621 6.19385 13.9584 6.06776C13.6546 5.94168 13.3289 5.87678 13 5.87678ZM8 5.87678H6.1256V7.75118H4.87441V5.87678H3V4.62558H4.87441V2.75118H6.1256V4.62558H8V5.87678ZM13.6256 13.9952H9.8744V12.7512H13.6328L13.6256 13.9952ZM13.6256 11.4952H9.8744V10.2512H13.6328L13.6256 11.4952ZM13.6256 8.99521H11.7512V7.75118H13.6328L13.6256 8.99521Z"
                            fill="#03050F"
                          />
                        </svg>
                      </div>

                      <label>
                        Atención médica en más de 200 clínicas del país.
                      </label>
                    </div>
                  </div>

                  <button
                    style={{
                      backgroundColor: "#FF1C44",
                      color: "white",
                      padding: "14px 32px 14px 32px",
                      borderRadius: "32px",
                    }}
                    onClick={() => {
                      navigate("/Sofftek/Resumen");
                    }}
                  >
                    Seleccionar plan
                  </button>
                </div>
              </div>
              <div className="contenedorCard2">
                <div className="card2">
                  <div className="flex flex-col">
                    <div className="flex">
                      <label
                        className="flex-1 fuenteBold"
                        style={{ fontSize: "24px" }}
                      >
                        Plan en Casa + Chequeo
                      </label>
                      <svg
                        width="56"
                        height="56"
                        viewBox="0 0 56 56"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M54.25 35C54.2493 33.6909 53.8816 32.4082 53.1886 31.2977C52.4955 30.1871 51.5049 29.2931 50.3293 28.7172C49.1537 28.1413 47.8402 27.9067 46.5379 28.0398C45.2356 28.173 43.9967 28.6687 42.962 29.4706C41.9273 30.2725 41.1382 31.3485 40.6843 32.5764C40.2304 33.8043 40.1299 35.1348 40.3942 36.4169C40.6585 37.6991 41.2771 38.8814 42.1796 39.8296C43.0821 40.7778 44.2325 41.454 45.5 41.7812V52.5H49V41.7812C50.5032 41.3931 51.8347 40.5163 52.7851 39.2887C53.7354 38.0612 54.2508 36.5525 54.25 35Z"
                          fill="url(#paint0_linear_12_156416)"
                        />
                        <path
                          d="M42.875 49H35V42C35 40.1435 34.2625 38.363 32.9498 37.0503C31.637 35.7375 29.8565 35 28 35C26.1435 35 24.363 35.7375 23.0502 37.0503C21.7375 38.363 21 40.1435 21 42V49H9.625V20.3438H9.50469L26.4819 8.34315C26.9247 8.03055 27.4535 7.86272 27.9956 7.86272C28.5377 7.86272 29.0665 8.03055 29.5094 8.34315L46.375 20.2453V25.4166C46.6637 25.3903 46.9547 25.375 47.25 25.375C48.1378 25.3749 49.0213 25.4986 49.875 25.7425V22.715L54.25 25.8125V21.5185L31.5284 5.4819C30.4939 4.7538 29.2596 4.36304 27.9945 4.36304C26.7294 4.36304 25.4952 4.7538 24.4606 5.4819L1.75 21.5382V25.8257L6.125 22.7325V49C6.125 49.9283 6.49375 50.8185 7.15012 51.4749C7.8065 52.1313 8.69674 52.5 9.625 52.5H42.875V49ZM31.5 49H24.5V42C24.5 41.0718 24.8687 40.1815 25.5251 39.5252C26.1815 38.8688 27.0717 38.5 28 38.5C28.9283 38.5 29.8185 38.8688 30.4749 39.5252C31.1313 40.1815 31.5 41.0718 31.5 42V49Z"
                          fill="url(#paint1_linear_12_156416)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_12_156416"
                            x1="40.6163"
                            y1="29.9261"
                            x2="58.0062"
                            y2="39.8646"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.35" stop-color="#F7052D" />
                            <stop offset="0.85" stop-color="#CA5AFA" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_12_156416"
                            x1="1.75"
                            y1="4.36304"
                            x2="26.0494"
                            y2="63.992"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.272135" stop-color="#34263B" />
                            <stop offset="0.658079" stop-color="#13172C" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <label>COSTO DEL PLAN</label>
                    <label>$39 al mes</label>
                  </div>
                  <hr className="separador" />
                  <div style={{ minHeight: "300px" }}>
                    <div className="flex mb-5">
                      <div className="logoDescripcion">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 20 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.1254 3.62561V4.87681C10.1254 5.70577 9.79608 6.50078 9.20992 7.08694C8.62375 7.6731 7.82874 8.0024 6.99978 8.0024C6.58932 8.0024 6.18289 7.92156 5.80367 7.76448C5.42446 7.60741 5.07989 7.37718 4.78965 7.08694C4.49941 6.7967 4.26918 6.45214 4.11211 6.07292C3.95503 5.69371 3.87419 5.28727 3.87419 4.87681V3.62561C3.87482 2.79685 4.20432 2.00221 4.79035 1.41618C5.37637 0.830154 6.17102 0.500648 6.99978 0.500015C7.82855 0.500648 8.62319 0.830154 9.20922 1.41618C9.79524 2.00221 10.1247 2.79685 10.1254 3.62561ZM13.251 12.3768V15.5024H0.750977V12.3768C0.750742 11.3844 0.987429 10.4062 1.44136 9.52371C1.89529 8.64118 2.55335 7.87977 3.36081 7.30279C3.7603 7.90182 4.30142 8.39305 4.93618 8.73292C5.57095 9.0728 6.27976 9.25082 6.99978 9.25121C7.71981 9.25082 8.42862 9.0728 9.06339 8.73292C9.69815 8.39305 10.2393 7.90182 10.6388 7.30279C11.4465 7.87965 12.1049 8.64098 12.5593 9.52349C13.0136 10.406 13.2507 11.3842 13.251 12.3768ZM11.9998 11.7512H10.751V10.5024H9.49978V11.7512H8.25098V13.0024H9.49978V14.2512H10.751V13.0024H11.9998V11.7512Z"
                            fill="#03050F"
                          />
                        </svg>
                      </div>

                      <label>
                        Un Chequeo preventivo general de manera presencial o
                        virtual.
                      </label>
                    </div>
                    <div className="flex mb-5">
                      <div className="logoDescripcion">
                        <svg
                          width="40"
                          height="45"
                          viewBox="0 0 30 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5063 9.775V2.25C17.5063 1.21875 16.6625 0.375 15.6313 0.375H4.36875C3.3375 0.375 2.49375 1.21875 2.49375 2.25V9.775H0.625V11.65C0.625 12.6813 1.46875 13.525 2.5 13.525H17.5C18.5312 13.525 19.375 12.6813 19.375 11.65V9.775H17.5063ZM10 2.25C10.3438 2.25 10.625 2.53125 10.625 2.875C10.625 3.21875 10.3438 3.5 10 3.5C9.65625 3.5 9.375 3.21875 9.375 2.875C9.375 2.53125 9.65625 2.25 10 2.25ZM18.125 11.65C18.125 11.9938 17.8438 12.275 17.5 12.275H2.5C2.15625 12.275 1.875 11.9938 1.875 11.65V11.025H7.5C7.5 11.3688 7.78125 11.65 8.125 11.65H11.875C12.2188 11.65 12.5 11.3688 12.5 11.025H18.125V11.65Z"
                            fill="#03050F"
                          />
                        </svg>
                      </div>

                      <label>
                        Acceso a Vacunas en el Programa del MINSA en centros
                        privados.
                      </label>
                    </div>
                    <div className="flex mb-5">
                      <div className="logoDescripcion">
                        <svg
                          width="40"
                          height="50"
                          viewBox="0 0 24 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 5.87678H10.5V8.37678H9.25119V0.87439H1.7512V9.33667C1.37118 9.55579 1.05551 9.87104 0.835887 10.2508C0.616265 10.6305 0.500426 11.0613 0.5 11.5V16.5024H4.2512V13.3768H6.75119V16.5024H15.5V8.38394C15.5009 8.05504 15.437 7.72918 15.3118 7.42503C15.1865 7.12089 15.0025 6.84445 14.7703 6.61154C14.5381 6.37864 14.2621 6.19385 13.9584 6.06776C13.6546 5.94168 13.3289 5.87678 13 5.87678ZM8 5.87678H6.1256V7.75118H4.87441V5.87678H3V4.62558H4.87441V2.75118H6.1256V4.62558H8V5.87678ZM13.6256 13.9952H9.8744V12.7512H13.6328L13.6256 13.9952ZM13.6256 11.4952H9.8744V10.2512H13.6328L13.6256 11.4952ZM13.6256 8.99521H11.7512V7.75118H13.6328L13.6256 8.99521Z"
                            fill="#03050F"
                          />
                        </svg>
                      </div>

                      <label>
                        Incluye todos los beneficios del Plan en Casa.
                      </label>
                    </div>
                  </div>

                  <button
                    style={{
                      backgroundColor: "#FF1C44",
                      color: "white",
                      padding: "14px 32px 14px 32px",
                      borderRadius: "32px",
                    }}
                    onClick={() => {
                      navigate("/Sofftek/Resumen");
                    }}
                  >
                    Seleccionar plan
                  </button>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className="flex items-center justify-center mt-8 mb-10">
          <div onClick={previous}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_4904_365)">
                <circle
                  cx="16"
                  cy="16"
                  r="15"
                  stroke="#4F4FFF"
                  stroke-width="2"
                />
                <path
                  d="M17.295 21.2049L12.085 15.9999L17.295 10.7949L18.705 12.2049L14.915 15.9999L18.705 19.7949L17.295 21.2049Z"
                  fill="#4F4FFF"
                />
              </g>
              <defs>
                <clipPath id="clip0_4904_365">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <label style={{ margin: "0px 10px" }}>{primerIndice + 1} / 3</label>
          <div onClick={next}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_4904_374)">
                <circle
                  cx="16"
                  cy="16"
                  r="15"
                  stroke="#4F4FFF"
                  stroke-width="2"
                />
                <path
                  d="M14.7049 21.2049L13.2949 19.7949L17.0849 15.9999L13.2949 12.2049L14.7049 10.7949L19.9149 15.9999L14.7049 21.2049Z"
                  fill="#432EFF"
                />
              </g>
              <defs>
                <clipPath id="clip0_4904_374">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className={isChecked2 ? "block" : "hidden"}>
        <div>
          <div className="slider-container">
            <Slider
              {...settings2}
              ref={(slider2) => {
                sliderRef2 = slider2;
              }}
            >
              <div className="contenedorCard2">
                <div className="card2">
                  <div className="flex flex-col">
                    <div className="flex">
                      <label
                        className="flex-1 fuenteBold"
                        style={{ fontSize: "24px" }}
                      >
                        Plan en Casa
                      </label>
                      <svg
                        width="56"
                        height="56"
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M54.25 35C54.2493 33.6909 53.8816 32.4082 53.1886 31.2977C52.4955 30.1871 51.5049 29.2931 50.3293 28.7172C49.1537 28.1413 47.8402 27.9067 46.5379 28.0398C45.2356 28.173 43.9967 28.6687 42.962 29.4706C41.9273 30.2725 41.1382 31.3485 40.6843 32.5764C40.2304 33.8043 40.1299 35.1348 40.3942 36.4169C40.6585 37.6991 41.2771 38.8814 42.1796 39.8296C43.0821 40.7778 44.2325 41.454 45.5 41.7812V52.5H49V41.7812C50.5032 41.3931 51.8347 40.5163 52.7851 39.2887C53.7354 38.0612 54.2508 36.5525 54.25 35Z"
                          fill="url(#paint0_linear_12_156416)"
                        />
                        <path
                          d="M42.875 49H35V42C35 40.1435 34.2625 38.363 32.9498 37.0503C31.637 35.7375 29.8565 35 28 35C26.1435 35 24.363 35.7375 23.0502 37.0503C21.7375 38.363 21 40.1435 21 42V49H9.625V20.3438H9.50469L26.4819 8.34315C26.9247 8.03055 27.4535 7.86272 27.9956 7.86272C28.5377 7.86272 29.0665 8.03055 29.5094 8.34315L46.375 20.2453V25.4166C46.6637 25.3903 46.9547 25.375 47.25 25.375C48.1378 25.3749 49.0213 25.4986 49.875 25.7425V22.715L54.25 25.8125V21.5185L31.5284 5.4819C30.4939 4.7538 29.2596 4.36304 27.9945 4.36304C26.7294 4.36304 25.4952 4.7538 24.4606 5.4819L1.75 21.5382V25.8257L6.125 22.7325V49C6.125 49.9283 6.49375 50.8185 7.15012 51.4749C7.8065 52.1313 8.69674 52.5 9.625 52.5H42.875V49ZM31.5 49H24.5V42C24.5 41.0718 24.8687 40.1815 25.5251 39.5252C26.1815 38.8688 27.0717 38.5 28 38.5C28.9283 38.5 29.8185 38.8688 30.4749 39.5252C31.1313 40.1815 31.5 41.0718 31.5 42V49Z"
                          fill="url(#paint1_linear_12_156416)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_12_156416"
                            x1="40.6163"
                            y1="29.9261"
                            x2="58.0062"
                            y2="39.8646"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.35" stop-color="#F7052D" />
                            <stop offset="0.85" stop-color="#CA5AFA" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_12_156416"
                            x1="1.75"
                            y1="4.36304"
                            x2="26.0494"
                            y2="63.992"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.272135" stop-color="#34263B" />
                            <stop offset="0.658079" stop-color="#13172C" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <label>COSTO DEL PLAN</label>
                    <label
                      style={{ fontSize: "14px", color: "#7981B2" }}
                      className="line-through"
                    >
                      $39 antes
                    </label>
                    <label style={{ fontSize: "18px" }} className="fuenteBold">
                      $37.05 al mes
                    </label>
                  </div>
                  <hr className="separador" />
                  <div style={{ minHeight: "300px" }}>
                    <div className="flex mb-5">
                      <div className="logoDescripcion">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 20 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.1254 3.62561V4.87681C10.1254 5.70577 9.79608 6.50078 9.20992 7.08694C8.62375 7.6731 7.82874 8.0024 6.99978 8.0024C6.58932 8.0024 6.18289 7.92156 5.80367 7.76448C5.42446 7.60741 5.07989 7.37718 4.78965 7.08694C4.49941 6.7967 4.26918 6.45214 4.11211 6.07292C3.95503 5.69371 3.87419 5.28727 3.87419 4.87681V3.62561C3.87482 2.79685 4.20432 2.00221 4.79035 1.41618C5.37637 0.830154 6.17102 0.500648 6.99978 0.500015C7.82855 0.500648 8.62319 0.830154 9.20922 1.41618C9.79524 2.00221 10.1247 2.79685 10.1254 3.62561ZM13.251 12.3768V15.5024H0.750977V12.3768C0.750742 11.3844 0.987429 10.4062 1.44136 9.52371C1.89529 8.64118 2.55335 7.87977 3.36081 7.30279C3.7603 7.90182 4.30142 8.39305 4.93618 8.73292C5.57095 9.0728 6.27976 9.25082 6.99978 9.25121C7.71981 9.25082 8.42862 9.0728 9.06339 8.73292C9.69815 8.39305 10.2393 7.90182 10.6388 7.30279C11.4465 7.87965 12.1049 8.64098 12.5593 9.52349C13.0136 10.406 13.2507 11.3842 13.251 12.3768ZM11.9998 11.7512H10.751V10.5024H9.49978V11.7512H8.25098V13.0024H9.49978V14.2512H10.751V13.0024H11.9998V11.7512Z"
                            fill="#03050F"
                          />
                        </svg>
                      </div>

                      <div>
                        <label className="fuenteBold">
                          Médico general a domicilio
                        </label>{" "}
                        por S/20 y medicinas cubiertas al 100%.
                      </div>
                    </div>
                    <div className="flex mb-5">
                      <div className="logoDescripcion">
                        <svg
                          width="40"
                          height="45"
                          viewBox="0 0 30 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5063 9.775V2.25C17.5063 1.21875 16.6625 0.375 15.6313 0.375H4.36875C3.3375 0.375 2.49375 1.21875 2.49375 2.25V9.775H0.625V11.65C0.625 12.6813 1.46875 13.525 2.5 13.525H17.5C18.5312 13.525 19.375 12.6813 19.375 11.65V9.775H17.5063ZM10 2.25C10.3438 2.25 10.625 2.53125 10.625 2.875C10.625 3.21875 10.3438 3.5 10 3.5C9.65625 3.5 9.375 3.21875 9.375 2.875C9.375 2.53125 9.65625 2.25 10 2.25ZM18.125 11.65C18.125 11.9938 17.8438 12.275 17.5 12.275H2.5C2.15625 12.275 1.875 11.9938 1.875 11.65V11.025H7.5C7.5 11.3688 7.78125 11.65 8.125 11.65H11.875C12.2188 11.65 12.5 11.3688 12.5 11.025H18.125V11.65Z"
                            fill="#03050F"
                          />
                        </svg>
                      </div>

                      <div>
                        <label className="fuenteBold">Videoconsulta</label> y
                        orientación telefónica al 100% en medicina general +
                        pediatría.
                      </div>
                    </div>
                    <div className="flex mb-5">
                      <div className="logoDescripcion">
                        <svg
                          width="40"
                          height="50"
                          viewBox="0 0 24 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 5.87678H10.5V8.37678H9.25119V0.87439H1.7512V9.33667C1.37118 9.55579 1.05551 9.87104 0.835887 10.2508C0.616265 10.6305 0.500426 11.0613 0.5 11.5V16.5024H4.2512V13.3768H6.75119V16.5024H15.5V8.38394C15.5009 8.05504 15.437 7.72918 15.3118 7.42503C15.1865 7.12089 15.0025 6.84445 14.7703 6.61154C14.5381 6.37864 14.2621 6.19385 13.9584 6.06776C13.6546 5.94168 13.3289 5.87678 13 5.87678ZM8 5.87678H6.1256V7.75118H4.87441V5.87678H3V4.62558H4.87441V2.75118H6.1256V4.62558H8V5.87678ZM13.6256 13.9952H9.8744V12.7512H13.6328L13.6256 13.9952ZM13.6256 11.4952H9.8744V10.2512H13.6328L13.6256 11.4952ZM13.6256 8.99521H11.7512V7.75118H13.6328L13.6256 8.99521Z"
                            fill="#03050F"
                          />
                        </svg>
                      </div>

                      <div>
                        <label className="fuenteBold">Indemnización</label> de
                        S/300 en caso de hospitalización por más de un día.
                      </div>
                    </div>
                  </div>

                  <button
                    style={{
                      backgroundColor: "#FF1C44",
                      color: "white",
                      padding: "14px 32px 14px 32px",
                      borderRadius: "32px",
                    }}
                    onClick={() => {
                      navigate("/Sofftek/Resumen");
                    }}
                  >
                    Seleccionar plan
                  </button>
                </div>
              </div>

              <div className="contenedorCard2">
                <div className="card2">
                  <div className="flex flex-col">
                    <div className="flex">
                      <label
                        className="flex-1 fuenteBold"
                        style={{ fontSize: "24px" }}
                      >
                        Plan en Casa y Clínica
                      </label>
                      <svg
                        width="56"
                        height="56"
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M54.25 35C54.2493 33.6909 53.8816 32.4082 53.1886 31.2977C52.4955 30.1871 51.5049 29.2931 50.3293 28.7172C49.1537 28.1413 47.8402 27.9067 46.5379 28.0398C45.2356 28.173 43.9967 28.6687 42.962 29.4706C41.9273 30.2725 41.1382 31.3485 40.6843 32.5764C40.2304 33.8043 40.1299 35.1348 40.3942 36.4169C40.6585 37.6991 41.2771 38.8814 42.1796 39.8296C43.0821 40.7778 44.2325 41.454 45.5 41.7812V52.5H49V41.7812C50.5032 41.3931 51.8347 40.5163 52.7851 39.2887C53.7354 38.0612 54.2508 36.5525 54.25 35Z"
                          fill="url(#paint0_linear_12_156416)"
                        />
                        <path
                          d="M42.875 49H35V42C35 40.1435 34.2625 38.363 32.9498 37.0503C31.637 35.7375 29.8565 35 28 35C26.1435 35 24.363 35.7375 23.0502 37.0503C21.7375 38.363 21 40.1435 21 42V49H9.625V20.3438H9.50469L26.4819 8.34315C26.9247 8.03055 27.4535 7.86272 27.9956 7.86272C28.5377 7.86272 29.0665 8.03055 29.5094 8.34315L46.375 20.2453V25.4166C46.6637 25.3903 46.9547 25.375 47.25 25.375C48.1378 25.3749 49.0213 25.4986 49.875 25.7425V22.715L54.25 25.8125V21.5185L31.5284 5.4819C30.4939 4.7538 29.2596 4.36304 27.9945 4.36304C26.7294 4.36304 25.4952 4.7538 24.4606 5.4819L1.75 21.5382V25.8257L6.125 22.7325V49C6.125 49.9283 6.49375 50.8185 7.15012 51.4749C7.8065 52.1313 8.69674 52.5 9.625 52.5H42.875V49ZM31.5 49H24.5V42C24.5 41.0718 24.8687 40.1815 25.5251 39.5252C26.1815 38.8688 27.0717 38.5 28 38.5C28.9283 38.5 29.8185 38.8688 30.4749 39.5252C31.1313 40.1815 31.5 41.0718 31.5 42V49Z"
                          fill="url(#paint1_linear_12_156416)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_12_156416"
                            x1="40.6163"
                            y1="29.9261"
                            x2="58.0062"
                            y2="39.8646"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.35" stop-color="#F7052D" />
                            <stop offset="0.85" stop-color="#CA5AFA" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_12_156416"
                            x1="1.75"
                            y1="4.36304"
                            x2="26.0494"
                            y2="63.992"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.272135" stop-color="#34263B" />
                            <stop offset="0.658079" stop-color="#13172C" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <label style={{ color: "#7981B2", fontSize: "14px" }}>
                      COSTO DEL PLAN
                    </label>
                    <label
                      style={{ fontSize: "14px", color: "#7981B2" }}
                      className="line-through"
                    >
                      $99 antes
                    </label>
                    <label style={{ fontSize: "18px" }} className="fuenteBold">
                      $94.05 al mes
                    </label>
                  </div>
                  <hr className="separador" />
                  <div style={{ minHeight: "300px" }}>
                    <div className="flex mb-5">
                      <div className="logoDescripcion">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 20 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.1254 3.62561V4.87681C10.1254 5.70577 9.79608 6.50078 9.20992 7.08694C8.62375 7.6731 7.82874 8.0024 6.99978 8.0024C6.58932 8.0024 6.18289 7.92156 5.80367 7.76448C5.42446 7.60741 5.07989 7.37718 4.78965 7.08694C4.49941 6.7967 4.26918 6.45214 4.11211 6.07292C3.95503 5.69371 3.87419 5.28727 3.87419 4.87681V3.62561C3.87482 2.79685 4.20432 2.00221 4.79035 1.41618C5.37637 0.830154 6.17102 0.500648 6.99978 0.500015C7.82855 0.500648 8.62319 0.830154 9.20922 1.41618C9.79524 2.00221 10.1247 2.79685 10.1254 3.62561ZM13.251 12.3768V15.5024H0.750977V12.3768C0.750742 11.3844 0.987429 10.4062 1.44136 9.52371C1.89529 8.64118 2.55335 7.87977 3.36081 7.30279C3.7603 7.90182 4.30142 8.39305 4.93618 8.73292C5.57095 9.0728 6.27976 9.25082 6.99978 9.25121C7.71981 9.25082 8.42862 9.0728 9.06339 8.73292C9.69815 8.39305 10.2393 7.90182 10.6388 7.30279C11.4465 7.87965 12.1049 8.64098 12.5593 9.52349C13.0136 10.406 13.2507 11.3842 13.251 12.3768ZM11.9998 11.7512H10.751V10.5024H9.49978V11.7512H8.25098V13.0024H9.49978V14.2512H10.751V13.0024H11.9998V11.7512Z"
                            fill="#03050F"
                          />
                        </svg>
                      </div>

                      <div>
                        <label className="fuenteBold">
                          Consultas en clínica
                        </label>{" "}
                        para cualquier especialidad.
                      </div>
                    </div>
                    <div className="flex mb-5">
                      <div className="logoDescripcion">
                        <svg
                          width="40"
                          height="45"
                          viewBox="0 0 30 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5063 9.775V2.25C17.5063 1.21875 16.6625 0.375 15.6313 0.375H4.36875C3.3375 0.375 2.49375 1.21875 2.49375 2.25V9.775H0.625V11.65C0.625 12.6813 1.46875 13.525 2.5 13.525H17.5C18.5312 13.525 19.375 12.6813 19.375 11.65V9.775H17.5063ZM10 2.25C10.3438 2.25 10.625 2.53125 10.625 2.875C10.625 3.21875 10.3438 3.5 10 3.5C9.65625 3.5 9.375 3.21875 9.375 2.875C9.375 2.53125 9.65625 2.25 10 2.25ZM18.125 11.65C18.125 11.9938 17.8438 12.275 17.5 12.275H2.5C2.15625 12.275 1.875 11.9938 1.875 11.65V11.025H7.5C7.5 11.3688 7.78125 11.65 8.125 11.65H11.875C12.2188 11.65 12.5 11.3688 12.5 11.025H18.125V11.65Z"
                            fill="#03050F"
                          />
                        </svg>
                      </div>

                      <div>
                        <label className="fuenteBold">
                          Medicinas y exámenes
                        </label>{" "}
                        derivados cubiertos al 80%
                      </div>
                    </div>
                    <div className="flex mb-5">
                      <div className="logoDescripcion">
                        <svg
                          width="40"
                          height="50"
                          viewBox="0 0 24 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 5.87678H10.5V8.37678H9.25119V0.87439H1.7512V9.33667C1.37118 9.55579 1.05551 9.87104 0.835887 10.2508C0.616265 10.6305 0.500426 11.0613 0.5 11.5V16.5024H4.2512V13.3768H6.75119V16.5024H15.5V8.38394C15.5009 8.05504 15.437 7.72918 15.3118 7.42503C15.1865 7.12089 15.0025 6.84445 14.7703 6.61154C14.5381 6.37864 14.2621 6.19385 13.9584 6.06776C13.6546 5.94168 13.3289 5.87678 13 5.87678ZM8 5.87678H6.1256V7.75118H4.87441V5.87678H3V4.62558H4.87441V2.75118H6.1256V4.62558H8V5.87678ZM13.6256 13.9952H9.8744V12.7512H13.6328L13.6256 13.9952ZM13.6256 11.4952H9.8744V10.2512H13.6328L13.6256 11.4952ZM13.6256 8.99521H11.7512V7.75118H13.6328L13.6256 8.99521Z"
                            fill="#03050F"
                          />
                        </svg>
                      </div>

                      <div>
                        Atención médica en
                        <label className="fuenteBold">
                          más de 200 clínicas del país.
                        </label>
                      </div>
                    </div>
                  </div>

                  <button
                    style={{
                      backgroundColor: "#FF1C44",
                      color: "white",
                      padding: "14px 32px 14px 32px",
                      borderRadius: "32px",
                    }}
                    onClick={() => {
                      navigate("/Sofftek/Resumen");
                    }}
                  >
                    Seleccionar plan
                  </button>
                </div>
              </div>
              <div className="contenedorCard2">
                <div className="card2">
                  <div className="flex flex-col">
                    <div className="flex">
                      <label
                        className="flex-1 fuenteBold"
                        style={{ fontSize: "24px" }}
                      >
                        Plan en Casa + Chequeo
                      </label>
                      <svg
                        width="56"
                        height="56"
                        viewBox="0 0 56 56"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M54.25 35C54.2493 33.6909 53.8816 32.4082 53.1886 31.2977C52.4955 30.1871 51.5049 29.2931 50.3293 28.7172C49.1537 28.1413 47.8402 27.9067 46.5379 28.0398C45.2356 28.173 43.9967 28.6687 42.962 29.4706C41.9273 30.2725 41.1382 31.3485 40.6843 32.5764C40.2304 33.8043 40.1299 35.1348 40.3942 36.4169C40.6585 37.6991 41.2771 38.8814 42.1796 39.8296C43.0821 40.7778 44.2325 41.454 45.5 41.7812V52.5H49V41.7812C50.5032 41.3931 51.8347 40.5163 52.7851 39.2887C53.7354 38.0612 54.2508 36.5525 54.25 35Z"
                          fill="url(#paint0_linear_12_156416)"
                        />
                        <path
                          d="M42.875 49H35V42C35 40.1435 34.2625 38.363 32.9498 37.0503C31.637 35.7375 29.8565 35 28 35C26.1435 35 24.363 35.7375 23.0502 37.0503C21.7375 38.363 21 40.1435 21 42V49H9.625V20.3438H9.50469L26.4819 8.34315C26.9247 8.03055 27.4535 7.86272 27.9956 7.86272C28.5377 7.86272 29.0665 8.03055 29.5094 8.34315L46.375 20.2453V25.4166C46.6637 25.3903 46.9547 25.375 47.25 25.375C48.1378 25.3749 49.0213 25.4986 49.875 25.7425V22.715L54.25 25.8125V21.5185L31.5284 5.4819C30.4939 4.7538 29.2596 4.36304 27.9945 4.36304C26.7294 4.36304 25.4952 4.7538 24.4606 5.4819L1.75 21.5382V25.8257L6.125 22.7325V49C6.125 49.9283 6.49375 50.8185 7.15012 51.4749C7.8065 52.1313 8.69674 52.5 9.625 52.5H42.875V49ZM31.5 49H24.5V42C24.5 41.0718 24.8687 40.1815 25.5251 39.5252C26.1815 38.8688 27.0717 38.5 28 38.5C28.9283 38.5 29.8185 38.8688 30.4749 39.5252C31.1313 40.1815 31.5 41.0718 31.5 42V49Z"
                          fill="url(#paint1_linear_12_156416)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_12_156416"
                            x1="40.6163"
                            y1="29.9261"
                            x2="58.0062"
                            y2="39.8646"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.35" stop-color="#F7052D" />
                            <stop offset="0.85" stop-color="#CA5AFA" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_12_156416"
                            x1="1.75"
                            y1="4.36304"
                            x2="26.0494"
                            y2="63.992"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.272135" stop-color="#34263B" />
                            <stop offset="0.658079" stop-color="#13172C" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <label style={{ color: "#7981B2", fontSize: "14px" }}>
                      COSTO DEL PLAN
                    </label>
                    <label
                      style={{ fontSize: "14px", color: "#7981B2" }}
                      className="line-through"
                    >
                      $49 antes
                    </label>
                    <label style={{ fontSize: "18px" }} className="fuenteBold">
                      $46.55 al mes
                    </label>
                  </div>
                  <hr className="separador" />
                  <div style={{ minHeight: "300px" }}>
                    <div className="flex mb-5">
                      <div className="logoDescripcion">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 20 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.1254 3.62561V4.87681C10.1254 5.70577 9.79608 6.50078 9.20992 7.08694C8.62375 7.6731 7.82874 8.0024 6.99978 8.0024C6.58932 8.0024 6.18289 7.92156 5.80367 7.76448C5.42446 7.60741 5.07989 7.37718 4.78965 7.08694C4.49941 6.7967 4.26918 6.45214 4.11211 6.07292C3.95503 5.69371 3.87419 5.28727 3.87419 4.87681V3.62561C3.87482 2.79685 4.20432 2.00221 4.79035 1.41618C5.37637 0.830154 6.17102 0.500648 6.99978 0.500015C7.82855 0.500648 8.62319 0.830154 9.20922 1.41618C9.79524 2.00221 10.1247 2.79685 10.1254 3.62561ZM13.251 12.3768V15.5024H0.750977V12.3768C0.750742 11.3844 0.987429 10.4062 1.44136 9.52371C1.89529 8.64118 2.55335 7.87977 3.36081 7.30279C3.7603 7.90182 4.30142 8.39305 4.93618 8.73292C5.57095 9.0728 6.27976 9.25082 6.99978 9.25121C7.71981 9.25082 8.42862 9.0728 9.06339 8.73292C9.69815 8.39305 10.2393 7.90182 10.6388 7.30279C11.4465 7.87965 12.1049 8.64098 12.5593 9.52349C13.0136 10.406 13.2507 11.3842 13.251 12.3768ZM11.9998 11.7512H10.751V10.5024H9.49978V11.7512H8.25098V13.0024H9.49978V14.2512H10.751V13.0024H11.9998V11.7512Z"
                            fill="#03050F"
                          />
                        </svg>
                      </div>

                      <div>
                        <label className="fuenteBold">
                          Un Chequeo preventivo general
                        </label>{" "}
                        de manera presencial o virtual.
                      </div>
                    </div>
                    <div className="flex mb-5">
                      <div className="logoDescripcion">
                        <svg
                          width="40"
                          height="45"
                          viewBox="0 0 30 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5063 9.775V2.25C17.5063 1.21875 16.6625 0.375 15.6313 0.375H4.36875C3.3375 0.375 2.49375 1.21875 2.49375 2.25V9.775H0.625V11.65C0.625 12.6813 1.46875 13.525 2.5 13.525H17.5C18.5312 13.525 19.375 12.6813 19.375 11.65V9.775H17.5063ZM10 2.25C10.3438 2.25 10.625 2.53125 10.625 2.875C10.625 3.21875 10.3438 3.5 10 3.5C9.65625 3.5 9.375 3.21875 9.375 2.875C9.375 2.53125 9.65625 2.25 10 2.25ZM18.125 11.65C18.125 11.9938 17.8438 12.275 17.5 12.275H2.5C2.15625 12.275 1.875 11.9938 1.875 11.65V11.025H7.5C7.5 11.3688 7.78125 11.65 8.125 11.65H11.875C12.2188 11.65 12.5 11.3688 12.5 11.025H18.125V11.65Z"
                            fill="#03050F"
                          />
                        </svg>
                      </div>

                      <div>
                        Acceso a <label className="fuenteBold">Vacunas</label>{" "}
                        en el Programa del MINSA en centros privados.
                      </div>
                    </div>
                    <div className="flex mb-5">
                      <div className="logoDescripcion">
                        <svg
                          width="40"
                          height="50"
                          viewBox="0 0 24 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 5.87678H10.5V8.37678H9.25119V0.87439H1.7512V9.33667C1.37118 9.55579 1.05551 9.87104 0.835887 10.2508C0.616265 10.6305 0.500426 11.0613 0.5 11.5V16.5024H4.2512V13.3768H6.75119V16.5024H15.5V8.38394C15.5009 8.05504 15.437 7.72918 15.3118 7.42503C15.1865 7.12089 15.0025 6.84445 14.7703 6.61154C14.5381 6.37864 14.2621 6.19385 13.9584 6.06776C13.6546 5.94168 13.3289 5.87678 13 5.87678ZM8 5.87678H6.1256V7.75118H4.87441V5.87678H3V4.62558H4.87441V2.75118H6.1256V4.62558H8V5.87678ZM13.6256 13.9952H9.8744V12.7512H13.6328L13.6256 13.9952ZM13.6256 11.4952H9.8744V10.2512H13.6328L13.6256 11.4952ZM13.6256 8.99521H11.7512V7.75118H13.6328L13.6256 8.99521Z"
                            fill="#03050F"
                          />
                        </svg>
                      </div>

                      <label className="fuenteBold">
                        Incluye todos los beneficios del plan en casa.
                      </label>
                    </div>
                  </div>

                  <button
                    style={{
                      backgroundColor: "#FF1C44",
                      color: "white",
                      padding: "14px 32px 14px 32px",
                      borderRadius: "32px",
                    }}
                    onClick={() => {
                      navigate("/Sofftek/Resumen");
                    }}
                  >
                    Seleccionar plan
                  </button>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className="flex items-center justify-center mt-8 mb-10">
          <div onClick={previous2}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_4904_365)">
                <circle
                  cx="16"
                  cy="16"
                  r="15"
                  stroke="#4F4FFF"
                  stroke-width="2"
                />
                <path
                  d="M17.295 21.2049L12.085 15.9999L17.295 10.7949L18.705 12.2049L14.915 15.9999L18.705 19.7949L17.295 21.2049Z"
                  fill="#4F4FFF"
                />
              </g>
              <defs>
                <clipPath id="clip0_4904_365">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <label style={{ margin: "0px 10px" }}>{segundoIndice + 1} / 3</label>
          <div onClick={next2}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_4904_374)">
                <circle
                  cx="16"
                  cy="16"
                  r="15"
                  stroke="#4F4FFF"
                  stroke-width="2"
                />
                <path
                  d="M14.7049 21.2049L13.2949 19.7949L17.0849 15.9999L13.2949 12.2049L14.7049 10.7949L19.9149 15.9999L14.7049 21.2049Z"
                  fill="#432EFF"
                />
              </g>
              <defs>
                <clipPath id="clip0_4904_374">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaCards;
