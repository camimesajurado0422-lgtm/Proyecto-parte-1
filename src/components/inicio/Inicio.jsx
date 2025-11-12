import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import "./Inicio.css";


function Inicio(){
    const navigate = useNavigate();


    const location = useLocation();

    const usuario = location.state
    const reports = () => {
      navigate("/reportes") 
    }
     
    const detallesCuenta = () => {
      navigate("/detalles") 
    }

     const transaction = () => {
      navigate("/transacciones") 
    }

     const loans = () => {
      navigate("/prestamos") 
    }
   

    return(
      <div className="inicio-container">
      <h1 className="inicio-title">Bienvenido {usuario}</h1>

      <div className="inicio-botones">
        <button className="boton-principal" onClick={reports}>Reportes</button>
        <button className="boton-principal" onClick={transaction}>Transacciones</button>
        <button className="boton-principal" onClick={loans}>Préstamos</button>
        <button className="boton-secundario" onClick={detallesCuenta}>Detalles de la cuenta</button>
      </div>

      <footer className="inicio-footer">
        © 2025 Banca Estebanquito - Todos los derechos reservados
      </footer>
    </div>
    );
}

export default Inicio;