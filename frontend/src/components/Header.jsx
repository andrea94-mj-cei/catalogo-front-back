import  {NavLink} from "react-router"
import cesta from '../assets/cesta.webp'
import perfil from '../assets/perfil.webp'
import arabicperfum from '../assets/arabicperfum.webp'

const Header = () => {
    return ( 
        <>
        <header className="header">
            <nav className="header-nav">
                <NavLink to="perfil"><img src={perfil} alt="cesta-icon" className="header-icons" /></NavLink>
                <NavLink to="cesta"><img src={cesta} alt="cesta-icon" className="header-icons" /></NavLink>
            </nav>
            <div className="header-titulo">
            <img src={arabicperfum} alt="arabic-perfum" />
            </div>
        </header>
        </>
     );
}
 
export default Header;