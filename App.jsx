
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './components/login/Login';
import Registro from './components/registro/Registro';
import Inicio from "./components/inicio/Inicio";
import Reportes from './components/reportes/Reportes';
import Detalles from './components/detalles/Detalles';
import Prestamos from './components/prestamos/Prestamos';
import Transactions from './components/transacciones/Transacciones';





function App() {
 


  return (
   <BrowserRouter>
   <Routes>

    <Route path='/' element={<Login />}/>
    <Route path='/registro' element={<Registro/>}/>
    <Route path='/inicio' element={<Inicio />}/>
    <Route path='/reportes' element={<Reportes />}/>
    <Route path='/detalles' element={<Detalles />}/>
    <Route path='/prestamos' element={<Prestamos />}/>
    <Route path='/transacciones' element={<Transactions />}/>


  


   </Routes>
   </BrowserRouter>
  )
}

export default App
