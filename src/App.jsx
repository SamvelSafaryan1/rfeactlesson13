import {Routes,Route} from 'react-router-dom'
import './App.css'
import Loyout from './Components/Loyout/Loyout'
import About from './Components/pages/About/About'
import Products from './Components/pages/Products/Products'
import Header from './Components/Header/Header'
import {useEffect,useState} from 'react'

function App(){
  let [prodData,setProdData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((res) => setProdData(res))
  }, [])
  return(
    <Routes>
        <Route path='/' element={<Loyout/>}>
            <Route index element={<Header/>}/>
            <Route path='/about' element={<About products={prodData}/>}/>
            <Route path='/products/:id' element={<Products products={prodData}/>}/>
        </Route>
    </Routes>
  )
}

export default App
