import CardProducto from "../components/molecule/CardProducto";


function Productos() { 
  return ( 
    // 1. Agregamos "container" para centrar el bloque completo y "my-5" para darle margen arriba y abajo
    <div className="container my-5"> 
      
      {/* 2. Opcional: "text-center" por si quieres que el título también quede centrado */}
      <h1 className="text-center mb-4">Productos</h1> 
      
      {/* 3. Agregamos "justify-content-center" para que las tarjetas se alineen al centro del contenedor */}
      <div className="d-flex gap-3 justify-content-center flex-wrap"> 
        <CardProducto 
        id={1}
          titulo="Notebook" 
          descripcion="Notebook ideal para estudiar y trabajar." 
          precio={599990} 
          imagen="/img/notebook rosa.avif" 
        /> 
        <CardProducto
          id={2} 
          titulo="Mouse" 
          descripcion="Mouse inalámbrico" 
          precio={19990} 
          imagen="/img/mouse rosa.webp" 
        /> 
        <CardProducto 
          id={3}
          titulo="Teclado" 
          descripcion="Teclado mecánico" 
          precio={39990} 
          imagen="/img/teclado rosa.jpg" 
        /> 
        <CardProducto 
          id={4}
          titulo="Audífonos" 
          descripcion="Audífonos de Hello Kitty muy kiut para las girls petit" 
          precio={50000} 
          imagen="/img/audifonos rosas.webp" 
        /> 
      </div> 
    </div> 
  ); 
} 

export default Productos;