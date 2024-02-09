import { useNavigate } from "react-router-dom";
import "../sass/_Resumen.scss";
const Resumen = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="contadorTop">
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
          <label style={{ fontFamily: "lato", fontWeight: "bolder" }}>1</label>
        </div>
        <label style={{ color: "#7981B2" }}>Planes y coberturas</label>
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
          <label style={{ fontFamily: "lato", fontWeight: "bolder" }}>2</label>
        </div>
        <label className="fuenteSemiBold">Resumen</label>
      </div>
      <div className="contenedorContenidoResumen">
        <div
          className="flex items-center text-[#4F4FFF] h-11 text-lg"
          onClick={() => {
            navigate("/Sofftek/");
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
        <div className="tituloResumen">
          <label className="fuenteBold">Resumen del seguro</label>
        </div>
        <div className="card1 mx-5 cardResumen">
          <label className="mb-2">Precios calculados para:</label>
          <div className="flex gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.1463 13.7647H18.2309C16.1102 13.7647 14.4 15.4756 14.4 17.5972V22H20.1691C22.2898 22 24 20.2891 24 18.1675V17.62C24 15.4756 22.267 13.7647 20.1463 13.7647Z"
                fill="#141938"
              />
              <path
                d="M18.6 12.5882C20.2569 12.5882 21.6 11.2714 21.6 9.64706C21.6 8.02269 20.2569 6.70588 18.6 6.70588C16.9431 6.70588 15.6 8.02269 15.6 9.64706C15.6 11.2714 16.9431 12.5882 18.6 12.5882Z"
                fill="#141938"
              />
              <path
                d="M7.8 10.2353C10.1196 10.2353 12 8.39176 12 6.11765C12 3.84353 10.1196 2 7.8 2C5.4804 2 3.6 3.84353 3.6 6.11765C3.6 8.39176 5.4804 10.2353 7.8 10.2353Z"
                fill="#141938"
              />
              <path
                d="M14.4 13.3483C13.6788 12.8789 12.8134 12.5882 11.8758 12.5882H4.32721C1.94725 12.5882 0 14.399 0 16.6123V18.2442C0 20.3233 1.803 22 4.03873 22H12.1402V17.6853C12.1402 15.9416 13.0297 14.3767 14.4 13.3483Z"
                fill="#141938"
              />
            </svg>
            <label className="text-xl fuenteBold">Rocio Miranda Díaz</label>
          </div>
          <hr className="separadorResumen" />
          <div className="flex flex-col mb-3">
            <label className="fuenteBold">Responsable de pago</label>
            <label>DNI: 123</label>
            <label>Celular: 1234</label>
          </div>
          <div className="flex flex-col">
            <label className="fuenteBold">Plan elegido</label>
            <label>Plan en casa y clinica</label>
            <label>Costo del Plan: $99 al mes</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resumen;
