import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {

        //Estado - hooks
        //useState
        //const [nombreVariable,funcion que Actualiza] = useState(valorInicial)
        //Puedes usar objetos, arreglos, etc
        /*const [mostrar,actualizarMostar] = useState(true)

        const manejarClick = () =>{
                console.log("Mostrar/ocultar", !mostrar)
                actualizarMostar(!mostrar)
        }*/

        return <section className="orgSection">
                <h3 className="title">Mi Organización</h3>
                <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
        </section>
}

export default MiOrg