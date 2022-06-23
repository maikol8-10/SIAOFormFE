import { Outlet } from 'react-router-dom';
import Decoracion from '../components/Decoracion';

const AuthLayouts = () => {
    return (
        <>
            <div className='senara-content-login'>
                <Outlet />
            </div>
            <Decoracion />
        </>
    )
}

export default AuthLayouts