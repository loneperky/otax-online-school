import React, { useState } from "react";
import "../styles/login.css";
import { Footer } from "./construct";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import supabase from "../../Supabase/supabaseClient";



const Login = () => {
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function HandleLogin(event) {
    event.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email:email,
      password:password,
    });

    if(error){
      alert('Login Failed',error.message)
      console.log(error.message)
    }else{
      alert('Welcome back!')
      navigate('/dashboard')
    }
  }

  return (
    <>
      <div className="login-overview">
        <div className="login-details">
          <section className="first-sect">
            <button>Access your Dashboard</button>
            <h2>Top Talents Meets Global Opportunities</h2>
            <p>
              We bridge the gap between talented developers and companies that
              need their skills.
            </p>
          </section>
          <section className="logins">
            <h3>Welcome Back</h3>
            <p>Login to your account</p>
            <form onSubmit={HandleLogin}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                required
                placeholder="johndoe@gmail.com"
                value={email}
                onChange={(e) => SetEmail(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <div className="password-eye">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {/* <div
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
                </div> */}
              </div>

              <p className="forgot">
                <Link to="/forgot-password">Forgot Password?</Link>
              </p>

              <button>Login to Continue</button>
              <p className="signup">Don't have an account?<Link to="/signup">Signup</Link></p>
            </form>
          </section>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Login;
