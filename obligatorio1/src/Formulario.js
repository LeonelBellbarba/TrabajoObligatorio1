import React,{Component} from "react";

class Formulario extends Component{
    render(){
        return(
        <div className = "formularioCaja">
            <form>
               <ul className = "listaCaja">
                <h1 className= "Titulo">Registrarse</h1>
                    <li className = "lista"><input placeholder = {this.props.nombre}/></li>
                    <li className = "lista"><input placeholder = {this.props.apellido}/></li>
                    <li className = "lista"><input placeholder = {this.props.email}/></li>
                    <li className = "lista"><input placeholder = {this.props.Telefono}/></li>
                    <li className = "lista"><input placeholder = {this.props.Password}/></li>
                    <li className = "lista"><input placeholder = {this.props.ConfirmarP}/></li>
                <button>Aceptar</button>
               </ul>



            </form>
        </div>
    )}
}

export default Formulario;