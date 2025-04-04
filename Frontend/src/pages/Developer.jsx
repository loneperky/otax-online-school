import React, { useState,useEffect } from "react";
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

  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);
 
 
  return (
    <>
      <div className="tota">
        <div className="overall-view">
          <div className="view1">
            <div className="top">
              <h1>
                Artificial Intelligence & Machine Learning Software development
                Incubator
              </h1>
              <p>
                In our incubator program,students will build full-scale AI and
                ML Powered Software solutions using the skills below, with the
                top teams winning $1000 each for their innovative projects.{" "}
              </p>
              <p className="pic">Pick a course to learn below:</p>
            </div>
            `
            <div className="all-courses">
              
            <div className="couser1">
                <div className="log">
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
              
            <div className="couser1">
                <div className="log">
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
            </div>`
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Developer;
