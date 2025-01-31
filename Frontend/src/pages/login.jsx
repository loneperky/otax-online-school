import React from 'react'
import '../styles/login.css'
import { Footer } from './construct'
import { FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
      <div className="login-overview">
        <div className="login-details">
        <section className='first-sect'>
          <button>Access your Dashboard</button>
          <h2>Top Talents Meets Global Opportunities</h2>
          <p>We bridge the gap between talented developers and companies that need their skills.</p>
        </section>
        <section className='logins'>
          <h3>Welcome Back</h3>
          <p>Login to your account</p>
          <form >
            
            <label htmlFor="email">Email</label>
            <input type="email" required placeholder='johndoe@gmail.com' />
            <label htmlFor="password">Password</label>
            <input type="password" required placeholder='******'/>
            {/* <FaEye /> */}
            <p><Link to="/forgot-password">Forgot Password?</Link></p>
            <button>Login to Continue</button>
          </form>
        </section>
        </div>
      </div>
      {/* <Footer /> */}

    </>
  )
}

export default Login