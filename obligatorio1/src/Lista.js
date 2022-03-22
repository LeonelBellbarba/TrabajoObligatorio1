import React,{Component} from "react";
import Formulario from "./Formulario"

class Lista extends Component{
    render(){
        
            const registro= [
                {
                    nombre    : "Nombre", 
                    apellido  : "Apellido", 
                    Email     :"Email",
                    Telefono  : "Telefono",
                    Password  : "Password",
                    ConfirmarP: "Confirmar Password"
                }
            ]


        return(
            <>
                
                     {registro.map(registro=><Formulario      nombre = {registro.nombre}
                                                             apellido = {registro.apellido}
                                                             email = {registro.Email}
                                                             Telefono = {registro.Telefono}
                                                             Password = {registro.Password}
                                                             ConfirmarP = {registro.ConfirmarP}/>)}
                                      
                 
            </>
        )
        
    }
}

export default Lista;