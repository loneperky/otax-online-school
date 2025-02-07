import React from 'react'
import { useState } from 'react';
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

    const colorChange = () =>{
      setColor('red')
    }

  async function HandleSignUp(event) {
     event.preventDefault();
     const { data, error } = await supabase.auth.signUp({
       email:email,
       password:password,
       options:{
         emailRedirectTo:'https://localhost:5173/dashboard'
       }
     });
 
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
     
     if(data){
       const {error: profileError} = await supabase.from('users_information').insert([
         {
           id:data.user.id,
           password:password,
           email:email,
           fullname:fullname
         }
       ])
     } 
     if(error){
       alert('Profile creation failed')
     }else{
       navigate('/dasboard')
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
             <FaGoogle style={{color:'orange',fontSize:'2rem'}}/>
             <p>Continue with google</p>
            </div>
            <p>Or</p>
        <label htmlFor="fname">Fullname:</label>
        <input type="text" required placeholder='Jon Doe' autoFocus/>
        <label htmlFor="surname">Surname:</label>
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
            <button type='submit' className='btnn'>Register</button>
            
            <p style={{padding:'0'}}>Already have an account?<Link to="/login">Login</Link></p>

          {/* <span>continue with</span> */}  
          <div className="social-login">
           
           {/* <div className="apple">
            <FaApple style={{color:'white',backgroundColor:'black',fontSize:'2rem'}}/> 
            <p>Continue with Apple</p>
           </div>
           <div className="facebook">
            <FaFacebook style={{color:'blue',fontSize:'2rem'}}/> 
            <p>Continue with facebook</p>
           </div> */}
          </div>
       </div>
     </form>
      </div>
     
     
    </div>
    </>
  )
}

export default Signup
