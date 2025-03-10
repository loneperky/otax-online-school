import React, { useState, useEffect } from "react";
import supabase from "../../Supabase/supabaseClient";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthLayout from "../Components/AuthPage";
import Navbar from "../Components/Navbar";
import HomePage from "./homePage";
import ContactPage from "./ContactPage";
import ErrorPage from "./404";
import Dashboard from "./dashboard";
import Developer from "./Developer";
import Login from "./login";
import Signup from "./Signup";
import Forgot from "./forgot";
import AboutPage from "./AboutPage";
import ProtectedRoute from "./ProtectedRoute";
import { Navigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setAuthUser(user); // Set user state if logged in
      setLoading(false);
    }

    checkUser();

    // Listen for auth changes (login/logout)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setAuthUser(session?.user || null);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  if (loading) return <div className="">loading ...</div>;

  return (
    
    <Router>
      <Navbar />
      {/* <SpeedInsights /> */}
      {/* <Analytics /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/developers" element={<Developer />} />
        <Route
          path="/dashboard"
          element={
            authUser ? (
              <Dashboard authUser={authUser} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthLayout>
              <Signup />
            </AuthLayout>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <AuthLayout>
              <Forgot />
            </AuthLayout>
          }
        />
        <Route
          path="/*"
          element={<Navigate to={authUser ? "/dashboard" : "/login"} replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
