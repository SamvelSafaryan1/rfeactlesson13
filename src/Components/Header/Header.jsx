import { NavLink } from 'react-router-dom'
import './Header.css'

function Header(){
    return(
        <div className='header'>
            <NavLink to='/about'>Products</NavLink>
        </div>
    )
}

export default Header
