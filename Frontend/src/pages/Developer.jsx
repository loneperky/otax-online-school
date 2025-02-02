import React, { useState } from "react";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import "../styles/developer.css";
import { FaDev } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Footer } from "./construct";
import { useNavigate } from "react-router-dom";
import supabase from "../../Supabase/supabaseClient";

const Developer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [message,setMessage] = useState('')
  async function HandleSignUp(event) {
    event.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });

    if(error){
      alert('Signup Failed', error.message)
      console.log(error)
      setMessage('signup Failed')
    }else{
      console.log(data)
      alert('Check your email to continue')
      setMessage('check your email')
      return;
    }
    if(data?.user){
      const {error: profileError} = await supabase.from('users_informations').insert([
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
      <div className="tota">
        <div className="overall-view">
          <div className="view1">
            <div className="top">
              <h1>
                Artificial Intelligence / Machine Learning Software development
                Incubator
              </h1>
              <p>
                In our incubator program,students will build full-scale AI and
                ML Powered Software solutions using the skills below, with the
                top teams winning $1000 each for their innovative projects.{" "}
              </p>
              <p className="pic">Pick a course to learn below:</p>
            </div>
            <div className="top-courses">
              <div className="couser1">
                <div
                  className="log
              "
                >
                  <FaDev />
                </div>
                <h4>
                  Front/Backend Web Development Full stack with JavaScript
                </h4>
              </div>

              <div className="couser1">
                <div className="log">
                  <FaDev />
                </div>
                <h4>
                  Artificial Intelligence and Machine Learning Python
                  Programming{" "}
                </h4>
              </div>

              <div className="couser1">
                <div className="log">
                  <FaDev />
                </div>
                <h4>Android/ iOS App Development Flutter</h4>
              </div>
            </div>
            <div className="top-courses">
              <div className="couser1">
                <div className="log">
                  <FaDev />
                </div>
                <h4>
                  UI/UX Design Figma User Interface and User Experience Design
                </h4>
              </div>

              <div className="couser1">
                <div className="log">
                  <FaDev />
                </div>
                <h4>DevSecops Engineering Cybersecurity and DevOps</h4>
              </div>

              <div className="couser1">
                <div className="log">
                  <FaDev />
                </div>
                <h4>
                  Data Engineering Data Analysis for AI and Machine Learning
                </h4>
              </div>
            </div>
          </div>

          <div className="get-started">
            <h1>Get Started Now</h1>
            <p>Fill in your details to apply now</p>
            <form >
              <label htmlFor="Fullname">Fullname</label>
              <input 
              type="text"
               onChange={(e)=>setFullname(e.target.value)}  placeholder="John Doe"
                required 
                value={fullname}
                />

              <label htmlFor="Email">Email</label>
              <input 
              type="email" 
              onChange={(e)=>setEmail(e.target.value)} placeholder="Johndoe@gmail.com"
              value={email} 
              required />

             <div className="password-eye">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <div
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="sroke"
                  style={{
                    position: "relative",
                    top: "-2.3rem",
                    left: "18rem",
                    cursor: "pointer",
                  }}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>

              <button onClick={HandleSignUp} className="appbtn">{'Apply Now'}</button>
              <p style={{color:'red'}}>{message}</p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Developer;
