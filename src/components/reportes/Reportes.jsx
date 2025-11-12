import {useState } from 'react';
import { useLocation } from "react-router";
import "./Reportes.css";




function Reports() {
  const [report, setReport] = useState("");
   const location = useLocation();

    const usuario = location.state
  


  return (
    <div className="reportes-container">
      <h2 className="reportes-title">Reportes Financieros {usuario}</h2>

      <ul className="reportes-lista">
        <li>Ingresos Totales: ${report.ingresos}</li>
        <li>Egresos Totales: ${report.egresos}</li>
        <li>Deudas Pendientes: ${report.deudas}</li>
      </ul>

      <footer className="reportes-footer">
        © 2025 Banca Estebanquito - Todos los derechos reservados
      </footer>
    </div>
  );
}

export default Reports;