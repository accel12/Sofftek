import { useNavigate } from "react-router-dom";
import "../sass/_Formulario.scss";
const Formulario = () => {
  const navigate = useNavigate();
  return (
    <div className="contenedorFormulario">
      <div className="documentoIdentidad">
        <select
          style={{
            borderRadius: "8px 0px 0px 8px",
            border: "1px solid black",
          }}
        >
          <option>DNI</option>
          <option>Carnet Extranjeria</option>
        </select>
        <input
          type="number"
          placeholder="Nro de documento"
          style={{
            borderRadius: "0px 8px 8px 0px",
            padding: "20px 0px 15px 16px",
            borderTop: "1px solid black",
            borderRight: "1px solid black",
            borderBottom: "1px solid black",
          }}
        />
      </div>
      <div id="celularNumero">
        <input
          type="number"
          placeholder="Celular"
          style={{
            width: "100%",
            marginTop: "15px",
            borderRadius: "8px",
            padding: "16px 16px 15px 16px",
            border: "1px solid black",
          }}
        />
      </div>
      <div id="terminosCondicionesContenedor">
        <div className="inline-flex items-center">
          <label
            className="relative flex items-center py-3 mr-3 rounded-full cursor-pointer"
            htmlFor="check"
          >
            <input
              type="checkbox"
              className="peer h-7 w-7 cursor-pointer appearance-none rounded-md border  transition-all checked:bg-gray-900 "
              id="check"
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
          <label style={{ fontSize: "15px" }}>
            Acepto la Política de Privacidad
          </label>
        </div>
        <div className="inline-flex items-center mb-3">
          <label
            className="relative flex items-center py-3 mr-3 rounded-full cursor-pointer"
            htmlFor="check"
          >
            <input
              type="checkbox"
              className=" peer  h-7 w-7 cursor-pointer appearance-none rounded-md border  transition-all   checked:bg-gray-900 "
              id="check"
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

          <label style={{ fontSize: "15px" }}>
            Acepto la Política Comunicaciones Comerciales
          </label>
        </div>
        <div className="mb-6">
          <label
            style={{
              fontSize: "12px",
              lineHeight: "20px",
              letterSpacing: "0.4px",
            }}
            className="underline fuenteSemiBold"
          >
            Aplican Términos y Condiciones.
          </label>
        </div>
        <div className="mb-9">
          <button
            id="btnAceptar"
            onClick={() => {
              navigate("/Sofftek/Planes");
            }}
          >
            Cotiza aquí
          </button>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
