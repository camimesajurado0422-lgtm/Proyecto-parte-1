import { useState } from "react";
import { useNavigate } from "react-router";
import "./Login.css"; 

function Login() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const validarUsuario = () => {
    navigate("/inicio");
  };

  const registrarUs = () => {
    navigate("/registro");
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>

      <div className="hijo1">
        <input
          type="text"
          name="input_login"
          id="input_usuario"
          placeholder="Ingresa usuario"
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          name="input_login"
          id="input_contraseña"
          placeholder="Ingresa contraseña"
          onChange={(e) => setContraseña(e.target.value)}
        />
      </div>

      <div className="hijo2">
        <button onClick={validarUsuario} name="login-button">
          Iniciar Sesión
        </button>
        <button onClick={registrarUs} name="register-button">
          Registrarse
        </button>
      </div>

      <div className="hijo3">
        <p>© 2025 Banca Estebanquito - Todos los derechos reservados</p>
      </div>
    </div>
  );
}

export default Login;
