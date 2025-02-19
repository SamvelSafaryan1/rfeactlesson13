import './Products.css'
import { useParams } from 'react-router-dom'

function Products(props){
    let {id} = useParams()
    let product = props.products[id]
    return(
        <div>
            <p>{product.title}</p>
            <img src={product.image} width={250} alt="" />
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button>Buy</button>
        </div>
    )
}

export default Products
