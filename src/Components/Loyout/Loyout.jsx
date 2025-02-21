import {Outlet} from 'react-router-dom'
// import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Loyout(){
    return(
        <div>
                {/* <Header/> */}
                <Outlet/>
                <Footer/>
        </div>
    )
}

export default Loyout
