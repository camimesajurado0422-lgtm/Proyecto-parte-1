import { useState } from 'react';
import { useLocation } from "react-router";
import "./Detalles.css";




function Detalles() {
       const location = useLocation();
       const usuario = location.state
    

  const [account, setAccount] = useState("");

     





  return (
    <div className="detalles-container">
      <h2 className="detalles-title">Detalles de la Cuenta {usuario}</h2>

      <ul className="detalles-lista">
        <li>Nombre: {account.nombre}</li>
        <li>Email: {account.email}</li>
        <li>Número de Cuenta: {account.numeroCuenta}</li>
        <li>Tipo: {account.tipo}</li>
        <li>Saldo: ${account.saldo}</li>
      </ul>

      <footer className="detalles-footer">
        © 2025 Banca Estebanquito - Todos los derechos reservados
      </footer>
    </div>
  );
}

export default Detalles;