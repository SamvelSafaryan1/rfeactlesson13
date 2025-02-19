import {Outlet} from 'react-router-dom'

import Footer from '../Footer/Footer'

function Loyout(){
    return(
        <div>
                
                <Outlet/>
                <Footer/>
        </div>
    )
}

export default Loyout
