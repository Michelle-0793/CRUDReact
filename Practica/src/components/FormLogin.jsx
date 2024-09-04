//Componente para el formulario de incio de sesión
import React from "react";


function FormLogin() {
    return(

      <form className="form">
      <div className="datosForm">
        <label>Usuario:</label>
        <input type="usuario" className="input" />
      </div>

      <div className="datosForm">
        <label>Contraseña:</label>
        <input type="password" className="input" />
      </div>

      <button type="submit" className="button">Iniciar Sesión</button>

    </form>

    )
}

export default FormLogin;