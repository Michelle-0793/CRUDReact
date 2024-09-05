//Componente para el formulario de incio de sesión
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import PostLogin from "../services/PostLogin"; // Servicio de login





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