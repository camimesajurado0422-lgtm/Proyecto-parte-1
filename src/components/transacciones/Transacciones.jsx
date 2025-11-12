import { useState } from 'react';
import { useLocation } from "react-router";
import "./Transacciones.css";



function Transactions() {

  const [form, setForm] = useState({ tipo: 'depósito', monto: 0 });

   const location = useLocation();
       const usuario = location.state

        const realizarTransaccion = () => {
    if (form.monto === '' || form.monto <= 0) {
      alert("Por favor ingresa un monto válido");
      return;
    }
        
            alert(" Transacción registrada correctamente");
        
       }
       

  

  return (
     <div className="transacciones-container">
      <h1 className="transacciones-title">Transacciones {usuario}</h1>

      <select
        className="transacciones-select"
        value={form.tipo}
        onChange={e => setForm({ ...form, tipo: e.target.value })}
      >
        <option value="depósito">Depósito</option>
        <option value="retiro">Retiro</option>
        <option value="transferencia">Transferencia</option>
      </select>

      <input
        type="number"
        className="transacciones-input"
        placeholder="Monto"
        value={form.monto}
        onChange={e => setForm({ ...form, monto: e.target.value })}
      />

      <button className="transacciones-boton" onClick={realizarTransaccion}>
        Realizar
      </button>


      <footer className="transacciones-footer">
        © 2025 Banca Estebanquito - Todos los derechos reservados
      </footer>
    </div>
  );
}



export default Transactions;