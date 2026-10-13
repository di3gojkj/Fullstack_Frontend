import {useParams} from 'react-router-dom'
import BotonVolver from "../componentes/atomos/BotonVolver"

const productos = [
    {
        id: 1,
        titulo: "Notebook",
        descripcion: "Notebook ideal para estudiar y trabajar.",
        precio: 599990,
        imagen: "/img/notebook rosa.avif"
    },
    {
        id: 2,
        titulo: "Mouse",
        descripcion: "Mouse inalámbrico.",
        precio: 19990,
        imagen: "/img/mouse rosa.webp"
    },
    {
        id: 3,
        titulo: "Teclado",
        descripcion: "Teclado mecánico",
        precio: 39990,
        imagen: "/img/teclado rosa.jpg"
    },
    {
        id: 4,
        titulo: "Audifonos",
        descripcion: "Audífonos de Hello Kitty muy kiut para las girls petit",
        precio: 50000,
        imagen: "/img/audifonos rosas.webp"
    }
]


function DetalleProducto(){
    //obtenemos el id que viene en la url
    const{id} = useParams()
    //Buscamos el producto que corresponde al id recibido
    const producto = productos.find(
        producto => producto.id == Number(id)
    )

    return (
    <div>
        <h1>Detalle del producto</h1>
        <img 
            src={producto?.imagen}
            alt={producto?.titulo}
            style={{ width: '300px' }}
        />
        <h2>{producto?.titulo}</h2>
        <p>{producto?.descripcion}</p>
        <p>${producto?.precio}</p>
        <div className='mt-auto'>
            <BotonVolver /> 
        </div>
        <p>Aquí mostramos la información del producto seleccionado.</p>
    </div>
    )
}
export default DetalleProducto


