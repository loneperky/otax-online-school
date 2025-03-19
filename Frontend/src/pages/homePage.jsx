import { NavLink, Link } from "react-router-dom";
import { Footer } from "./construct";
import { useEffect, useId, useState } from "react";
import axios from "axios";
import AOS from 'aos'
import gsap from 'gsap'
import { FaWhatsapp } from "react-icons/fa";
import '../styles/app.css'

function HomePage() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);

  return (
    <>
     <div className="overall-section1">
      <div className="section1">
        <div className="hero1">
          <h1>Startups Can Now Scale Faster.</h1>
          <p>Connecting <Link>Top Developers</Link> with Global Projects,fueling innovations and success for All.</p>
          <div className="btns">
            <Link to="/developers"><button className="btn1">Developer Incubator</button></Link>
            <Link to="/login"><button className="btn2">Login</button></Link>
          </div>
        </div>

        <div className="hero2">
          <img className="img1" src="/Images/hero1.png" alt="" /><br />
          <img className="img2" src="/Images/hero 2.png" alt="" /><br />
          <img className="img3" src="/Images/hero 3.png" alt="" /><br />
          <img className="img4" src="/Images/hero4.png" alt="" /><br />
        </div>
   
      </div>
      <div className="section2"  data-aos="fade-right">
        <div className="sub-section">
          <div className="hero3">
            <h1>Join Our Developer Pool</h1>
            <p>At Osdin.net, we connect the brightest developers with</p>
            <p> startups worldwide.</p>
            <button className="btn3">Take Our Developer Test</button>
          </div>
          <div className="hero4">
            <img src="/Images/hero5.png" alt="" />
          </div>
        </div>
      </div>

      <div className="section2"  data-aos="fade-rigt">
        <div className="sub-section2">
      
          <div className="hero4">
            <img src="/Images/hero6.png" alt="" />
          </div>

          <div className="hero3">
            <button className="btnt">Talent Pool</button>
            <h1>Top Talent Meets Global Opportunities</h1>
            <p>We bridge the gap between talented developers and companies that need their skills startups worldwide.</p>
            <Link to="/about"> <button className="btn3">About Us</button> </Link>
           
          </div>
        </div>
      
      </div>
      <div className="section2">
        <div className="sub-section2"  data-aos="fade-botton">
          <div className="hero3">
            <button className="btnt">Talent Pool</button>
            <h1>Empower Your Startup with Top Talents</h1>
            <p>Partner with us to access skilled developers who drive solutions.</p>
            <p>  success through cost-effecctive, innovative, and scalable.</p>
            <button className="btn3">  <a href="https://wa.me/2349126785031?text=I%20Want%20to%20Hire%20A%20Developer" target='_blank'>Hire a Developer</a></button>
          </div>
          
          <div className="hero4">
            <img src="/Images/hero7.png" alt="" />
          </div>
        </div>
      
      </div>
      <div className="section2">
        <div className="mini">
          <div className="sub-section3 sec3">
            <h1>Empowering Global Tech  Talent for  Inovation</h1>
            <p>Whether you're joing our talent pool or ypu are a skilled developer-Frontend Web Development, Backend Web Development,Android App Development and iOS App Development, we support your growth.</p>
            <div className="bt">
            <Link to="/developers"><button className="btnB">Become a Developer</button> </Link>
            <Link to="/Login"> <button className="btnA">Already a Developer</button></Link>
            </div>
            
          </div>
        </div>
      
      </div>
      <Footer />
     </div>

    </>
  );
}

export default HomePage;
