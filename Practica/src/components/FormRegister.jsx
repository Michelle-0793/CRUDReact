//Componente para el formulario de registrarse
import React from "react";
import { useEffect, useState } from 'react';
import GetUsers from "../services/GetUsers";
import PostUsers from "../services/PostUsers";
import { useNavigate } from "react-router-dom";

//HOOK
function FormRegister() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function  cargaUsuario(event) {

    setUsername(event.target.value);
  }
  const cargaEmail = (event) => {
    setEmail(event.target.value);
  };

  const cargaContra = (event) => {
    setPassword(event.target.value);
  };


  //ESTA FUNCION PUEDE CARGAR, HACER POST O BIEN REALIZAR VALIDACIONES
  const cargar = () => {
 
    PostUsers(username, email, password)

    console.log('Usuario:', username);
    console.log('Contraseña:', password);

  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await GetUsers();       
      setUsers(data);
    };
    fetchUsers();
  }, []);

  console.log(users)

    return(
        <form className="form">

        <div className="datosForm">
        <label htmlFor="username">Usario</label>
        <input type="text" id="username" name="username" placeholder="Ingrese un nombre de Usuario"
          value={username}
          onChange={cargaUsuario}
          required
        />
        </div>

        <div className="datosForm">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Ingrese su email"
          value={email}
          onChange={cargaEmail}
          required
        />
        </div>

        <div className="datosForm">
        <label htmlFor="email">Contraseña</label>
          <input type="text" id="contraseña" name="contraseña" placeholder="Ingrese una contraseña"
          value={password}
          onChange={cargaContra}
          required
        />
        </div>
        
        <button type="submit" className="button" onClick={cargar}>Registrarse</button>
      </form>
    )
}

export default FormRegister;