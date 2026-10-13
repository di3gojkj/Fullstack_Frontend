import { Routes, Route } from "react-router-dom";
import Navbar from "./components/organism/navbar";
import Inicio from "./page/Inicio";
import Productos from "./page/Productos";
import QuienesSomos from "./page/Quienes_Somos";
import Contacto from "./page/Contacto";
import DetalleProducto from "./page/DetalleProducto";
import Login from "./page/Login";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route 
          path='/'
          element={<Inicio />}
        />

        <Route 
          path='/productos'
          element={<Productos />}
        />

        <Route path="/producto/:id"
        element={<DetalleProducto/>}
        />

        <Route 
          path='/quienessomos'
          element={<QuienesSomos />}
        />

        <Route 
          path='/contacto'
          element={<Contacto />}
        />

        <Route 
          path='/login'
          element={<Login />}
        />
      </Routes>
    </>
  )
}

export default App