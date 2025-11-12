import { useState } from 'react';
import { useLocation } from "react-router";
import "./Prestamos.css";


function Prestamos() {

   

  const [form, setForm] = useState({ monto: '', plazo: '' });
 
   const location = useLocation();
       const usuario = location.state


const solicitarPrestamo = () => {
  // Verifica que los campos no estén vacíos
  if (form.monto === '' || form.plazo === '') {
    alert("Por favor ingresa el monto y el plazo");
    return;
  }
  alert("Tu solicitud de préstamo fue enviada correctamente");


};



  return (
    <div className="prestamos-container">
      <h2 className="prestamos-title">Solicitar Préstamo {usuario}</h2>

      <input
        type="number"
        className="prestamos-input"
        placeholder="Monto"
        value={form.monto}
        onChange={(e) => setForm({ ...form, monto: e.target.value })}
        required
      />

      <input
        type="number"
        className="prestamos-input"
        placeholder="Plazo (meses)"
        value={form.plazo}
        onChange={(e) => setForm({ ...form, plazo: e.target.value })}
        required
      />

      <button className="prestamos-boton" onClick={solicitarPrestamo}>
        Solicitar
      </button>

      <footer className="prestamos-footer">
        © 2025 Banca Estebanquito - Todos los derechos reservados
      </footer>
    </div>
  );
}

export default Prestamos;