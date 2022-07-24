import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {

    const { user, logout } = useContext( AuthContext )

    const navigate = useNavigate() // Este es un custom Hook de ReactRouter

    const onLogout = () => {
        logout()
        
        navigate('/login', {
            replace: true // El replace hace que no puedas volver a la ruta anterior
        })

    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociations
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}` }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}` }
                       
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    
                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : ''}` }
                       
                        to="/search"
                    >
                        SearchBar

                    </NavLink>
                    
                  
                </div>
            </div>

            {/* <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end ">
                <ul className="navbar-nav ml-auto">
                   <span className='nav-item nav-link text-info'>
                   
                  { user?.name }
                   </span>

                   <button 
                        onClick={ onLogout }
                        className='nav-item nav-link btn'
                   
                   >

                    Logout

                   </button>

                </ul>
            </div> */}
        </nav>
    )
}