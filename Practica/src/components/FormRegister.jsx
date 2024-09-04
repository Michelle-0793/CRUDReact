//Componente para el formulario de registrarse
import React from "react";
import { useEffect, useState } from 'react';
import GetUsers from "../services/GetUsers";
import PostUsers from "../services/PostUsers";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

//HOOK
function FormRegister() {
  {/*const navigate = useNavigate();*/}

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //const [saludo, setSaludo] = useState('');



  
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
 // Validar que todos los campos estén llenos
 if (!username || !email || !password) {
  Swal.fire({
    title: "Debe llenar todos los campos",
    customClass: {
      popup: 'my-popup',
      title: 'my-title',
      confirmButton: 'my-confirm-button'
    },
  });
    //setSaludo("Debes llenar todos los campos")-para que imprima el texto en el DOM
  return;


}
  
  const UsuarioExistente =  users.find(user => user.email === email);
  if (UsuarioExistente) {
    Swal.fire({
      title: "¡Este usuario ya está registrado!",
      timer: 2000
    });
  }else{
    PostUsers(username, email, password)
  }
    

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
          /*required - para que salga el msj de campos vacios*/
        />
        </div>
        
        <div className="datosForm">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Ingrese su email"
          value={email}
          onChange={cargaEmail}
          /*required - para que salga el msj de campos vacios*/
        />
        </div>

        <div className="datosForm">
        <label htmlFor="email">Contraseña</label>
          <input type="text" id="contraseña" name="contraseña" placeholder="Ingrese una contraseña"
          value={password}
          onChange={cargaContra}
          /*required - para que salga el msj de campos vacios*/
        />
        </div>
        <button type="submit" className="button" onClick={(cargar)}>Registrarse</button>
        {/*<button type="submit" className="button" onClick={(cargar) => navigate("/Login")}>Registrarse</button>*/}
        {/*<p>{saludo}</p>-para que salga el texto en el DOM*/}
      </form>
    )
}

export default FormRegister;