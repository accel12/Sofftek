import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../sass/Planes.scss";
import ListaCards from "../components/ListaCards";
import { useNavigate } from "react-router-dom";
const Planes = () => {
  // const [cliente, setCliente] = useState({
  //   name: "",
  //   lastName: "",
  //   birthDay: "",
  // });
  const navigate = useNavigate();
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const cargarUsuario = () => {
    fetch("https://rimac-front-end-challenge.netlify.app/api/user.json", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }).then((data) => console.log(data));
  };
  const mostrarPlanes = (e) => {
    console.log(e.target.id);
    console.log(e.target.checked);
    if (e.target.id == "check1" && e.target.checked == true) {
      setIsChecked2(false);
      setIsChecked1(true);
    }
    if (e.target.id == "check1" && e.target.checked == false) {
      setIsChecked1(false);
    }
    if (e.target.id == "check2" && e.target.checked == true) {
      setIsChecked1(false);
      setIsChecked2(true);
    }
    if (e.target.id == "check2" && e.target.checked == false) {
      setIsChecked2(false);
    }
  };
  useEffect(() => {
    cargarUsuario();
  }, []);

  return (
    <div>
      <div className="contadorTop">
        <div
          style={{
            width: "fill",
            backgroundColor: "#4F4FFF",
            minWidth: "35px",
            minHeight: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "18px",
          }}
          className="rounded-full"
        >
          <label style={{ fontFamily: "lato", fontWeight: "bolder" }}>1</label>
        </div>
        <label className="fuenteSemiBold">Planes y coberturas</label>
        <div
          style={{ width: "fill" }}
          className="flex justify-center items-center"
        >
          <svg
            width="32"
            height="2"
            viewBox="0 0 32 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1"
              y1="1"
              x2="31"
              y2="0.999999"
              stroke="#4F4FFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-dasharray="2 8"
            />
          </svg>
        </div>
        <div
          style={{
            width: "fill",
            minWidth: "35px",
            minHeight: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#7981B2",
            fontSize: "18px",
            border: "2px solid #7981B2",
          }}
          className="rounded-full"
        >
          <label style={{ fontFamily: "lato", fontWeight: "bolder" }}>2</label>
        </div>
        <label style={{ color: "#7981B2" }}>Resumen</label>
      </div>
      <div className="contadorTopMobil">
        <div className="botonFlecha">
          <svg
            style={{ margin: "10px" }}
            width="8"
            height="10"
            viewBox="0 0 6 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.97146 7.90369L0.0639648 3.99994L3.97146 0.0961914L5.02897 1.15369L2.18647 3.99994L5.02897 6.84619L3.97146 7.90369Z"
              fill="#A9AFD9"
            />
          </svg>
        </div>
        <div className="pasos">
          <label className="fuenteSemiBold">PASO 1 DE 2</label>
        </div>
        <div className="barraCarga"></div>
      </div>

      <hr className="separador separadorTop" />
      <div className="contenedorMedio">
        <div className="contenidoMedio">
          <div
            className="flex items-center text-[#4F4FFF] h-11 text-lg"
            onClick={() => {
              navigate("/Sofftek");
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10"
                cy="10"
                r="9"
                transform="rotate(90 10 10)"
                stroke="#4F4FFF"
                stroke-width="2"
              />
              <path
                d="M7.55317 10L10.8094 6.74689L11.6907 7.62814L9.32192 10L11.6907 12.3719L10.8094 13.2531L7.55317 10Z"
                fill="#4F4FFF"
              />
            </svg>
            <label className="ml-1">Volver</label>
          </div>
          <div>
            <div className="contenidoMedio2">
              <div className="contenedorTituloPlanes">
                <label className="tituloCotiza fuenteBold">
                  Rocío ¿Para quién deseas cotizar?
                </label>
                <label>
                  Selecciona la opción que se ajuste más a tus necesidades.
                </label>
              </div>

              <div className="contenedorOpciones">
                <div className="card1">
                  <div className="flex justify-end">
                    <label
                      className="relative flex rounded-full cursor-pointer"
                      htmlFor="check"
                    >
                      <input
                        type="checkbox"
                        className=" peer  h-7 w-7 cursor-pointer appearance-none rounded-full border  transition-all   checked:bg-[#389E0D] "
                        id="check1"
                        checked={isChecked1}
                        onClick={(e) => {
                          mostrarPlanes(e);
                        }}
                      />
                      <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                  </div>
                  <div className="titulo">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M44.9381 14.3212C45.0742 13.6316 44.9807 12.9163 44.6719 12.2849C44.3631 11.6534 43.856 11.1404 43.2281 10.8244L25.4344 1.92747C24.9885 1.7064 24.4976 1.59137 24 1.59137C23.5023 1.59137 23.0114 1.7064 22.5656 1.92747L4.77186 10.8244C4.14397 11.1404 3.63687 11.6534 3.32807 12.2849C3.01927 12.9163 2.92576 13.6316 3.06186 14.3212L5.55373 26.7768C6.57803 31.903 9.47851 36.4623 13.6875 39.5625L14.4581 40.125C14.5044 38.9928 14.687 37.8703 15.0019 36.7819C11.6439 34.1325 9.33989 30.3733 8.5031 26.1787L5.99998 13.7325C5.99177 13.6881 5.9981 13.6422 6.01803 13.6017C6.03796 13.5611 6.07043 13.5281 6.11061 13.5075L23.9044 4.6106C23.9336 4.59648 23.9656 4.58915 23.9981 4.58915C24.0306 4.58915 24.0626 4.59648 24.0919 4.6106L41.8856 13.5C41.9258 13.5206 41.9583 13.5536 41.9782 13.5942C41.9981 13.6347 42.0044 13.6806 41.9962 13.725L39.5044 26.1825C39.2104 27.6475 38.7355 29.0703 38.0906 30.4181C38.8844 31.1578 39.5897 31.9871 40.1925 32.8894C41.2565 30.9789 42.0157 28.9141 42.4425 26.7694L44.9381 14.3212Z"
                        fill="url(#paint0_linear_12_156287)"
                      />
                      <path
                        d="M34.2994 30.2025L31.3687 28.5844C32.3166 28.0684 33.1078 27.3063 33.6588 26.3784C34.2099 25.4504 34.5005 24.3911 34.5 23.3119V20.9381C34.5 19.3468 33.8679 17.8207 32.7426 16.6955C31.6174 15.5703 30.0913 14.9381 28.5 14.9381C26.9087 14.9381 25.3826 15.5703 24.2574 16.6955C23.1321 17.8207 22.5 19.3468 22.5 20.9381V23.3119C22.4995 24.3911 22.7901 25.4504 23.3412 26.3784C23.8922 27.3063 24.6834 28.0684 25.6313 28.5844L22.7006 30.2025C20.8231 31.2389 19.2577 32.7596 18.1672 34.6062C17.0767 36.4528 16.501 38.5579 16.5 40.7025V43.5C16.5 43.8978 16.658 44.2793 16.9393 44.5606C17.2206 44.842 17.6022 45 18 45H39C39.3978 45 39.7794 44.842 40.0607 44.5606C40.342 44.2793 40.5 43.8978 40.5 43.5V40.7081C40.5 38.5626 39.9248 36.4563 38.8342 34.6086C37.7437 32.7609 36.1777 31.2394 34.2994 30.2025Z"
                        fill="url(#paint1_linear_12_156287)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_12_156287"
                          x1="3.00098"
                          y1="1.59137"
                          x2="22.4619"
                          y2="49.3152"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.272135" stop-color="#34263B" />
                          <stop offset="0.658079" stop-color="#13172C" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_12_156287"
                          x1="17.1279"
                          y1="17.2974"
                          x2="41.2816"
                          y2="36.5807"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.35" stop-color="#F7052D" />
                          <stop offset="0.85" stop-color="#CA5AFA" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <label className="fuenteBold">Para mí</label>
                  </div>
                  <label style={{ fontSize: "14px", minHeight: "100px" }}>
                    Cotiza tu seguro de salud y agrega familiares si así lo
                    deseas.
                  </label>
                </div>
                <div className="card1" style={{ minHeight: "230px" }}>
                  <div className="flex justify-end">
                    <label
                      className="relative flex rounded-full cursor-pointer"
                      htmlFor="check"
                    >
                      <input
                        type="checkbox"
                        className=" peer  h-7 w-7 cursor-pointer appearance-none rounded-full border  transition-all   checked:bg-[#389E0D] "
                        id="check2"
                        checked={isChecked2}
                        onClick={(e) => {
                          mostrarPlanes(e);
                        }}
                      />
                      <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                  </div>
                  <div className="titulo">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.8186 7.21623L16.9561 1.28498C16.6589 1.1376 16.3316 1.06091 15.9998 1.06091C15.6681 1.06091 15.3408 1.1376 15.0436 1.28498L3.18108 7.21623C2.76249 7.42693 2.42442 7.76892 2.21855 8.18991C2.01268 8.6109 1.95035 9.08772 2.04107 9.54748L3.70233 17.8512C4.38519 21.2687 6.31885 24.3082 9.12483 26.375L14.7348 30.5187C15.1018 30.7922 15.5472 30.94 16.0048 30.94C16.4625 30.94 16.9079 30.7922 17.2748 30.5187L17.9836 29.995C17.5121 29.5219 17.098 28.995 16.7498 28.425L16.0873 28.9137C16.0639 28.9314 16.0354 28.9409 16.0061 28.9409C15.9768 28.9409 15.9482 28.9314 15.9248 28.9137L10.3148 24.77C9.86509 24.4375 9.43867 24.0746 9.03858 23.6837C9.21351 22.6322 9.62406 21.6338 10.2395 20.7634C10.8549 19.893 11.6593 19.173 12.5923 18.6575L13.9998 17.875C14.7608 18.2071 15.5926 18.3445 16.4199 18.2747C17.2473 18.205 18.0443 17.9303 18.7389 17.4754C19.4336 17.0205 20.004 16.3998 20.3987 15.6693C20.7934 14.9388 21 14.1215 20.9998 13.2912V11.7087C20.9998 10.3827 20.473 9.11088 19.5354 8.1732C18.5977 7.23552 17.3259 6.70873 15.9998 6.70873C14.6737 6.70873 13.402 7.23552 12.4643 8.1732C11.5266 9.11088 10.9998 10.3827 10.9998 11.7087V13.2912C10.9993 14.497 11.4363 15.6621 12.2298 16.57L11.6248 16.9062C9.69125 17.9746 8.21421 19.7121 7.47107 21.7925C6.59098 20.481 5.97844 19.0087 5.66858 17.46L3.99983 9.15498C3.99435 9.12537 3.99857 9.09479 4.01186 9.06777C4.02514 9.04075 4.04679 9.01873 4.07358 9.00498L15.9361 3.07373C15.9556 3.06432 15.9769 3.05943 15.9986 3.05943C16.0202 3.05943 16.0416 3.06432 16.0611 3.07373L27.9236 8.99998C27.9504 9.01373 27.972 9.03575 27.9853 9.06277C27.9986 9.08979 28.0028 9.12037 27.9973 9.14998L26.6436 15.915C27.2988 16.129 27.9252 16.4229 28.5086 16.79L29.9586 9.53998C30.0475 9.08135 29.9843 8.60621 29.7786 8.18678C29.5728 7.76736 29.2357 7.42657 28.8186 7.21623ZM12.9998 11.7087C12.9998 10.9131 13.3159 10.15 13.8785 9.58741C14.4411 9.0248 15.2042 8.70873 15.9998 8.70873C16.7955 8.70873 17.5585 9.0248 18.1211 9.58741C18.6838 10.15 18.9998 10.9131 18.9998 11.7087V13.2912C18.9998 14.0869 18.6838 14.8499 18.1211 15.4126C17.5585 15.9752 16.7955 16.2912 15.9998 16.2912C15.2042 16.2912 14.4411 15.9752 13.8785 15.4126C13.3159 14.8499 12.9998 14.0869 12.9998 13.2912V11.7087Z"
                        fill="url(#paint0_linear_12_155934)"
                      />
                      <path
                        d="M28.95 19.05C27.971 18.0711 26.7237 17.4045 25.3659 17.1345C24.008 16.8644 22.6006 17.0031 21.3215 17.5329C20.0425 18.0627 18.9493 18.96 18.1802 20.1111C17.411 21.2622 17.0005 22.6156 17.0005 24C17.0005 25.3844 17.411 26.7378 18.1802 27.8889C18.9493 29.04 20.0425 29.9373 21.3215 30.4671C22.6006 30.9969 24.008 31.1356 25.3659 30.8656C26.7237 30.5955 27.971 29.9289 28.95 28.95C29.6001 28.3 30.1157 27.5283 30.4676 26.679C30.8194 25.8296 31.0005 24.9193 31.0005 24C31.0005 23.0807 30.8194 22.1704 30.4676 21.3211C30.1157 20.4717 29.6001 19.7 28.95 19.05ZM28 25H25V28H23V25H20V23H23V20H25V23H28V25Z"
                        fill="url(#paint1_linear_12_155934)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_12_155934"
                          x1="2.00049"
                          y1="1.06091"
                          x2="18.7117"
                          y2="36.2932"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.272135" stop-color="#34263B" />
                          <stop offset="0.658079" stop-color="#13172C" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_12_155934"
                          x1="17.3667"
                          y1="18.0988"
                          x2="28.9017"
                          y2="29.6338"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.35" stop-color="#F7052D" />
                          <stop offset="0.85" stop-color="#CA5AFA" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <label className="fuenteBold">Para alguien más</label>
                  </div>
                  <label style={{ fontSize: "14px", minHeight: "100px" }}>
                    Realiza una cotización para uno de tus familiares o
                    cualquier persona.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contenedorFinal" style={{ marginBottom: "50px" }}>
        <div className="listaPlanesMobil">
          <ListaCards isChecked1={isChecked1} isChecked2={isChecked2} />
        </div>
        <div className="listaPlanes">
          <div
            id="listaPlanesParaMi"
            className={isChecked1 ? "grid grid-cols-3 gap-5" : "hidden"}
            // className="listaPlanesCustom"
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
                        fill="url(#paint0_linear_12_156415)"
                      />
                      <path
                        d="M42.875 49H35V42C35 40.1435 34.2625 38.363 32.9498 37.0503C31.637 35.7375 29.8565 35 28 35C26.1435 35 24.363 35.7375 23.0502 37.0503C21.7375 38.363 21 40.1435 21 42V49H9.625V20.3438H9.50469L26.4819 8.34315C26.9247 8.03055 27.4535 7.86272 27.9956 7.86272C28.5377 7.86272 29.0665 8.03055 29.5094 8.34315L46.375 20.2453V25.4166C46.6637 25.3903 46.9547 25.375 47.25 25.375C48.1378 25.3749 49.0213 25.4986 49.875 25.7425V22.715L54.25 25.8125V21.5185L31.5284 5.4819C30.4939 4.7538 29.2596 4.36304 27.9945 4.36304C26.7294 4.36304 25.4952 4.7538 24.4606 5.4819L1.75 21.5382V25.8257L6.125 22.7325V49C6.125 49.9283 6.49375 50.8185 7.15012 51.4749C7.8065 52.1313 8.69674 52.5 9.625 52.5H42.875V49ZM31.5 49H24.5V42C24.5 41.0718 24.8687 40.1815 25.5251 39.5252C26.1815 38.8688 27.0717 38.5 28 38.5C28.9283 38.5 29.8185 38.8688 30.4749 39.5252C31.1313 40.1815 31.5 41.0718 31.5 42V49Z"
                        fill="url(#paint1_linear_12_156415)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_12_156415"
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
                          id="paint1_linear_12_156415"
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
                <hr className="separadorPlanes" />
                <div className="flex mb-5" style={{ minHeight: "300px" }}>
                  <ul className="puntos">
                    <li>
                      Médico general a domicilio por S/20 y medicinas cubiertas
                      al 100%.
                    </li>
                    <li>
                      Videoconsulta y orientación telefónica al 100% en medicina
                      general + pediatría.
                    </li>
                    <li>
                      Indemnización de S/300 en caso de hospitalización por más
                      de un día.
                    </li>
                  </ul>
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
                        d="M28 16.0169H20.7331V8.75H15.1419V16.0169H7.875V21.6081H15.1419V28.875H20.7331V21.6081H28V16.0169Z"
                        fill="url(#paint0_linear_9_8392)"
                      />
                      <path
                        d="M48.9825 18.025L38.5 12.0553V7.875C38.5 4.4975 35.7525 1.75 32.375 1.75H11.375C7.9975 1.75 5.25 4.4975 5.25 7.875V13.3919H8.75V7.875C8.75 6.42688 9.92688 5.25 11.375 5.25H32.375C33.8231 5.25 35 6.42688 35 7.875V50.75H28V40.25H15.75V50.75H8.75V24.2331H5.25V50.75C5.25 52.6794 6.82063 54.25 8.75 54.25H47.25C49.1838 54.25 50.75 52.6838 50.75 50.75V21.0656C50.75 19.8078 50.0741 18.6462 48.9825 18.025ZM24.5 50.75H19.25V43.75H24.5V50.75ZM47.25 50.75H38.5V36.75H43.75V33.25H38.5V29.75H43.75V26.25H38.5V16.0825L47.25 21.0656V50.75Z"
                        fill="url(#paint1_linear_9_8392)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_9_8392"
                          x1="8.40148"
                          y1="10.3295"
                          x2="24.983"
                          y2="26.911"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.35" stop-color="#F7052D" />
                          <stop offset="0.85" stop-color="#CA5AFA" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_9_8392"
                          x1="5.25"
                          y1="1.75"
                          x2="36.0413"
                          y2="61.7929"
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
                <hr className="separadorPlanes" />
                <div className="flex mb-5" style={{ minHeight: "300px" }}>
                  <ul className="puntos">
                    <li>Consultas en clínica para cualquier especialidad.</li>
                    <li>Medicinas y exámenes derivados cubiertos al 80%</li>
                    <li>Atención médica en más de 200 clínicas del país.</li>
                  </ul>
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
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M54.25 35C54.2493 33.6909 53.8816 32.4082 53.1886 31.2977C52.4955 30.1871 51.5049 29.2931 50.3293 28.7172C49.1537 28.1413 47.8402 27.9067 46.5379 28.0398C45.2356 28.173 43.9967 28.6687 42.962 29.4706C41.9273 30.2725 41.1382 31.3485 40.6843 32.5764C40.2304 33.8043 40.1299 35.1348 40.3942 36.4169C40.6585 37.6991 41.2771 38.8814 42.1796 39.8296C43.0821 40.7778 44.2325 41.454 45.5 41.7812V52.5H49V41.7812C50.5032 41.3931 51.8347 40.5163 52.7851 39.2887C53.7354 38.0612 54.2508 36.5525 54.25 35Z"
                        fill="url(#paint0_linear_12_156415)"
                      />
                      <path
                        d="M42.875 49H35V42C35 40.1435 34.2625 38.363 32.9498 37.0503C31.637 35.7375 29.8565 35 28 35C26.1435 35 24.363 35.7375 23.0502 37.0503C21.7375 38.363 21 40.1435 21 42V49H9.625V20.3438H9.50469L26.4819 8.34315C26.9247 8.03055 27.4535 7.86272 27.9956 7.86272C28.5377 7.86272 29.0665 8.03055 29.5094 8.34315L46.375 20.2453V25.4166C46.6637 25.3903 46.9547 25.375 47.25 25.375C48.1378 25.3749 49.0213 25.4986 49.875 25.7425V22.715L54.25 25.8125V21.5185L31.5284 5.4819C30.4939 4.7538 29.2596 4.36304 27.9945 4.36304C26.7294 4.36304 25.4952 4.7538 24.4606 5.4819L1.75 21.5382V25.8257L6.125 22.7325V49C6.125 49.9283 6.49375 50.8185 7.15012 51.4749C7.8065 52.1313 8.69674 52.5 9.625 52.5H42.875V49ZM31.5 49H24.5V42C24.5 41.0718 24.8687 40.1815 25.5251 39.5252C26.1815 38.8688 27.0717 38.5 28 38.5C28.9283 38.5 29.8185 38.8688 30.4749 39.5252C31.1313 40.1815 31.5 41.0718 31.5 42V49Z"
                        fill="url(#paint1_linear_12_156415)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_12_156415"
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
                          id="paint1_linear_12_156415"
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
                <hr className="separadorPlanes" />
                <div className="flex mb-5" style={{ minHeight: "300px" }}>
                  <ul className="puntos">
                    <li>
                      Un Chequeo preventivo general de manera presencial o
                      virtual.
                    </li>
                    <li>
                      Acceso a Vacunas en el Programa del MINSA en centros
                      privados.
                    </li>
                    <li>Incluye todos los beneficios del Plan en Casa.</li>
                  </ul>
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
          </div>
          <div
            id="listaPlanesParaOtro"
            className={isChecked2 ? "grid grid-cols-3 gap-5" : "hidden"}
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
                        fill="url(#paint0_linear_12_156414)"
                      />
                      <path
                        d="M42.875 49H35V42C35 40.1435 34.2625 38.363 32.9498 37.0503C31.637 35.7375 29.8565 35 28 35C26.1435 35 24.363 35.7375 23.0502 37.0503C21.7375 38.363 21 40.1435 21 42V49H9.625V20.3438H9.50469L26.4819 8.34315C26.9247 8.03055 27.4535 7.86272 27.9956 7.86272C28.5377 7.86272 29.0665 8.03055 29.5094 8.34315L46.375 20.2453V25.4166C46.6637 25.3903 46.9547 25.375 47.25 25.375C48.1378 25.3749 49.0213 25.4986 49.875 25.7425V22.715L54.25 25.8125V21.5185L31.5284 5.4819C30.4939 4.7538 29.2596 4.36304 27.9945 4.36304C26.7294 4.36304 25.4952 4.7538 24.4606 5.4819L1.75 21.5382V25.8257L6.125 22.7325V49C6.125 49.9283 6.49375 50.8185 7.15012 51.4749C7.8065 52.1313 8.69674 52.5 9.625 52.5H42.875V49ZM31.5 49H24.5V42C24.5 41.0718 24.8687 40.1815 25.5251 39.5252C26.1815 38.8688 27.0717 38.5 28 38.5C28.9283 38.5 29.8185 38.8688 30.4749 39.5252C31.1313 40.1815 31.5 41.0718 31.5 42V49Z"
                        fill="url(#paint1_linear_12_156414)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_12_156414"
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
                          id="paint1_linear_12_156414"
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
                    $39 antes
                  </label>
                  <label style={{ fontSize: "18px" }} className="fuenteBold">
                    $37.05 al mes
                  </label>
                </div>
                <hr className="separadorPlanes" />
                <div className="flex mb-5" style={{ minHeight: "300px" }}>
                  <ul className="puntos">
                    <li>
                      <label className="fuenteBold">
                        Médico general a domicilio
                      </label>{" "}
                      por S/20 y medicinas cubiertas al 100%.
                    </li>
                    <li>
                      <label className="fuenteBold">Videoconsulta</label> y
                      orientación telefónica al 100% en medicina general +
                      pediatría.
                    </li>
                    <li>
                      <label className="fuenteBold">Indemnización</label> de
                      S/300 en caso de hospitalización por más de un día.
                    </li>
                  </ul>
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
                        d="M28 16.0169H20.7331V8.75H15.1419V16.0169H7.875V21.6081H15.1419V28.875H20.7331V21.6081H28V16.0169Z"
                        fill="url(#paint0_linear_9_8391)"
                      />
                      <path
                        d="M48.9825 18.025L38.5 12.0553V7.875C38.5 4.4975 35.7525 1.75 32.375 1.75H11.375C7.9975 1.75 5.25 4.4975 5.25 7.875V13.3919H8.75V7.875C8.75 6.42688 9.92688 5.25 11.375 5.25H32.375C33.8231 5.25 35 6.42688 35 7.875V50.75H28V40.25H15.75V50.75H8.75V24.2331H5.25V50.75C5.25 52.6794 6.82063 54.25 8.75 54.25H47.25C49.1838 54.25 50.75 52.6838 50.75 50.75V21.0656C50.75 19.8078 50.0741 18.6462 48.9825 18.025ZM24.5 50.75H19.25V43.75H24.5V50.75ZM47.25 50.75H38.5V36.75H43.75V33.25H38.5V29.75H43.75V26.25H38.5V16.0825L47.25 21.0656V50.75Z"
                        fill="url(#paint1_linear_9_8391)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_9_8391"
                          x1="8.40148"
                          y1="10.3295"
                          x2="24.983"
                          y2="26.911"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.35" stop-color="#F7052D" />
                          <stop offset="0.85" stop-color="#CA5AFA" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_9_8391"
                          x1="5.25"
                          y1="1.75"
                          x2="36.0413"
                          y2="61.7929"
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
                <hr className="separadorPlanes" />
                <div className="flex mb-5" style={{ minHeight: "300px" }}>
                  <ul className="puntos">
                    <li>
                      <label className="fuenteBold">Consultas en clínica</label>{" "}
                      para cualquier especialidad.
                    </li>
                    <li>
                      <label className="fuenteBold">Medicinas y exámenes</label>{" "}
                      derivados cubiertos al 80%
                    </li>
                    <li>
                      Atención médica en
                      <label className="fuenteBold">
                        más de 200 clínicas del país.
                      </label>
                    </li>
                  </ul>
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
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M54.25 35C54.2493 33.6909 53.8816 32.4082 53.1886 31.2977C52.4955 30.1871 51.5049 29.2931 50.3293 28.7172C49.1537 28.1413 47.8402 27.9067 46.5379 28.0398C45.2356 28.173 43.9967 28.6687 42.962 29.4706C41.9273 30.2725 41.1382 31.3485 40.6843 32.5764C40.2304 33.8043 40.1299 35.1348 40.3942 36.4169C40.6585 37.6991 41.2771 38.8814 42.1796 39.8296C43.0821 40.7778 44.2325 41.454 45.5 41.7812V52.5H49V41.7812C50.5032 41.3931 51.8347 40.5163 52.7851 39.2887C53.7354 38.0612 54.2508 36.5525 54.25 35Z"
                        fill="url(#paint0_linear_12_156414)"
                      />
                      <path
                        d="M42.875 49H35V42C35 40.1435 34.2625 38.363 32.9498 37.0503C31.637 35.7375 29.8565 35 28 35C26.1435 35 24.363 35.7375 23.0502 37.0503C21.7375 38.363 21 40.1435 21 42V49H9.625V20.3438H9.50469L26.4819 8.34315C26.9247 8.03055 27.4535 7.86272 27.9956 7.86272C28.5377 7.86272 29.0665 8.03055 29.5094 8.34315L46.375 20.2453V25.4166C46.6637 25.3903 46.9547 25.375 47.25 25.375C48.1378 25.3749 49.0213 25.4986 49.875 25.7425V22.715L54.25 25.8125V21.5185L31.5284 5.4819C30.4939 4.7538 29.2596 4.36304 27.9945 4.36304C26.7294 4.36304 25.4952 4.7538 24.4606 5.4819L1.75 21.5382V25.8257L6.125 22.7325V49C6.125 49.9283 6.49375 50.8185 7.15012 51.4749C7.8065 52.1313 8.69674 52.5 9.625 52.5H42.875V49ZM31.5 49H24.5V42C24.5 41.0718 24.8687 40.1815 25.5251 39.5252C26.1815 38.8688 27.0717 38.5 28 38.5C28.9283 38.5 29.8185 38.8688 30.4749 39.5252C31.1313 40.1815 31.5 41.0718 31.5 42V49Z"
                        fill="url(#paint1_linear_12_156414)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_12_156414"
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
                          id="paint1_linear_12_156414"
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
                <hr className="separadorPlanes" />
                <div className="flex mb-5" style={{ minHeight: "300px" }}>
                  <ul className="puntos">
                    <li>
                      <label className="fuenteBold">
                        Un Chequeo preventivo general
                      </label>{" "}
                      de manera presencial o virtual.
                    </li>
                    <li>
                      Acceso a <label className="fuenteBold">Vacunas</label> en
                      el Programa del MINSA en centros privados.
                    </li>
                    <li className="fuenteBold">
                      Incluye todos los beneficios del plan en casa.
                    </li>
                  </ul>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planes;
