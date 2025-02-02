import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../Supabase/supabaseClient";

function Dashboard({ authUser }) {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserProfile() {
      if (!authUser) return; // Don't fetch if no user

      const { data, error } = await supabase
        .from("users_information")
        .select("*")
        .eq("id", authUser.id)
        .single();

      if (error) {
        console.error("Error fetching profile:", error.message);
      } else {
        setUserData(data);
      }
    }

    fetchUserProfile();
  }, [authUser]);

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/login");
  }

  return (
    <div>
      {userData ? (
        <>
          <h1>Welcome, {userData.fullname}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        navigate('/login')
      )}
    </div>
  );
}

export default Dashboard;
