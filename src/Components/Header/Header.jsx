import { NavLink } from 'react-router-dom'
import './Header.css'

function Header(){
    return(
        <nav>
            <NavLink to='/about'>Products</NavLink>
        </nav>
        
    )
}

export default Header
