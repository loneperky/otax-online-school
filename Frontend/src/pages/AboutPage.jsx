import React from 'react'
import { useEffect } from 'react'
import { Footer } from './construct'
import '../styles/about.css'
const AboutPage = () => {
  
 useEffect(()=>{
    window.scrollTo(0,0)
  },[]);

  return (
    
    <>
      <div className="overallpage">
        <div className="head">
        <h1>About Us</h1>
        </div>
        
        <section className='about-overview'>
        <article className='article1'>
          <h2>Empowering Global Innovation, One Developer At A Time</h2>
          <p>At Open Software Developer International Network (Osdin.net),we believe that bridging talents with the oppportunity is the key to driving innovation worldwide. We are dedicated to connecting skilled developers in Africa with startups and small bussiness across Europe and America, providing both with the support they need to thrive. Our mission is simple yet powerful, create a seamless synergy between developers and global projects, fueling success for all. </p>
        </article>
        <article>
          <h2>OUR VISION</h2>
          <p>Osdin.net envisions a world where talented developers, regardless of location, can access career-changing opportunities while enabling startups to scale faster and innovate more affordably. By building a bridge between top tech talents and ambitious companies, we're reshaping the tech industry's landscape and empowering growth for both developers and businesses. </p>
        </article>
        <article>
          <h2>OUR COMMITMENT TO DEVELOPERS</h2>
          <p>We're more than a recruitment network, we're a developer Incubator that supports skill development and career advancement. Our rigorous vetting process ensures that our clients connects with only the best,and our developer incubator offers resources, real-word projects, and mentorships, helping developers continously grow and excel. Asdin.net developers dont just find jobs-they find opportunities to build their careers and make an impact globally.  </p>
        </article>
        <article>
          <h2>WHY STARTUPS WORK WITH US</h2>
          <p>Startups and small businesses face unique challenges,especially when it comes to finding high quality, affordable tech talents. Osdin.net simplifies this process, providing clients with access to pool of pre-vetted,skilled developers. We understand the demand of fast-paced startup environments, and we're here to help you scale efficiently with cost-effective, innovative, and scalable solutions. Together, we drive your success.   </p>
        </article>
        <article>
          <h2>JOIN US ON OUR MISSION</h2>
          <p>Whether you're a developer ready to take your career to the next level, or a startup looking to grow with top talent, Osdin.net is your partner in progress. Together, we're not just filling roles, we're building futures and fostering innovation that knows no boundaries.</p>
        </article>
        </section>

      </div>
      <Footer />
    </>
  )
}

export default AboutPage