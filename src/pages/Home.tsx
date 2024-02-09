import img1 from "../assets/img1.png";
import Formulario from "../components/Formulario";
import Footer from "../components/Footer";
import "../sass/Home.scss";
const Home = () => {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "relative", flexGrow: 1 }}>
        <div id="contenedorHome">
          <div className="contenedor-contenido">
            <div className="ladoIzquierdo">
              <img
                src={img1}
                style={{
                  transform: "scaleX(-1)",
                  objectFit: "cover",
                  height: "100%",
                  borderRadius: "20px",
                }}
              />
            </div>
            <div className="ladoDerecho">
              <div id="contenidoDerecho">
                <div className="contenedorTitulo">
                  <div className="contenedorDescripcion">
                    <div className="titulo2">
                      <label className="fuenteBlack">
                        Seguro Salud Flexible
                      </label>
                    </div>
                    <p
                      style={{
                        fontSize: "32px",
                        fontWeight: "bold",
                        lineHeight: "40px",
                      }}
                      className="fuenteBold"
                    >
                      Creado para ti y tu familia
                    </p>
                  </div>
                  <img
                    id="imagen1"
                    src={img1}
                    style={{
                      transform: "scaleX(-1)",
                      objectFit: "cover",
                      height: "180px",
                      width: "150px",
                      borderRadius: "20px",
                    }}
                  />
                </div>
                <div className="descripcion1">
                  <hr className="separador" />
                  <label className="descripcionTexto1 fuenteBold">
                    Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                    nuestra asesoría. 100% online.
                  </label>
                </div>

                <Formulario />
              </div>
            </div>
          </div>
        </div>
        <svg
          className="colorDifuminadoBottom"
          width="412"
          height="768"
          viewBox="0 0 412 768"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_4797_140)">
            <ellipse
              cx="92.1051"
              cy="94.6542"
              rx="92.1051"
              ry="94.6542"
              transform="matrix(0.999038 0.0438523 -0.0415179 0.999138 -21.803 604.302)"
              fill="#C333FF"
            />
            <ellipse
              cx="118.738"
              cy="122.024"
              rx="118.738"
              ry="122.024"
              transform="matrix(0.999038 0.0438523 -0.0415179 0.999138 -192.756 361.648)"
              fill="#C333FF"
            />
            <ellipse
              cx="135.383"
              cy="139.13"
              rx="135.383"
              ry="139.13"
              transform="matrix(0.999038 0.0438523 -0.0415179 0.999138 -211.856 473.819)"
              fill="#C333FF"
            />
            <ellipse
              cx="-19.0274"
              cy="456"
              rx="80.7566"
              ry="83"
              fill="#C333FF"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_4797_140"
              x="-512"
              y="-89"
              width="923.984"
              height="1136"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="120"
                result="effect1_foregroundBlur_4797_140"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div>
        <Footer />
      </div>

      <svg
        className="colorDifuminadoTop"
        width="369"
        height="768"
        viewBox="0 0 369 768"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_4797_261)">
          <ellipse
            cx="92.1058"
            cy="94.6545"
            rx="92.1058"
            ry="94.6545"
            transform="matrix(-0.999038 -0.0438522 0.0415182 -0.999138 433.801 328.697)"
            fill="#00F4E2"
          />
          <ellipse
            cx="118.739"
            cy="122.024"
            rx="118.739"
            ry="122.024"
            transform="matrix(-0.999038 -0.0438522 0.0415182 -0.999138 604.756 571.352)"
            fill="#00F4E2"
          />
          <ellipse
            cx="135.384"
            cy="139.131"
            rx="135.384"
            ry="139.131"
            transform="matrix(-0.999038 -0.0438522 0.0415182 -0.999138 623.856 459.181)"
            fill="#00F4E2"
          />
          <ellipse
            cx="431.026"
            cy="476.999"
            rx="80.7572"
            ry="83.0002"
            transform="rotate(-180 431.026 476.999)"
            fill="#00F4E2"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_4797_261"
            x="0.0131836"
            y="-114"
            width="923.987"
            height="1136"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="120"
              result="effect1_foregroundBlur_4797_261"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Home;
