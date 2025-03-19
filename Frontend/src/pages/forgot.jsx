import React from 'react'
import { useEffect } from 'react'
import '../styles/signup.css'
const Forgot = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);

  return (
    <>
      <div className="forgot-overview">
        <form action="">
          <h1>Account Recovery</h1>
          <p>Enter your email address</p>
          <input type="text"  placeholder='jondoe@email.com'/>
          <button className='btnn'>Search</button>
        </form>
      </div>
    </>
  )
}

export default Forgot