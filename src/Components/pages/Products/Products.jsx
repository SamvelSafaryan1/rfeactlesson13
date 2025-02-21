import './Products.css'
import { useParams } from 'react-router-dom'

function Products(props){
    let {id} = useParams()
    let product = props.products.find((elem) => elem.id === +id)
    
    
    return(    
            <div>
                <p>{props.products.title}</p>
                <img src={props.products.image} width={250} />
                <p>{props.products.description}</p>
                <p>{props.products.price}</p>
                <button>Buy</button>
            </div>
    )
}

export default Products
