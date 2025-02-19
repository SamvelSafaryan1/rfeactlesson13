import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import products from './db.js'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App products={products}/>
  </BrowserRouter>
)
