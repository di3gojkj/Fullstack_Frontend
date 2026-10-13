import CampoFormulario from "../molecule/CampoFormulario";
import { useState } from "react";

function FormularioLogin(){
    const [correo, setCorreo] = useState("")
    const [contraseña, setContraseña] = useState("")

    const manejarEnvio = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(correo.trim() === ""){
            alert("Debe ingresar su correo");
            return;
        }
        if(contraseña.trim() === ""){
            alert("Debe ingresar su contraseña");
            return;
        }

        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)){
            alert("Ingrese un correo valido")
            return;
        }
        alert("Datos ingresados correctamente");
    }

    return(
        <form onSubmit={manejarEnvio} noValidate>
              <CampoFormulario
              etiqueta="Correo electronico"
              tipo="email"
              nombre="correo"
              valor={correo}
              alCambiar={setCorreo}
              />

              <CampoFormulario
              etiqueta="Contraseña"
              tipo="text"
              nombre="mensaje"
              valor={contraseña}
              alCambiar={setContraseña}
              />

              <button type="submit" className="btn btn-primary">
                Iniciar sesion
              </button>
        </form>
    );
}
export default FormularioLogin