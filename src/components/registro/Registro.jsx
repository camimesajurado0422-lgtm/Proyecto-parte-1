import { useState } from 'react';
import { useNavigate } from "react-router";
import "./Registro.css";


function Registro() {
    const navigate = useNavigate();
  const [form, setForm] = useState({ nombre: '', email: '', password: '', numeroCuenta: '', tipo: 'ahorros' });

 const Registrar = ()=> {
        
            navigate("/inicio")
        

    }
 
  return (
  <div className="registro-container">
      <h2 className="registro-title">Registro de Usuario</h2>

      <input
        className="registro-input"
        placeholder="Nombre"
        onChange={e => setForm({ ...form, nombre: e.target.value })}
      />

      <input
        className="registro-input"
        placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })}
      />

      <input
        className="registro-input"
        placeholder="Contraseña"
        type="password"
        onChange={e => setForm({ ...form, password: e.target.value })}
      />

      <input
        className="registro-input"
        placeholder="Número de cuenta"
        onChange={e => setForm({ ...form, numeroCuenta: e.target.value })}
      />

      <select
        className="registro-select"
        onChange={e => setForm({ ...form, tipo: e.target.value })}
      >
        <option value="ahorros">Ahorros</option>
        <option value="corriente">Corriente</option>
      </select>

      <button className="registro-boton" onClick={Registrar}>
        Registrar
      </button>

      <footer className="registro-footer">
        © 2025 Banca Estebanquito - Todos los derechos reservados
      </footer>
    </div>
    
    
  );
}

export default Registro;