import React from 'react'
import '../styles/login.css'
import { Footer } from './construct'
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
        <section className='login'>
          <h3>Welcome Back</h3>
          <p>Login to your account</p>
          <form >
            <label htmlFor="email">Email</label>
            <input type="email" required />
            <label htmlFor="">Password</label>
            <input type="text" required/>
            <p><Link>Forgot Password?</Link></p>
            <button>Login to Continue</button>
          </form>
        </section>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Login