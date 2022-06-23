import React from 'react'
import { Outlet, Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
{/**Componentes */ }
import Logo from '../../components/Logo';

const Login = () => {

  return (
    <div className='senara-content-sm-login'>
      <Logo />
      <div className='senara-content-legend-auth'>
        <legend className='senara-tagline'>Bienvenido</legend>
        <legend className='senara-description-page'>Iniciar Sesión</legend>
      </div>

      <form className="senara-form form-login" method="POST" action="/">


        <div className="senara-form-group">
          <input type="text" id="email" name="email" className="floating-input" placeholder=" " />
          <span className="highlight"></span>
          <label>Correo o Usuario</label>
          <FontAwesomeIcon icon={faUser} />
        </div>


        <div className="senara-form-group">
          <input type="password" id="password" name="password" className="floating-input" placeholder=" " />
          <span className="highlight"></span>
          <label>Contraseña</label>
          <FontAwesomeIcon icon={faKey} />
        </div>


        <input type="submit" className="senara-btn-primary btn-center max-c" value="Iniciar Sesión" />
      </form>
      <div className="senara-actions">
        <Link to="/forget-password" >¿Olvidó su contraseña?</Link>
      </div>
    </div>
  )
}

export default Login