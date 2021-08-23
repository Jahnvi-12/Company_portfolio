import React from "react"
import image1 from "../components/image1.png";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
    <div className="container">

           
        <a className="navbar-brand" href="#" ><img className= "logo" src = {image1} alt="image1..." /></a>   
                <button className="navbar-toggler"
                type="button"
                data-toggle = "collapse"
            data-target = "#navbarSupportedContent"
            aria-controls = "navbarSupportedContent"
            aria-expanded = "false"
        aria-label = "Toggle navigation" >
            <span className="navbar-toggler-icon"  />  </button >

            <div className="collapse navbar-collapse"
                id="navbarSupportedContent" >
                <ul className="navbar-nav" ml-auto >
                    < li className="nav-item active" >
                        <a className="nav-link"
                            href="http://localhost:3000/src/components/Home.js" > Home < span class="sr-only" >  </span></a >
                            
        </li>  
        
        <li className="nav-item" >
                                
        <a className="nav-link" href="#" >Services</a>  
        </li>
        <li className="nav-item" >
                                
        <a className="nav-link" href="#" > Contact</a>  
        </li>
        <li className="nav-item" >
                                
        <a className="nav-link" href="#" > Link </a>  
        </li>

                                    
        </ul>

                                    
       </div> 
       </div>    

       </nav>
    )
}

export default Navbar