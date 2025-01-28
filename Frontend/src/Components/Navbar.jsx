import React, { useState } from 'react'
import { NavLink,Link} from 'react-router-dom'
import '../styles/index.css'

function Navbar(){
   const [Show,setShow] = useState(false)

   function Menu(){
      setShow(!Show)
   }

    return(
      
   <>
    <nav>
     
    <div className="logo">
        <h1>Osdin.net</h1>
    </div>

    <ul className='menu-items'>
     <li>
       <NavLink to="/" target="__blank">Home</NavLink> 
      </li>
      <li>
       <NavLink to="/developers">Developer Incubator</NavLink>
      </li>
      <li>
        <NavLink to="/tracking">Hire a Developer</NavLink>
      </li> 

      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>  
    </ul>
    <NavLink to="/login"><button className='logbtn' >Login</button> </NavLink>
      
          <div className={ "menu"} onClick={Menu}>
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
          </div>       
    </nav> 
    
    { Show && ( <div className="dropdown">
            <ul>
              <li>
                <Link  to="/" onClick={Menu}>Home</Link>
              </li>
              
              <li>
                <Link  to="/about-us" onClick={Menu}>Developer Incubator</Link>
              </li>
              <li>
                <Link  to="/tracking" onClick={Menu}>Hire a Developer</Link>
              </li>
              <li>
                <Link  to="/pricing-plans" onClick={Menu}>About us </Link>
              </li>
              <li>
                <Link to="/contact"  onClick={Menu}>Contact</Link>
              </li>
              <li>
                <Link to="/login"  onClick={Menu}>Login</Link>
              </li>
            </ul>
          </div>
         ) }
  
        </>
    )
}


export default Navbar