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
        <a href="https://wa.me/2349126785031?text=I%20Want%20to%20Hire%20A%20Developer" target='_blank'>Hire a Developer</a>
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
                <Link  to="/developers" onClick={Menu}>Developer Incubator</Link>
              </li>
              <li>
              <a href="https://wa.me/2349126785031?text=I%20Want%20to%20Hire%20A%20Developer" target='_blank'>Hire a Developer</a>
              </li>
              <li>
                <Link  to="/about" onClick={Menu}>About us </Link>
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