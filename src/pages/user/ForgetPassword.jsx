import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

{/**Componentes */ }
import Logo from '../../components/Logo';

const ForgetPassword = () => {
  return (
    <div className="senara-content-sm-login">
      <Logo />
      <div className='senara-content-legend-auth'>
        <legend className='senara-tagline'>Olvidaste tu contraseña</legend>
        <legend className='senara-description-page'>Enviaremos un enlace de recuperación a</legend>
      </div>

      <form className="senara-form form-login" method="POST" action="/forget-password">

        <div className="senara-form-group">
          <input type="email" id="email" name="email" className="floating-input" placeholder=" " />
          <span className="highlight"></span>
          <label>Ingrese su correo electrónico</label>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>

        <input type="submit" className="senara-btn-primary btn-10rem" value="Enviar" />

      </form>
      <div className="senara-actions">
        <Link to="/" >Iniciar Sesión</Link>
      </div>
    </div>
  )
}

export default ForgetPassword