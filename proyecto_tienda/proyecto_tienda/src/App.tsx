import { Routes, Route} from 'react-router-dom'
import Navbar from './components/organism/navbar'
import Inicio from './page/Inicio'
import Productos from './page/Productos'
import Quienes_Somos from './page/Quienes_Somos'
import Contacto from './page/Contacto'

function App(){
  return(
    <>
    <Navbar/>

    <Routes>
      <Route
        path="/" 
        element={<Inicio />}
      />  

      <Route
        path="/productos" 
        element={<Productos />}
      />  

      <Route
        path="/Quienes_somos" 
        element={<Quienes_Somos />}
      />  

      <Route
        path="/Contacto" 
        element={<Contacto />}
      />  
    </Routes>
    </>
  )
}

export default App