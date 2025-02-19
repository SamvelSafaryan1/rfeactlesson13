import { NavLink } from "react-router-dom"
import './About.css'

function About(props){
    return(
        <div className="about">
            {
                props.products.map((elem) => {
                    return (
                        <div className="prod">
                            <p>{elem.title}</p>
                            <NavLink to='/products/id'>
                                <img width={100} src={elem.image}/>
                            </NavLink>
                            <p>{elem.category}</p>
                            <p>{elem.price}</p>
                       </div> 
                    ) 
                })
            }
        </div>
    )
}

export default About
