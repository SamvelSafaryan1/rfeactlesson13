import {Routes,Route} from 'react-router-dom'
import './App.css'
import Loyout from './Components/Loyout/Loyout'
import About from './Components/pages/About/About'
import Products from './Components/pages/Products/Products'
import Header from './Components/Header/Header'

function App(props){
  return(
    <Routes>
        <Route path='/' element={<Loyout/>}>
            <Route index element={<Header/>}/>
            <Route path='/about' element={<About products={props.products}/>}/>
            <Route path='/products/:id' element={<Products products={props.products}/>}/>
        </Route>
    </Routes>
  )
}

export default App
