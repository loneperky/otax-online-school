import React from 'react'
import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye,FaEyeSlash,FaApple,FaGoogle,FaFacebook } from 'react-icons/fa';
import '../styles/signup.css'
import supabase from '../../Supabase/supabaseClient';

const Signup = () => {

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const [message,setMessage] = useState('Please enter your details')
    const [Reg,setReg] = useState(false)
       
  
  async function HandleSignUp(event) {
     event.preventDefault(); 

    try {
  
  const { data, error } = await supabase.auth.signUp({
    email:email,
    password:password
  })
 
  if(error){
    alert('Signup Failed', error.message)
    console.log(error)
    setMessage('signup Failed'  )
  }else{
    console.log(data)
    alert('Check your email to continue')
    setMessage('check your email')
    return;
  }

  const user = data.user
  
  if(user){
    const {error: profileError} = await supabase.from('users_information').insert([
      {
        id:data.user.id,
        password:password,
        email:email,
        fullname:fullname
      }
    ])
  } 
 } catch (error) {
  console.log(error.message,'error working this')
 }

}


  
   
  return (
    <>
    <div className="registration" style={{position:'relative'}}>
      <div className="reg">
      <h1>Get Started</h1>
      <p style={{padding:'0.6rem 0'}}>{message}</p>
      <form onSubmit={HandleSignUp}>
      <div className="google">
             <img style={{width:'2rem'}} src="/Images/google-logo1.png" alt="" />
             <p>Continue with google</p>
            </div>
            <p style={{textAlign:'center', padding:'0.5rem 0'}}>Or</p>
        <label htmlFor="fname">Fullname:</label>
        <input type="text" required placeholder='Jon Doe' autoFocus/>
        <label htmlFor="surname">Email:</label>
        <input type="email" required placeholder='example@example.co'/> 
        <div className="password-eye">
        <label htmlFor="password">Password:</label>
        <input
        type={showPassword ? "text" : "password"}
        required
        placeholder="******"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{position:'relative'}}/>

        <div
          onClick={() => setShowPassword((prev) => !prev)}
          className="sroke"
          style={{
          position: "absolute",
          top: "14rem",
          left:'',
          cursor: "pointer",}} >
          {/* { showPassword ? <FaEye /> : <FaEyeSlash />} */}
          </div>  
            <button type='submit' className='btnn'>{Reg ? 'Register': 'loading...'}</button>
            
            <p style={{padding:'0'}}>Already have an account?<Link to="/login">Login</Link></p>

          {/* <span>continue with</span> */}  
          <div className="social-login">
           
          
          </div>
       </div>
     </form>
      </div>
     
     
    </div>
    </>
  )
}

export default Signup
