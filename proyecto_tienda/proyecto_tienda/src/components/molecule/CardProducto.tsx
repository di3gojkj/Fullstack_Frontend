import Boton from "../atom/Boton";

function CardPorducto(){
    return(
        <div className="card" style={{width: '18rem'}}>

            <img
            src="/img/82x70017cl_2_.jpeg" 
            className="card-img-top"
            alt="Notebook"
            />

            <div className="card-body">
                <h5 className="card-title">
                    Notebook
                </h5>

                <p className="card-text">
                    Notebook idela para estudiar y trabajar
                </p>

                <Boton />
            </div>
        </div>
        
        
    )

}
export default CardPorducto